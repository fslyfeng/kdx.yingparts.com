(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"04b1":function(t,e,i){var r=i("57be");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("cba0610c",r,!0,{sourceMap:!1,shadowMode:!1})},"062e":function(t,e,i){var r=i("e8aa");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("18725616",r,!0,{sourceMap:!1,shadowMode:!1})},"10c9":function(t,e,i){"use strict";var r=i("6ae7"),a=i.n(r);a.a},15212:function(t,e,i){"use strict";var r=i("04b1"),a=i.n(r);a.a},1723:function(t,e,i){"use strict";i.r(e);var r=i("21f9"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},"179d":function(t,e,i){"use strict";i.r(e);var r=i("b48f"),a=i("1723");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("7c85");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"1f5d96c7",null,!1,r["a"],o);e["default"]=c.exports},"21f9":function(t,e,i){var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("3835"));i("c5f6");var n=r(i("b095")),o=r(i("ec5c")),s={components:{OverseasPicker:o.default},props:{bottom:{type:[String,Number],default:"0"},curTab:{type:Number,default:0},addressList:{type:Array,default:[]},showTab:{type:Boolean,default:!0}},watch:{curTab:{handler:function(){this.curNavbar=this.tabs[this.curTab],this.switchTab({value:[this.curNavbar]})},immediate:!0},addressList:function(){this.navbars=this.addressList}},data:function(){return{pickerTitle:"选择国家/地区",pickerTop:20,tabs:[{name:"国内",id:0},{name:"国外",id:1}],navbars:[],hotCities:[],pickerList:[],areaGrade:"province",curNavbar:{id:0,name:"中国大陆"},abroad:[{code_id:"990000",id:"990000",letter:"guowai",letterId:"G",level:"1",location:"",name:"国外",parent_id:"0",sort:"G",list:[{code_id:"990100",id:"990100",letter:"guowai",letterId:"G",level:"2",location:"",name:"国外",parent_id:"990000",sort:"G",list:[{code_id:"990101",id:"990101",letter:"guowai",letterId:"G",level:"3",location:"",name:"国外",parent_id:"990100",sort:"G"}]}]}]}},methods:{switchTab:function(t){var e=(0,a.default)(t.value,1),i=e[0];i&&0==(null===i||void 0===i?void 0:i.id)?(this.pickerTitle="选择省份/地区",this.areaGrade="province",this.curNavbar=i,this.hotCities=n.default.getProvinces(!0),this.pickerList=n.default.getProvinces(),this.navbars.length>0&&"990000"==this.navbars[0].code&&(this.navbars=[])):i&&1==i.id&&(this.pickerTitle="选择地区",this.areaGrade="country",this.curNavbar=i,this.pickerList=this.abroad),this.pickerTop="province"==this.areaGrade||"country"==this.areaGrade?this.calPickerTop(this.hotCities.length):0},clickHotCity:function(t){var e,i=[];if(0==(null===(e=this.curNavbar)||void 0===e?void 0:e.id)){var r="";t.parent?(n.default.getProvince(t.parent.code_id),n.default.getCity(t.code_id),i=[n.default.curProvince,n.default.curCity],r="area",this.pickerTitle="选择区域"):(n.default.getProvince(t.parent.code_id),i=[n.default.curProvince],r="province"),this.areaGrade=r,this.navbars=i||[],this.hotCities=[],this.pickerList=n.default.getAreas()}else n.default.getOversea(t.code_id),i=[n.default.curOversea],this.areaGrade="country",this.navbars=i||[];"country"==this.areaGrade&&this.$emit("change",this.navbars)},clickCrumbs:function(t){var e;0==(null===(e=this.curNavbar)||void 0===e?void 0:e.id)?0===t.index?(n.default.getProvince(t.name),this.navbars[1]&&n.default.getCity(this.navbars[1].name),this.navbars[2]&&n.default.getArea(this.navbars[2].name),this.areaGrade="province",this.hotCities=n.default.getProvinces(!0)||[],this.pickerList=n.default.getProvinces()||[],this.pickerTitle="选择城市"):1===t.index?(n.default.getCity(t.name),this.navbars[2]&&n.default.getArea(this.navbars[2].name),this.areaGrade="city",this.hotCities=[],this.pickerList=n.default.getCities()||[],this.pickerTitle="选择区域"):2===t.index&&(n.default.getArea(t.name),this.areaGrade="area",this.hotCities=[],this.pickerList=n.default.getAreas()||[]):this.areaGrade="country"},clickPicker:function(t){var e;0==(null===(e=this.curNavbar)||void 0===e?void 0:e.id)?"province"==this.areaGrade?this.navbars[0]&&this.navbars[0].name==t.name||(n.default.getProvince(t.name),this.areaGrade="city",this.navbars=[t],this.pickerList=n.default.getCities()||[]):"city"==this.areaGrade?this.navbars[1]&&this.navbars[1].name==t.name||(n.default.getCity(t.name),this.areaGrade="area",this.navbars=[this.navbars[0],t],this.pickerList=n.default.getAreas()||[]):"area"==this.areaGrade&&(n.default.getArea(t.name),this.navbars=[this.navbars[0],this.navbars[1],t]):(this.areaGrade="country",this.navbars=[t]),"country"!=this.areaGrade&&3!=this.navbars.length||this.$emit("change",this.navbars)},clickItem:function(t){var e=t.type,i=(0,a.default)(t.value,1),r=i[0];"hotCity"==e?this.clickHotCity(r):"crumbs"==e?this.clickCrumbs(r):"picker"==e&&this.clickPicker(r),this.pickerTop="province"==this.areaGrade||"country"==this.areaGrade?this.calPickerTop(this.hotCities.length):0},togglePicker:function(){this.$refs.picker.togglePicker()},calPickerTop:function(t){var e=Math.ceil(t/4),i=114;return(e?63*(e+1):0)+i}},mounted:function(){var t=this;this.navbars=this.addressList,n.default.requestAllAreas().then((function(e){var i=n.default.getProvinces(!0);t.pickerTop=t.calPickerTop(i.length),t.hotCities=i,t.pickerList=n.default.getProvinces(),t.switchTab({value:[t.curNavbar]})}))}};e.default=s},"38f9":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showPicker,expression:"showPicker"}],staticClass:"overseas-picker-box",style:{bottom:t.bottom},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePicker.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"picker-bg"}),i("v-uni-view",{staticClass:"picker-closer",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),t._t("default"),"country"!=t.areaGrade&&t.navbars.length>0?i("v-uni-view",{staticClass:"navbar-box"},[i("custom-navbar",{attrs:{maxLength:t.maxLength,navbars:t.navbars},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem("crumbs",e)}}})],1):t._e(),i("v-uni-view",{staticClass:"overseas-picker",class:{choose:t.navbars&&t.navbars.length>0," country":"country"==t.areaGrade},style:{height:t.showTab?"339px":"374px"}},[i("v-uni-view",{staticClass:"areas-picker-container"},[i("MyPicker",{attrs:{areas:t.pickerList,areaGrade:t.areaGrade,pickerTop:t.pickerTop},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem("picker",e)}}},[i("template",{slot:"hot-areas"},[i("v-uni-view",{ref:"attachment",staticClass:"attachment"},[t._t("attachment"),i("v-uni-view",{staticClass:"sub-title"},[t._v(t._s(t.pickerTitle))])],2)],1)],2)],1)],1),i("div",{staticClass:"close-picker"},[i("btn",{staticStyle:{flex:"1"},attrs:{type:"do",classNames:"theme-primary-bgcolor",size:"middle"},on:{"btn-click":function(e){arguments[0]=e=t.$handleEvent(e),t.togglePicker.apply(void 0,arguments)}}},[t._v("关闭")])],1)],2)],1)},n=[]},"3ed2":function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("c5f6");var r={},a=!1,n=2,o={props:{margin:{type:Number,default:15},areas:{type:Array,default:[]},pickerTop:{type:Number,default:50},areaGrade:{type:String}},data:function(){return{items:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],currentArea:"A",scrollTop:0,scrollTo:"A",padding_top:"padding-top: 32rpx",border_bottom:"border-style:none"}},computed:{areaList:function(){var t=this,e={};return this.areas.forEach((function(t){e[t.letterId]?e[t.letterId].push(t):e[t.letterId]=[t]})),this.areas&&this.areas.length&&this.$nextTick((function(){t.getElementRect()})),e}},watch:{pickerTop:function(){this.getElementRect()}},beforeMount:function(){n=uni.getSystemInfoSync().screenWidth/750},methods:{clickItem:function(t){this.$emit("click",t)},getElementRect:function(){var t=this,e=0,i=[];this.items.forEach((function(a,n){i.push(t.areaList[a]?81*t.areaList[a].length:24),e+=i[n-1]||0,r[a]={height:i[n],top:e}}))},selectAreaId:function(t){this.currentArea=this.items[t],this.bodyScrollTo(this.currentArea)},scroll:function(t){var e=this;a||(a=!0,setTimeout((function(){var i=t.detail.scrollTop/n-e.pickerTop,o=null;for(var s in r)if(o=r[s],i-o.scrollTop>=0&&i-o.scrollTop-o.height<=0){e.currentArea=s;break}a=!1}),50))},bodyScrollTo:function(t){this.scrollTo="li-"+t}}};e.default=o},"57be":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.custom-picker[data-v-dfe3419e]{position:relative;width:100%;height:100%;overflow:hidden;box-sizing:border-box;border-radius:%?25?%}.custom-picker .body[data-v-dfe3419e]{box-sizing:border-box;position:relative;width:100%;height:100%;overflow:auto;padding:%?32?% %?24?% 0}.custom-picker .body .items[data-v-dfe3419e]{box-sizing:border-box;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.custom-picker .body .items > li > div[data-v-dfe3419e]{box-sizing:border-box;width:100%\r\n  /*display: flex;*/}.custom-picker .body .items > li > div .label[data-v-dfe3419e]{\r\n  /*display: inline-block;*/\r\n  /*width: 40rpx;*/font-size:%?20?%;font-weight:500;color:#969696;line-height:%?28?%}.custom-picker .body .items > li > div ul[data-v-dfe3419e]{margin:%?30?% 0 %?32?%;box-sizing:border-box\r\n  /*width: 0;*/\r\n  /*flex-grow: 1;*/}.custom-picker .body .items > li > div ul.country[data-v-dfe3419e]{margin:0}.custom-picker .body .items > li > div ul > li[data-v-dfe3419e]{font-size:%?26?%;font-weight:500;color:#212121;line-height:%?34?%;margin:0 0 %?32?%}.custom-picker .body .items > li > div ul > li[data-v-dfe3419e]:last-child{padding-bottom:%?32?%;margin-bottom:0}.custom-picker .body .items > li > div ul > li:last-child.van-hairline--bottom[data-v-dfe3419e]:after{border-bottom-color:#e6e7eb;border-style:solid}.custom-picker .vertical-menu-bar[data-v-dfe3419e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;top:0;right:0;border-radius:%?25?%;padding:%?20?% 0;background:#fff;width:%?44?%;min-height:%?500?%}.custom-picker .vertical-menu-bar li[data-v-dfe3419e]{width:100%;margin-bottom:%?8?%;font-size:%?16?%;line-height:%?22?%;text-align:center;font-weight:500;white-space:nowrap}.custom-picker .vertical-menu-bar .hot[data-v-dfe3419e]{color:#ff3c29}.custom-picker .vertical-menu-bar .activeMenuItem[data-v-dfe3419e]{color:#fd463e}',""]),t.exports=e},"654c":function(t,e,i){var r=i("7904");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("e2e20a24",r,!0,{sourceMap:!1,shadowMode:!1})},6596:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navbar[data-v-5649cee8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;width:100%;height:100%;box-sizing:border-box;overflow:auto}.navbar .item[data-v-5649cee8]{line-height:%?40?%;width:-webkit-fit-content;width:fit-content;margin-right:%?67?%;font-size:%?28?%;font-weight:700;color:#212121;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.navbar .item[data-v-5649cee8]:last-child{margin-right:0;color:#ff3c29}.navbar .item.active[data-v-5649cee8]:after{content:"";position:absolute;width:%?56?%;height:%?4?%;background:#ff3c29;bottom:0;left:0;right:0;margin:auto}',""]),t.exports=e},"65e1":function(t,e,i){"use strict";i.r(e);var r=i("cecd"),a=i("8c4f");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("10c9");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"5649cee8",null,!1,r["a"],o);e["default"]=c.exports},"6ae7":function(t,e,i){var r=i("6596");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("43ef745c",r,!0,{sourceMap:!1,shadowMode:!1})},7554:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var r={props:{activeIndex:{type:Number,default:0},maxLength:{type:Number,default:3},navbars:{type:Array,default:[]}},computed:{getNavbars:function(){return this.navbars.concat({name:"请选择"}).map((function(t,e){return t&&(t.index=e),t})).slice(0,this.maxLength)}},data:function(){return{liShow:0}},methods:{clickNavbarItem:function(t){this.liShow=t.index,this.$emit("click",t)},isLastIndex:function(t){var e;return t==(null===(e=this.getNavbars)||void 0===e?void 0:e.length)-1}}};e.default=r},7904:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.sub-title[data-v-1f5d96c7]{font-size:%?20?%;font-weight:400;color:#969696;line-height:%?22?%;margin-bottom:%?39?%}.hot-cities[data-v-1f5d96c7]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.hot-cities.van-hairline--bottom[data-v-1f5d96c7]:after{border-bottom-color:#e6e7eb;border-style:solid}.hot-cities .city[data-v-1f5d96c7]{width:20%;height:%?34?%;font-size:%?26?%;font-weight:400;color:#212121;line-height:%?34?%;margin:0 0 %?32?%}.custom-tabs[data-v-1f5d96c7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding:0 %?24?%;border-bottom:1px solid #e6e7eb}.custom-tabs .tab[data-v-1f5d96c7]{width:-webkit-fit-content;width:fit-content;height:%?68?%;margin-right:%?67?%;font-size:%?28?%;font-weight:700;color:#212121;text-align:center;line-height:%?68?%;position:relative}.custom-tabs .active[data-v-1f5d96c7]{color:#ff463e}.custom-tabs .active[data-v-1f5d96c7]::after{content:"";position:absolute;bottom:0;left:50%;width:%?56?%;height:%?4?%;margin-left:%?-28?%;background:#ff3c29;border-radius:%?4?%}',""]),t.exports=e},"7c85":function(t,e,i){"use strict";var r=i("654c"),a=i.n(r);a.a},"8c4f":function(t,e,i){"use strict";i.r(e);var r=i("7554"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},"901f":function(t,e,i){"use strict";i.r(e);var r=i("3ed2"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},a00f:function(t,e,i){"use strict";var r=i("062e"),a=i.n(r);a.a},acf9:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"picker",staticClass:"custom-picker"},[i("v-uni-scroll-view",{ref:"pickBody",staticClass:"body",attrs:{"scroll-y":!0,"scroll-top":t.scrollTop,"scroll-into-view":t.scrollTo},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t._t("hot-areas"),i("ul",{ref:"pickerItems",staticClass:"items"},t._l(t.items,(function(e,r){return i("li",{key:r,attrs:{id:"li-"+e}},[t.areaList[e]&&t.areaList[e].length>0?i("div",["country"!=t.areaGrade?i("div",{staticClass:"label"},[t._v(t._s(e))]):t._e(),i("ul",{staticClass:"custom-content",class:{country:"country"==t.areaGrade}},t._l(t.areaList[e],(function(e,r){return i("li",{key:r,class:{"van-hairline--bottom":"country"!=t.areaGrade},style:t.border_bottom,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(e)}}},["country"==t.areaGrade?i("span",[t._v("国外（自定义地址）")]):i("span",[t._v(t._s(e.name))])])})),0)]):t._e()])})),0)],2),"country"!=t.areaGrade?i("ul",{staticClass:"vertical-menu-bar"},[t._m(0),t._l(t.items,(function(e,r){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.areaList[e]&&t.areaList[e].length,expression:"areaList[item]&&areaList[item].length"}],key:r,staticClass:"uni-text-color-grey",class:{activeMenuItem:t.currentArea==e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectAreaId(r)}}},[t._v(t._s(e))])}))],2):t._e()],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"theme-primary-color"},[i("i",{staticClass:"iconfont-m- icon-m-remen"})])}]},b095:function(t,e,i){var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("d4ec")),n=r(i("bee2")),o=r(i("365c")),s=function(){function t(){(0,a.default)(this,t),this.result={error:-1},this.allProvinces=[],this.allCities=[],this.allAreas=[],this.allOverseas=[],this.curProvince=null,this.curCity=null,this.curArea=null,this.curOversea=null,this.allHotProvinces=[],this.allHotCities=[],this.allHotAreas=[],this.allHotOverseas=[],this.curHotProvince=null,this.curHotCity=null,this.curHotArea=null,this.curHotOversea=null}return(0,n.default)(t,[{key:"requestAllAreas",value:function(){var t=this;return new Promise((function(e,i){0==t.result.error?e(t.result):o.default.memberApi.getAddressBase().then((function(i){0==i.error&&(t.allProvinces=[],t.allHotProvinces=[],t.allOverseas=t.flatObj(i.result.country||[]),t.allHotOverseas=i.result.hotCountry||[],t.result=i,t.allProvinces=t.flatObj(i.result.list),t.allHotProvinces=i.result.hot,e(i))}),{},(function(t){i()}))}))}},{key:"flatObj",value:function(t){var e=[],i=function(i){e=e.concat(t[i].map((function(t){return t.letterId=i,t})))};for(var r in t)i(r);return e}},{key:"getProvince",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.result,r=e?this.curHotProvince:this.curProvince,a=e?this.allHotProvinces:this.allProvinces;if(0==i.error&&t){if(!r||t!=r.name&&t!=r.code_id){for(var n=null,o=null,s=0;s<a.length;s++)if(o=a[s],o.name==t||o.code_id==t){n=o;break}var c=n?n.list:{},l=this.flatObj(c);return this["cur".concat(e?"Hot":"","Province")]=n,this["cur".concat(e?"Hot":"","City")]=null,this["cur".concat(e?"Hot":"","Area")]=null,this["all".concat(e?"Hot":"","Cities")]=l,n}return r}return[]}},{key:"getProvinces",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?this.allHotProvinces:this.allProvinces;return e||[]}},{key:"getCity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.result,r=e?this.curHotCity:this.curCity,a=e?this.curHotProvince:this.curProvince;if(0==i.error&&t){if(!r||t!=r.name&&t!=r.code_id){var n=null,o=null;if(a){for(var s=this["all".concat(e?"Hot":"","Cities")],c=0;c<s.length;c++)if(n=s[c],n.name==t||n.code_id==t){o=n;break}var l=o?o.list:{},u=this.flatObj(l);return this["cur".concat(e?"Hot":"","City")]=o,this["cur".concat(e?"Hot":"","Area")]=null,this["all".concat(e?"Hot":"","Areas")]=u,o}return null}return r}return null}},{key:"getCities",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?this.allHotCities:this.allCities;return e}},{key:"getArea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.result,r=e?this.curHotArea:this.curArea,a=e?this.curHotCity:this.curCity;if(0==i.error&&t){if(!r||t!=r.name&&t!=r.code_id){var n=null,o=null;if(a){for(var s=this["all".concat(e?"Hot":"","Areas")],c=0;c<s.length;c++)if(n=s[c],n.name==t||n.code_id==t){o=n;break}return this["cur".concat(e?"Hot":"","Area")]=o,o}return null}return r}return null}},{key:"getAreas",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?this.allHotAreas:this.allAreas;return e}},{key:"getOversea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.result,r=e?this.curHotOversea:this.curOversea,a=e?this.allHotOverseas:this.allOverseas;if(0==i.error&&t){if(!r||t!=r.name&&t!=r.code_id){for(var n=null,o=null,s=0;s<a.length;s++)if(o=a[s],o.name==t||o.code_id==t){n=o;break}return this["cur".concat(e?"Hot":"","Oversea")]=n,n}return r}return null}},{key:"getOverseas",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?this.allHotOverseas:this.allOverseas;return e}}]),t}(),c=new s;e.default=c},b48f:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar"},[i("overseas-picker",{ref:"picker",attrs:{title:t.pickerTitle,bottom:t.bottom,areaGrade:t.areaGrade,navbars:t.navbars,pickerList:t.pickerList,pickerTitle:"选择城市",showTab:t.showTab,maxLength:"country"==t.areaGrade?1:3,pickerTop:t.pickerTop},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem.apply(void 0,arguments)}}},[i("div",{staticClass:"custom-tabs"},t._l(t.tabs,(function(e,r){return i("p",{key:r,staticClass:"tab",class:{"active theme-primary-color":t.curTab==r},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab({value:[t.tabs[r]]})}}},[t._v(t._s(e.name))])})),0),"province"==t.areaGrade?i("template",{slot:"attachment"},[i("h6",{staticClass:"sub-title"},[t._v("热门地区")]),i("v-uni-view",{staticClass:"hot-cities van-hairline--bottom"},t._l(t.hotCities,(function(e,r){return i("v-uni-view",{key:r,staticClass:"city",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem({type:"hotCity",value:[e]})}}},[t._v(t._s(e.name))])})),1)],1):t._e()],2)],1)},n=[]},ba84:function(t,e,i){"use strict";i.r(e);var r=i("f817"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},c428:function(t,e,i){"use strict";i.r(e);var r=i("acf9"),a=i("901f");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("15212");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"dfe3419e",null,!1,r["a"],o);e["default"]=c.exports},cecd:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"请选择"!=t.getNavbars[0].name?i("ul",{staticClass:"navbar"},t._l(t.getNavbars,(function(e,r){return i("li",{key:r,staticClass:"item",class:{"theme-primary-color":t.isLastIndex(r)},staticStyle:{"white-space":"nowrap"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickNavbarItem(e)}}},[t._v(t._s(e.name))])})),0):t._e()},n=[]},e8aa:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.overseas-picker-box[data-v-52210e14]{position:fixed;top:0;left:0;width:100%;bottom:0;z-index:9999999}.overseas-picker-box .picker-bg[data-v-52210e14]{width:100%;height:100%;background:rgba(0,0,0,.5)}.overseas-picker-box .picker-closer[data-v-52210e14]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;width:100%;height:%?980?%;bottom:0;left:0;padding:%?32?% 0 0;background:#fff;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%}.overseas-picker-box .picker-closer .title[data-v-52210e14]{line-height:%?44?%;text-align:center;font-size:%?32?%;font-weight:700;color:#212121;padding-bottom:%?44?%}.overseas-picker-box .picker-closer .navbar-box[data-v-52210e14]{box-sizing:border-box;width:100%;margin-top:%?32?%;background:#fff;padding:0 %?24?%}.overseas-picker-box .picker-closer .overseas-picker[data-v-52210e14]{width:100%;height:%?678?%;overflow:hidden}.overseas-picker-box .picker-closer .overseas-picker.choose[data-v-52210e14]{height:%?606?%}.overseas-picker-box .picker-closer .overseas-picker.country[data-v-52210e14]{height:%?678?%}.overseas-picker-box .picker-closer .overseas-picker .areas-picker-container[data-v-52210e14]{height:100%}.overseas-picker-box .picker-closer .overseas-picker .areas-picker-container .sub-title[data-v-52210e14]{font-size:%?20?%;font-weight:400;color:#969696;line-height:%?28?%;margin-bottom:%?32?%}.overseas-picker-box .picker-closer .close-picker[data-v-52210e14]{position:relative;height:%?112?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?24?%;padding-right:%?24?%;box-sizing:initial}.overseas-picker-box .picker-closer .close-picker .btn[data-v-52210e14]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?80?%;border-radius:%?40?%;font-size:%?28?%;line-height:%?40?%;color:#fff;background:-webkit-linear-gradient(277.07deg,#ff3c29,#ff6f29 94.38%);background:linear-gradient(172.93deg,#ff3c29,#ff6f29 94.38%)}',""]),t.exports=e},ec5c:function(t,e,i){"use strict";i.r(e);var r=i("38f9"),a=i("ba84");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("a00f");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"52210e14",null,!1,r["a"],o);e["default"]=c.exports},f817:function(t,e,i){var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a=r(i("65e1")),n=r(i("c428")),o={props:{bottom:{type:[String,Number],default:"0"},maxLength:{type:[Number,String],default:3},title:{type:String,default:"选择地区"},pickerTitle:{type:String,default:"选择地区"},navbars:{type:Array,default:[]},pickerList:{type:Array,default:[]},pickerTop:{type:Number,default:50},areaGrade:{type:String},showTab:{type:Boolean,default:!0}},components:{CustomNavbar:a.default,MyPicker:n.default},data:function(){return{showPicker:!1}},mounted:function(){},methods:{clickItem:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];this.$emit("clickItem",{type:t,value:i})},togglePicker:function(){this.showPicker=!this.showPicker}}};e.default=o}}]);