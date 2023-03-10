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

namespace shopstar\mobile\order;

use shopstar\bases\controller\BaseMobileApiController;
use shopstar\constants\order\OrderActivityTypeConstant;
use shopstar\helpers\DateTimeHelper;
use shopstar\helpers\RequestHelper;
use shopstar\models\order\OrderModel;
use shopstar\services\shop\ShopSettingIntracityLogic;
use yii\web\Response;

/**
 * Class IndexController
 * @package shopstar\mobile\order
 * @author likexin
 */
class IndexController extends BaseMobileApiController
{
    /**
     * 获取日期
     * @return array|int[]|Response
     * @author 青岛开店星信息技术有限公司
     */
    public function actionGetDate()
    {
        $page = RequestHelper::getInt('page');

        return $this->result(DateTimeHelper::getDateAsPage($page));
    }

    /**
     * 获取同城配送的配送时间
     * @return array|int[]|Response
     * @author 青岛开店星信息技术有限公司
     */
    public function actionGetIntracityDeliveryTime()
    {
        $settings = ShopSettingIntracityLogic::get(true);

        if ($settings['delivery_time']) {
            $settings = $this->processDeliveryTime($settings);
        }

        $return = [
            'delivery_time' => $settings['delivery_time'],
            'span_detail' => $settings['span_detail'] ?? [],
            'span_detail_now' => $settings['span_detail_now'] ?? [],
        ];

        return $this->result(['data' => $return]);
    }

    /**
     * 处理同城配送的时间
     * @param $setting
     * @return mixed
     * @author 青岛开店星信息技术有限公司
     */
    private function processDeliveryTime($setting)
    {
        // 处理配送时间
        if ($setting['delivery_time'] == 0) {
            return $setting;
        }

        // 全部时段
        $setting['span_detail'] = explode(',', $setting['delivery_time_settings']['span_detail'] ?? '');

        // 可选时间段处理, 当天的获取当前时间以后的时间段, 非当天的后去全部时间段
        $setting['span_detail_now'] = $setting['span_detail'];

        // 处理当天时间段
        if ($setting['span_detail_now']) {
            $timeNow = date('H:i');

            foreach ($setting['span_detail_now'] as $index => $value) {
                [$start, $end] = explode('-', $value);

                // 仅支持选择当前时间以后的时段
                if ($start < $timeNow || $end < $timeNow) {
                    unset($setting['span_detail_now'][$index]);
                    continue;
                }
                break;
            }

            if (!empty($setting['span_detail_now'])) {
                $setting['span_detail_now'] = array_values($setting['span_detail_now']);
            }
        }

        return $setting;
    }

    /**
     * 获取是否成团
     * @return Response
     * @author likexin
     */
    public function actionGetGroupsSuccess(): Response
    {
        $orderId = RequestHelper::getInt('order_id');
        if (!$orderId) {
            return $this->error('缺少订单id');
        }

        /**
         * @var OrderModel $order
         */
        $order = OrderModel::find()
            ->where([
                'id' => $orderId,
            ])
            ->select('activity_type')
            ->one();
        if (!$order) {
            return $this->error('订单不存在');
        }
        $pluginMaps = [
            OrderActivityTypeConstant::ACTIVITY_TYPE_GROUPS => 'groups',
        ];
        $return = false;

        $plugin = $pluginMaps[$order->activity_type];
        if (!$plugin) {
            return $this->success(['data' => ['success' => true]]);
        }

        switch ($plugin) {
            case 'groups':
                $crewModel = 'shopstar\models\groups\GroupsCrewModel';
                $teamModel = 'shopstar\models\groups\GroupsTeamModel';
                break;
            default:
                return $this->error('错误的标识');
        }

        $team = $teamModel::find()
            ->alias('team')
            ->leftJoin($crewModel::tableName() . ' crew', 'crew.team_id = team.id')
            ->where([
                'crew.order_id' => $orderId,
                'crew.is_valid' => 1,
            ])
            ->select('team.id, team.success')
            ->first();
        if (!$team) {
            return $this->error('获取拼团信息失败');
        }
        if ($team['success']) {
            $return = true;
        }

        return $this->success([
            'data' => [
                'success' => $return,
                'plugin' => $plugin,
                'team_id' => $team['id'],
            ],
        ]);
    }

}
