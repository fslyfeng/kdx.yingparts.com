(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{"044d":function(t,i,e){"use strict";e.r(i);var a=e("0fd0"),s=e.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},"0fd0":function(t,i,e){(function(t){var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a481"),e("ac6a");var s=a(e("3490")),n={components:{Goods:s.default},data:function(){return{type:"activity",goodsID:"",list:[],page:1,loading:!1,count:0,reqesting:!1,activityId:"",countTime:["0","23","59","59"],activeInfo:{},isFinish:!1}},computed:{loadingType:function(){var t=0;return this.loading?t=1:this.list.length==this.count&&this.count>0&&0==this.loading&&(t=2),t}},created:function(){},onLoad:function(){"activity"===this.$Route.query.type?this.activityId=this.$Route.query.id:"goods"===this.$Route.query.type&&(this.goodsID=this.$Route.query.goodsID),this.type=this.$Route.query.type},onShow:function(){this.reset()},methods:{getList:function(){var t=this;if(!this.reqesting){this.reqesting=!0;var i={page:this.page,get_activity:1,activity_type:"seckill"};"activity"===this.type?i.activity_id=this.activityId:i.id=this.goodsID,this.loading=!0,this.$api.goodApi.goodList(i).then((function(i){0==i.error&&(i.list.length>0&&("goods"===t.type&&i.list.forEach((function(i){var e,a;i.countTime=["0","23","59","59"],i.seckillData=(null===i||void 0===i||null===(e=i.activities)||void 0===e?void 0:e.seckill)||(null===i||void 0===i||null===(a=i.activities)||void 0===a?void 0:a.preheat_activity),i.isPreheat=t.isPreheat(i.seckillData),t.cutdownTime(i.seckillData,i)})),t.list=t.list.concat(i.list)),t.page=t.page+1,t.loading=!1,t.count=i.total,t.graceLazyload.load(0,t),t.reqesting=!1)})).catch((function(i){t.reqesting=!1})).finally((function(t){setTimeout((function(){uni.hideLoading()}),100)}))}},getActivity:function(){var i=this;this.$api.goodApi.getActivity({activity_id:this.activityId}).then((function(t){0==t.error&&(i.activeInfo=t,i.isFinish=t.status<0,i.isFinish?i.$Router.replace("/kdxGoods/activity/expire"):(i.getList(),i.cutdownTime(i.activeInfo,i)))})).catch((function(i){t.log(i)})).finally((function(){}))},isPreheat:function(t){if(t.start_time){var i=t.is_preheat,e=t.start_time;if(!e)return!1;var a=new Date(Date.parse(e.replace(/-/g,"/"))).getTime();return"1"==i&&a>Date.now()}},reset:function(){this.list=[],this.page=1,"activity"===this.type&&this.getActivity(),"goods"===this.type&&this.getList(),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},cutdownTime:function(t,i){var e=t.start_time,a=t.end_time,s=this.isPreheat(t)?e:a,n=new Date(Date.parse(s.replace(/-/g,"/"))).getTime();if(n-Date.now()>0){var o=n/1e3;this.startCount(o,i)}},startCount:function(t,i){var e=this;i.countTime=this.$utils.countDown(t,!1);var a=setInterval((function(){i.countTime=e.$utils.countDown(t,!1),0==i.countTime&&(clearInterval(a),e.reset())}),1e3);this.$once("hook:beforeDestroy",(function(){clearInterval(a)}))}},onPullDownRefresh:function(){this.reset()},onReachBottom:function(){this.list.length==this.count&&this.page>1||this.getList()},onPageScroll:function(t){this.graceLazyload.load(t.scrollTop,this)}};i.default=n}).call(this,e("5a52")["default"])},"167b":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("theme-content",[e("v-uni-view",{staticClass:"goods-list-template"},[e("v-uni-view",{staticClass:"card-list single",class:{seckill:"seckill"==t.type}},t._l(t.getList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"goods-card-item",class:{line:!t.is_seckill(i),container:t.is_seckill(i)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.todetail(i.id)}}},[e("v-uni-view",{staticClass:"goods-card-inner flex"},[e("v-uni-view",{staticClass:"label-box"},[e("v-uni-view",{staticClass:"label-icon"},[i.stock<1?e("v-uni-view",{staticClass:"sale-img"},[e("v-uni-image",{staticClass:"sale-img-soldout",attrs:{src:t.getSoldOutIcon}})],1):t._e(),t.is_seckill(i)?[e("v-uni-view",{staticClass:"seckill-tag"},[e("i",{staticClass:"iconfont-m- icon-m-shandian badge-icon"}),e("span",{staticClass:"badge-text"},[t._v("限时秒杀")])])]:t._e()],2),i.activities&&i.activities.commission?e("v-uni-view",{staticClass:"commision-money"},[t._v("预计佣金￥"+t._s(t._f("formatMoney")(i.activities.commission)))]):t._e(),i.preloading&&t.preloading?e("v-uni-image",{staticClass:"goods-img preload",attrs:{mode:"widthFix","lazy-load":!0,src:t.getLoadingSrc,alt:""}}):t._e(),e("v-uni-image",{staticClass:"goods-img",class:{loading:i.preloading&&t.preloading},attrs:{src:t.$utils.mediaUrl(i.thumb)},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.loaded(i.thumb)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.loaded(i.thumb)}}})],1),e("v-uni-view",{staticClass:"goods-info flex1 flex-column flex-between"},[e("v-uni-view",{staticClass:"goods-title"},[e("v-uni-view",{staticClass:"title ",class:{"two-line-hide":!i.sub_name,"line-hide":i.sub_name}},[t._v(t._s(i.title))]),i.sub_name?e("v-uni-view",{staticClass:"sub-title line-hide"},[t._v(t._s(i.sub_name))]):t._e(),t.is_seckill(i)?e("v-uni-view",{staticClass:"seckill-box"},[t._t("seckillCountdown",null,{data:i}),e("div",{staticClass:"goods-price-info"},[e("div",{staticClass:"goods-price-box"},[e("div",{staticClass:"goods-seckill-tag"},[t._v("秒杀价")]),e("span",{staticClass:"goods-price-unit"},[t._v("¥")]),e("span",{staticClass:"goods-price-num"},[t._v(t._s(t._f("formatMoney")(t._f("getSeckillPrice")(i))))]),i.original_price&&0!=i.original_price?e("span",{staticClass:"orginal-price"},[t._v("¥"+t._s(t._f("formatMoney")(i.original_price)))]):t._e()])])],2):t._e()],1),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-view",{staticClass:"flex-between"},[e("v-uni-view",[[t.is_seckill(i)?t._e():[i.activities&&null!=i.activities.member_price?e("v-uni-view",{staticClass:"price"},[t._v("￥"),e("span",{staticClass:"primary-price"},[t._v(t._s(i.activities.member_price))])]):e("v-uni-view",{staticClass:"price theme-primary-price"},[t._v("￥"),e("span",{staticClass:"primary-price theme-primary-price"},[t._v(t._s(i.price))])]),[i.original_price&&0!=i.original_price?e("v-uni-view",{staticClass:"original_price"},[t._v("￥"+t._s(t._f("formatMoney")(i.original_price)))]):t._e()]],t.is_seckill(i)?[i.ext_field&&1==i.ext_field.show_sales?e("v-uni-view",{staticClass:"sales"},[t._v("销量:"+t._s(i.sales))]):t._e()]:t._e()]],2),t.is_seckill(i)?[e("div",{staticClass:"seckill-btn-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.todetail(i.id)}}},[t._v("马上抢")])]:t._e()],2)],1)],1)],1)],1)})),1)],1)],1)},n=[]},"1fe1":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"seckill"},[e("div",{staticClass:"seckill-img-box"},[e("img",{staticClass:"seckill-img",attrs:{src:t.$utils.staticMediaUrl("seckill/banner.png")}}),"activity"===t.type?e("div",{staticClass:"count-down"},[t.isFinish?e("div",{staticClass:"seckill-surplus"},[t._v("该活动已结束")]):t.isPreheat(t.activeInfo)?t.isPreheat(t.activeInfo)?e("div",{staticClass:"seckill-surplus"},[t._v("距活动开始")]):t._e():e("div",{staticClass:"seckill-surplus"},[t._v("距活动结束")]),t.countTime&&!t.isFinish?e("div",{staticClass:"seckill-count"},[e("span",{staticClass:"text"},[t._v(t._s(t.countTime[0])+"天")]),e("span",{staticClass:"time"},[t._v(t._s(t.countTime[1]))]),e("span",{staticClass:"colon"},[t._v(":")]),e("span",{staticClass:"time"},[t._v(t._s(t.countTime[2]))]),e("span",{staticClass:"colon"},[t._v(":")]),e("span",{staticClass:"time"},[t._v(t._s(t.countTime[3]))])]):t._e()]):t._e()])]),e("div",{staticClass:"goods"},["goods"===t.type?[e("goods",{attrs:{list:t.list,type:"seckill"},scopedSlots:t._u([{key:"seckillCountdown",fn:function(i){var a=i.data;return[e("div",{staticClass:"activity-time"},[e("span",{staticClass:"text"},[t._v(t._s(a.isPreheat?"距开始":"距结束"))]),e("span",{staticClass:"time"},[t._v(t._s(a.countTime[0]))]),e("span",{staticClass:"colon"},[t._v("天")]),e("span",{staticClass:"time"},[t._v(t._s(a.countTime[1]))]),e("span",{staticClass:"colon"},[t._v(":")]),e("span",{staticClass:"time"},[t._v(t._s(a.countTime[2]))]),e("span",{staticClass:"colon"},[t._v(":")]),e("span",{staticClass:"time"},[t._v(t._s(a.countTime[3]))])])]}}],null,!1,2618808571)})]:[e("goods",{attrs:{list:t.list,type:"seckill"}})],t.list.length!=t.count?e("page-loading",{attrs:{loadingType:t.loadingType}}):t._e(),!t.loading&&t.count<=0?[e("v-uni-view",{staticClass:"default-page flex-column"},[e("v-uni-view",{staticClass:"bg"},[e("v-uni-image",{attrs:{src:t.$utils.staticMediaUrl("default/search.png")}})],1),e("v-uni-view",{staticClass:"default-text"},[t._v("没找到相关宝贝")])],1)]:t._e()],2)])},n=[]},3490:function(t,i,e){"use strict";e.r(i);var a=e("167b"),s=e("c8a3");for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("5e8f");var o,l=e("f0c5"),c=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,"c144ece2",null,!1,a["a"],o);i["default"]=c.exports},"354a":function(t,i,e){var a=e("c21c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("67f85277",a,!0,{sourceMap:!1,shadowMode:!1})},"39e0":function(t,i,e){"use strict";var a=e("354a"),s=e.n(a);s.a},"5e8f":function(t,i,e){"use strict";var a=e("7de6"),s=e.n(a);s.a},"691a":function(t,i,e){"use strict";e.r(i);var a=e("1fe1"),s=e("044d");for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("39e0");var o,l=e("f0c5"),c=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,"3908a3d4",null,!1,a["a"],o);i["default"]=c.exports},"7de6":function(t,i,e){var a=e("cf5d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("5ba045fe",a,!0,{sourceMap:!1,shadowMode:!1})},a9aa3:function(t,i,e){var a=e("4ea4");e("8e6e"),e("ac6a"),e("456d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a481");var s=a(e("ade3")),n=e("2f62");function o(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?o(Object(e),!0).forEach((function(i){(0,s.default)(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var c=null,r={props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"goods"}},data:function(){return{loading:{},preloading:!0}},mounted:function(){var t=this;setTimeout((function(){t.preloading=!1}),3e3)},computed:l(l({},(0,n.mapState)("setting",{sale_out:function(t){var i,e;return(null===(i=t.systemSetting)||void 0===i||null===(e=i.basic)||void 0===e?void 0:e.sale_out)||""}})),{},{getSoldOutIcon:function(){return this.sale_out?this.$utils.mediaUrl(this.sale_out):this.$utils.staticMediaUrl("decorate/sale_out.png")},getList:function(){var t=this;return this.list.map((function(i){var e,a=null===(e=i.thumb)||void 0===e?void 0:e.replace(/\./g,"_");return i.preloading=void 0===t.loading[a]||t.loading[a],i}))},getLoadingSrc:function(){var t,i;return null!==(t=this.$store.state.setting.systemSetting)&&void 0!==t&&null!==(i=t.basic)&&void 0!==i&&i.loading?this.$store.state.setting.cacheLoadingImg||this.$utils.mediaUrl(this.$store.state.setting.systemSetting.basic.loading):this.$utils.staticMediaUrl("decorate/goods_col2.png")}}),created:function(){},methods:{is_seckill:function(t){return t.activities&&(t.activities.seckill||t.activities.preheat_activity)&&"seckill"==this.type},clickAdd:function(t){this.$emit("custom-event",{type:"addCart",data:{goods_id:t.id,option_id:t.has_option}})},loaded:function(t){var i=this;if(t){var e=t.replace(/\./g,"_");this.loading[e]=!1,clearTimeout(c),c=setTimeout((function(){i.loading=l({},i.loading)}),100)}},todetail:function(t){this.$Router.push({path:"/kdxGoods/detail/index",query:{goods_id:t}})}},filters:{getSeckillPrice:function(t){var i,e,a,s=(null===(i=t.activities)||void 0===i?void 0:i.seckill)||(null===(e=t.activities)||void 0===e?void 0:e.preheat_activity)||{};return"1"==t.has_option?(null===s||void 0===s||null===(a=s.price_range)||void 0===a?void 0:a.min_price)||0:null===s||void 0===s?void 0:s.activity_price},formatMoney:function(t){return"number"===typeof t||"string"===typeof t&&""!==t.trim()?t>=1e4?parseFloat(t/1e4)+"万":parseFloat(t):0}}};i.default=r},c21c:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.seckill[data-v-3908a3d4]{position:relative;height:%?386?%}.seckill .seckill-img[data-v-3908a3d4]{height:%?346?%;width:%?750?%}.seckill .count-down[data-v-3908a3d4]{position:absolute;left:%?24?%;bottom:%?0?%;height:%?80?%;width:%?702?%;background:#fff;border-radius:6px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.seckill .count-down .seckill-surplus[data-v-3908a3d4]{font-size:%?24?%;line-height:%?34?%;color:#212121}.seckill .count-down .seckill-count[data-v-3908a3d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?32?%;color:#fff}.seckill .count-down .seckill-count .time[data-v-3908a3d4]{width:%?32?%;height:%?32?%;line-height:%?32?%;text-align:center;background-color:#ff3c29;color:#fff;font-size:%?24?%;border-radius:%?4?%}.seckill .count-down .seckill-count .text[data-v-3908a3d4]{margin-left:%?16?%;margin-right:%?12?%;font-size:%?24?%;color:#212121}.seckill .count-down .seckill-count .colon[data-v-3908a3d4]{margin:0 %?4?%;line-height:%?32?%;color:#ff3c29}.seckill .activity-time[data-v-3908a3d4]{width:-webkit-fit-content;width:fit-content;margin-top:%?8?%;padding:0 %?8?%;line-height:%?28?%;font-size:%?20?%;border:1px solid #ff3c29;border-radius:%?4?%}.seckill .activity-time > span[data-v-3908a3d4]{color:#ff3c29}.goods[data-v-3908a3d4]{margin-top:%?16?%;padding:0 %?24?%}',""]),t.exports=i},c8a3:function(t,i,e){"use strict";e.r(i);var a=e("a9aa3"),s=e.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},cf5d:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods-list-template[data-v-c144ece2]{position:relative;box-sizing:border-box}.goods-list-template .loading[data-v-c144ece2]{display:block;height:0;opacity:0}.goods-list-template .card-list.single[data-v-c144ece2]{background-color:#fff;border-radius:%?12?%}.goods-list-template .card-list.single .goods-card-item[data-v-c144ece2]{padding:%?16?% %?24?%}.goods-list-template .btn-box[data-v-c144ece2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%;margin:auto 0}.goods-list-template .icon-m-buy1[data-v-c144ece2]{color:#ff3c29;font-size:%?40?%;width:%?40?%;height:%?40?%;text-align:center;line-height:%?40?%;margin:auto 0 auto auto}.goods-list-template .goods-card-inner .sub-title[data-v-c144ece2]{margin-top:%?8?%;font-size:%?24?%;line-height:%?34?%;color:#969696}.goods-list-template .deposit[data-v-c144ece2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?8?%}.goods-list-template .deposit .deposit-text[data-v-c144ece2]{width:%?74?%;height:%?38?%;font-size:%?24?%;border-radius:%?20?% 0 0 %?20?%;background-color:#ff3c29;color:#fff;text-align:center}.goods-list-template .deposit .deposit-price[data-v-c144ece2]{padding:0 %?16?%;height:%?38?%;font-size:%?24?%;border-radius:0 %?20?% %?20?% 0;background-color:#fff;color:#ff3c29;border:1px solid #ff3c29}.goods-list-template .buy-btn-box[data-v-c144ece2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.goods-list-template .buy-btn-box .btn[data-v-c144ece2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?16?%;height:%?54?%;margin:0;border-radius:%?30?%;border:1px solid #ff3c29}.goods-list-template .buy-btn-box .btn .buybtn[data-v-c144ece2]{margin-right:%?8?%;font-size:%?24?%;line-height:%?34?%;color:#ff3c29}.goods-list-template .buy-btn-box .btn .iconfont-m-[data-v-c144ece2]{font-size:%?24?%;color:#ff3c29}.goods-list-template .seckill-btn-box[data-v-c144ece2]{height:%?54?%;border-radius:%?48?%;padding:0 %?28?%;font-size:%?24?%;font-weight:700;line-height:%?54?%;text-align:center;color:#fff;background:-webkit-linear-gradient(317.43deg,#ff3c29,#ff6f29 94.38%);background:linear-gradient(132.57deg,#ff3c29,#ff6f29 94.38%)}.goods-list-template .commision-money[data-v-c144ece2]{position:absolute;bottom:0;left:0;z-index:99;width:100%;height:%?42?%;font-size:%?20?%;line-height:%?42?%;text-align:center;color:#fff;background:-webkit-linear-gradient(278.34deg,#ff3c29,#ff6f29 94.38%);background:linear-gradient(171.66deg,#ff3c29,#ff6f29 94.38%)}.goods-list-template .card-list.seckill[data-v-c144ece2]{background:transparent}.goods-list-template .container[data-v-c144ece2]{margin-bottom:%?16?%;border-radius:%?12?%;background:#fff}.goods-list-template .seckill .goods-price-info .goods-price-unit[data-v-c144ece2], .goods-list-template .seckill .goods-seckill-tag .goods-price-unit[data-v-c144ece2]{font-size:%?24?%;line-height:%?28?%;color:#ff3c29}.goods-list-template .seckill .goods-price-info .goods-price-num[data-v-c144ece2], .goods-list-template .seckill .goods-seckill-tag .goods-price-num[data-v-c144ece2]{font-size:%?32?%;font-weight:700;color:#ff3c29}.goods-list-template .goods-price-box[data-v-c144ece2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.goods-list-template .goods-price-info[data-v-c144ece2]{margin-top:%?24?%}.goods-list-template .goods-price-info .goods-seckill-tag[data-v-c144ece2]{display:inline-block;margin-right:%?8?%;border-radius:%?4?%;padding:0 %?8?%;min-width:%?48?%;font-size:%?20?%;text-align:center;line-height:%?28?%;color:#ff3c29;border:1px solid #ff3c29}.goods-list-template .goods-price-info .goods-price-unit[data-v-c144ece2]{font-size:%?20?%;line-height:%?28?%;color:#ff3c29}.goods-list-template .goods-price-info .goods-price-num[data-v-c144ece2]{font-size:%?24?%;color:#ff3c29}.goods-list-template .goods-price-info .orginal-price[data-v-c144ece2]{margin-left:%?8?%;text-decoration:line-through;font-size:%?20?%;line-height:%?28?%;color:#969696}',""]),t.exports=i}}]);