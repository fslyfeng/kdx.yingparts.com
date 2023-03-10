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

namespace shopstar\models\goods\label;
use shopstar\bases\model\BaseActiveRecord;

/**
 * This is the model class for table "{{%goods_label_map}}".
 *
 * @property int $label_id 标签id
 * @property int $goods_id 商品id
 */
class GoodsLabelMapModel extends BaseActiveRecord
{

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%goods_label_map}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['label_id', 'goods_id'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'label_id' => '标签id',
            'goods_id' => '商品id',
        ];
    }


    /**
     * 更新字段信息
     * @var array updateField
     */
    protected static $updateField = ['label_id', 'goods_id'];

    public function getLabelsByGoodsId()
    {
        return $this->hasMany(self::class, ['goods_id' => 'id']);
    }
}