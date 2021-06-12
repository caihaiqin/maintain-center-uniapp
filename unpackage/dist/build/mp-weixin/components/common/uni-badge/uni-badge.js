(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/uni-badge/uni-badge"],{"12cf":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}));var c=function(){var t=this,n=t.$createElement;t._self._c},a=[]},3914:function(t,n,e){"use strict";var u=e("5cc0"),c=e.n(u);c.a},4364:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};n.default=u},"5cc0":function(t,n,e){},"60d6":function(t,n,e){"use strict";e.r(n);var u=e("12cf"),c=e("6a75");for(var a in c)"default"!==a&&function(t){e.d(n,t,(function(){return c[t]}))}(a);e("3914");var i,r=e("f0c5"),o=Object(r["a"])(c["default"],u["b"],u["c"],!1,null,"b743d15c",null,!1,u["a"],i);n["default"]=o.exports},"6a75":function(t,n,e){"use strict";e.r(n);var u=e("4364"),c=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/uni-badge/uni-badge-create-component',
    {
        'components/common/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("60d6"))
        })
    },
    [['components/common/uni-badge/uni-badge-create-component']]
]);
