(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{"06c4":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{types:{type:Array,default:function(){return[]}}},data:function(){return{value:!1,checkType:null}},methods:{chooseTemp:function(e){this.checkType=e},handleCancel:function(){this.setValue()},handleOk:function(){if(null==this.checkType)return this.$Message.error("请选择菜单类型");this.$emit("choose-type",this.checkType)},setValue:function(){this.value=!this.value,this.value&&(this.checkType=null)}}};t.default=n},"090b":function(e,t,n){"use strict";var a=n("83bd");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"1d14":function(e,t,n){},"1d2b6":function(e,t,n){"use strict";n.r(t);var a=n("06c4"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},2134:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("kdx-header-bar",{attrs:{type:"little"},scopedSlots:e._u([{key:"header",fn:function(){return[t("Button",{attrs:{type:"primary",disabled:e.noManagePerm},on:{click:e.addMenu}},[e._v("+新建菜单")])]},proxy:!0}])},[t("Form",{ref:"form",attrs:{model:e.model,"label-width":100,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[t("FormItem",{attrs:{label:"菜单名称："}},[t("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"请输入菜单名称"},on:{"on-enter":e.handleSearch},model:{value:e.model.keywords,callback:function(t){e.$set(e.model,"keywords",t)},expression:"model.keywords"}})],1),t("div",{staticClass:"ivu-form-item-btn"},[t("Button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"text"},on:{click:e.handleReset}},[e._v("重置")])],1)],1)],1)};t.render=n;var a=[];t.staticRenderFns=a},"302fd":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("4de4"),n("d3b7");var a={name:"MenuList",props:{data:{type:Array,default:function(){return[]}},total:{type:Number},loading:{type:Boolean,default:!1},types:{type:Array,default:function(){return[]}}},data:function(){var e=this;this.$createElement;return{columns:[{title:"序号",key:"id",width:80,render:function(e,t){var n;return n=parseInt(t.row.id)>999?"999+":t.row.id,e("div",[n])}},{title:"菜单名称",key:"name",render:function(e,t){return e("div",{attrs:{className:"menu-title"}},[e("span",{attrs:{className:"title"}},[t.row[t.column.key]])])}},{title:"应用类型",key:"type",render:function(t,n){var a,r=e.types.filter((function(e){return e.type==n.row.type}));return r&&r.length?("10"==r[0].type?a=t("span",{class:"iconfont icon-shouye1"}):"20"==r[0].type&&(a=t("span",{class:"iconfont icon-xiangqing"})),t("div",{class:"page-type"},[a,t("span",{class:"page-name"},[r[0].text])])):t("div",["-"])}},{title:"状态",key:"status",render:function(e,t){return"1"===t.row.status?e("kdx-tag-label",{attrs:{type:"success"}},["应用中"]):e("kdx-tag-label",{attrs:{type:"disabled"}},["未应用"])}},{title:"修改时间",key:"updated_at",render:function(e,t){return"0000-00-00 00:00:00"===t.row.updated_at?e("div",[t.row.created_at]):e("div",[t.row.updated_at])}},{title:"预览",key:"thumb",width:368,render:function(t,n){var a=e.$utils.media(n.row[n.column.key]);return t("div",{class:"preview"},[t("img",{attrs:{src:a,alt:""}})])}},{title:"操作",key:"action",render:function(t,n){var a,r;return"0"==n.row.status&&(a=t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(){e.handleDelete(n.row)}}},["删除"]),r=t("Button",{attrs:{type:"text",disabled:e.noManagePerm},on:{click:function(){e.handlePublish(n.row)}}},["应用"])),t("div",{class:"action"},[t("Button",{attrs:{type:"text",disabled:e.noManagePerm,to:"/decorate/diymenu?id=".concat(n.row.id,"&type=edit")}},["编辑"]),a,r])}}]}},computed:{noManagePerm:function(){return!this.$getPermMap("diypage.menu.manage")}},methods:{changePage:function(e){this.$emit("on-page-change",e)},reset:function(){var e;null===(e=this.$refs["page"])||void 0===e||e.reset()},handleDelete:function(e){var t=this;this.$Modal.confirm({title:"提示",content:"是否删除该菜单?",onOk:function(){t.$api.shopApi.deleteNewMenu({id:e.id}).then((function(e){0===e.error&&(t.$Message.success("菜单删除成功"),t.$emit("on-refresh"))}))}})},handlePublish:function(e){var t=this;this.$Modal.confirm({title:"提示",content:"是否应用该菜单?",onOk:function(){t.$api.shopApi.menuApply({id:e.id}).then((function(e){0===e.error&&(t.$Message.success("菜单应用成功"),t.$emit("on-refresh"))}))}})}}};t.default=a},"3bb7":function(e,t,n){"use strict";n("1d14")},4458:function(e,t,n){"use strict";var a=n("cbf6");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"46ee":function(e,t,n){"use strict";n("e038")},5042:function(e,t,n){"use strict";n.r(t);var a=n("b42d"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},6202:function(e,t,n){"use strict";n.r(t);var a=n("dd95"),r=n("5042");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var s=n("2877"),o=Object(s["a"])(r["default"],a["render"],a["staticRenderFns"],!1,null,null,null);t["default"]=o.exports},6977:function(e,t,n){"use strict";var a=n("a337");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},7153:function(e,t,n){"use strict";n.r(t);var a=n("4458"),r=n("77bc");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("b630");var s=n("2877"),o=Object(s["a"])(r["default"],a["render"],a["staticRenderFns"],!1,null,"570adf36",null);t["default"]=o.exports},"77bc":function(e,t,n){"use strict";n.r(t);var a=n("ce6d"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"836f":function(e,t,n){},"83bd":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("kdx-modal-frame",{staticClass:"menu-temp",attrs:{title:"选择菜单类型",width:910},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[t("div",{staticClass:"menu-content"},e._l(e.types,(function(n){return t("div",{key:n.id,staticClass:"menu-list",class:{on:n.type===e.checkType},on:{click:function(t){return e.chooseTemp(n.type)}}},[n.type===e.checkType?t("i",{staticClass:"iconfont icon-yes1 choose-icon"}):e._e(),t("div",{staticClass:"menu-info"},[t("i",{staticClass:"iconfont menu-icon",class:n.icon}),t("span",{staticClass:"menu-type",class:{bold:0!=n.type}},[e._v(e._s(n.text))])]),n.thumb?t("img",{staticClass:"menu-img",attrs:{src:e.$utils.media(n.thumb)}}):e._e()])})),0)])};t.render=n;var a=[];t.staticRenderFns=a},a337:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"shop-custom-menu-list"},[t("Table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{columns:e.columns,data:e.data}}),t("div",{staticClass:"footer-page"},[t("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.changePage}})],1)],1)};t.render=n;var a=[];t.staticRenderFns=a},b42d:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"SearchHeader",data:function(){return{model:{keywords:""}}},computed:{noManagePerm:function(){return!this.$getPermMap("diypage.menu.manage")}},methods:{handleSearch:function(){this.$emit("on-change",this.model)},handleReset:function(){this.$emit("on-change",{}),this.model.keywords=""},addMenu:function(){this.$emit("choose-temp")}}};t.default=n},b630:function(e,t,n){"use strict";n("836f")},c01f:function(e,t,n){"use strict";n.r(t);var a=n("6977"),r=n("d3b1");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("3bb7");var s=n("2877"),o=Object(s["a"])(r["default"],a["render"],a["staticRenderFns"],!1,null,"490730b0",null);t["default"]=o.exports},cbf6:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"shop-custom-menu"},[t("search-header",{on:{"on-change":e.handleSearch,"choose-temp":e.chooseTemp}}),t("div",{staticClass:"menu-list"},[t("menu-list",{ref:"table_list",attrs:{types:e.typeList,total:e.total,data:e.table.data,loading:e.table.loading},on:{"on-page-change":e.changePage,"on-refresh":e.resetTable}})],1),t("select-menu-temp",{ref:"selectMenuTemp",attrs:{types:e.typeList},on:{"choose-type":e.chooseType}}),e._t("default")],2)};t.render=n;var a=[];t.staticRenderFns=a},ce6d:function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("14d9"),n("ac1f"),n("841c"),n("4de4"),n("d3b7");var r=a(n("6202")),i=a(n("c01f")),s=a(n("df2a")),o={name:"index",inject:["returnToTop"],components:{SearchHeader:r.default,SelectMenuTemp:s.default,MenuList:i.default},data:function(){return{data:[],page:{pageSize:10,pageNumber:1},total:10,table:{data:[],loading:!1},search:{},typeList:[]}},methods:{chooseTemp:function(){this.$refs.selectMenuTemp.setValue()},chooseType:function(e){this.$router.push({path:"/decorate/diymenu",query:{type:e}})},handleSearch:function(e){this.search=e,this.resetTable()},changePage:function(e){this.page=e,this.getList()},resetTable:function(){this.page={pageSize:10,pageNumber:1},this.$refs["table_list"].reset(),this.getList()},getList:function(){var e=this;this.returnToTop(),this.table.loading=!0;var t=Object.assign({pagesize:this.page.pageSize,page:this.page.pageNumber},this.search);this.$api.shopApi.getNewMenuList(t).then((function(t){e.table.loading=!1,0===t.error&&(e.table.data=t.list||[],e.total=t.total,e.typeList=t.type_list.filter((function(e){return"20"!=e.type})))}))}},mounted:function(){this.getList()}};t.default=o},d3b1:function(e,t,n){"use strict";n.r(t);var a=n("302fd"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},dd95:function(e,t,n){"use strict";var a=n("2134");n.o(a,"render")&&n.d(t,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]}))},df2a:function(e,t,n){"use strict";n.r(t);var a=n("090b"),r=n("1d2b6");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("46ee");var s=n("2877"),o=Object(s["a"])(r["default"],a["render"],a["staticRenderFns"],!1,null,"893b6abc",null);t["default"]=o.exports},e038:function(e,t,n){}}]);