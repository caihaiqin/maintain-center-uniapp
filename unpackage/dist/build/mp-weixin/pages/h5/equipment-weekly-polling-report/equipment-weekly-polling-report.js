(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/h5/equipment-weekly-polling-report/equipment-weekly-polling-report"],{"04c3":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},a=[]},b0a1:function(e,t,n){"use strict";n.r(t);var r=n("04c3"),o=n("cf87");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var u,i=n("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);t["default"]=c.exports},cf87:function(e,t,n){"use strict";n.r(t);var r=n("ee8a"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},ea72:function(e,t,n){"use strict";(function(e){n("2249");r(n("66fd"));var t=r(n("b0a1"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},ee8a:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a")),o=n("0525f"),a=n("3f0a"),u=n("4d6b");n("ed3f");function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return d(e)||s(e)||f(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return p(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){m(a,r,o,u,i,"next",e)}function i(e){m(a,r,o,u,i,"throw",e)}u(void 0)}))}}var h=function(){n.e("components/common/h5-header/h5-header").then(function(){return resolve(n("a9b9"))}.bind(null,n)).catch(n.oe)},g={components:{H5Header:h},data:function(){return{list:[],pdfUrl:""}},onLoad:function(){var t=v(r.default.mark((function t(n){var i,l,f,s,d,p=this;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("coverInfo"),console.log("coverInfo",i),e.showLoading({title:"正在生成PDF"}),t.next=5,(0,u.getEquipmentAndPollingList)(i.department,i.beginDate,i.endDate);case 5:return l=t.sent,console.log("faultList",l.result.data),f=[],s=1,t.next=11,(0,a.getEquipmentInfoByDep)(i.department,1);case 11:d=t.sent;case 12:if(!(d.result.data.length>0)){t.next=21;break}return s++,console.log("page",s),f=[].concat(c(f),c(d.result.data)),t.next=18,(0,a.getEquipmentInfoByDep)(i.department,s);case 18:d=t.sent,t.next=12;break;case 21:console.log("equipmentList",f),(0,o.getPollingReport)(n.reportType,f,i,l.result.data).then((function(t){t.err?e.showToast({title:t.message,icon:"none",duration:2e3}):(p.pdfUrl="http://81.68.227.246:8000/pdf/index.pdf",e.hideLoading())}));case 23:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{}};t.default=g}).call(this,n("543d")["default"])}},[[15,"common/runtime","common/vendor"]]]);