(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[119],{"0f9c":function(t,e,n){},"30a1":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,n("b0c0");var a=function(){var t=this,e=t._self._c;return e("kdx-Modal-frame",{attrs:{title:"新增分组",width:700},on:{"on-cancel":t.handleClose,"on-ok":t.handleOk},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e("Form",{ref:"form",staticClass:"import-form",attrs:{model:t.model,rules:t.rules,"label-width":120},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormItem",{attrs:{label:"分组名称：",prop:"name"}},[e("Input",{staticClass:"width-430",attrs:{maxlength:"4","show-word-limit":"",placeholder:"请输入分组名称"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1)],1)],1)};e.render=a;var i=[];e.staticRenderFns=i},"50b2":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4"),n("b0c0");var a={name:"ImportArticleModal",data:function(){return{value:!1,model:{name:""},rules:{name:[{required:!0,message:"分组名称必填"}]}}},methods:{setValue:function(){console.log(this.value),this.value=!this.value,this.value&&this.resetModel()},handleClose:function(){this.resetModel(),this.setValue()},handleOk:function(){var t=this;this.$refs["form"].validate((function(e){e&&t.addGroup()}))},addGroup:function(){var t=this,e=JSON.stringify([{name:this.model.name,status:1}]);this.$api.articleApi.saveArticleGroup({data:e}).then((function(e){0===e.error&&(t.$emit("success"),t.handleClose())}))},resetModel:function(){this.$refs.form.resetFields()}}};e.default=a},"51b7":function(t,e,n){"use strict";var a=n("30a1");n.o(a,"render")&&n.d(e,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"5aff":function(t,e,n){"use strict";n.r(e);var a=n("51b7"),i=n("8235");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("8810");var r=n("2877"),o=Object(r["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"0c1e729e",null);e["default"]=o.exports},8235:function(t,e,n){"use strict";n.r(e);var a=n("50b2"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},8810:function(t,e,n){"use strict";n("b736")},9288:function(t,e,n){var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("14d9"),n("a434"),n("d81d"),n("d3b7"),n("159b"),n("b0c0"),n("e9c4"),n("a9e3");var i=a(n("aa47")),s=a(n("5aff")),r={components:{addGroupModal:s.default},data:function(){return{load:!1,loading:!1,list:[]}},mounted:function(){var t=this;this.getGroupList().then((function(){t.list.length&&t.initSortable()}))},computed:{noManagePerm:function(){return!this.$getPermMap("article.group.manage")}},methods:{addGroup:function(){this.list.push({name:"",article_count:"0",status:"1"})},initSortable:function(){var t=this;this.$nextTick((function(){var e=t.$refs["draggle"];new i.default(e,{handle:".icon",dataIdAttr:"data-id",onEnd:t.endSortable,animation:150,ghostClass:"blue-background-class"})}))},endSortable:function(t){var e=this.list[t.oldIndex];this.list.splice(t.oldIndex,1),this.list.splice(t.newIndex,0,e);var n=this.list.map((function(t,e){return e})).reverse();this.list.forEach((function(t,e){t.display_order=n[e]}))},handleSave:function(){var t=this,e=!0;if(this.load=!0,this.list.forEach((function(n){if(""==n.name)return t.$Message.error("分组名称不能为空"),e=!1,void setTimeout((function(){t.load=!1}),2e3)})),e){var n=JSON.stringify(this.list);this.$api.articleApi.saveArticleGroup({data:n}).then((function(e){0===e.error&&(t.$Message.success("操作成功"),t.load=!1,t.getGroupList())})).finally((function(){setTimeout((function(){t.load=!1}),2e3)}))}},getGroupList:function(){var t=this;return this.loading=!0,this.$api.articleApi.getGroupList({get_article_count:1}).then((function(e){0===e.error&&(t.list=e.list)})).finally((function(){t.loading=!1}))},handleHide:function(t,e){var n=this,a="确认显示该分组吗？";console.log(e),"1"==e&&(a="确认隐藏该分组吗？"),this.$Modal.confirm({title:"提示",content:a,onOk:function(){n.changeStatus(t,e)},onCancel:function(){}})},changeStatus:function(t,e){var n=this,a=Number(!Number(e));this.$api.articleApi.changeHideArticleGroup({id:t,status:a}).then((function(t){0===t.error&&(n.$Message.success("操作成功"),n.getGroupList())}))},handleDelete:function(t,e){var n=this;this.$Modal.confirm({title:"提示",content:"确认删除该分组吗？",onOk:function(){n.deleteGroup(t,e)},onCancel:function(){}})},deleteGroup:function(t,e){var n=this;t?this.$api.articleApi.deleteArticleGroup({id:t}).then((function(t){0===t.error&&(n.$Message.success("操作成功"),n.getGroupList())})):this.list.splice(e,1)},refreshTable:function(){this.getGroupList()}}};e.default=r},9684:function(t,e,n){"use strict";n.r(e);var a=n("9288"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"98cb":function(t,e,n){"use strict";var a=n("aae3");n.o(a,"render")&&n.d(e,"render",(function(){return a["render"]})),n.o(a,"staticRenderFns")&&n.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},a22d:function(t,e,n){"use strict";n.r(e);var a=n("98cb"),i=n("9684");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("de04");var r=n("2877"),o=Object(r["a"])(i["default"],a["render"],a["staticRenderFns"],!1,null,"5abeb630",null);e["default"]=o.exports},aae3:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,n("b0c0");var a=function(){var t=this,e=t._self._c;return e("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[e("div",{staticClass:"btn-bottom"},[e("Button",{staticClass:"primary-long",attrs:{disabled:t.noManagePerm,loading:t.load},on:{click:t.handleSave}},[t._v("保存")])],1)]},proxy:!0}])},[e("div",{staticClass:"good-classification"},[e("div",{staticClass:"header"},[e("Button",{attrs:{type:"primary",disabled:t.noManagePerm},on:{click:t.addGroup}},[t._v("+添加分组")])],1),e("div",{staticClass:"header-space"}),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content"},[e("div",{staticClass:"table-header"},[e("div",{staticClass:"name"},[t._v("分组名称")]),e("div",{staticClass:"count"},[t._v("专题文章数量")]),e("div",{staticClass:"status"},[t._v("状态")]),e("div",{staticClass:"action"},[t._v("操作")])]),t.list.length>0?e("div",[e("div",{staticClass:"grag-sort-list"},[e("div",{ref:"draggle"},t._l(t.list,(function(n,a){return e("div",{key:n.id},[e("div",{staticClass:"table-content"},[e("div",{staticClass:"icon"},[e("Icon",{attrs:{type:"md-menu"}})],1),e("div",{staticClass:"name"},[e("Input",{attrs:{"show-word-limit":"",maxlength:8},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"item.name"}})],1),e("div",{staticClass:"count"},[t._v(t._s(n.article_count))]),e("div",{staticClass:"status"},[e("span",{class:{show:1==n.status,hide:1!=n.status}},[t._v(t._s(1==n.status?"显示":"隐藏"))])]),e("div",{staticClass:"action"},[e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(e){return t.handleHide(n.id,n.status)}}},[t._v(t._s(1==n.status?"隐藏":"显示"))]),e("Button",{attrs:{type:"text",disabled:t.noManagePerm},on:{click:function(e){return t.handleDelete(n.id,a)}}},[t._v("删除")])],1)])])})),0)])]):e("div",[e("div",{staticStyle:{"text-align":"center"}},[t._v(" 暂无数据 ")])])])]),e("add-group-modal",{ref:"groupModal",on:{success:t.getGroupList}})],1)};e.render=a;var i=[];e.staticRenderFns=i},b736:function(t,e,n){},de04:function(t,e,n){"use strict";n("0f9c")}}]);