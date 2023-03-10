<?php
/**
 * 开店星新零售管理系统
 * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开
 * @author 青岛开店星信息技术有限公司
 * @link https://www.kaidianxing.com
 * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.
 * @copyright 版权归青岛开店星信息技术有限公司所有
 * @warning Unauthorized deletion of copyright information is prohibited.
 * @warning 未经许可禁止私自删除版权信息
 */

namespace shopstar\traits;

use shopstar\constants\CacheTypeConstant;
use shopstar\constants\user\UserStatusConstant;
use shopstar\exceptions\UserException;
use shopstar\models\role\ManagerModel;
use shopstar\models\user\UserModel;
use shopstar\models\user\UserSession;
use yii\helpers\Json;

/**
 * 用户
 * Class UserTrait
 * @package shopstar\traits
 * @author 青岛开店星信息技术有限公司
 */
trait UserTrait
{
    use CacheTrait;

    /**
     * @var int|null 当前登录的用户ID
     */
    public ?int $userId = 0;

    /**
     * @var array|null 当前登录的用户基础信息
     */
    public ?array $user;

    /**
     * @var array|null 当前登录的操作员基础信息
     */
    public ?array $manage;

    /**$allowNotLoginActions
     * 检测用户登录状态(只检测登录)
     * @throws UserException
     * @author likexin
     */
    public function checkUser()
    {
        // 查询登录缓存
        $userSession = UserSession::get($this->sessionId, 'user');
        if (empty($userSession)) {
            throw new UserException(UserException::CHECK_USER_NOT_LOGIN);
        }

        // 检测用户
        $this->user = UserModel::find()->where([
            'id' => $userSession['id'],
            'status' => UserStatusConstant::STATUS_ENABLE,
        ])
            ->select(['id', 'is_root', 'username', 'group_id'])
            ->first();
        if (empty($this->user)) {
            throw new UserException(UserException::CHECK_USER_USER_NOT_EXITS);
        }

        $this->userId = $this->user['id'];
    }

    /**
     * 检测用户是不是店铺管理员
     * @throws UserException
     * @throws \Exception
     * @author 青岛开店星信息技术有限公司
     */
    public function checkShopManage()
    {
        if (empty($this->user)) {
            // 用户不存在提示
            throw new UserException(UserException::USER_NOT_EXITS);
        } elseif ($this->user['is_root']) {
            // 当前登录用户是超管
            return;
        }

        // 操作员
        $manager = self::getStringCache(CacheTypeConstant::MANAGE_PROFILE, [$this->userId]);
        if (empty($manager)) {
            $manager = ManagerModel::find()->where(['uid' => $this->userId, 'is_deleted' => 0])->first();
            $managerJson = !empty($manager) ? Json::encode($manager) : $manager;
            self::stringCache(CacheTypeConstant::MANAGE_PROFILE, $managerJson, [$this->userId]);
        } else {
            $manager = Json::decode($manager);
        }

        // 管理员未找到
        if (empty($manager)) {
            throw new UserException(UserException::SHOP_MANAGE_NOT_EXITS);
        }

        // 检测管理员状态
        if (empty($manager['status'])) {
            throw new UserException(UserException::MANAGE_ACCOUNT_ISNOT_ABNORMAL);
        }

        $this->manage = [
            'id' => $manager['id'] ?? 0,
            'name' => $manager['name'] ?? '',
            'contact' => $manager['contact'] ?? '',
            'role_id' => $manager['role_id'] ?? '',
        ];
    }

}