(window["webpackJsonp_main-sub1"]=window["webpackJsonp_main-sub1"]||[]).push([["about"],{"0b09":function(e,t,r){"use strict";r("5c21")},"5c21":function(e,t,r){},f820:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("qb-main-container-first",[r("div",{staticStyle:{padding:"6px"}},[r("qb-table-handler",{attrs:{actions:e.actions},on:{"btn-click":e.btnClick}}),r("qb-collapse-table",{attrs:{"is-fold":!0,"is-active":!0,title:"基础信息"}},[r("qb-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("qb-form-item",{attrs:{label:"活动名称",prop:"name"}},[r("qb-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("qb-form-item",{attrs:{label:"活动区域",prop:"region"}},[r("qb-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(t){e.$set(e.ruleForm,"region",t)},expression:"ruleForm.region"}},[r("qb-option",{attrs:{label:"区域一",value:"shanghai"}}),r("qb-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),r("qb-form-item",{attrs:{label:"活动时间",required:""}},[r("qb-col",{attrs:{span:11}},[r("qb-form-item",{attrs:{prop:"date1"}},[r("qb-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(t){e.$set(e.ruleForm,"date1",t)},expression:"ruleForm.date1"}})],1)],1),r("qb-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),r("qb-col",{attrs:{span:11}},[r("qb-form-item",{attrs:{prop:"date2"}},[r("qb-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(t){e.$set(e.ruleForm,"date2",t)},expression:"ruleForm.date2"}})],1)],1)],1),r("qb-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[r("qb-switch",{model:{value:e.ruleForm.delivery,callback:function(t){e.$set(e.ruleForm,"delivery",t)},expression:"ruleForm.delivery"}})],1),r("qb-form-item",{attrs:{label:"活动性质",prop:"type"}},[r("qb-checkbox-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[r("qb-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),r("qb-checkbox",{attrs:{label:"地推活动",name:"type"}}),r("qb-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),r("qb-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),r("qb-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[r("qb-radio-group",{attrs:{type:"radio"},model:{value:e.ruleForm.resource,callback:function(t){e.$set(e.ruleForm,"resource",t)},expression:"ruleForm.resource"}},[r("qb-radio-item",{attrs:{label:"henry"}},[e._v("亨利")]),r("qb-radio-item",{attrs:{label:"wendy"}},[e._v("文迪")])],1)],1),r("qb-form-item",{attrs:{label:"活动形式",prop:"desc"}},[r("qb-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1)],1)],1),r("qb-collapse-table",{attrs:{"is-fold":!0,"is-active":!0,title:"修改信息"}},[r("qb-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{inline:"",model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("qb-form-item",{attrs:{label:"活动名称",prop:"name"}},[r("qb-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),r("qb-form-item",{attrs:{label:"活动区域",prop:"region"}},[r("qb-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(t){e.$set(e.ruleForm,"region",t)},expression:"ruleForm.region"}},[r("qb-option",{attrs:{label:"区域一",value:"shanghai"}}),r("qb-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),r("qb-form-item",{attrs:{label:"活动时间",required:""}},[r("qb-col",{attrs:{span:11}},[r("qb-form-item",{attrs:{prop:"date1"}},[r("qb-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(t){e.$set(e.ruleForm,"date1",t)},expression:"ruleForm.date1"}})],1)],1),r("qb-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),r("qb-col",{attrs:{span:11}},[r("qb-form-item",{attrs:{prop:"date2"}},[r("qb-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(t){e.$set(e.ruleForm,"date2",t)},expression:"ruleForm.date2"}})],1)],1)],1)],1),r("qb-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("qb-tab-pane",{attrs:{label:"商品明细",name:"first"}},[r("div",[r("qb-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"date"}},[r("qb-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),r("qb-table-column",{attrs:{prop:"name",align:"center",label:"姓名","min-width":"300"}}),r("qb-table-column",{attrs:{prop:"address",label:"地址","min-width":"500"}}),r("qb-table-column",{attrs:{fixed:"right",label:"操作",width:"100"}})],1)],1)]),r("qb-tab-pane",{attrs:{label:"附件",name:"second"}},[r("div",[e._v("附件")])])],1)],1)],1)])],1)},l=[],s={data:function(){return{activeName:"first",actions:[{text:"保存",key:"save"},{text:"审核",key:"audit"},{text:"取消",type:"info",key:"cancel"}],tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-06",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{btnClick:function(e){var t=e.key;"save"===t&&this.$message.success("保存成功"),this.$closeNavTab(this.$route.path,{path:"/"})},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},o=s,i=(r("0b09"),r("2be6")),n=Object(i["a"])(o,a,l,!1,null,"7ee9e844",null);t["default"]=n.exports}}]);
//# sourceMappingURL=about.ecc33386.js.map