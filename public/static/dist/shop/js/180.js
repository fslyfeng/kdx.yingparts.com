(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[180],{"110c3":function(e,t,n){"use strict";n("58bbf")},"1d97":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"market-other-setting"},[t("kdx-content-bar",{attrs:{loading:e.loading},scopedSlots:e._u([{key:"btn",fn:function(){return[t("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[t("div",{staticClass:"label-content"},[t("kdx-form-title",[e._v("优惠券统一说明")]),t("Form",{ref:"form",attrs:{model:e.model,"label-width":130}},[t("FormItem",{attrs:{label:"优惠券使用说明："}},[t("editor",{attrs:{height:667},model:{value:e.model.use_content,callback:function(t){e.$set(e.model,"use_content",t)},expression:"model.use_content"}}),t("kdx-hint-text",[e._v("统一说明会放到购物券单独说明的前面")])],1)],1)],1)])],1)};t.render=n;var r=[];t.staticRenderFns=r},"58bbf":function(e,t,n){},5984:function(e,t,n){"use strict";var r=n("1d97");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]})),n.o(r,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]}))},"865b":function(e,t,n){"use strict";n.r(t);var r=n("5984"),a=n("e8ac");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("110c3");var i=n("2877"),s=Object(i["a"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"277ca5ac",null);t["default"]=s.exports},e8ac:function(e,t,n){"use strict";n.r(t);var r=n("eee6"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},eee6:function(e,t,n){var r=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("ceb0")),o={name:"index",components:{Editor:a.default},data:function(){return{model:{use_content:""},loading:!1}},computed:{noManagePerm:function(){return!this.$getPermMap("sale.coupon-set.manage")}},methods:{getData:function(){var e=this;this.loading=!0,this.resetModel(),this.$api.marketApi.getOtherSetting().then((function(t){e.loading=!1,0===t.error&&(e.model=t,delete e.model.error)}))},handleSave:function(){var e=this;this.loading=!0,this.$api.marketApi.saveOtherSetting(this.model).then((function(t){e.loading=!1,0===t.error&&(e.$Message.success("其他设置保存成功"),e.getData())}))},resetModel:function(){this.model={use_content:""}}},mounted:function(){this.getData()}};t.default=o}}]);