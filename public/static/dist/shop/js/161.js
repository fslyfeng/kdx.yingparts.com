(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[161],{"2c1d":function(e,t,n){"use strict";n.r(t);var r=n("c16c"),i=n.n(r);for(var d in r)["default"].indexOf(d)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(d);t["default"]=i.a},"2ecae":function(e,t,n){},c16c:function(e,t,n){var r=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("5530")),d=n("8812"),o=n("2f62"),a={name:"index",computed:(0,i.default)((0,i.default)((0,i.default)({},(0,o.mapState)("goodAddEdit",{model:function(e){return e.model}})),(0,d.stateMap)(["rules"])),(0,d.modelMap)()),data:function(){return{}},mounted:function(){}};t.default=a},c7ab:function(e,t,n){"use strict";n("2ecae")},d355:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"good-add-distribution"},[t("Form",{ref:"form",attrs:{rules:e.rules,"label-width":120}},[t("div",{staticClass:"box"},[t("kdx-form-title",[e._v(" 基本信息 ")]),t("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"参与分销：",prop:"join_distibution"}},[t("RadioGroup",{model:{value:e.model.is_commission,callback:function(t){e.$set(e.model,"is_commission",t)},expression:"model.is_commission"}},[t("Radio",{attrs:{label:"0"}},[e._v("不参与")]),t("Radio",{attrs:{label:"1"}},[e._v("参与")])],1),"0"===e.model.is_commission?t("div",[t("kdx-hint-text",{attrs:{content:"如果不参与分销，则不产生分销佣金"}})],1):e._e()],1)],1)])],1)};t.render=n;var r=[];t.staticRenderFns=r},d94c:function(e,t,n){"use strict";n.r(t);var r=n("fb02"),i=n("2c1d");for(var d in i)["default"].indexOf(d)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(d);n("c7ab");var o=n("2877"),a=Object(o["a"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"4f77e023",null);t["default"]=a.exports},fb02:function(e,t,n){"use strict";var r=n("d355");n.o(r,"render")&&n.d(t,"render",(function(){return r["render"]})),n.o(r,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]}))}}]);