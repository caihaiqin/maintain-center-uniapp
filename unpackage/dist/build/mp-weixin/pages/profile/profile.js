(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/profile"],{"0fcf":function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{avatarUrl:"",wxName:"",nickName:"",orderStatusList:[{name:"",icon:"iconfont icon31daifukuan",status:10},{name:"",icon:"iconfont icon31daifahuo",status:30},{name:"",icon:"iconfont icon31daishouhuo",status:40},{name:"",icon:"iconfont icon31daipingjia",status:50},{name:"",icon:"iconfont icon31yiguanzhudianpu",status:55}],serverList:[{title:"修改密码",icon:"/static/img/user/icon-kefu.png",path:"/pages/profile/changepsw/changepsw"},{title:"更改绑定手机",icon:"/static/img/user/icon-about.png",path:"/pages/profile/changephone/changephone"}]}},methods:{cellClick:function(e){console.log(e),n.navigateTo({url:this.serverList[e].path})},lgout:function(){t.callFunction({name:"user-center",data:{action:"logout"},success:function(e){n.removeStorageSync("uni_id_token"),n.removeStorageSync("uni_id_token_expired"),n.removeStorageSync("user_role"),n.removeStorageSync("user_nickname"),n.removeStorageSync("user_info"),n.removeStorageSync("userProfile"),n.reLaunch({url:"/pages/login/login"})}})}},onShow:function(){this.nickName=n.getStorageSync("user_nickname");var e=n.getStorageSync("userProfile");e&&(this.avatarUrl=e.avatarUrl,this.wxName=e.nickName),n.login({provider:"weixin",success:function(n){console.log(n)}})}};e.default=o}).call(this,t("543d")["default"],t("a9ff")["default"])},"4a5d":function(n,e,t){},6117:function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"849a":function(n,e,t){"use strict";(function(n){t("2249");o(t("66fd"));var e=o(t("9027"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},9027:function(n,e,t){"use strict";t.r(e);var o=t("6117"),a=t("9688");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("ee02");var c,r=t("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"2ea21eb7",null,!1,o["a"],c);e["default"]=u.exports},9688:function(n,e,t){"use strict";t.r(e);var o=t("0fcf"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a},ee02:function(n,e,t){"use strict";var o=t("4a5d"),a=t.n(o);a.a}},[[3,"common/runtime","common/vendor"]]]);