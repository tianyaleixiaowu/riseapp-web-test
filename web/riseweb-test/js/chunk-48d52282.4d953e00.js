(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48d52282"],{"06c3":function(t,a,e){"use strict";var n=e("7de3"),i=e.n(n);i.a},2960:function(t,a,e){"use strict";var n=e("c461"),i=e.n(n);i.a},"7de3":function(t,a,e){},9404:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-container",[e("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("el-table",{attrs:{data:t.tableList}},[t._l(t.data.table,function(t,a){return e("el-table-column",{key:a,attrs:{prop:t.prop,label:t.label,width:t.width,align:"center"}})}),t.data.edit&&t.data.edit.length>0?e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return t._l(t.data.edit,function(n,i){return e("el-button",{key:i,attrs:{type:"text",size:"small"},on:{click:function(e){t.handle(a.row,n)}}},[t._v(t._s(n.name))])})}}])}):t._e()],2)],1)],1)},i=[],o={name:"table",props:["data","list","loading"],data:function(){return{tableList:[]}},mounted:function(){},methods:{handle:function(t,a){var e={data:t,id:a.id};this.$emit("change",e)}},watch:{list:function(t){this.tableList=t}}},s=o,l=(e("2960"),e("2877")),c=Object(l["a"])(s,n,i,!1,null,"32822608",null);c.options.__file="tables.vue";a["a"]=c.exports},"9cf8":function(t,a,e){"use strict";e("386d");var n={size:20,totalCount:1,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};a["a"]=i},c461:function(t,a,e){},cba8:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"goods"},[e("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),e("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),e("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("span",[t._v(t._s(t.dialogContent))]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},i=[],o=e("5176"),s=e.n(o),l=(e("386d"),e("cadf"),e("551c"),e("097d"),e("3079")),c=e("9404"),r=(e("b383"),e("9cf8")),d={leftMenu:[],rightMenu:[{id:"r2",name:"新增"}]},u={table:[{label:"校区名称",prop:"name"},{label:"联系人姓名",prop:"contactPerson"},{label:"联系人手机",prop:"mobile"},{label:"校区地址",prop:"address"}],edit:[{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},h=["确认删除该条信息?"],g={name:"schoolList",mixins:[r["a"]],data:function(){return{dataOption:d,dataTable:u,dialogVisible:!1,dialogContent:h[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:l["a"],Tables:c["a"]},mounted:function(){this.search()},activated:function(){this.search()},methods:{optchange:function(t){return"r1"===t.id?this.search():"r2"===t.id?this.$router.push("/school/listAdd?type=new"):void 0},tabchange:function(t){return this.id=t.data.id,"t1"===t.id?this.$router.push("/school/listAdd?type=edit&id=".concat(this.id)):"t2"===t.id?this.dialogVisible=!0:void 0},sure:function(){var t=this;this.api.delete("/school/".concat(this.id)).then(function(a){t.loading=!1,t.search(),t.$message(a.data)}).catch(function(a){console.log(a),t.$message(a.data.message)}),this.dialogVisible=!1},search:function(){var t=this,a=this.$refs.goodsOpt.getData(),e={size:20,page:this.currentPage-1};s()({},a,e);this.loading=!0,this.api.get("/school").then(function(a){t.loading=!1,t.tableList=a.data}).catch(function(a){console.log(a),t.$message(a.data.message)})},dataInit:function(){}}},f=g,p=(e("06c3"),e("2877")),b=Object(p["a"])(f,n,i,!1,null,"6382f844",null);b.options.__file="list.vue";a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-48d52282.4d953e00.js.map