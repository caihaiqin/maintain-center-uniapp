(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/uni-combox/uni-combox"],{"0a38":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"4c99":function(t,n,e){"use strict";var i=e("6d0f"),o=e.n(i);o.a},"6d0f":function(t,n,e){},"6f04":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){Promise.all([e.e("common/vendor"),e.e("components/common/uni-icons/uni-icons")]).then(function(){return resolve(e("32c3"))}.bind(null,e)).catch(e.oe)},o={name:"uniCombox",components:{uniIcons:i},props:{label:{type:String,default:""},labelWidth:{type:String,default:"auto"},placeholder:{type:String,default:""},candidates:{type:Array,default:function(){return[]}},emptyTips:{type:String,default:"无匹配项"},value:{type:String,default:""}},data:function(){return{showSelector:!1,inputVal:""}},computed:{labelStyle:function(){return"auto"===this.labelWidth?{}:{width:this.labelWidth}},filterCandidates:function(){var t=this;return this.candidates.filter((function(n){return n.indexOf(t.inputVal)>-1}))},filterCandidatesLength:function(){return this.filterCandidates.length}},watch:{value:{handler:function(t){this.inputVal=t},immediate:!0}},methods:{toggleSelector:function(){this.showSelector=!this.showSelector},onFocus:function(){this.showSelector=!0},onBlur:function(){var t=this;setTimeout((function(){t.showSelector=!1}),50)},onSelectorClick:function(t){this.inputVal=this.filterCandidates[t],this.showSelector=!1,this.$emit("input",this.inputVal)},onInput:function(){var t=this;setTimeout((function(){t.$emit("input",t.inputVal)}))}}};n.default=o},9289:function(t,n,e){"use strict";e.r(n);var i=e("6f04"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},"9b36":function(t,n,e){"use strict";e.r(n);var i=e("0a38"),o=e("9289");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("4c99");var a,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"a37f74e4",null,!1,i["a"],a);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/uni-combox/uni-combox-create-component',
    {
        'components/common/uni-combox/uni-combox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9b36"))
        })
    },
    [['components/common/uni-combox/uni-combox-create-component']]
]);