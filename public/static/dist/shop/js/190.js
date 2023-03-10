(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[190],{"81c5":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(a("2909"));a("d81d"),a("d3b7"),a("159b"),a("b0c0"),a("3c65"),a("14d9"),a("a15b");var i={inject:["returnToTop"],components:{},props:{},data:function(){var t=this;this.$createElement;return{total:0,page:1,pagesize:10,list:[],selectRows:[],searchData:{keyword:"",status:"all",role_id:"all"},loading:!1,statusList:[{label:"全部",value:"all"},{label:"已启用",value:"1"},{label:"已禁用",value:"0"}],roleList:[],columns:[{type:"selection",width:40,align:"center"},{title:"登录ID",key:"manage_id"},{title:"操作员",key:"name"},{title:"手机号码",key:"contact"},{title:"角色名称",key:"role_name"},{title:"状态",slot:"status"},{title:"操作",key:"action",render:function(e,a){return e("div",[e("Button",{class:"marginL-10",attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.handleEdit(a.row.manage_id)}}},["编辑"]),e("Button",{class:"marginL-10",attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.handleStatus(a.row)}}},["1"===a.row.status?"禁用":"启用"]),e("Button",{class:"marginL-10",attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(){t.handleDelete(a.row.manage_id)}}},["删除"])])}}]}},computed:{isSelectAll:function(){return this.selectRows.length===this.list.length},selectDisabled:function(){return 0===this.selectRows.length||this.noManagePerm},noManagePerm:function(){return!this.$getPermMap("user.index.manage")},getTableData:function(){var t=this;return this.list.map((function(e){return e._disabled=t.noManagePerm,e}))}},created:function(){this.getOperatorList(),this.getAllRole()},methods:{getOperatorList:function(){var t=this;this.returnToTop(),this.loading=!0,this.$api.settingApi.getOperatorList({keyword:this.searchData.keyword,status:"all"!==this.searchData.status&&""!==this.searchData.status?1*this.searchData.status:"",role_id:"all"===this.searchData.role_id?"":this.searchData.role_id,page:this.page,pagesize:this.pagesize}).then((function(e){t.loading=!1,0==e.error&&(t.total=e.total,e.list.forEach((function(t){var e;t["contact"]=t.contact||"-",t["role_name"]=(null===(e=t.roleName)||void 0===e?void 0:e.name)||"-"})),t.list=(0,s.default)(e.list),t.selectRows=[])}))},getAllRole:function(){var t=this;this.$api.settingApi.getRoleAllList().then((function(e){var a=e.error,n=e.data,s=void 0===n?[]:n;0===a&&(s.unshift({id:"all",name:"全部"}),t.roleList=s)}))},handleEdit:function(t){this.$router.push({path:"/setting/systemAuthority/operatorManagement/add",query:{id:t}})},handleStatus:function(t){"1"===t.status?this.forbiddenOperator(t.manage_id):this.activeOperator(t.manage_id)},batchEnable:function(){var t=this.selectRows.map((function(t){return t.manage_id}));t=t.join(","),this.activeOperator(t)},batchDisable:function(){var t=this.selectRows.map((function(t){return t.manage_id}));t=t.join(","),this.forbiddenOperator(t)},activeOperator:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={};a=1===e.split(",").length?{id:e}:{id:0,ids:e},this.$api.settingApi.activeOperator(a).then((function(e){0==e.error&&(t.getOperatorList(),t.$Message.success("启用成功"))}))},forbiddenOperator:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={};a=1===e.split(",").length?{id:e}:{id:0,ids:e},this.$api.settingApi.forbiddenOperator(a).then((function(e){0==e.error&&(t.getOperatorList(),t.$Message.success("禁用成功"))}))},handleDelete:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除该操作员",onOk:function(){e.deleteOperator(t)},onCancel:function(){}})},batchDelete:function(){var t=this.selectRows.map((function(t){return t.manage_id}));t=t.join(","),this.deleteOperator(t)},deleteOperator:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={};a=1===e.split(",").length?{id:e}:{id:0,ids:e},this.$api.settingApi.deleteOperator(a).then((function(e){0==e.error&&(t.getOperatorList(),t.$Message.success("删除成功"))}))},handleSearch:function(){var t;this.page=1,this.pagesize=10,null===(t=this.$refs["page"])||void 0===t||t.reset(),this.getOperatorList()},handleReset:function(){var t;this.searchData.keyword="",this.searchData.role_id="all",this.searchData.status="all",this.page=1,this.pagesize=10,null===(t=this.$refs["page"])||void 0===t||t.reset(),this.getOperatorList()},changePage:function(t){this.page=t.pageNumber,this.pagesize=t.pageSize,this.getOperatorList()},selectChange:function(t){this.selectRows=t},checkboxChange:function(t){this.$refs["table"].selectAll(t)}}};e.default=i},b1e1:function(t,e,a){},c43d:function(t,e,a){"use strict";var n=a("d00e");a.o(n,"render")&&a.d(e,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},c7a3:function(t,e,a){"use strict";a.r(e);var n=a("81c5"),s=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a},d00e:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("b0c0");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("kdx-header-bar",{scopedSlots:t._u([{key:"header",fn:function(){return[e("Button",{attrs:{type:"primary",to:"/setting/systemAuthority/operatorManagement/add",disabled:t.noManagePerm}},[t._v(" +添加操作员 ")])]},proxy:!0}])},[e("Form",{ref:"form",attrs:{model:t.searchData,"label-width":100,inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormItem",{attrs:{label:"关键字："}},[e("Input",{staticClass:"width-340",attrs:{type:"text",placeholder:"请输入"},on:{"on-enter":t.handleSearch},model:{value:t.searchData.keyword,callback:function(e){t.$set(t.searchData,"keyword",e)},expression:"searchData.keyword"}})],1),e("FormItem",{attrs:{label:"角色："}},[e("Select",{staticClass:"width-160",model:{value:t.searchData.role_id,callback:function(e){t.$set(t.searchData,"role_id",e)},expression:"searchData.role_id"}},t._l(t.roleList,(function(a,n){return e("Option",{key:n,attrs:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])})),1)],1),e("FormItem",{attrs:{label:"状态："}},[e("Select",{staticClass:"width-160",model:{value:t.searchData.status,callback:function(e){t.$set(t.searchData,"status",e)},expression:"searchData.status"}},t._l(t.statusList,(function(a,n){return e("Option",{key:n,attrs:{value:a.value}},[t._v(" "+t._s(a.label)+" ")])})),1)],1),e("div",{staticClass:"ivu-form-item-btn"},[e("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v(" 搜索 ")]),e("Button",{attrs:{type:"text"},on:{click:t.handleReset}},[t._v(" 重置 ")])],1)],1)],1),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"refund-address-list"},[e("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{columns:t.columns,data:t.getTableData},on:{"on-selection-change":t.selectChange},scopedSlots:t._u([{key:"status",fn:function(a){var n=a.row;return[e("kdx-status-text",{attrs:{type:"1"===n.status?"success":"danger"}},[t._v(" "+t._s("1"===n.status?"已启用":"已禁用")+" ")])]}}])}),t.list.length>0?e("div",{staticClass:"footer-action"},[e("Checkbox",{attrs:{value:t.isSelectAll,disabled:t.noManagePerm},on:{"on-change":t.checkboxChange}}),e("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.batchEnable}},[t._v(" 启用 ")]),e("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.batchDisable}},[t._v(" 禁用 ")]),e("Button",{attrs:{disabled:t.selectDisabled},on:{click:t.batchDelete}},[t._v(" 删除 ")])],1):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:t.total>10,expression:"total > 10"}],staticClass:"footer-page"},[e("kdx-page-component",{ref:"page",attrs:{total:t.total},on:{"on-change":t.changePage}})],1)],1),t._t("default")],2)};e.render=n;var s=[];e.staticRenderFns=s},f016:function(t,e,a){"use strict";a("b1e1")},fe9f:function(t,e,a){"use strict";a.r(e);var n=a("c43d"),s=a("c7a3");for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("f016");var r=a("2877"),o=Object(r["a"])(s["default"],n["render"],n["staticRenderFns"],!1,null,"0bbc54ee",null);e["default"]=o.exports}}]);