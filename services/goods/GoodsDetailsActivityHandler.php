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

namespace shopstar\services\goods;

use shopstar\helpers\StringHelper;
use shopstar\models\activity\ShopMarketingModel;
use shopstar\models\commission\CommissionAgentModel;
use shopstar\models\commission\CommissionGoodsModel;
use shopstar\models\commission\CommissionSettings;
use shopstar\models\goods\category\GoodsCategoryMapModel;
use shopstar\models\goods\GoodsMemberLevelDiscountModel;
use shopstar\models\goods\GoodsModel;
use shopstar\models\groups\GroupsGoodsModel;
use shopstar\models\groups\GroupsTeamModel;
use shopstar\models\member\MemberLevelModel;
use shopstar\models\member\MemberModel;
use shopstar\models\order\create\OrderCreatorActivityConfig;
use shopstar\models\shop\ShopSettings;
use shopstar\models\shoppingReward\ShoppingRewardActivityGoodsRuleModel;
use shopstar\models\shoppingReward\ShoppingRewardActivityMemberRuleModel;
use shopstar\models\shoppingReward\ShoppingRewardActivityModel;
use shopstar\services\groups\GroupsCrewService;
use shopstar\services\groups\GroupsGoodsService;
use shopstar\services\groups\GroupsTeamService;
use yii\helpers\Json;

/**
 * 商品详情活动处理器
 * Class GoodsDetailsActivityHandler
 * @author 青岛开店星信息技术有限公司
 * @package shopstar\services\goods
 */
class GoodsDetailsActivityHandler
{
    /**
     * 活动类型
     * @var string[]
     * @author 青岛开店星信息技术有限公司
     */
    private $activityList = [
        'groups',
        'seckill',
    ];

    /**
     * 商品信息
     * @author 青岛开店星信息技术有限公司
     * @var array
     */
    private $goodsInfo = [];

    /**
     * 会员信息
     * @author 青岛开店星信息技术有限公司
     * @var array
     */
    private $memberInfo = [];

    /**
     * 商品信息
     * @author 青岛开店星信息技术有限公司
     * @var array
     */
    private $activityInfo = [];

    /**
     * 设置
     * @author 青岛开店星信息技术有限公司
     * @var array
     */
    private static $settings = [];

    /**
     * 客户端类型
     * @var int
     */
    private $clientType = 0;

    /**
     * @var array 附加参数
     */
    private $options = [];

    /**
     * GoodsDetailsActivityHandler constructor.
     * @param $goodsInfo
     * @param int $memberId
     * @param int $clientType
     * @param array $options 附加参数
     */
    public function __construct($goodsInfo, int $memberId, int $clientType, array $options = [])
    {
        if (is_int($goodsInfo)) {
            $goodsInfo = GoodsModel::findOne(['id' => $goodsInfo]);
            if (!empty($goodsInfo)) {
                $goodsInfo = $goodsInfo->toArray();
            } else {
                return error('商品不存在');
            }
        }

        $this->goodsInfo = $goodsInfo;
        $this->clientType = $clientType;
        $this->memberInfo = MemberModel::findOne($memberId);
        $this->options = $options;
    }

    /**
     * 获取商品信息
     * @return array
     * @author 青岛开店星信息技术有限公司
     */
    public function getGoods(): array
    {
        return $this->goodsInfo;
    }

    /**
     * 获取设置
     * @return array|mixed|string
     * @author 青岛开店星信息技术有限公司
     */
    public function getSetting()
    {
        if (empty(self::$settings)) {
            self::$settings = ShopSettings::get('sale');
        }

        return self::$settings;
    }

    /**
     * 获取活动类型
     * @param string $type 活动类型，默认为全部
     * @return array|mixed
     * @author 青岛开店星信息技术有限公司
     */
    public function getActivity(string $type = 'all')
    {
        if ($type === 'all') {
            return $this->activityInfo;
        }

        return $this->activityInfo[$type];
    }

    /**
     * 设置活动规则
     * @param string $type 活动类型
     * @param array $rules 活动规则
     * @author 青岛开店星信息技术有限公司
     */
    private function setActivity(string $type, array $rules)
    {
        $this->activityInfo[$type] = $rules;
    }

    /**
     * 初始化
     * @param $goodsInfo
     * @param int $memberId
     * @param int $clientType
     * @param array $options
     * @return GoodsDetailsActivityHandler
     * @author 青岛开店星信息技术有限公司
     */
    public static function init($goodsInfo, int $memberId, int $clientType, array $options = [])
    {
        return new self($goodsInfo, $memberId, $clientType, $options);
    }

    /**
     * 计算活动互斥
     * @param int $isOriginalBuy 是否原价购买  不参与活动
     * @return array
     * @author 青岛开店星信息技术有限公司
     */
    public function activityMutex(int $isOriginalBuy): array
    {
        $goodsActivityType = [];
        //获取当前可用的活动插件
        if (!$isOriginalBuy) {
            $goodsActivity = GoodsActivityService::getJoinActivityByGoodsId($this->goodsInfo['id'], $this->clientType, [
                'team_id' => $this->options['team_id'],
                'activity_type' => $this->options['activity_type'],
            ]);

            //重置活动数组索引
            $goodsActivityType = array_column($goodsActivity, 'activity_type');

            //合并基础规则
            $goodsActivityType = array_merge($goodsActivityType, array_column(OrderCreatorActivityConfig::$baseActivity, 'type'));
        }
        //获取活动规则
        $activityMap = OrderCreatorActivityConfig::getRules();
        //所有可用活动
        $usableActivity = [];

        foreach ($activityMap as $activityMapIndex => $activityMapItem) {
            if (in_array($activityMapIndex, $goodsActivityType)) {
                $usableActivity[$activityMapIndex]['identify'] = $activityMapIndex;

                //补充兼容活动
                foreach ((array)$activityMapItem['coexist'] as $coexistIndex => $coexistItem) {
                    if (in_array($coexistItem, $goodsActivityType)) {
                        $usableActivity[$coexistItem]['identify'] = $coexistItem;
                    }
                }

                //如果命中某一个 直接退出
                break;
            }
        }

        return array_column($usableActivity, 'identify');
    }

    /**
     * 自动化执行，活动执行方法可以单独调用也可以执行自动化
     * @param array $options
     * @param int $isOriginalBuy 原价购买 不参与活动 默认参与
     * @return bool
     * @author 青岛开店星信息技术有限公司
     */
    public function automation(array $options = [], int $isOriginalBuy = 0): bool
    {
        //计算活动计算
        $activity = $this->activityMutex($isOriginalBuy);
        foreach ((array)$activity as $activityItem) {
            $method = StringHelper::camelize($activityItem);
            if (in_array($method, ['Coupon', 'GiftCard'])) {
                continue;
            }

            if ($method == 'MemberPrice') {
                $this->$method($options);
                continue;
            }

            $this->$method();
        }

        //不需要计算互斥的活动
        /**
         * 预计佣金
         */
        $this->commission();

        /**
         * 查询预热活动
         */
        if (!in_array(array_keys($this->activityInfo)[0], $this->activityList)) {
            $this->preheat();
        }

        /**
         * 购物奖励
         */
        $this->shoppingReward();

        return true;
    }

    /**
     * 秒杀
     * @author 青岛开店星信息技术有限公司
     */
    public function seckill()
    {

        $activity = ShopMarketingModel::getActivityInfo($this->goodsInfo['id'], $this->clientType, 'seckill', $this->goodsInfo['has_option'], ['member_id' => $this->memberInfo['id'] ?? 0, 'goods_stock' => $this->goodsInfo['stock']]);
        if (!is_error($activity)) {
            $this->setActivity('seckill', $activity);
            return true;
        }

        return $activity;
    }

    /**
     * 查询预热活动
     * @author 青岛开店星信息技术有限公司
     */
    public function preheat()
    {

        $activity = GoodsActivityService::getPreheatActivity($this->goodsInfo['id'], $this->goodsInfo['has_option'], $this->clientType);

        if (!empty($activity)) {
            $this->setActivity('preheat_activity', $activity);
        }
        return true;
    }

    /**
     * 拼团
     * @return array|bool
     * @author likexin
     */
    public function groups()
    {
        $option = [];

        // 看是不是团队来的
        if (!empty($this->options['team_id'])) {
            $teamStatus = GroupsTeamModel::getTeamStatus($this->options['team_id']);
            if (!empty($teamStatus)) {
                $option = ['not_check_time' => true];
            }
        }

        // 获取活动信息
        $activity = ShopMarketingModel::getActivityInfo($this->goodsInfo['id'], $this->clientType, 'groups', $this->goodsInfo['has_option'], array_merge([
            'member_id' => $this->memberInfo['id'] ?? 0,
            'goods_stock' => $this->goodsInfo['stock'],
            'team_id' => $this->options['team_id'] ?? 0,
            'activity_id' => $teamStatus['activity_id'] ?? 0,
        ], $option));
        if (is_error($activity)) {
            return $activity;
        }

        // 拼团的goodsinfo需要走自己的表
        $activity['goods_info'] = GroupsGoodsService::getGoodsOptionInfo($activity['id'], $this->goodsInfo['id']);

        // 如果是多规格，需要再计算一遍最低价最高价
        if ($this->goodsInfo['has_option']) {
            $priceRange = GroupsGoodsModel::calculateLadderPrice($activity['id'], $this->goodsInfo['id']);

            if ($priceRange['has_range']) {
                $activity['price_range']['min_price'] = $priceRange['min_price'];
                $activity['price_range']['max_price'] = $priceRange['max_price'];
            } else {
                $activity['activity_price'] = $priceRange['activity_price'];
            }
        }

        // 如果该商品有拼团活动，查找拼团信息
        if (!empty($activity)) {

            //查找设置项是否显示团列表
            $showTeam = ShopSettings::get('activity.groups.team_list');

            if ($showTeam) {
                //查出五个未成团信息塞入
                $activityTeam = GroupsTeamService::getGroupsSimpleTeam($activity['id'], $this->goodsInfo['id']);

                $teamId = array_column($activityTeam, 'id');

                $teamMember = GroupsCrewService::getCrewByTeamId($teamId);

                foreach ($activityTeam as $index => $teamInfo) {
                    foreach ($teamMember as $memberInfo) {
                        if ($teamInfo['id'] == $memberInfo['team_id'] && $memberInfo['member_id'] == $this->memberInfo['id']) {
                            $activityTeam[$index]['is_join'] = 1;
                        }
                    }
                }

                $activity['team'] = $activityTeam;
            }

            if (!empty($this->memberInfo['id'])) {
                $activity['has_open'] = 0;
            }

            $this->setActivity('groups', $activity);
        }

        return true;

    }

    /**
     * 计算会员价，可用于多个规格
     * @param array $options
     * @return bool
     * @author 青岛开店星信息技术有限公司
     */
    public function memberPrice(array $options = [])
    {
        if (empty($this->goodsInfo) || empty($this->memberInfo)) return false;

        if ($this->goodsInfo['member_level_discount_type'] == 0) return false;

        $where = [
            'goods_id' => $this->goodsInfo['id'],
            'level_id' => $this->memberInfo['level_id'],
        ];

        //获取用户会员等级
        $memberLevel = MemberLevelModel::findOne(['id' => $this->memberInfo['level_id'], 'state' => 1]);
        if (empty($memberLevel)) {
            return;
        }
        $memberLevel = $memberLevel->toArray();

        $goodsDiscount = [];
        if ($this->goodsInfo['member_level_discount_type'] != 1) {
            $goodsDiscount = GoodsMemberLevelDiscountModel::find()->where($where)->select([
                'goods_id',
                'option_id',
                'type',
                'discount'
            ])->asArray()->all();
            if (empty($goodsDiscount)) return true;
        }

        //单商品
        if (empty($options)) {
            //初始化
            $goodsDiscountPrice = 0;
            if ($this->goodsInfo['member_level_discount_type'] == 1) { //默认会员价
                if (empty($memberLevel['is_discount']) || empty($memberLevel['discount'])) return false;
                $goodsDiscountPrice = $this->defaultMemberLevelDiscount($this->goodsInfo['min_price'], $this->goodsInfo['max_price'], $memberLevel);
            } elseif ($this->goodsInfo['member_level_discount_type'] == 2) { //指定会员等级
                $goodsDiscount = current($goodsDiscount);
                $goodsDiscountPrice = $this->designatedMembershipLevel($this->goodsInfo['min_price'], $goodsDiscount);
            } elseif ($this->goodsInfo['member_level_discount_type'] == 3) { //多规格指定会员等级
                $goodsDiscountPrice = $this->optionDesignatedMembershipLevel($this->goodsInfo['min_price'], $this->goodsInfo['max_price'], $goodsDiscount);
            }

            //设置会员价
            $this->setActivity('member_price', $goodsDiscountPrice);

        } else {

            //初始化
            $optionsDiscount = [];
            //规格获取会员价
            foreach ((array)$options as $optionIndex => $option) {
                if ($this->goodsInfo['member_level_discount_type'] == 1) { //默认会员价
                    if (empty($memberLevel['is_discount']) || empty($memberLevel['discount'])) continue;
                    $optionsDiscount[$option['id']] = $this->defaultMemberLevelDiscount($option['price'], 0, $memberLevel);
                } else {
                    foreach ((array)$goodsDiscount as $goodsDiscountIndex => $goodsDiscountItem) {
                        if ($this->goodsInfo['member_level_discount_type'] == 2) { //指定会员等级
                            $optionsDiscount[$option['id']] = $this->designatedMembershipLevel($option['price'], $goodsDiscountItem);
                        } elseif ($this->goodsInfo['member_level_discount_type'] == 3) { //多规格指定会员等级
                            if ($option['id'] == $goodsDiscountItem['option_id']) {
                                $optionsDiscount[$option['id']] = $this->designatedMembershipLevel($option['price'], $goodsDiscountItem);
                            }
                        }
                    }
                }
            }

            //设置会员价
            $this->setActivity('member_price', $optionsDiscount);
        }

        return true;
    }

    /**
     * 默认会员折扣
     * @param float $minPrice
     * @param float $maxPrice
     * @param array $memberLevel
     * @return array
     * @author 青岛开店星信息技术有限公司
     */
    private function defaultMemberLevelDiscount(float $minPrice, float $maxPrice, array $memberLevel): array
    {
        $rule = $memberLevel['discount'] / 10;

        return [
            'min_price' => round2($minPrice * $rule),
            'max_price' => round2($maxPrice * $rule)
        ];
    }

    /**
     * 指定会员折扣/价格 多规格不参与
     * @param float $goodsPrice
     * @param array $discount
     * @return array
     * @author 青岛开店星信息技术有限公司
     */
    private function designatedMembershipLevel(float $goodsPrice, array $discount)
    {
        if ($discount['type'] == 1) {
            $price = round2($goodsPrice * ($discount['discount'] / 10));
        } else {
            $price = $discount['discount'];
        }

        return ['min_price' => $price];
    }

    /**
     * 多规格会员折扣
     * @param float $minPrice
     * @param float $maxPrice
     * @param array $discount
     * @return array
     * @author 青岛开店星信息技术有限公司
     */
    private function optionDesignatedMembershipLevel(float $minPrice, float $maxPrice, array $discount): array
    {
        $goodsDiscountPrice = [];

        foreach ((array)$discount as $discountIndex => $discountItem) {

            if ($discountItem['type'] == 1) {
                $rule = $discountItem['discount'] / 10;
                $goodsDiscountPrice[] = round2($minPrice * $rule);
                $goodsDiscountPrice[] = round2($maxPrice * $rule);
            } else {
                $goodsDiscountPrice[] = (float)$discountItem['discount'];
            }
        }

        $goodsDiscountPrice = array_filter($goodsDiscountPrice);

        return [
            'min_price' => $goodsDiscountPrice ? min($goodsDiscountPrice) : 0,
            'max_price' => $goodsDiscountPrice ? max($goodsDiscountPrice) : 0
        ];
    }

    /**
     * 包邮
     * @author 青岛开店星信息技术有限公司
     */
    public function fullFreeDispatch()
    {
        $rules = [];

        //单品包邮
        //单品满件包邮
        if ($this->goodsInfo['single_full_unit_switch'] == 1) {
            $rules['single_full_unit_num'] = $this->goodsInfo['single_full_unit'];
        }

        //单品满额包邮
        if ($this->goodsInfo['single_full_quota_switch'] == 1) {
            $rules['single_full_quota_price'] = $this->goodsInfo['single_full_quota'];
        }

        // 商品默认全国包邮
        if ($this->goodsInfo['dispatch_type'] == 0) {
            $rules['free_dispatch'] = 1;
        }

        // 获取满额包邮设置
        $setting = $this->getSetting()['basic']['enough_free'];
        // 判断满额包邮和是否设置个别商品限制 2为不限制
        if ($setting['state'] == 1 && $setting['is_participate'] != 2) {
            // 判断是否开启
            if ($setting['is_participate'] == 0 && !in_array($this->goodsInfo['id'], $setting['goods_ids'] ?: [])) {
                $rules['full_free_dispatch'] = $setting['order_enough'];
            }
            if ($setting['is_participate'] == 1 && in_array($this->goodsInfo['id'], $setting['goods_ids'] ?: [])) {
                $rules['full_free_dispatch'] = $setting['order_enough'];
            }
        } else {
            // 所有商品都参与
            $rules['full_free_dispatch'] = $setting['order_enough'];
        }

        if (empty($rules)) {
            return;
        }

        $this->setActivity('free_dispatch', $rules);
        return;
    }

    /**
     * 满减
     * @author 青岛开店星信息技术有限公司
     */
    public function fullDeduct()
    {

        // 获取满额立减设置
        $setting = $this->getSetting()['basic']['enough'];
        // 如果系统设置关闭 返回false
        if ($setting['state'] <= 0) {
            return;
        }

        /**
         * 设置活动
         */
        $this->setActivity('full_deduct', $setting['set']);
        return;
    }

    /**
     * 余额
     * @author 青岛开店星信息技术有限公司
     */
    public function balance(): bool
    {
        // 获取积分余额抵扣设置
        $settings = $this->getSetting()['basic']['deduct'];
        // 如果系统设置关闭 返回false
        if ($settings['balance_state'] == 0) {
            return false;
        }

        if ($this->goodsInfo['deduction_balance_type'] == 0) { //商品不支持余额抵扣
            return false;
        }

        $goodsSetting = [
            'deduction_balance' => $this->goodsInfo['deduction_balance'], //可抵扣金额
            'deduction_balance_type' => $this->goodsInfo['deduction_balance_type'],//抵扣类型0是关闭 1不限制 2自定义抵扣最多
        ];

        $this->setActivity('balance', $goodsSetting);

        return true;
    }

    /**
     * 积分
     * @author 青岛开店星信息技术有限公司
     */
    public function credit()
    {
        // 获取积分余额抵扣设置
        $settings = $this->getSetting()['basic']['deduct'];
        // 如果系统设置关闭 返回false
        if ($settings['credit_state'] == 0) {
            return;
        }

        if ($this->goodsInfo['deduction_credit_type'] == 0) { //商品不支持积分抵扣
            return;
        }

        $goodsSetting = [
            'deduction_credit' => $this->goodsInfo['deduction_credit'], //可抵扣金额
            'deduction_credit_type' => $this->goodsInfo['deduction_credit_type'],//抵扣类型0是关闭 1不限制 2自定义抵扣最多
        ];

        $this->setActivity('credit', $goodsSetting);
        return;
    }

    /**
     * 预计佣金
     * @author 青岛开店星信息技术有限公司
     */
    private function commission(): void
    {
        // 判断该商品是否参与分销
        if ($this->goodsInfo['is_commission'] != 1) {
            error('未参与分销');
            return;
        }
        // 获取当前会员分销等级
        $agent = CommissionAgentModel::find()->select('status, level_id')->where(['member_id' => $this->memberInfo['id']])->first();
        // 非分销商则返回
        if (empty($agent) || $agent['status'] != 1) {
            error('该会员非分销商');
            return;
        }
        // 获取是否开启佣金显示
        $set = CommissionSettings::get('set.show_commission');
        if ($set != 1) {
            error('未开启佣金显示');
            return;
        }
        // 获取预计佣金

        $commission = CommissionGoodsModel::getMaxCommission($this->goodsInfo['id'], $this->goodsInfo['type'], $this->goodsInfo['has_option'], $agent['level_id'], $this->clientType);

        $this->setActivity('commission', ['max' => $commission]);
    }

    /**
     * 获取购物奖励活动
     * @author 青岛开店星信息技术有限公司
     */
    private function shoppingReward()
    {
        $activity = ShoppingRewardActivityModel::getOpenActivity($this->clientType);

        if (is_error($activity)) {
            return;
        }
        // 过滤商品
        if ($activity['goods_type'] != 0) {
            // 获取商品限制
            $goodsRule = ShoppingRewardActivityGoodsRuleModel::find()->where(['activity_id' => $activity['id']])->indexBy('goods_or_cate_id')->get();
            $limitId = array_keys($goodsRule);
            // 商品分类限制
            if ($activity['goods_type'] == 3) {
                // 规格进来没有
                if (!is_array($this->goodsInfo['category_id'])) {
                    $category = GoodsCategoryMapModel::find()->select('category_id')->where(['goods_id' => $this->goodsInfo['id']])->get();
                    $this->goodsInfo['category_id'] = array_column($category, 'category_id');
                }
                // 取交集
                $intersect = array_intersect($this->goodsInfo['category_id'], $limitId);
                if (empty($intersect)) {
                    return;
                }
            } else if ($activity['goods_type'] == 1) {
                // 允许商品限制
                if (!in_array($this->goodsInfo['id'], $limitId)) {
                    return;
                }
            } else if ($activity['goods_type'] == 2) {
                // 不允许商品限制
                if (in_array($this->goodsInfo['id'], $limitId)) {
                    return;
                }
            }
        }
        // 过滤会员等级
        if ($activity['member_type'] != 0) {
            $memberRule = ShoppingRewardActivityMemberRuleModel::find()->where(['activity_id' => $activity['id']])->indexBy('level_or_group_id')->get();
            $limitId = array_keys($memberRule);
            // 等级限制
            if ($activity['member_type'] == 1) {
                if (!in_array($this->memberInfo['level_id'], $limitId)) {
                    return;
                }
            } else {
                // 标签限制
                $memberGroup = $this->memberInfo->groupsMap;
                if (empty($memberGroup)) {
                    return;
                }
                foreach ($memberGroup as $item) {
                    if (!in_array($item['group_id'], $limitId)) {
                        return;
                    }
                }
            }
        }
        // 奖励内容
        $reward = [];
        // 优惠券名称
        if (!empty($activity['coupon_info'])) {
            $reward['coupon_title'] = $activity['coupon_info'];
        }
        // 积分
        if (!empty($activity['credit'])) {
            $reward['credit'] = $activity['credit'];
        }
        // 余额
        if (!empty($activity['balance'])) {
            $reward['balance'] = $activity['balance'];
        }

        if (!empty($activity['red_package'])) {
            $reward['red_package'] = Json::decode($activity['red_package']);
        }
        if (!empty($reward)) {
            $this->setActivity('shoppingReward', ['reward' => $reward]);
        }

    }

}
