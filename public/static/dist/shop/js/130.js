(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[130],{"00ef":function(e,t,n){},"33db":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("d3b7");var a={name:"RefundModal",props:{visible:{type:Number,default:0},data:{type:Object,default:function(){}}},data:function(){return{value:!1,isCan:!1,model:{type:"0",reason:""}}},watch:{visible:function(){this.value=!0}},methods:{handleCancel:function(){this.value=!1},handleOk:function(){if(!this.isCan){var e=this.model.type,t=this.data,n=t.id,a=t.refund_type,i=t.refund_info.order_goods_id,r={order_id:n};"2"==a&&(r.order_goods_id=i),this.isCan=!0,"2"===e?(this.model.reason&&(r.reject_reason=this.model.reason),this.submit("refundRejectOrder",r)):"1"===e?this.submit("manualRefund",r):this.submit("autoRefund",r)}},submit:function(e,t){var n=this;this.$api.orderApi[e](t).then((function(e){0===e.error&&(n.$Message.success("操作成功"),n.$parent.$parent.getData())})).finally((function(){n.value=!1,n.isCan=!1}))}}};t.default=a},"341e":function(e,t,n){"use strict";n("c3d0")},"44c6":function(e,t,n){"use strict";n.r(t);var a=n("b581"),i=n("5d3e");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("4ebd");var s=n("2877"),o=Object(s["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"3239e905",null);t["default"]=o.exports},"4ebd":function(e,t,n){"use strict";n("00ef")},"54b3":function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("39c2")),r=a(n("7545")),s=a(n("f8a2")),o=a(n("ca29")),d=a(n("1c03")),c=a(n("fa75")),l=a(n("5791")),u={name:"index",mixins:[l.default],components:{RefundDetail:i.default,RefundModal:r.default,DistributorInformation:s.default,OrderDetailList:o.default,CommissionEdit:d.default,FormInfo:c.default},computed:{getCurrent:function(){var e=0;return-1===this.status&&(e=1),10!==this.status&&11!==this.status||(e=3),e+1}},watch:{status:function(e){this.step.lastTitle=0===e?"退款完成":10===e||11===e?"退款成功":"退款失败"}},data:function(){return{clickIndex:0}},methods:{clickTab:function(e){this.clickIndex=e}}};t.default=u},"5d3e":function(e,t,n){"use strict";n.r(t);var a=n("54b3"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},7545:function(e,t,n){"use strict";n.r(t);var a=n("be09"),i=n("c98a");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("341e");var s=n("2877"),o=Object(s["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"c018930a",null);t["default"]=o.exports},a3e8:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("kdx-modal-frame",{attrs:{title:"维权处理",width:700},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[t("Form",{ref:"form",staticClass:"order-refund-detail-refund-modal",attrs:{"label-width":120}},[t("FormItem",{staticClass:"r-form-item-text",attrs:{label:"维权类型："}},[t("kdx-tag-label",{attrs:{type:"danger",size:"small"}},[e._v("仅退款")])],1),t("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"处理方式："}},[t("RadioGroup",{model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}},[t("Radio",{attrs:{label:"0"}},[e._v("自动退款")]),t("Radio",{attrs:{label:"1"}},[e._v("手动退款")]),t("Radio",{attrs:{label:"2"}},[e._v("驳回申请")])],1),t("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"0"===e.model.type,expression:"model.type === '0'"}],attrs:{"show-icon":!1}},[t("p",[e._v("微信支付方式：会返回到相应的支付渠道(如零钱或银行卡)")]),t("p",[e._v("其他支付方式：会返回到微信钱包(需商户平台余额充足)")]),t("p",[e._v("如有余额抵扣：会返回金额到商城用户余额")]),t("p",[e._v("如有积分抵扣：申请维权的订单抵扣积分会返回到用户积分中")])]),t("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"1"===e.model.type,expression:"model.type === '1'"}],attrs:{"show-icon":!1}},[t("p",[e._v("手动退款：订单会完成退款处理，您用其他方式进行退款")])])],1),t("FormItem",{directives:[{name:"show",rawName:"v-show",value:"2"===e.model.type,expression:"model.type === '2'"}],attrs:{label:"驳回原因："}},[t("Input",{staticClass:"width-430",attrs:{type:"textarea",maxlength:200,placeholder:"请输入"},model:{value:e.model.reason,callback:function(t){e.$set(e.model,"reason",t)},expression:"model.reason"}})],1)],1)],1)};t.render=n;var a=[];t.staticRenderFns=a},b581:function(e,t,n){"use strict";var a=n("dfb5");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},be09:function(e,t,n){"use strict";var a=n("a3e8");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},c3d0:function(e,t,n){},c98a:function(e,t,n){"use strict";n.r(t);var a=n("33db"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},dfb5:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"order-detail-refund"},[t("Card",[t("Steps",{attrs:{current:e.getCurrent,status:e.getStatus}},[t("Step",{attrs:{title:"客户申请维权",content:e.refund_info.created_at}}),t("Step",{attrs:{title:"处理维权",content:e._f("getTime")(e.refund_info.seller_accept_time)}}),t("Step",{attrs:{title:e.step.lastTitle,content:e._f("getTime")(e.refund_info.finish_time)}})],1)],1),t("div",{staticClass:"order-detail-content"},[e.info.refund_info?t("refund-detail",{attrs:{data:e.info}},[t("refund-modal",{attrs:{visible:e.modal.refundModal,data:e.info}})],1):e._e()],1),t("div",{staticClass:"order-detail-con"},[t("ul",{staticClass:"detail_tab"},[t("li",{staticClass:"tab",class:{active:0==e.clickIndex},on:{click:function(t){return e.clickTab(0)}}},[e._v("商品信息")]),e.commission_info?t("li",{staticClass:"tab",class:{active:1==e.clickIndex},on:{click:function(t){return e.clickTab(1)}}},[e._v("分销商信息")]):e._e(),e.form.content?t("li",{staticClass:"tab",class:{active:2==e.clickIndex},on:{click:function(t){return e.clickTab(2)}}},[e._v("表单信息")]):e._e()]),e.form.content&&2==e.clickIndex?t("form-info",{attrs:{data:e.form.content,isShow:!1}}):e._e(),e.commission_info&&1==e.clickIndex?t("distributor-information",{attrs:{info:e.commission_info},on:{edit:e.editCommision}}):e._e(),0==e.clickIndex?t("order-detail-list",{attrs:{"is-refund":"",data:e.info},on:{"on-change-goods-info":e.changeGoodsInfo}}):e._e(),t("commission-edit",{attrs:{orderId:e.id,orderNo:e.orderNo,memberId:e.member_id,visible:e.visible},on:{"update:visible":function(t){e.visible=t},"on-success":e.getData}})],1)],1)};t.render=n;var a=[];t.staticRenderFns=a}}]);