(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/h5-header/h5-header"],{6041:function(e,n,o){"use strict";var t;o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return t}));var a=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.changePswDialog=!1})},r=[]},"8d20":function(e,n,o){},"925a":function(e,n,o){"use strict";var t=o("8d20"),a=o.n(t);a.a},a9b9:function(e,n,o){"use strict";o.r(n);var t=o("6041"),a=o("b7ef");for(var r in a)"default"!==r&&function(e){o.d(n,e,(function(){return a[e]}))}(r);o("925a");var i,s=o("f0c5"),c=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"233bec7b",null,!1,t["a"],i);n["default"]=c.exports},a9e2:function(e,n,o){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"H5Header",data:function(){return{changePswDialog:!1,nickName:"",avatarUrl:"",wxName:"",form:{oldPsw:"",newPsw:"",newPswConfirm:"",tickMessage:""},formLabelWidth:"120px"}},mounted:function(){var n=e.getStorageSync("user_info");this.nickName=n.nickname,this.avatarUrl=n.avatarUrl,this.wxName=n.wxname},methods:{changePswCommit:function(){var n=this;console.log("修改密码提交"),this.form.newPsw===this.form.newPswConfirm?(console.log("调用修改接口"),o.callFunction({name:"user-center",data:{action:"updatePwd",params:{oldPassword:this.form.oldPsw,newPassword:this.form.newPsw}},success:function(o){console.log("res",o),0==o.result.code?(console.log("更新成功"),e.removeStorageSync("uni_id_token"),e.removeStorageSync("uni_id_token_expired"),e.removeStorageSync("user_role"),e.removeStorageSync("user_nickname"),n.changePswDialog=!1,n.$notify({title:"修改成功",duration:2e3,type:"success",position:"bottom-right"}),setTimeout((function(){e.navigateTo({url:"/pages/login/login"})}),1e3)):(n.$notify({title:"错误",duration:2e3,type:"error",message:o.result.message,position:"bottom-right"}),console.log(o.result.message))},fail:function(e){console.log(e),this.$notify({title:"错误",duration:2e3,type:"error",message:e,position:"bottom-right"})}})):this.form.tickMessage="两次输入的密码不一致"},backClick:function(){e.navigateBack({})},handleCommand:function(n){console.log(n),"changePsw"===n&&(this.changePswDialog=!0,this.form={oldPsw:"",newPsw:"",newPswConfirm:"",tickMessage:""}),"logout"===n&&o.callFunction({name:"user-center",data:{action:"logout"},success:function(n){e.removeStorageSync("uni_id_token"),e.removeStorageSync("uni_id_token_expired"),e.removeStorageSync("user_role"),e.removeStorageSync("user_nickname"),e.removeStorageSync("user_info"),e.removeStorageSync("userProfile"),e.reLaunch({url:"/pages/login/login"})}})}}};n.default=t}).call(this,o("543d")["default"],o("a9ff")["default"])},b7ef:function(e,n,o){"use strict";o.r(n);var t=o("a9e2"),a=o.n(t);for(var r in t)"default"!==r&&function(e){o.d(n,e,(function(){return t[e]}))}(r);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/h5-header/h5-header-create-component',
    {
        'components/common/h5-header/h5-header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a9b9"))
        })
    },
    [['components/common/h5-header/h5-header-create-component']]
]);
