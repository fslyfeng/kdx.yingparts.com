(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"80c1":function(t,e,s){"use strict";var i=s("4020");const a={getCount:t=>i["a"].get("/pc/home/info",{},t),getCategory:t=>i["a"].get("/product/category/get-list",{},t)};e["a"]=a},acc9:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("Container",[e("Breadcrumbs",{attrs:{list:t.getBreadcrumbs}}),e("div",{staticClass:"categories-box"},[e("div",{staticClass:"categories-top",on:{mouseleave:function(e){t.showVisibleList=!1}}},[e("ul",{staticClass:"fixedList"},t._l(t.categoryList,(function(s,i){return e("li",{key:i,class:[t.search.menuId===s.id?"active":""],on:{click:function(e){return t.changeNav(s,i)}}},[t._v(t._s(s.name)+" ")])})),0),e("div",{staticClass:"more",on:{mouseenter:function(e){t.showVisibleList=!0}}},[e("i",{staticClass:"iconfont icon-fenlei3",staticStyle:{"font-size":"18px",color:"#81878E"}}),e("span",[t._v("更多分类")])]),t.showVisibleList?e("div",{staticClass:"visibleList",on:{mouseenter:function(e){t.showVisibleList=!0},mouseleave:function(e){t.showVisibleList=!1}}},[e("ul",{staticClass:"fixedList",staticStyle:{"flex-wrap":"wrap",width:"1200px"}},t._l(t.categoryList,(function(s,i){return e("li",{key:i,class:[t.search.menuId===s.id?"active":""],on:{click:function(e){return t.changeNav(s,i)}}},[t._v(t._s(s.name)+" ")])})),0)]):t._e()]),e("div",{staticClass:"categories-item"},[e("p",{staticClass:"type"},[t._v("分类:")]),e("ul",[e("li",{staticClass:"noselect",class:[""==t.search.childrenId?"active":""],on:{click:function(e){return t.changeNavItem("")}}},[t._v(" 全部 ")]),t._l(t.getChildrenList,(function(s,i){return e("li",{key:i,staticClass:"noselect",class:[t.search.childrenId==s.id?"active":""],on:{click:function(e){return t.changeNavItem(s.id)}}},[t._v(t._s(s.name)+" ")])}))],2)]),e("div",{staticClass:"categories-item"},[e("p",{staticClass:"type"},[t._v("排序:")]),e("ul",[e("li",{staticClass:"noselect",class:["默认"===t.activatedName?"active":""],on:{click:function(e){return t.changeTypeItem("默认")}}},[t._v("默认 ")]),e("li",{staticClass:"noselect",class:["价格"===t.activatedName?"active":""],on:{click:function(e){return t.changeTypeItem("价格")}}},[t._v(" 价格 "),e("i",{directives:[{name:"show",rawName:"v-show",value:0===t.priceStatus,expression:"priceStatus === 0"}],staticClass:"price-icon price-icon--default"}),e("i",{directives:[{name:"show",rawName:"v-show",value:1===t.priceStatus,expression:"priceStatus === 1"}],staticClass:"price-icon price-icon--up"}),e("i",{directives:[{name:"show",rawName:"v-show",value:2===t.priceStatus,expression:"priceStatus === 2"}],staticClass:"price-icon price-icon--down"})]),e("li",{staticClass:"noselect",class:["销量"===t.activatedName?"active":""],on:{click:function(e){return t.changeTypeItem("销量")}}},[t._v("销量 "),e("i",{directives:[{name:"show",rawName:"v-show",value:0===t.timeStatus,expression:"timeStatus === 0"}],staticClass:"price-icon price-icon--default"}),e("i",{directives:[{name:"show",rawName:"v-show",value:1===t.timeStatus,expression:"timeStatus === 1"}],staticClass:"price-icon price-icon--up"}),e("i",{directives:[{name:"show",rawName:"v-show",value:2===t.timeStatus,expression:"timeStatus === 2"}],staticClass:"price-icon price-icon--down"})])])])]),e("div",{ref:"boxs-container",staticStyle:{"padding-top":"20px","padding-bottom":"40px"}},[e("GoodsList",{attrs:{goodsList:t.goodsList}})],1)],1)},a=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"boxs-content"},[e("ul",{staticClass:"box-list"},[t.goodsList.length>0?t._l(t.goodsList,(function(s,i){return e("li",{key:i,staticClass:"box-item",on:{click:function(e){return t.toDetail(s)}}},[e("a",[e("img",{attrs:{src:t.$utils.mediaUrl(s.thumb),alt:""}})]),e("div",{staticClass:"goodsInfo"},[e("p",{staticClass:"item-price"},[t._v(" ¥"+t._s(t._f("formatMoney")(t._f("getSeckillPrice")(s)))+" "),s.oldPrice?e("span",{staticClass:"item-old-price"},[t._v(" ¥"+t._s(s.oldPrice))]):t._e()]),e("h3",{staticClass:"item-title"},[t._v(t._s(s.title))])])])})):[e("EmptyPage")]],2)])},r=[],o={props:{goodsList:{type:Array,default:()=>[]}},data(){return{}},filters:{getSeckillPrice(t){if(t.activities&&t.activities.seckill){if("0"==t.has_option){var e;let s=(null===(e=t.activities)||void 0===e?void 0:e.seckill.activity_price)||0;return""+parseFloat(s)}var s,i;return parseFloat((null===t||void 0===t||null===(s=t.activities)||void 0===s||null===(i=s.seckill.price_range)||void 0===i?void 0:i.min_price)||0)}return t.price},getOldPrice(t){if("1"==t.has_option){let e=t.max_price||0;return""+parseFloat(e)}return parseFloat((null===t||void 0===t?void 0:t.price)||0)},formatMoney(t){return"number"===typeof t||"string"===typeof t&&""!==t.trim()?t>=1e4?parseFloat(t/1e4)+"万":parseFloat(t):0}},methods:{toDetail(t){this.$router.push("/goods/detail?id="+t.id)}}},n=o,l=(s("bf10"),s("2877")),h=Object(l["a"])(n,c,r,!1,null,"5f2122cc",null),u=h.exports,d=s("80c1"),p=s("b26e"),m={name:"categories",components:{GoodsList:u},data(){return{showVisibleList:!1,categoryList:[],goodsList:[],searchIndex:0,searchIitemIndex:-1,activatedName:"默认",priceStatus:0,timeStatus:0,pageNumber:1,search:{menuId:"",childrenId:"",category_id:"",sort:"",by:"",ifGetData:!1,total:"",searchTitle:"",title:""}}},created(){this.search.menuId=this.$route.query.menuId||"",this.search.childrenId=this.$route.query.children||"",this.search.title=this.$route.query.search||"",this.getCategoryList(),this.getGoodsList()},methods:{getCategoryList(){d["a"].getCategory({hideSuccessTip:!0,success:t=>{0===t.error&&(this.categoryList=t.list)}})},changeNav(t){this.search.menuId=t.id,this.search.category_id=t.id,this.search.childrenId="",this.pageNumber=1,this.getGoodsList(t.id)},changeNavItem(t){t!=this.childrenId&&(console.log(t,888),this.search.childrenId=t,this.search.category_id=""===t?this.search.menuId:t,this.search.pageNumber=1,this.getGoodsList(t))},changeTypeItem(t){switch(this.activatedName=t,t){case"默认":this.priceStatus=0,this.timeStatus=0,this.search.sort="",this.search.by="";break;case"价格":if(this.timeStatus=0,this.search.sort="price",this.priceStatus+1>=3?this.priceStatus=1:this.priceStatus++,this.priceStatus%2!==0){this.search.by="desc";break}this.search.by="asc";break;case"销量":if(this.priceStatus=0,this.search.sort="sales",this.timeStatus+1>=3?this.timeStatus=1:this.timeStatus++,this.timeStatus%2!==0){this.search.by="desc";break}this.search.by="asc";break}this.pageNumber=1,this.getGoodsList()},getGoodsList(t){p["a"].getGoodsList({title:this.search.title,category_id:this.search.category_id,sort:this.search.sort,by:this.search.by,page:this.pageNumber,get_activity:1},{hideSuccessTip:!0,success:t=>{this.ifGetData=!1,this.total=t.total,1==this.pageNumber&&(this.goodsList=t.list),this.pageNumber>1&&(this.goodsList=this.goodsList.concat(t.list))}})},handleScroll(){if(!this.$refs["boxs-container"])return;console.log(this.$refs["boxs-container"].offsetHeight);let t=this.$refs["boxs-container"].offsetTop,e=document.documentElement.scrollTop;t-e<200&&!this.ifGetData&&this.goodsList.length<this.total&&!this.ifGetData&&(this.ifGetData=!0,setTimeout(()=>{this.pageNumber++,this.getGoodsList()},200))}},mounted(){window.addEventListener("scroll",this.handleScroll)},watch:{$route(t){console.log(t),""!=t.query.search&&!t.query.search||t.query.search==this.search.title||(this.search.title=t.query.search||"",this.getGoodsList())}},destroyed(){document.removeEventListener("scroll",this.handleScroll)},computed:{getChildrenList(){let t=[];return""!=this.search.menuId&&this.categoryList.forEach(e=>{e.id==this.search.menuId&&(t=e.children)}),t},crumbsName(){return this.$route.query.keyword?this.$route.query.keyword:"全部分类"},getBreadcrumbs(){return[{name:"首页",path:"/"},{name:this.crumbsName,path:"/categories/list"}]}}},g=m,v=(s("fd26"),Object(l["a"])(g,i,a,!1,null,"3ed924d6",null));e["default"]=v.exports},bee0:function(t,e,s){},bf10:function(t,e,s){"use strict";s("bee0")},de03:function(t,e,s){},fd26:function(t,e,s){"use strict";s("de03")}}]);