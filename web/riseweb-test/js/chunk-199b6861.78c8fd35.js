(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-199b6861"],{2960:function(t,e,a){"use strict";var n=a("c461"),i=a.n(n);i.a},"487f":function(t,e,a){"use strict";var n=a("88fa"),i=a.n(n);i.a},"88fa":function(t,e,a){},9404:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-table",{attrs:{data:t.tableList}},[t._l(t.data.table,function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label,width:t.width,align:"center"}})}),t.data.edit&&t.data.edit.length>0?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.data.edit,function(n,i){return a("el-button",{key:i,attrs:{type:"text",size:"small"},on:{click:function(a){t.handle(e.row,n)}}},[t._v(t._s(n.name))])})}}])}):t._e()],2)],1)],1)},i=[],o={name:"table",props:["data","list","loading"],data:function(){return{tableList:[]}},mounted:function(){},methods:{handle:function(t,e){var a={data:t,id:e.id};this.$emit("change",a)}},watch:{list:function(t){this.tableList=t}}},s=o,l=(a("2960"),a("2877")),r=Object(l["a"])(s,n,i,!1,null,"32822608",null);r.options.__file="tables.vue";e["a"]=r.exports},"961e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods"},[a("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),a("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v(t._s(t.dialogContent))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},i=[],o=a("5176"),s=a.n(o),l=(a("386d"),a("3079")),r=a("9404"),c=a("b383"),d=a.n(c),u=a("9cf8"),g=a("3ebc"),h={leftMenu:[{id:"1",name:"校区：",placeholder:"请输入校区",module:"schoolId",type:"select"},{id:"2",name:"班级：",placeholder:"请输入班级",module:"classId",type:"select"},{name:"用户姓名：",placeholder:"请输入用户姓名",module:"name"},{name:"所属角色：",placeholder:"请选择所属角色",module:"roleId",type:"select"}],rightMenu:[{id:"r1",name:"查询"},{id:"r2",name:"新增"}]},p={table:[{label:"校区",prop:"schoolName"},{label:"班级",prop:"className"},{label:"用户姓名",prop:"name"},{label:"用户手机号",prop:"mobile"},{label:"所属角色",prop:"roleName"}],edit:[{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},f=["确认删除该条信息?"],m={name:"systemUser",mixins:[u["a"]],data:function(){return{dataOption:h,dataTable:p,dialogVisible:!1,dialogContent:f[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:l["a"],Tables:r["a"]},mounted:function(){this.dropInit(),this.search()},activated:function(){this.search()},methods:{dropInit:function(){var t=this;Object(g["h"])(function(e){var a=t.dataOption.leftMenu;a=a.map(function(t){return"schoolId"===t.module&&(t.options=e),t}),t.dataOption.leftMenu=a}),Object(g["g"])(function(e){var a=t.dataOption.leftMenu;a=a.map(function(t){return"roleId"===t.module&&(t.options=e),t}),t.dataOption.leftMenu=a},"","less")},optchange:function(t){return console.log(t.id+"--id被单击了"),"r1"===t.id?this.search():"r2"===t.id?this.$router.push("/systemManage/userAdd?type=new"):void 0},tabchange:function(t){return console.log(t.id+"--id被单击了"),this.id=t.data.id,"t1"===t.id?this.$router.push("/systemManage/userAdd?type=edit&id=".concat(this.id)):"t2"===t.id?this.dialogVisible=!0:"t3"===t.id?this.$router.push("/systemManage/userInvite?type=detail"):void 0},sure:function(){var t=this;this.api.delete("/user/".concat(this.id)).then(function(e){t.loading=!1,t.search(),t.$message(e.data)}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1},search:function(){var t=this,e=this.$refs.goodsOpt.getData(),a={size:20,page:this.currentPage-1},n=s()({},e,a,{student:!1}),i=d.a.stringify(n||{});this.loading=!0,this.api.get("/user?".concat(i)).then(function(e){t.loading=!1,t.dataInit(e.data),t.setPage(e.data),t.tableList=e.data.list}).catch(function(e){console.log(e),t.$message(e.data.message)})},dataInit:function(t){}}},b=m,v=(a("487f"),a("2877")),y=Object(v["a"])(b,n,i,!1,null,"52b10e08",null);y.options.__file="systemUser.vue";e["default"]=y.exports},"9cf8":function(t,e,a){"use strict";a("386d");var n={size:20,totalCount:1,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=i},c461:function(t,e,a){}}]);
//# sourceMappingURL=chunk-199b6861.78c8fd35.js.map