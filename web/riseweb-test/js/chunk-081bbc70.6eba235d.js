(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-081bbc70"],{"2fdb":function(e,t,i){"use strict";var n=i("5ca1"),a=i("d2c8"),s="includes";n(n.P+n.F*i("5147")(s),"String",{includes:function(e){return!!~a(this,e,s).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"38f1":function(e,t,i){"use strict";var n={entity:null,childs:[{entity:{id:1,parentMenuId:0,name:"goods",icon:"el-icon-menu\r\n",alias:"商品管理",state:"ENABLE",sort:0,value:"/goods",type:"NONE",discription:"用于商品管理的菜单",createUserId:1}},{entity:{id:2,parentMenuId:0,name:"orders",icon:"el-icon-news",alias:"订单管理",state:"ENABLE",sort:0,value:"/orders",type:"NONE",discription:"用于订单管理的菜单",createUserId:1}},{entity:{id:3,parentMenuId:0,name:"campaigns",icon:"el-icon-view",alias:"活动管理",state:"ENABLE",sort:0,value:"/campaigns",type:"NONE",discription:"用于活动管理的菜单",createUserId:1}},{entity:{id:9,parentMenuId:0,name:"notices",icon:"el-icon-view",alias:"公告管理",state:"ENABLE",sort:0,value:"/notices",type:"NONE",discription:"用于公告管理的菜单",createUserId:1}},{entity:{id:4,parentMenuId:0,name:"medias",icon:"el-icon-rank",alias:"媒体管理",state:"ENABLE",sort:0,value:"/medias",type:"NONE",discription:"用于媒体管理的菜单",createUserId:1}},{entity:{id:5,parentMenuId:0,name:"student",icon:"el-icon-info",alias:"学员管理",state:"ENABLE",sort:0,value:null,type:"NONE",discription:"用于学员管理的菜单",createUserId:1},childs:[{entity:{id:51,parentMenuId:1,name:"studentList",icon:"el-icon-location-outline",alias:"学员列表",state:"ENABLE",sort:0,value:"/student/list",type:"LINK",discription:"用于学员列表的菜单",createUserId:1}},{entity:{id:52,parentMenuId:2,name:"studentIntegral",icon:"el-icon-star-on",alias:"积分复核",state:"ENABLE",sort:1,value:"/student/integral",type:"LINK",discription:"用于积分复核的菜单",createUserId:1}},{entity:{id:53,parentMenuId:3,name:"studentIntegralLimit",icon:"el-icon-star-on",alias:"积分限制",state:"ENABLE",sort:1,value:"/student/integralLimit",type:"LINK",discription:"用于积分复核的菜单",createUserId:1}}]},{entity:{id:6,parentMenuId:0,name:"school",icon:"el-icon-bell",alias:"校区管理",state:"ENABLE",sort:4,value:null,type:"NONE",discription:"用于校区管理的菜单",createUserId:1},childs:[{entity:{id:61,parentMenuId:1,name:"schoolList",icon:"el-icon-printer",alias:"校区列表",state:"ENABLE",sort:0,value:"/school/list",type:"LINK",discription:"用于校区列表的菜单",createUserId:1}},{entity:{id:62,parentMenuId:2,name:"schoolClass",icon:"el-icon-edit-outline",alias:"班级列表",state:"ENABLE",sort:1,value:"/school/class",type:"LINK",discription:"用于班级列表的菜单",createUserId:1}}]},{entity:{id:7,parentMenuId:0,name:"service",icon:"el-icon-bell",alias:"服务管理",state:"ENABLE",sort:4,value:null,type:"NONE",discription:"用于服务管理的菜单",createUserId:1},childs:[{entity:{id:71,parentMenuId:1,name:"serviceList",icon:"el-icon-printer",alias:"服务列表",state:"ENABLE",sort:0,value:"/service/list",type:"LINK",discription:"用于服务列表的菜单",createUserId:1}},{entity:{id:72,parentMenuId:2,name:"serviceQuestion",icon:"el-icon-edit-outline",alias:"问卷列表",state:"ENABLE",sort:1,value:"/service/question",type:"LINK",discription:"用于问卷列表的菜单",createUserId:1}}]},{entity:{id:8,parentMenuId:0,name:"systemManage",icon:"el-icon-bell",alias:"系统管理",state:"ENABLE",sort:4,value:null,type:"NONE",discription:"用于系统管理的菜单",createUserId:1},childs:[{entity:{id:81,parentMenuId:1,name:"role",icon:"el-icon-printer",alias:"权限管理",state:"ENABLE",sort:0,value:"/systemManage/role",type:"LINK",discription:"用于权限管理的菜单",createUserId:1}},{entity:{id:82,parentMenuId:2,name:"user",icon:"el-icon-edit-outline",alias:"用户管理",state:"ENABLE",sort:1,value:"/systemManage/user",type:"LINK",discription:"用于用户管理的菜单",createUserId:2}},{entity:{id:83,parentMenuId:3,name:"invite",icon:"el-icon-printer",alias:"邀请管理",state:"ENABLE",sort:0,value:"/systemManage/invite",type:"LINK",discription:"用于邀请管理的菜单",createUserId:3}}]}]};t["a"]=n},5147:function(e,t,i){var n=i("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}},"5a25":function(e,t,i){},"64cb":function(e,t,i){"use strict";var n=i("5a25"),a=i.n(n);a.a},6762:function(e,t,i){"use strict";var n=i("5ca1"),a=i("c366")(!0);n(n.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},a20c:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[i("div",{staticClass:"role-new"},[i("div",{staticClass:"list"},[i("span",[e._v("角色名称：")]),i("span",[e._v(e._s(e.sign))])]),i("div",{staticClass:"list manage"},[i("span",[e._v("权限管理：")]),i("div",{staticClass:"right"},[i("div",{staticClass:"title"},[e._v("商品管理")]),i("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.goodsList,function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),i("div",{staticClass:"title"},[e._v("订单管理")]),i("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.orderList,function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),i("div",{staticClass:"title"},[e._v("活动管理")]),i("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.activeList,function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),i("div",{staticClass:"title"},[e._v("公告管理")]),i("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.noticeList,function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),i("div",{staticClass:"title"},[e._v("媒体管理")]),i("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.mediaList,function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),i("div",{staticClass:"title"},[e._v("学员管理")]),i("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.studentsList,function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),i("div",{staticClass:"title"},[e._v("校区管理")]),i("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.schoolList,function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),i("div",{staticClass:"title"},[e._v("服务管理")]),i("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.serveList,function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),i("div",{staticClass:"title"},[e._v("系统管理")]),i("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.systemList,function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1)],1)]),i("div",{staticClass:"list submit"},[i("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")]),i("el-button",{on:{click:e.cancle}},[e._v("取消")])],1)])])},a=[],s=(i("6762"),i("2fdb"),i("f499")),c=i.n(s),o=(i("ac6a"),i("7f7f"),i("cadf"),i("551c"),i("097d"),i("38f1")),r={name:"roleNew",data:function(){return{sign:"",name:"",companyCheck:[],id:"",type:"",loading:"",goodsList:["商品管理"],orderList:["订单管理"],activeList:["活动管理"],noticeList:["公告管理"],mediaList:["媒体管理"],studentsList:["学员列表","积分复核","积分限制"],schoolList:["校区列表","班级列表"],serveList:["服务列表","问卷列表"],systemList:["权限管理","用户管理","邀请管理"]}},mounted:function(){this.editInit()},methods:{editInit:function(){var e=this,t=this.$route.query,i=t.type,n=t.id;n&&(this.loading=!0,this.type=i,this.id=n,this.api.get("/role/".concat(n)).then(function(t){e.dataInit(t.data),e.loading=!1}).catch(function(t){console.log(t),e.loading=!1,e.$message(t.data.message)}))},dataInit:function(e){var t=this;e=e||{};var i=e,n=i.menus,a=i.sign,s=i.name;if(this.sign=a,this.name=s,n&&!this.lodash.isArray(n)){var c=JSON.parse(n),o=[];this.lodash.forEach(c,function(e){e.childs||o.push(e.entity.alias),t.lodash.forEach(e.childs,function(e){o.push(e.entity.alias)})}),this.companyCheck=o}},submit:function(){var e=this,t=JSON.parse(c()(o["a"])),i=[].concat(this.companyCheck),n=this.lodash.filter(t.childs,function(t){return e.lodash.includes(i,t.entity.alias)}),a=this.lodash.filter(t.childs,function(t){return t.childs=e.lodash.filter(t.childs,function(t){return e.lodash.includes(i,t.entity.alias)}),t.childs.length>0});t=[].concat(n,a),t=this.lodash.map(t,function(t){return t.childs.length<1&&(t=e.lodash.omit(t,"childs")),t});var s={name:this.id,sign:this.sign,menus:c()(t)};this.editUser(s)},editUser:function(e){var t=this;e.id=this.id,this.loading=!0,this.api.put("/role",e).then(function(e){t.loading=!1,t.$router.go(-1)}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.data.message)})},cancle:function(){this.$router.go(-1)}}},l=r,d=(i("64cb"),i("2877")),u=Object(d["a"])(l,n,a,!1,null,"746257ea",null);u.options.__file="roleNew.vue";t["default"]=u.exports},a21f:function(e,t,i){var n=i("584a"),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},aae3:function(e,t,i){var n=i("d3f4"),a=i("2d95"),s=i("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==a(e))}},ac6a:function(e,t,i){for(var n=i("cadf"),a=i("0d58"),s=i("2aba"),c=i("7726"),o=i("32e9"),r=i("84f2"),l=i("2b4c"),d=l("iterator"),u=l("toStringTag"),p=r.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=a(h),m=0;m<y.length;m++){var v,f=y[m],L=h[f],k=c[f],g=k&&k.prototype;if(g&&(g[d]||o(g,d,p),g[u]||o(g,u,f),r[f]=p,L))for(v in n)g[v]||s(g,v,n[v],!0)}},d2c8:function(e,t,i){var n=i("aae3"),a=i("be13");e.exports=function(e,t,i){if(n(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(a(e))}},f499:function(e,t,i){e.exports=i("a21f")}}]);
//# sourceMappingURL=chunk-081bbc70.6eba235d.js.map