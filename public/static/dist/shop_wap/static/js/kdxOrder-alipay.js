(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{"0008":function(e,t,o){"use strict";o.r(t);var r=o("85fa"),i=o("bc26");for(var a in i)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(a);o("eb2e");var n,s=o("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"718204ac",null,!1,r["a"],n);t["default"]=u.exports},3976:function(e,t,o){(function(e){var r=o("4ea4"),i=o("7037");o("ac6a"),o("5df3"),o("10ad"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("a481"),o("28a5");var a=r(o("a64f")),n=u(o("325c"));function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(s=function(e){return e?o:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!==typeof e)return{default:e};var o=s(t);if(o&&o.has(e))return o.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=a?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(r,n,u):r[n]=e[n]}return r.default=e,o&&o.set(e,r),r}var c={mixins:[a.default],data:function(){return{url:"",orderId:"",searchTime:0,payStep:1,pageFrom:"",couponId:"",paySuccessFlag:!1,timer:null}},computed:{isWeixin:function(){return n.is_weixin()}},onShow:function(){this.isWeixin&&this.paySuccessFlag&&this.jumpGoPage()},mounted:function(){var t=this;if(e.error(this.$Route.query.url_alipay,"支付情况"),n.is_weixin()){this.url=decodeURI(this.$Route.query.url_alipay),"1"==this.$Route.query.orderID?this.orderId=this.$Route.query.id.split()||this.orderId:this.orderId=this.$Route.query.id||this.orderId,this.pageFrom=this.$Route.query.pageFrom,this.couponId=this.$Route.query.couponId;var o=this;this.timer=setInterval((function(){o.searchTime<150?(o.paySuccess(),o.searchTime++):(clearInterval(t.timer),t.$toast("查询支付结果失败"),setTimeout((function(){t.jumpBackPage()}),2e3))}),2e3)}else window.location.href=this.$Route.query.url_alipay},beforeDestroy:function(){clearInterval(this.timer)},methods:{handleCopy:function(){var t=this;e.log(this.url,"this.url>>>>>>"),uni.setClipboardData({data:this.url,success:function(){t.$toast("复制成功")}})},paySuccess:function(){var e=this;if("coupunPay"===this.pageFrom)this.$api.memberApi.checkCouponPayStatus({id:this.orderId,pay_type:"alipay"},{errorToast:!1}).then((function(t){0==t.error&&(e.paySuccessFlag=!0,e.$toast("支付成功"),e.jumpGoPage(),clearInterval(e.timer))}));else if("recharge"===this.pageFrom)this.$api.memberApi.checkFinancePayStatus({id:this.orderId,pay_type:"alipay"},{errorToast:!1}).then((function(t){0==t.error&&(e.paySuccessFlag=!0,e.$toast("支付成功"),e.jumpGoPage(),clearInterval(e.timer))}));else if("planPay"===this.pageFrom)this.$api.merchantsApi.checkPayStatus({order_id:this.orderId},{errorToast:!1}).then((function(t){0==t.error&&t.success&&(e.paySuccessFlag=!0,e.$toast("支付成功"),e.jumpGoPage(),clearInterval(e.timer))}));else{var t={order_id:this.orderId,pay_type:"alipay"};this.$api.orderApi.orderPayResult(t,{errorToast:!1}).then((function(t){0==t.error&&(e.paySuccessFlag=!0,e.$toast("支付成功"),e.jumpGoPage(),clearInterval(e.timer))}))}},jumpGoPage:function(){var e=this;this.$nextTick((function(){"coupunPay"===e.pageFrom?e.$Router.replace({path:"/kdxMember/coupon/paySuccess/index",query:{id:e.couponId}}):"recharge"===e.pageFrom?setTimeout((function(){e.$Router.back(1)}),1500):e.$Router.replace({path:"/kdxOrder/paySuccess",query:{id:e.orderId}})}))},jumpBackPage:function(){var e=this;this.$nextTick((function(){"coupunPay"===e.pageFrom?e.$Router.replace({path:"/kdxMember/coupon/detail/index",query:{id:e.couponId}}):"recharge"===e.pageFrom?e.$Router.replace({path:"/kdxMember/balance/index"}):"planPay"===e.pageFrom?setTimeout((function(){e.$Router.back(1)}),1500):e.$Router.replace({path:"/kdxOrder/detail",query:{id:e.orderId}})}))}}};t.default=c}).call(this,o("5a52")["default"])},7328:function(e,t,o){var r=o("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.order-alipay[data-v-718204ac]{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-color:#fff}.order-alipay .alipay-guide[data-v-718204ac]{width:100%;height:100%;padding-top:%?200?%;box-sizing:border-box;text-align:center}.order-alipay .alipay-guide .tips[data-v-718204ac]{font-size:%?30?%;color:#000;line-height:%?52?%}.order-alipay .alipay-guide .copy-btn[data-v-718204ac]{display:inline-block;width:%?250?%;height:%?68?%;font-size:%?28?%;color:#fd463e;border:1px solid #fd463e;border-radius:%?68?%;text-align:center;line-height:%?68?%;margin-top:%?50?%}',""]),e.exports=t},"85fa":function(e,t,o){"use strict";var r;o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("page-box",[o("v-uni-view",{staticClass:"order-alipay"},[o("v-uni-view",{staticClass:"alipay-guide"},[e.isWeixin?o("v-uni-view",{staticClass:"tips"},[e._v('点击右上角"..."用浏览器打开进行快速支付。')]):e._e(),o("v-uni-textarea",{staticStyle:{position:"fixed",opacity:"0",bottom:"0"},attrs:{readonly:!0,type:"text",id:"input"}})],1)],1)],1)},a=[]},a64f:function(e,t,o){(function(e){var r=o("4ea4");o("8e6e"),o("ac6a"),o("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("28a5");var i=r(o("ade3")),a=o("2f62"),n=r(o("fead")),s=(r(o("b531")),o("3014"));function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){(0,i.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var d={created:function(){this.startTime=+new Date},data:function(){return{loadingFlg:0}},watch:{isSkeleton:function(e){e||++this.loadingFlg}},mounted:function(){e.error("组建的渲染时间："+this.__route__+"："+(+new Date-this.startTime))},computed:c(c({},(0,a.mapGetters)("loading",["isSkeleton"])),(0,a.mapState)("setting",{shareTitle:function(e){var t,o;return(null===(t=e.systemSetting)||void 0===t||null===(o=t.share)||void 0===o?void 0:o.title)||""},shareDesc:function(e){var t,o;return(null===(t=e.systemSetting)||void 0===t||null===(o=t.share)||void 0===o?void 0:o.description)||""},shareLogo:function(e){var t,o;return null===(t=e.systemSetting)||void 0===t||null===(o=t.share)||void 0===o?void 0:o.logo}})),methods:{handlerOptions:function(e){if(null!==e&&void 0!==e&&e.scene){for(var t=decodeURIComponent(decodeURIComponent(null===e||void 0===e?void 0:e.scene)).split("&"),o={},r=0;r<t.length;r++){var i=t[r].split("=");o[i[0]]=i[1]}null!==o&&void 0!==o&&o.inviter_id&&s.sessionStorage.setItem("inviter-id",o.inviter_id)}}},onPullDownRefresh:function(){var e=this;"function"==typeof this.pullDownRefresh&&this.pullDownRefresh(),setTimeout((function(){e.$closePageLoading()}),2e3)},onLoad:function(e){this.showTabbar=!0},onShow:function(){var e,t,o;uni.hideLoading(),n.default.setNavigationBarColor(this.$Route),this.$decorator.getPage(this.$Route.path).onLoad();var r,i,a,u,c=this.$Route.query;(null!==c&&void 0!==c&&c.inviter_id&&s.sessionStorage.setItem("inviter-id",c.inviter_id),this.$decorator.getDecorateModel({pagePath:this.$Route.path,otherdata:c}),null!==(e=this.pageInfo)&&void 0!==e&&e.gotop&&null!==(t=this.pageInfo.gotop.params)&&void 0!==t&&t.scrollTop)?this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:(null===(r=this.pageInfo.gotop)||void 0===r||null===(i=r.params)||void 0===i?void 0:i.scrollTop)>=(null===(a=this.pageInfo.gotop)||void 0===a||null===(u=a.params)||void 0===u?void 0:u.gotopheight)}},"pagemixin/onshow1"):null!==(o=this.pageInfo)&&void 0!==o&&o.gotop&&this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1,params:{scrolltop:0}}},"pagemixin/onshow2")},onHide:function(){this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1}},"pagemixin/onhide"),this.$closePageLoading()},onPageScroll:function(e){this.$decorator.getModule("gotop").onPageScroll(e,this.$Route)}};t.default=d}).call(this,o("5a52")["default"])},bc26:function(e,t,o){"use strict";o.r(t);var r=o("3976"),i=o.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},d073:function(e,t,o){var r=o("7328");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=o("4f06").default;i("67d17e0c",r,!0,{sourceMap:!1,shadowMode:!1})},eb2e:function(e,t,o){"use strict";var r=o("d073"),i=o.n(r);i.a}}]);