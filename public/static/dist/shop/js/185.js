(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[185],{"0f2f":function(e,a,t){"use strict";var s=t("51a3");t.o(s,"render")&&t.d(a,"render",(function(){return s["render"]})),t.o(s,"staticRenderFns")&&t.d(a,"staticRenderFns",(function(){return s["staticRenderFns"]}))},1317:function(e,a,t){"use strict";t.r(a);var s=t("0f2f"),r=t("daff");for(var n in r)["default"].indexOf(n)<0&&function(e){t.d(a,e,(function(){return r[e]}))}(n);t("2138");var i=t("2877"),l=Object(i["a"])(r["default"],s["render"],s["staticRenderFns"],!1,null,null,null);a["default"]=l.exports},2138:function(e,a,t){"use strict";t("b73d")},"51a3":function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.staticRenderFns=a.render=void 0;var t=function(){var e=this,a=e._self._c;return a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"logistics"},[a("kdx-form-title",{attrs:{hasMargin:!1}},[e._v(" 物流设置 ")]),a("Alert",{staticClass:"marginT-10"},[a("div",{staticClass:"tip"},[a("p",[e._v("提示：")]),a("p",[e._v(" 快递鸟接口：目前只支持“圆通快递、申通快递、百世快递、天天快递”每天500次免费查询。 ")]),a("p",[e._v(" 快递100接口：商城内置接口，因接口变更，暂时关闭。您可根据需求申请/购买快递100账号，使用免费接口和企业接口。 ")])])]),a("Form",{ref:"form",attrs:{"label-width":150,model:e.generalData,rules:e.rule}},[a("FormItem",{attrs:{label:"类型选择："}},[a("RadioGroup",{model:{value:e.generalData.express_type,callback:function(a){e.$set(e.generalData,"express_type",a)},expression:"generalData.express_type"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("快递鸟")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("快递100")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[a("span",[e._v("阿里云")])])],1)],1),0==e.generalData.express_type?a("FormItem",{attrs:{label:"接口类型："}},[a("RadioGroup",{model:{value:e.generalData.bird_set.api_type,callback:function(a){e.$set(e.generalData.bird_set,"api_type",a)},expression:"generalData.bird_set.api_type"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("免费接口")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[a("span",[e._v("企业接口")])])],1),a("kdx-hint-text",[e._v("因快递100接口变更，商城内置接口暂时关闭")])],1):e._e(),1==e.generalData.express_type?a("FormItem",{attrs:{label:"接口类型："}},[a("RadioGroup",{model:{value:e.generalData.one_hundred_set.is_open,callback:function(a){e.$set(e.generalData.one_hundred_set,"is_open",a)},expression:"generalData.one_hundred_set.is_open"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[a("span",[e._v("免费接口")])]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[a("span",[e._v("企业接口")])])],1),a("kdx-hint-text",[e._v("因快递100接口变更，商城内置接口暂时关闭")])],1):e._e(),0==e.generalData.express_type?a("FormItem",{attrs:{label:"用户ID："}},[a("Input",{staticClass:"width-250",attrs:{disabled:e.noManagePerm},model:{value:e.generalData.bird_set.express_bird_user_id,callback:function(a){e.$set(e.generalData.bird_set,"express_bird_user_id",a)},expression:"generalData.bird_set.express_bird_user_id"}})],1):e._e(),0==e.generalData.express_type?a("FormItem",{attrs:{label:"API Key："}},[a("Input",{staticClass:"width-250",attrs:{disabled:e.noManagePerm},model:{value:e.generalData.bird_set.express_bird_apikey,callback:function(a){e.$set(e.generalData.bird_set,"express_bird_apikey",a)},expression:"generalData.bird_set.express_bird_apikey"}})],1):e._e(),1==e.generalData.express_type?a("FormItem",{attrs:{label:"授权密匙(Key)："}},[a("Input",{staticClass:"width-250",attrs:{disabled:e.noManagePerm},model:{value:e.generalData.one_hundred_set.apikey,callback:function(a){e.$set(e.generalData.one_hundred_set,"apikey",a)},expression:"generalData.one_hundred_set.apikey"}})],1):e._e(),1==e.generalData.express_type&&0==e.generalData.one_hundred_set.is_open?a("FormItem",{key:"index",attrs:{label:"公司编号(Customer)："}},[a("Input",{staticClass:"width-250",attrs:{disabled:e.noManagePerm},model:{value:e.generalData.one_hundred_set.customer,callback:function(a){e.$set(e.generalData.one_hundred_set,"customer",a)},expression:"generalData.one_hundred_set.customer"}})],1):e._e(),2==e.generalData.express_type?a("FormItem",{attrs:{label:"阿里云APPCODE：",required:"",error:e.aliapp_codeError}},[a("Input",{staticClass:"width-430",attrs:{disabled:e.noManagePerm},model:{value:e.generalData.aliyun_set.aliapp_code,callback:function(a){e.$set(e.generalData.aliyun_set,"aliapp_code",a)},expression:"generalData.aliyun_set.aliapp_code"}}),a("kdx-hint-text",[e._v("用于获取物流信息，"),a("a",{staticClass:"brand-color",attrs:{target:"_blank",href:"https://market.aliyun.com/products/56928004/cmapi023201.html?spm=5176.10695662.1996646101.searchclickresult.60ff5399ppm0i7#sku=yuncode1720100006"}},[e._v("阿里云接口申请")])])],1):e._e(),1==e.generalData.express_type?a("FormItem",{attrs:{label:"数据缓存时间："}},[a("Input",{staticClass:"width-250",attrs:{disabled:e.noManagePerm},model:{value:e.generalData.one_hundred_set.cache,callback:function(a){e.$set(e.generalData.one_hundred_set,"cache",a)},expression:"generalData.one_hundred_set.cache"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("分钟")])]),a("kdx-hint-text",[e._v("正式接口可能存在次数限制问题, 设置缓存时间后在指定时间内只读取缓存并不调用接口(数据可能会延迟)")])],1):e._e(),0==e.generalData.express_type?a("FormItem",{attrs:{label:"数据缓存时间："}},[a("Input",{staticClass:"width-250",attrs:{disabled:e.noManagePerm},model:{value:e.generalData.bird_set.express_bird_cache,callback:function(a){e.$set(e.generalData.bird_set,"express_bird_cache",a)},expression:"generalData.bird_set.express_bird_cache"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("分钟")])]),a("kdx-hint-text",[e._v("正式接口可能存在次数限制问题, 设置缓存时间后在指定时间内只读取缓存并不调用接口(数据可能会延迟)")])],1):e._e(),2==e.generalData.express_type?a("FormItem",{attrs:{label:"数据缓存时间："}},[a("Input",{staticClass:"width-250",attrs:{disabled:e.noManagePerm},model:{value:e.generalData.aliyun_set.aliyun_catch,callback:function(a){e.$set(e.generalData.aliyun_set,"aliyun_catch",a)},expression:"generalData.aliyun_set.aliyun_catch"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("分钟")])]),a("kdx-hint-text",[e._v("正式接口可能存在次数限制问题, 设置缓存时间后在指定时间内只读取缓存并不调用接口(数据可能会延迟)")])],1):e._e(),0==e.generalData.express_type?a("FormItem",{attrs:{label:"京东商家编码："}},[a("Input",{staticClass:"width-430",attrs:{disabled:e.noManagePerm},model:{value:e.generalData.bird_set.express_bird_customer_name,callback:function(a){e.$set(e.generalData.bird_set,"express_bird_customer_name",a)},expression:"\n                        generalData.bird_set.express_bird_customer_name\n                    "}}),a("kdx-hint-text",[e._v("若您使用京东物流，则需填写“京东商家编码”，否则将会造成物流信息无法查询")])],1):e._e()],1)],1)])};a.render=t;var s=[];a.staticRenderFns=s},b73d:function(e,a,t){},daff:function(e,a,t){"use strict";t.r(a);var s=t("e7de"),r=t.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){t.d(a,e,(function(){return s[e]}))}(n);a["default"]=r.a},e7de:function(e,a,t){var s=t("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=s(t("5530")),n={components:{},props:{},data:function(){return{generalData:{express_type:"0",bird_set:{api_type:"1",express_bird_user_id:"",express_bird_apikey:"",express_bird_customer_name:"",express_bird_cache:""},one_hundred_set:{is_open:"1",apikey:"",customer:"",cache:""},aliyun_set:{aliapp_code:"",aliyun_catch:""}},aliapp_codeError:"",rule:{"aliyun_set.aliapp_code":[{required:!0,message:"请填写阿里云APPCODE",trigger:"blur"}]}}},computed:{noManagePerm:function(){return!this.$getPermMap("sysset.express.manage")}},created:function(){},mounted:function(){this.getData()},methods:{getData:function(){var e=this,a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];a&&this.resetData(),this.$api.settingApi.getExpress({}).then((function(a){var t=a.error,s=a.one_hundred_set,n=a.bird_set,i=a.express_type,l=a.aliyun_set;0==t&&(e.generalData={express_type:i,aliyun_set:(0,r.default)((0,r.default)({},e.generalData.aliyun_set),l),one_hundred_set:(0,r.default)((0,r.default)({},e.generalData.one_hundred_set),s),bird_set:(0,r.default)((0,r.default)({},e.generalData.bird_set),n)})}))},handleSave:function(){2!=this.generalData.express_type||this.generalData.aliyun_set.aliapp_code?this.submit():this.aliapp_codeError="请填写阿里云APPCODE"},submit:function(){var e=this,a=(0,r.default)((0,r.default)((0,r.default)({express_type:this.generalData.express_type},this.generalData.bird_set),this.generalData.one_hundred_set),this.generalData.aliyun_set);this.$api.settingApi.addExpress((0,r.default)({},a)).then((function(a){0==a.error&&(e.getData(!1),e.$Message.success("保存成功"))}))},resetData:function(){this.generalData={express_type:"0",bird_set:{api_type:"1",express_bird_user_id:"",express_bird_apikey:"",express_bird_customer_name:"",express_bird_cache:""},one_hundred_set:{is_open:"1",apikey:"",customer:"",cache:""},aliyun_set:{aliapp_code:"",aliyun_catch:""}}}}};a.default=n}}]);