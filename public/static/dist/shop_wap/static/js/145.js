(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[145],{"0043":function(t,i,e){"use strict";e.r(i);var n=e("7ebd"),a=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"00fd":function(t,i,e){"use strict";e.r(i);var n=e("648c"),a=e("0043");for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("f6d4");var o,c=e("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"c17b37dc",null,!1,n["a"],o);i["default"]=d.exports},2161:function(t,i,e){"use strict";e.r(i);var n=e("46d7"),a=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"33c4":function(t,i,e){var n=e("9ca4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("b3f5361c",n,!0,{sourceMap:!1,shadowMode:!1})},"46d7":function(t,i,e){var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("c984")),r=n(e("00fd")),o={mixins:[a.default],name:"banner",components:{MySwiper:r.default},data:function(){return{activeIndex:0,setting:{autoplaySpeed:3e3,autoplay:!0,loop:!0},imgStyle:{height:"100%",width:"750rpx"},imgHeight:0}},computed:{getAlign:function(){var t={left:"flex-start",center:"center",right:"flex-end"};return t[this.componentData.style.dotalign]},getList:function(){var t=this;return this.componentData.data instanceof Array?this.componentData.data.map((function(i){var e;return e=i.imgurl?t.$utils.mediaUrl(i.imgurl):t.$utils.staticMediaUrl("decorate/banner.png"),{img:e}})):[]},getImgs:function(){return this.getList.map((function(t){return t.img}))},getBorderRadius:function(){return"".concat(this.px2rpx(this.componentData.style.topradius)," ").concat(this.px2rpx(this.componentData.style.topradius)," ").concat(this.px2rpx(this.componentData.style.bottomradius)," ").concat(this.px2rpx(this.componentData.style.bottomradius))}},watch:{getList:{handler:function(){var t=this;if(this.getList[0])if(this.$isPC)this.$utils.getImgInfo(this.getList[0].img).then((function(i){var e=750-t.componentData.style.marginleft,n=parseInt(t.px2rpx(e))/i.width;t.imgHeight=i.height*n+"px"}));else{var i=750-2*this.componentData.style.marginleft;this.imgStyle.width=i+"rpx",this.imgHeight=this.px2rpx(this.componentData.style.imgheight||180,2)}},immediate:!0},"componentData.style.marginleft":{handler:function(){var t=this;this.getList[0]&&(this.$isPC?this.$utils.getImgInfo(this.getList[0].img).then((function(i){var e=700-t.componentData.style.marginleft,n=parseInt(t.px2rpx(e))/i.width;t.imgHeight=i.height*n+"px"})):this.imgHeight=this.px2rpx(this.componentData.style.imgheight||136.75,2))},immediate:!0}},methods:{change:function(t){this.activeIndex=t},setSettings:function(t){this.setting=t},click:function(t){var i,e,n,a,r,o;this.$emit("custom-event",{target:"banner/clickImg",data:{items:this.componentData.data.map((function(t){return t.imgurl})),index:t,linkurl:null===(i=this.componentData.data[t])||void 0===i?void 0:i.linkurl,wxappid:null===(e=this.componentData.data[t])||void 0===e?void 0:e.wxappid,videoParams:null===(n=this.componentData.data[t])||void 0===n?void 0:n.videoParams,linkurl_name:null===(a=this.componentData.data[t])||void 0===a?void 0:a.linkurl_name,keyLink:null===(r=this.componentData.data[t])||void 0===r?void 0:r.keyLink,video_id:null===(o=this.componentData.data[t])||void 0===o?void 0:o.video_id}})}}};i.default=o},"648c":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"swiper",style:{height:t.height}},[e("v-uni-swiper",{key:t.key,attrs:{current:t.value,touchable:!0,autoplay:!1===!t.setting.autoplay,circular:!1===!t.setting.loop,interval:t.setting.autoplaySpeed,duration:t.setting.duration||500},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return e("v-uni-swiper-item",{key:n},[t._t("default",[t.isArticle?e("img",{staticClass:"swiper-img",style:(t.height?"height:"+t.height:"")+t.getImgStyle+";border-radius:"+("100vh"==t.height?"0":t.borderRadius),attrs:{"lazy-load":!0,mode:t.imgMode,src:(i.img?i.img:i)+"?t="+(new Date).getTime(),alt:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.click(n)}}}):e("img",{staticClass:"swiper-img",style:(t.height?"height:"+t.height:"")+t.getImgStyle+";border-radius:"+("100vh"==t.height?"0":t.borderRadius),attrs:{"lazy-load":!0,mode:t.imgMode,src:i.img?i.img:i,alt:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.click(n)}}})],{data:n,item:i})],2)})),1)],1)},r=[]},"7ebd":function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("c5f6");var n={props:{imgMode:{type:String,default:"scaleToFill"},imgStyle:{type:Object,default:function(){return{}}},height:{type:String,default:""},list:{type:Array,default:function(){return[]}},startIndex:{type:Number,default:0},setting:{type:Object,default:function(){return{duration:500,autoplay:!0,autoplaySpeed:3e3,loop:!0}}},borderRadius:{type:String,default:"12rpx"}},computed:{getImgStyle:function(){var t=";";for(var i in this.imgStyle)t+="".concat(i,":").concat(this.imgStyle[i],";");return t},isArticle:function(){return"/kdxArticle/detail/index"===this.$Route.path}},watch:{list:{immediate:!0,deep:!0,handler:function(){this.key=Math.random(),this.value=this.startIndex}}},data:function(){return{key:"",value:0}},methods:{change:function(t){var i=t.detail.current;this.$emit("change",i)},click:function(t){this.$emit("click",t)}}};i.default=n},"8ad4":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.componentData&&"banner"==t.componentData.id?e("div",{staticClass:"swiper decorate",style:{padding:t.px2rpx(t.componentData.style.margintop)+" "+t.px2rpx(t.componentData.style.marginleft)+" "+t.px2rpx(t.componentData.style.marginbottom)}},[e("div",{staticClass:"container",style:{height:t.imgHeight,borderRadius:t.getBorderRadius}},[e("MySwiper",{key:t.componentData.style.marginleft,ref:"swiper",attrs:{startLoadImg:t.startLoadImg,borderRadius:t.getBorderRadius,height:t.imgHeight,list:t.getImgs,imgStyle:t.imgStyle,setting:t.setting},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.click.apply(void 0,arguments)}}}),t.getList.length>1?e("div",[t.componentData.style&&"number"!=t.componentData.style.dotstyle?e("ul",{staticClass:"dots",class:[t.componentData.style.dotstyle],style:{justifyContent:t.getAlign}},t._l(t.getList,(function(i,n){return e("li",{key:n,staticClass:"dot",class:{active:t.activeIndex==n},style:{background:t.activeIndex==n?t.componentData.style.background:"#fff"}})})),0):e("p",{staticClass:"number",class:[t.getAlign]},[t._v(t._s(t.activeIndex+1+"/"+t.getList.length))])]):t._e()],1)]):t._e()},r=[]},"8c76":function(t,i,e){"use strict";e.r(i);var n=e("8ad4"),a=e("2161");for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("c46b");var o,c=e("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4535320c",null,!1,n["a"],o);i["default"]=d.exports},"9ca4":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */.isbottom[data-v-4535320c], .istop[data-v-4535320c]{z-index:999990}._i[data-v-4535320c]{display:inline}uni-view[data-v-4535320c]{box-sizing:border-box}.def-pad[data-v-4535320c]{padding:%?8?% %?16?%}*[data-v-4535320c]{box-sizing:border-box;margin:0;padding:0;border:none}li[data-v-4535320c]{list-style:none}ul[data-v-4535320c]{padding:0}uni-image[data-v-4535320c]{height:auto}.swiper.decorate[data-v-4535320c]{margin:0 auto;overflow:hidden;min-height:%?192?%}.swiper.decorate .container[data-v-4535320c]{overflow:hidden;position:relative}.swiper.decorate uni-swiper[data-v-4535320c],\r\n.swiper.decorate uni-swiper-item[data-v-4535320c],\r\n.swiper.decorate ._div[data-v-4535320c],\r\n.swiper.decorate .swiper-img[data-v-4535320c]{height:100%}.swiper.decorate .swiper[data-v-4535320c]{height:100%}.swiper.decorate .swiper[data-v-4535320c] .ivu-carousel,\r\n.swiper.decorate .swiper .ivu-carousel-item[data-v-4535320c],\r\n.swiper.decorate .swiper .ivu-carousel-list[data-v-4535320c],\r\n.swiper.decorate .swiper .ivu-carousel-track[data-v-4535320c]{height:100%!important}.swiper.decorate .dots[data-v-4535320c]{position:absolute;display:-webkit-box;display:-webkit-flex;display:flex;bottom:%?19.54397?%;box-sizing:border-box;padding:%?0?% 24;left:0;right:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.swiper.decorate .dots .dot[data-v-4535320c]{width:%?12?%;height:%?12?%;background:#fff;margin:0 %?6?%;opacity:.54}.swiper.decorate .dots .dot.active[data-v-4535320c]{opacity:1}.swiper.decorate .dots.round .dot[data-v-4535320c]{border-radius:50%}.swiper.decorate .dots.rectangle .dot[data-v-4535320c]{width:%?16?%;height:%?8?%;border-radius:%?8?%;margin:0 %?6?%}.swiper.decorate .number[data-v-4535320c]{position:absolute;display:-webkit-box;display:-webkit-flex;display:flex;bottom:%?19.54397?%;box-sizing:border-box;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;background:rgba(0,0,0,.54);border-radius:%?44?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;flex-direction:column;text-align:center;width:-webkit-fit-content;width:fit-content;min-width:%?60?%;font-size:%?18?%;line-height:%?18?%;padding:%?6?% %?10?%;right:%?24?%}.swiper.decorate .number.flex-start[data-v-4535320c]{left:%?24?%}.swiper.decorate .number.flex-end[data-v-4535320c]{right:%?24?%}',""]),t.exports=i},a3fb:function(t,i,e){var n=e("b7c2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("36913bd6",n,!0,{sourceMap:!1,shadowMode:!1})},b7c2:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 开店星新零售管理系统\r\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\r\n * @author 青岛开店星信息技术有限公司\r\n * @link https://www.kaidianxing.com\r\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\r\n * @copyright 版权归青岛开店星信息技术有限公司所有\r\n * @warning Unauthorized deletion of copyright information is prohibited.\r\n * @warning 未经许可禁止私自删除版权信息\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-swiper[data-v-c17b37dc]{height:100%}.swiper-img[data-v-c17b37dc]{text-align:center;width:100%;display:block;margin:0 auto}.swiper[data-v-c17b37dc]{overflow:hidden}',""]),t.exports=i},c46b:function(t,i,e){"use strict";var n=e("33c4"),a=e.n(n);a.a},f6d4:function(t,i,e){"use strict";var n=e("a3fb"),a=e.n(n);a.a}}]);