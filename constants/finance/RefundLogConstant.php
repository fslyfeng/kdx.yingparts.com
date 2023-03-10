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

namespace shopstar\constants\finance;

use shopstar\bases\constant\BaseConstant;

/**
 * 退款记录
 * Class RefundLogConstant
 * @package shopstar\constants\finance
 * @author 青岛开店星信息技术有限公司
 */
class RefundLogConstant extends BaseConstant
{
    /**
     * @Text("商家退款")
     */
    const TYPE_ORDER_SELLER_REFUND = 10;

    /**
     * @Text("维权退款")
     */
    const TYPE_ORDER_BUYER_REFUND = 11;

    /**
     * @Text("预售定金退款")
     */
    const TYPE_PRESELL_ORDER_SELLER_FRONT_REFUND = 30;

    /**
     * @Text("预售尾款商家退款")
     */
    const TYPE_PRESELL_ORDER_SELLER_FINAL_REFUND = 31;

    /**
     * @Text("预售尾款用户维权退款")
     */
    const TYPE_PRESELL_ORDER_BUYER_FINAL_REFUND = 32;

    /**
     * @Text("拼团退款")
     */
    const TYPE_GROUPS_REFUND = 40;

    /**
     * @Text("拼团返利退款")
     */
    const TYPE_GROUPS_REBATE_REFUND = 41;

    /**
     * @Text("裂变免单退款")
     */
    const TYPE_GROUPS_FISSION_REFUND = 42;

    /**
     * @Text("订单状态异常退款")
     */
    const TYPE_ORDER_STATUS_EXCEPTION = 50;

}
