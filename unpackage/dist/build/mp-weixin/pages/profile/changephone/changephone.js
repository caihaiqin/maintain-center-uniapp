(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/changephone/changephone"],{"09aa":function(n,e,t){},"61cf":function(n,e,t){"use strict";var o=t("09aa"),c=t.n(o);c.a},6889:function(n,e,t){"use strict";(function(n){t("2249");o(t("66fd"));var e=o(t("8789"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},7508:function(n,e,t){"use strict";t.r(e);var o=t("fec5"),c=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=c.a},8789:function(n,e,t){"use strict";t.r(e);var o=t("d1b7"),c=t("7508");for(var i in c)"default"!==i&&function(n){t.d(e,n,(function(){return c[n]}))}(i);t("61cf");var u,a=t("f0c5"),r=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,"9b4398a6",null,!1,o["a"],u);e["default"]=r.exports},d1b7:function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var c=function(){var n=this,e=n.$createElement;n._self._c},i=[]},fec5:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("f252"),c={data:function(){return{newPhone:""}},methods:{isMobile:function(n){return/^1[3-9]\d{9}$/.test(n)},changePhone:function(){if(0!=this.newPhone.length)if(this.isMobile(this.newPhone)){var e=n.getStorageSync("user_info");(0,o.bindUserPhone)(e.username,this.newPhone).then((function(e){console.log(e),1==e.result.updated&&n.showToast({title:"修改绑定成功",icon:"none"}),0==e.result.updated&&n.showToast({title:"新旧手机号相同",icon:"none"})})).catch((function(e){console.log(e),n.showToast({title:"修改绑定失败",icon:"none"})}))}else n.showToast({title:"请输入正确手机号",icon:"none"});else n.showToast({title:"请输入手机号",icon:"none"})}}};e.default=c}).call(this,t("543d")["default"])}},[["6889","common/runtime","common/vendor"]]]);