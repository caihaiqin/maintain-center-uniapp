(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-profile-profile"],{"66d6":function(e,t,i){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{avatarUrl:"",wxName:"",nickName:"",orderStatusList:[{name:"",icon:"iconfont icon31daifukuan",status:10},{name:"",icon:"iconfont icon31daifahuo",status:30},{name:"",icon:"iconfont icon31daishouhuo",status:40},{name:"",icon:"iconfont icon31daipingjia",status:50},{name:"",icon:"iconfont icon31yiguanzhudianpu",status:55}],serverList:[{title:"修改密码",icon:"/static/img/user/icon-kefu.png",path:"/pages/profile/changepsw/changepsw"},{title:"更改绑定手机",icon:"/static/img/user/icon-about.png",path:"/pages/profile/changephone/changephone"}]}},methods:{cellClick:function(t){e.log(t),uni.navigateTo({url:this.serverList[t].path})},lgout:function(){i.callFunction({name:"user-center",data:{action:"logout"},success:function(e){uni.removeStorageSync("uni_id_token"),uni.removeStorageSync("uni_id_token_expired"),uni.removeStorageSync("user_role"),uni.removeStorageSync("user_nickname"),uni.removeStorageSync("user_info"),uni.removeStorageSync("userProfile"),uni.reLaunch({url:"/pages/login/login"})}})}},onShow:function(){this.nickName=uni.getStorageSync("user_nickname");var t=uni.getStorageSync("userProfile");t&&(this.avatarUrl=t.avatarUrl,this.wxName=t.nickName),uni.login({provider:"weixin",success:function(t){e.log(t)}})}};t.default=a}).call(this,i("5a52")["default"],i("a9ff")["default"])},"6fcd":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"user"},[i("v-uni-view",{staticClass:"user-wrap"},[i("v-uni-view",{staticClass:"setting iconfont icon31shezhi"}),i("v-uni-view",{staticClass:"info"},[i("v-uni-image",{staticClass:"avatar",attrs:{mode:"aspectFill",src:e.avatarUrl}}),i("v-uni-view",{staticClass:"wxname"},[e._v(e._s(e.wxName))]),i("v-uni-view",{staticClass:"nickname"},[e._v(e._s(e.nickName))])],1)],1),i("v-uni-view",{staticClass:"order-status"},[i("v-uni-view",{staticClass:"status-wrap"},[i("v-uni-view",{staticClass:"cell"},[i("v-uni-view",{staticClass:"cell-left"}),i("v-uni-view",{staticClass:"iconfont iconmore1"})],1)],1)],1),i("v-uni-view",{staticClass:"com-item"},[i("v-uni-view",{staticClass:"com-wrap"},e._l(e.serverList,(function(t,a){return i("v-uni-view",{key:t.title,staticClass:"cell",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cellClick(a)}}},[i("v-uni-view",{staticClass:"cell-left"},[i("v-uni-image",{staticClass:"cell-icon",attrs:{src:t.icon,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"cell-text"},[e._v(e._s(t.title))])],1),i("v-uni-view",{staticClass:"iconfont iconmore1"})],1)})),1)],1),i("v-uni-button",{staticClass:"lgout",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lgout.apply(void 0,arguments)}}},[e._v("退出登录")])],1)},s=[]},"77fd0":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-26ca9113]{background:#f2f2f2}.user .user-wrap[data-v-26ca9113]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:50vw;padding:%?30?%;z-index:9;border-radius:0 0 20% 20%;background:#32b4ea;background-size:cover}.user .user-wrap .setting[data-v-26ca9113]{color:#fff;position:absolute;top:%?60?%;left:%?60?%;font-size:%?50?%}.user .user-wrap .info[data-v-26ca9113]{position:absolute;text-align:center}.user .user-wrap .info .avatar[data-v-26ca9113]{width:%?150?%;height:%?150?%;border-radius:50%}.user .user-wrap .info .wxname[data-v-26ca9113],\n.user .user-wrap .info .nickname[data-v-26ca9113]{color:#fff;font-size:%?28?%}.user .order-status[data-v-26ca9113]{padding:0 %?20?%;margin-top:-10vw}.user .order-status .status-wrap[data-v-26ca9113]{border-radius:%?25?%;overflow:hidden}.user .order-status .status-wrap .status-list[data-v-26ca9113]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;padding-top:%?30?%;padding-bottom:%?30?%}.user .order-status .status-wrap .status-list .status-item[data-v-26ca9113]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user .order-status .status-wrap .status-list .status-item .item-icon[data-v-26ca9113]{line-height:1;font-size:%?65?%;color:#bbb}.user .order-status .status-wrap .status-list .status-item .item-text[data-v-26ca9113]{font-size:%?28?%;color:#666;margin-top:%?5?%}.user .com-item[data-v-26ca9113]{padding-left:%?20?%;padding-right:%?20?%;margin-top:%?20?%}.user .com-item .com-wrap[data-v-26ca9113]{border-radius:%?25?%;overflow:hidden}.user .cell[data-v-26ca9113]{height:%?80?%;padding-left:%?20?%;padding-right:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border-bottom:1px solid #f8f8f8}.user .cell[data-v-26ca9113]:active{background:#f2f2f2}.user .cell[data-v-26ca9113]:last-child{border-bottom:none!important}.user .cell .cell-left[data-v-26ca9113]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user .cell .cell-left .cell-icon[data-v-26ca9113]{width:%?50?%;height:%?50?%}.user .cell .cell-left .cell-text[data-v-26ca9113]{color:#666;font-size:%?28?%;margin-left:%?20?%}.user .cell .iconfont[data-v-26ca9113]{font-size:%?40?%;color:#999}.user .cell[data-v-26ca9113]{height:%?80?%;padding-left:%?20?%;padding-right:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border-bottom:1px solid #f8f8f8}.user .cell[data-v-26ca9113]:active{background:#f2f2f2}.user .cell[data-v-26ca9113]:last-child{border-bottom:none!important}.user .cell .cell-left[data-v-26ca9113]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user .cell .cell-left .cell-icon[data-v-26ca9113]{width:%?50?%;height:%?50?%}.user .cell .cell-left .cell-text[data-v-26ca9113]{color:#666;font-size:%?28?%;margin-left:%?20?%}.user .cell .iconfont[data-v-26ca9113]{font-size:%?40?%;color:#999}.user .lgout[data-v-26ca9113]{position:relative;bottom:%?-140?%;width:80%;height:%?80?%;line-height:%?80?%;color:#fff;border-radius:%?40?%;background-color:#32b4ea}body.?%PAGE?%[data-v-26ca9113]{background:#f2f2f2}",""]),e.exports=t},"7a42":function(e,t,i){"use strict";var a=i("b03b"),n=i.n(a);n.a},9027:function(e,t,i){"use strict";i.r(t);var a=i("6fcd"),n=i("9688");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("7a42");var c,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"26ca9113",null,!1,a["a"],c);t["default"]=r.exports},9688:function(e,t,i){"use strict";i.r(t);var a=i("66d6"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},b03b:function(e,t,i){var a=i("77fd0");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("073cace3",a,!0,{sourceMap:!1,shadowMode:!1})}}]);