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

namespace shopstar\config\modules\permission;

use shopstar\components\permission\BasePermissionConfig;

/**
 * 系统表单
 * Class PermissionConfig
 * @package shopstar\config\modules\permission
 * @author 青岛开店星信息技术有限公司
 */
class FormPermissionConfig extends BasePermissionConfig
{
    /**
     * @var string 权限模块标识
     */
    protected $identity = 'form';

    /**
     * @var string 路由前缀
     */
    protected $prefix = 'manage/form/';

    /**
     * @var string 分组名称
     */
    protected $groupName = '系统表单';

    /**
     * @var bool 是否插件
     */
    protected $isPlugin = true;

    /**
     * @var array[] 权限配置
     */
    public $config = [
        'list' => [
            'title' => '系统表单',
            'alias' => 'form',
            'perm' => [
                'view' => [
                    'title' => '查看',
                    'actions' => ['index', 'detail'],
                ],
                'manage' => [
                    'title' => '管理',
                    'actions' => ['add', 'edit', 'forbidden', 'active', 'delete', 'download', 'update', 'delete-log', 'get-form-log'],
                ],
            ],
        ],
    ];

}