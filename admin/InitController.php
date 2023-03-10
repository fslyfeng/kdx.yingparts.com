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

namespace shopstar\admin;

use shopstar\bases\KdxAdminApiController;
use shopstar\constants\CloudServiceConstant;
use shopstar\helpers\ShopUrlHelper;
use shopstar\models\core\CoreSettings;
use shopstar\models\role\ManagerModel;
use shopstar\models\shop\ShopSettings;
use shopstar\services\core\attachment\CoreAttachmentService;

/**
 * 业务端初始化
 * Class InitController
 * @package shopstar\admin
 * @author 青岛开店星信息技术有限公司
 */
class InitController extends KdxAdminApiController
{

    /**
     * @var array
     */
    public $configActions = [
        'allowPermActions' => [
            'index',
        ]
    ];

    /**
     * 读取数据
     * @return array|\yii\web\Response
     * @throws \yii\base\InvalidConfigException
     * @throws \Exception
     * @author likexin
     */
    public function actionIndex()
    {
        $result = [];

        // 当前登录用户信息
        $result['user'] = [
            'id' => $this->user['id'],
            'name' => $this->user['username'],
            'group_id' => $this->user['group_id'] ?? 0,
            'is_root' => $this->user['is_root'] ? 1 : 0,

            'perms' => ManagerModel::getPerms($this->userId, $this->user['is_root'] > 0)
        ];

        // 手机端首页URL
        $result['wap_url'] = ShopUrlHelper::wap('/', [], true);

        // 店铺设置
        $shopSettings = ShopSettings::get('sysset.mall.basic', []);
        $result['settings'] = [
            'name' => $shopSettings['name'] ?? '',
            'logo' => $shopSettings['logo'] ?? '',
            'icp_code' => $shopSettings['icp_code'] ?? '',
        ];

        //服务专属功能
        $result['service_function'] = [
            CloudServiceConstant::FUNCTION_LADDER_GROUP => true
        ];

        // 获取独立储存的路径
        $result['shop_attachment_url'] = CoreAttachmentService::getRoot();
        $result['storage'] = ShopSettings::getImageCompressionRule();

        return $this->result($result);
    }

}