(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3bfe33e"],{"47dd":function(t,e,s){},6922:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sh-content"},[s("div",{staticClass:"container"},[s("ShHeader",{attrs:{type:"border",title:"成绩管理",ghost:""}},[s("div",{attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"sh-content-bg1"},[s("ResultDistribution",{attrs:{courseId:t.searchname}},[s("Form",{attrs:{slot:"resultform",inline:"","label-width":80,"label-colon":""},slot:"resultform"},[s("FormItem",{staticClass:"mb-0",staticStyle:{width:"300px"},attrs:{label:"课程"}},[s("Select",{staticClass:"w-100",attrs:{placeholder:"请选择课程"},model:{value:t.searchname,callback:function(e){t.searchname="string"===typeof e?e.trim():e},expression:"searchname"}},[s("Option",{attrs:{value:"1"}},[t._v("课程大数据的埃及大使")]),s("Option",{attrs:{value:"2"}},[t._v("课程9发的苏菲我发文件放到")])],1)],1),s("FormItem",{staticClass:"mb-0",attrs:{label:"学生人数"}},[t._v("40人")])],1)],1),s("ResultList",{ref:"resultList",attrs:{courseId:t.searchname}})],1)])])],1)])},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"relative"}},[s("ShLoading",{attrs:{loading:t.dataloading}}),s("Row",[s("Col",{attrs:{lg:6,md:24,xs:24}},[s("Card",{staticClass:"sh-ghost-card sh-result-card",attrs:{title:"总成绩",bordered:!1,"dis-hover":""}},[s("ResultTotal",{attrs:{value:t.dataInfo.totalScore}})],1)],1),s("Col",{attrs:{lg:18,md:24,xs:24}},[s("Card",{staticClass:"sh-ghost-card sh-result-card",attrs:{title:"成绩分布",bordered:!1,"dis-hover":""}},[s("div",{attrs:{slot:"extra"},slot:"extra"},[t._t("resultform")],2),s("Row",[s("Col",{attrs:{lg:4,md:8,xs:12}},[s("ResultItem",{attrs:{name:"考勤分数",value:t.dataInfo.attendanceScore,color:"#f7b500"}})],1),s("Col",{attrs:{lg:4,md:8,xs:12}},[s("ResultItem",{attrs:{name:"利润分数",value:t.dataInfo.taskScore,color:"#1eccd8"}})],1),s("Col",{attrs:{lg:4,md:8,xs:12}},[s("ResultItem",{attrs:{name:"运营分数",value:t.dataInfo.operatingScore,color:"#00c492"}})],1),s("Col",{attrs:{lg:4,md:8,xs:12}},[s("ResultItem",{attrs:{name:"试卷分数",value:t.dataInfo.examScore,color:"#36c3fc"}})],1),s("Col",{attrs:{lg:4,md:8,xs:12}},[s("ResultItem",{attrs:{name:"作业分数",value:t.dataInfo.homeworkScore,color:"#f99a5b"}})],1),s("Col",{attrs:{lg:4,md:8,xs:12}},[s("ResultItem",{attrs:{name:"其他分数",value:t.dataInfo.otherScore,color:"#5b76f9"}})],1)],1)],1)],1)],1)],1)},l=[],i=s("6abc"),n=(s("24a8"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("chart-liquid",{attrs:{coption:t.chartOption}})}),c=[],u=(s("16ca"),s("c9ae")),d={name:"result-total",props:{value:{type:Number,default:0}},components:{ChartLiquid:u["b"]},data:function(){return{}},computed:{totalValue:function(){return this.value/100},chartOption:function(){var t=this,e={tooltip:{formatter:function(t){var e=t.seriesName,s=t.marker,a=t.value;return"".concat(s," ").concat(e," : ").concat(100*a,"分")}},series:[{name:"总成绩",type:"liquidFill",radius:"85%",center:["50%","50%"],shape:"circle",direction:"right",outline:{borderDistance:8,itemStyle:{opacity:1,color:"#c6e5e5",borderWidth:8,borderColor:"#d8ebea",shadowBlur:0}},itemStyle:{color:"#94ddda",opacity:.7,shadowBlur:10},emphasis:{itemStyle:{opacity:.8}},backgroundStyle:{color:"#f4fbfb"},label:{position:["50%","30%"],formatter:function(t){var e=t.value;return"".concat(Math.round(100*e),"分")},fontSize:40,color:"#2cacb5",insideColor:"#c6edec"},data:[t.totalValue]}]};return e}}},m=d,f=s("5d22"),p=Object(f["a"])(m,n,c,!1,null,"0f2ee472",null),h=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("chart-gauge",{attrs:{coption:t.chartOption}})},b=[],C=(s("1d43"),{name:"result-item",props:{color:{type:String,default:""},name:{type:String,default:""},value:{type:Number,default:0}},components:{ChartGauge:u["a"]},data:function(){return{}},computed:{totalValue:function(){return this.value/100},chartOption:function(){var t=this,e={color:[t.color],series:[{type:"gauge",radius:"90%",startAngle:90,endAngle:-270,pointer:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},axisLine:{lineStyle:{width:14}},title:{fontSize:15,color:"#666666"},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1,itemStyle:{borderWidth:3,borderColor:"#e6ebf8"}},detail:{width:"auto",height:"auto",fontSize:24,color:"#333",formatter:"{value}分"},data:[{value:t.value,name:t.name,title:{offsetCenter:["0%","30%"]},detail:{offsetCenter:["0%","-15%"]}}]}]};return e}}}),g=C,S=Object(f["a"])(g,v,b,!1,null,"84cff0aa",null),_=S.exports,I=s("7736"),R={name:"result-distribution",props:{courseId:{type:[String,Number],default:null}},components:{ResultTotal:h,ResultItem:_},data:function(){return{dataloading:!1,dataInfo:{},dataSourse:[]}},mounted:function(){this.getCourseResultsDistribution()},methods:Object(i["a"])(Object(i["a"])({},Object(I["b"])(["getStudentStoreCourseResultsDistribution"])),{},{getCourseResultsDistribution:function(){var t=this;t.dataloading=!0,t.dataSourse=[],t.getStudentStoreCourseResultsDistribution().then((function(e){t.dataloading=!1,t.dataInfo=e.dataInfo}))}}),watch:{courseId:function(){this.getCourseResultsDistribution()}}},x=R,y=Object(f["a"])(x,o,l,!1,null,"35eed49b",null),w=y.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sh-result-list"},[s("ShLoading",{attrs:{loading:t.dataloading}}),s("Collapse",{attrs:{accordion:"",simple:""},model:{value:t.resultCollapse,callback:function(e){t.resultCollapse=e},expression:"resultCollapse"}},[s("Panel",{attrs:{name:"0"}},[s("div",{staticClass:"sh-result-list-title"},[s("span",{staticClass:"name"},[t._v("实训任务利润分析")])]),s("template",{slot:"content"},[s("ShList",{attrs:{dataSourse:t.dataSourse},scopedSlots:t._u([{key:"renderItem",fn:function(e){var a=e[0];return s("ListItem",{staticClass:"sh-notice-list-item"},[s("div",{staticClass:"stuResultsitem"},[s("div",{staticClass:"content"},[s("div",{staticClass:"info large"},[s("div",{staticClass:"name"},[t._v(t._s(a.resultName))])]),s("div",{staticClass:"desc"},[t._v("提交时间："+t._s(a.resultDate))]),s("div",{staticClass:"other"},[s("div",{staticClass:"progress"},[s("Progress",{staticClass:"prolabel",attrs:{"stroke-color":t.processColor(a.resultValue),percent:a.resultValue,status:"active"}},[s("span",{staticClass:"textlabel",style:{color:t.processColor(a.resultValue)}},[t._v(t._s(a.resultValue)+"分")])])],1)])]),s("div",{staticClass:"actions"},[s("a",[t._v("查看")])])])])}}])})],1)],2),s("Panel",{attrs:{name:"1"}},[s("div",{staticClass:"sh-result-list-title"},[s("span",{staticClass:"name"},[t._v("实训任务利润分析")])]),s("template",{slot:"content"},[s("ShList",{attrs:{dataSourse:t.dataSourse},scopedSlots:t._u([{key:"renderItem",fn:function(e){var a=e[0];return s("ListItem",{staticClass:"sh-notice-list-item"},[s("div",{staticClass:"stuResultsitem"},[s("div",{staticClass:"content"},[s("div",{staticClass:"info large"},[s("div",{staticClass:"name"},[t._v(t._s(a.resultName))])]),s("div",{staticClass:"desc"},[t._v("提交时间："+t._s(a.resultDate))]),s("div",{staticClass:"other"},[s("div",{staticClass:"progress"},[s("Progress",{staticClass:"prolabel",attrs:{"stroke-color":t.processColor(a.resultValue),percent:a.resultValue,status:"active"}},[s("span",{staticClass:"textlabel",style:{color:t.processColor(a.resultValue)}},[t._v(t._s(a.resultValue)+"分")])])],1)])]),s("div",{staticClass:"actions"},[s("a",[t._v("查看")])])])])}}])})],1)],2)],1)],1)},L=[],O={name:"result-list",props:{courseId:{type:[String,Number],default:null}},components:{},data:function(){return{resultCollapse:"0",dataloading:!1,dataSourse:[]}},computed:{processColor:function(){return function(t){var e="";switch(!0){case t<=20:e="#d95c5c";break;case t<=30:e="#efbc72";break;case t<=50:e="#e6bb48";break;case t<=60:e="#ddc928";break;case t<=80:e="#b4d95c";break;case t<=100:e="#66da81";break;default:}return[e,e]}}},created:function(){this.getCourseResultsList()},methods:Object(i["a"])(Object(i["a"])({},Object(I["b"])(["getStudentStoreCourseResultsList"])),{},{getCourseResultsList:function(){var t=this;t.dataSourse=[],t.dataloading=!0,t.getStudentStoreCourseResultsList().then((function(e){t.dataloading=!1,t.dataSourse=e.dataList}))}}),watch:{courseId:function(){this.getCourseResultsList()}}},j=O,V=(s("a71c"),Object(f["a"])(j,k,L,!1,null,null,null)),D=V.exports,N={name:"result-index",components:{ResultDistribution:w,ResultList:D},data:function(){return{searchname:null}},computed:{},mounted:function(){},methods:{}},E=N,$=Object(f["a"])(E,a,r,!1,null,null,null);e["default"]=$.exports},a71c:function(t,e,s){"use strict";s("47dd")}}]);