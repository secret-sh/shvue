(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92c583ac"],{"1f8d":function(t,e,a){t.exports=a.p+"img/taskjiesuan.1bf28eb9.png"},2914:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sh-content"},[a("div",{staticClass:"container"},[a("Card",{staticClass:"sh-ghost-card sh-coursemain-card",attrs:{title:"实训管理"}},[a("div",{attrs:{slot:"extra"},slot:"extra"}),a("Tabs",{staticClass:"sh-tab reverse",attrs:{value:t.courseTabActive},on:{"on-click":t.handleTab}},t._l(t.tabList,(function(t,e){return a("TabPane",{key:e,attrs:{label:t.label,name:t.name}})})),1),"manageTab1"==t.courseTabActive?[a("TrainingCourseManageTaskplan")]:"manageTab2"==t.courseTabActive?[a("TrainingCourseManageStoreinit")]:"manageTab3"==t.courseTabActive?[a("TrainingCourseManageProductrestore")]:[a("TrainingCourseManageProductban")]],2)],1)])},r=[],s=(a("3221"),a("7947"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Tabs",{staticClass:"sh-subtab",attrs:{type:"card"},model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},t._l(t.tabList,(function(t,e){return a("TabPane",{key:e,attrs:{label:t.label,name:t.name}})})),1),a("TrainingCourseManageTaskplanList",{attrs:{listType:t.tabActive}})],1)}),i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ShList",{attrs:{grid:{gutter:20,xs:24,sm:12,md:8,lg:6},dataSourse:t.dataSourse,loading:t.dataloading,pagination:t.pagination},scopedSlots:t._u([{key:"renderItem",fn:function(e){var n=e[0],r=e[1];return a("ListItem",{},[a("div",{staticClass:"taskManageitem",class:t.taskClassStatus(r)},[a("ShCorner",{attrs:{title:"待执行",rotate:"",placement:"top-left"}}),a("div",{staticClass:"image"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"distribution"==t.listType?t.imgDistribution:t.imgSettlement,expression:"listType == 'distribution' ? imgDistribution : imgSettlement"}]})]),a("div",{staticClass:"content"},[a("a",{staticClass:"header"},[t._v("一单自配送演示")])]),a("div",{staticClass:"foot"},[a("Button",{attrs:{type:"default",size:"small"},nativeOn:{click:function(e){return t.handleTaskPerform(n)}}},[t._v("执行任务")])],1)],1)])}}])})],1)},u=[],l=a("efe2"),c=(a("3721"),a("ba27")),d=a("7736"),g={name:"training-course-manage-taskplan-list",props:{status:{type:Number,default:null},listType:{type:String,default:null}},components:{ShCorner:c["a"]},data:function(){return{imgDistribution:a("88f2"),imgSettlement:a("1f8d"),editItem:null,dataloading:!1,dataSourse:[],pagination:{pageSize:8}}},computed:{taskClassStatus:function(){return function(t){var e="";return e=t%4==1?"taskMb":t%4==2?"taskMc":t%4==3?"taskMd":"taskMa",e}}},mounted:function(){this.getCourseCenterTrainingCourseTeamList()},methods:Object(l["a"])(Object(l["a"])({},Object(d["b"])(["getStoreCourseCenterTrainingCourseTeamList"])),{},{getCourseCenterTrainingCourseTeamList:function(){var t=this;t.dataloading=!0,t.dataSourse=[],t.getStoreCourseCenterTrainingCourseTeamList({}).then((function(e){t.dataloading=!1,t.dataSourse=e.dataList}))},handleTaskPerform:function(t){}}),watch:{listType:function(t,e){this.getCourseCenterTrainingCourseTeamList()}}},m=g,p=(a("fd18"),a("5d22")),b=Object(p["a"])(m,o,u,!1,null,"5aaf7c0e",null),f=b.exports,h={name:"training-course-manage-taskplan",components:{TrainingCourseManageTaskplanList:f},data:function(){return{tabActive:"distribution",tabList:[{label:"自配送演示",name:"distribution"},{label:"季度结算类",name:"settlement"}]}}},C=h,T=Object(p["a"])(C,s,i,!1,null,"4b33a332",null),v=T.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Tabs",{staticClass:"sh-subtab",attrs:{type:"card"},model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},[t._l(t.tabList,(function(t,e){return a("TabPane",{key:e,attrs:{label:t.label,name:t.name}})})),a("template",{slot:"extra"},[a("Button",{attrs:{type:"primary",size:"small"}},[t._v("一键初始化")])],1)],2),a("TrainingCourseManageTaskplanList",{attrs:{listType:t.tabActive}})],1)},S=[],k={name:"training-course-manage-storeinit",components:{TrainingCourseManageTaskplanList:f},data:function(){return{tabActive:"tab1",tabList:[{label:"店铺初始化",name:"tab1"}]}}},_=k,L=Object(p["a"])(_,y,S,!1,null,"7af7d325",null),M=L.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"head",staticStyle:{"border-bottom":"1px solid #ddd","padding-bottom":"10px","text-align":"right"}},[a("Form",{attrs:{inline:""}},[a("FormItem",{staticClass:"mb-0"},[a("Select",{attrs:{placeholder:"请选择"},model:{value:t.searchgroup,callback:function(e){t.searchgroup="string"===typeof e?e.trim():e},expression:"searchgroup"}},[a("Option",{attrs:{value:"1"}},[t._v("1")]),a("Option",{attrs:{value:"2"}},[t._v("2")])],1)],1),a("FormItem",{staticClass:"mb-0"},[a("Input",{directives:[{name:"input-filter",rawName:"v-input-filter"}],attrs:{type:"text",search:"",placeholder:"请输入商品名称或asin码",clearable:""},model:{value:t.searchname,callback:function(e){t.searchname="string"===typeof e?e.trim():e},expression:"searchname"}})],1),a("FormItem",{staticClass:"mb-0 mr-0"},[a("Button",{attrs:{type:"primary",icon:"ios-search"}})],1)],1)],1),a("TrainingCourseManageProductrestoreList")],1)},w=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ShTable",{ref:"trainingProductRestoreTable",attrs:{dataSourse:t.dataSourse,columns:t.columns,loading:t.dataloading},scopedSlots:t._u([{key:"handle",fn:function(e){var n=e.row;return[a("Button",{attrs:{type:"default",size:"small",row:n}},[t._v("恢复")])]}}])})],1)},P=[],j={name:"training-course-manage-productrestore-list",props:{status:{type:Number,default:null},listType:{type:String,default:null}},data:function(){return{dataloading:!1,dataSourse:[]}},computed:{columns:function(){return[{title:"ID",key:"productId",align:"center",width:100},{title:"组长",key:"productGroup",align:"center"},{title:"asin",key:"productAsin",align:"center"},{title:"名称",key:"productName",align:"center"},{title:"创建时间",key:"productCreateDate",align:"center"},{title:"操作",key:"handle",align:"center",width:100,slot:"handle"}]}},mounted:function(){this.getCourseCenterTrainingCourseManageProductRestoreList()},methods:Object(l["a"])(Object(l["a"])({},Object(d["b"])(["getStoreCourseCenterTrainingCourseManageProductRestoreList"])),{},{getCourseCenterTrainingCourseManageProductRestoreList:function(){var t=this;t.dataloading=!0,t.dataSourse=[],t.getStoreCourseCenterTrainingCourseManageProductRestoreList({}).then((function(e){t.dataloading=!1,t.dataSourse=e.dataList}))}})},A=j,$=Object(p["a"])(A,O,P,!1,null,"8bcfd8f6",null),z=$.exports,N={name:"training-course-manage-productrestore",components:{TrainingCourseManageProductrestoreList:z},data:function(){return{searchgroup:null,searchname:null}}},E=N,I=Object(p["a"])(E,x,w,!1,null,"9c2b2890",null),R=I.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("TrainingCourseManageProductbanList")],1)},D=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ShTable",{ref:"trainingProductBanTable",attrs:{dataSourse:t.dataSourse,columns:t.columns,loading:t.dataloading},scopedSlots:t._u([{key:"handle",fn:function(e){var n=e.row;return[a("Button",{attrs:{type:"warning",size:"small",row:n}},[t._v("执行禁售")])]}}])})],1)},J=[],G={name:"training-course-manage-productban-list",props:{status:{type:Number,default:null},listType:{type:String,default:null}},data:function(){return{dataloading:!1,dataSourse:[]}},computed:{columns:function(){return[{title:"选择商品",key:"productName",align:"center"},{title:"操作",key:"handle",align:"center",width:150,slot:"handle"}]}},mounted:function(){this.getCourseCenterTrainingCourseManageProductRestoreList()},methods:Object(l["a"])(Object(l["a"])({},Object(d["b"])(["getStoreCourseCenterTrainingCourseManageProductRestoreList"])),{},{getCourseCenterTrainingCourseManageProductRestoreList:function(){var t=this;t.dataloading=!0,t.dataSourse=[],t.getStoreCourseCenterTrainingCourseManageProductRestoreList({}).then((function(e){t.dataloading=!1,t.dataSourse=e.dataList}))}})},W=G,q=Object(p["a"])(W,F,J,!1,null,"7a58049a",null),H=q.exports,K={name:"training-course-manage-productban",components:{TrainingCourseManageProductbanList:H},data:function(){return{searchgroup:null,searchname:null}}},Q=K,U=Object(p["a"])(Q,B,D,!1,null,"69524dc2",null),V=U.exports,X={name:"training-course-manage",components:{TrainingCourseManageTaskplan:v,TrainingCourseManageStoreinit:M,TrainingCourseManageProductrestore:R,TrainingCourseManageProductban:V},data:function(){return{searchname:null,tabList:[{label:"计划任务",name:"manageTab1"},{label:"店铺初始化",name:"manageTab2"},{label:"恢复商品",name:"manageTab3"},{label:"商品禁售/解禁",name:"manageTab4"}]}},computed:{courseTabActive:function(){return this.winhash||"manageTab1"}},methods:{handleTab:function(t){var e=this;e.courseTabActive!=t&&e.$router.replace({hash:t})}}},Y=X,Z=Object(p["a"])(Y,n,r,!1,null,"019b36f1",null);e["default"]=Z.exports},"2a97":function(t,e,a){"use strict";a("7631")},"5ef7":function(t,e,a){},7631:function(t,e,a){},"88f2":function(t,e,a){t.exports=a.p+"img/taskorder.65cbc5ff.png"},ba27:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"sh-corner",class:t.classes,style:t.styles,attrs:{type:t.type,size:t.size}},[a("div",{staticClass:"sh-corner-content"},[t.title||t.$slots.title?a("div",[t._v(t._s(t.title))]):t._e(),t.$slots.default?a("span",[t._t("default")],2):t._e()]),a("span",{staticClass:"sh-corner-bg",style:t.cornerStyles})])},r=[],s=a("55ae"),i=a("e7e7"),o=(a("3721"),a("3221"),a("310b"),a("5d3f"),{name:"sh-corner",components:{},props:{type:{type:String,default:""},size:{type:String,default:"default"},color:{type:String,default:"#e8e8e8"},title:{type:[String,Number],default:""},width:{type:[String,Number],default:"60"},height:{type:[String,Number],default:"60"},placement:{type:String,default:"top-right"},rotate:[Boolean]},data:function(){return{}},computed:{styles:function(){return{borderColor:this.color,width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},cornerStyles:function(){return{borderWidth:"".concat(this.width,"px")}},placeClass:function(){return this.placement.toLowerCase().split("-")},classes:function(){return[].concat(Object(i["a"])(this.placeClass),[Object(s["a"])({},"sh-rotate",this.rotate)])}},created:function(){},methods:{},watch:{}}),u=o,l=(a("2a97"),a("5d22")),c=Object(l["a"])(u,n,r,!1,null,null,null),d=c.exports;d.install=function(t){t.component("ShCorner",d)};e["a"]=d},fd18:function(t,e,a){"use strict";a("5ef7")}}]);