(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/content/equipments/add-equipment/add-equipment"],{"0c43":function(e,n,t){"use strict";t.r(n);var i=t("c3db"),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},3422:function(e,n,t){},"4d2f":function(e,n,t){"use strict";t.r(n);var i=t("8d27"),a=t("0c43");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("e230");var r,s=t("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"805b92dc",null,!1,i["a"],r);n["default"]=d.exports},"8d27":function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}));var a=function(){var e=this,n=e.$createElement;e._self._c},o=[]},"9d87":function(e,n,t){"use strict";(function(e){t("2249");i(t("66fd"));var n=i(t("4d2f"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},c3db:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"AddEquipment",props:{areaInfo:{type:Array}},data:function(){return{departmentIndex:0,machineRoomIndex:0,typeIndex:0,equipmentType:["网络","服务器"],departmentInfo:["IDC部","网络部","云平台部","大数据部","综合部"],fields:[["cabinet","机柜"],["name","设备名称"],["model","设备型号"],["grade","设备等级"],["manage_ip","管理地址"],["versions","软件版本"]],equipmentInfo:{department:"",system:"",address:"",machine_room:"",cabinet:"",name:"",model:"",type:"",grade:"1",manage_ip:"",versions:""}}},methods:{departmentIndexPickerChange:function(e){console.log("picker发送选择改变，携带值为",e.target.value),this.departmentIndex=e.target.value,this.equipmentInfo.department=this.departmentInfo[this.departmentIndex]},typeIndexPickerChange:function(e){console.log("picker发送选择改变，携带值为",e.target.value),this.typeIndex=e.target.value,this.equipmentInfo.type=this.equipmentType[this.typeIndex]},machineRoomIndexPickerChange:function(e){console.log("picker发送选择改变，携带值为",e.target.value),this.machineRoomIndex=e.target.value,this.equipmentInfo.machine_room=this.areaInfo[this.machineRoomIndex].room_name,this.equipmentInfo.system=this.areaInfo[this.machineRoomIndex].location,this.equipmentInfo.address=this.areaInfo[this.machineRoomIndex].address},addEquipmentClick:function(){console.log(this.equipmentInfo),this.equipmentInfo.department||(this.equipmentInfo.department=this.departmentInfo[this.departmentIndex]),this.equipmentInfo.machine_room||(this.equipmentInfo.machine_room=this.areaInfo[this.machineRoomIndex].room_name,this.equipmentInfo.system=this.areaInfo[this.machineRoomIndex].location,this.equipmentInfo.address=this.areaInfo[this.machineRoomIndex].address),this.equipmentInfo.type||(this.equipmentInfo.type=this.equipmentType[this.typeIndex]),this.$emit("addEquipmentClick",this.equipmentInfo)},reback:function(){e.navigateBack({})}}};n.default=t}).call(this,t("543d")["default"])},e230:function(e,n,t){"use strict";var i=t("3422"),a=t.n(i);a.a}},[[14,"common/runtime","common/vendor"]]]);