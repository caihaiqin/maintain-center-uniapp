import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import {
	RouterMount
} from 'uni-simple-router'
//浏览器sentry监控
// #ifdef H5
import * as Sentry from "@sentry/vue";
import {
	Integrations
} from "@sentry/tracing";
import {
	eventToSentryRequest
} from "@sentry/core"

// 挂载sentry到vue
Vue.prototype.$sentry = Sentry

class TranspondTransport extends Sentry.Transports.BaseTransport {
	sendEvent(event) {
		// debugger
		console.log(
			`This is the place where you'd implement your own sending logic. It'd get url: ${this.url} and an event itself:`,
			event, this._api
		);
		// const sentryRequest = eventToSentryRequest(event,this._api)
		
		
		uni.request({
			method: 'post',
			url: 'http://localhost:8000/test',
			data: {
				event: event,
				url: this.url,
				api: this._api
			}
		})

		return Promise.resolve({
			status: 'success',
		});
	}
}


Sentry.init({
	Vue,
	dsn: "https://2444cc2c5f174b1989abd712959e4b63@o763185.ingest.sentry.io/5798199",

	environment: 'development',
	release: "maintenance@1.3.0",
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	// transport: TranspondTransport,

	integrations: [new Integrations.BrowserTracing()],
	tracesSampleRate: 1.0,
	tracingOptions: {
		trackComponents: true,
	},
	autoSessionTracking: true,
	attachStacktrace: true,

	enabled: true,
});

// #endif


//小程序sentry
// #ifdef MP-WEIXIN
import * as Sentry from "common/js/sentry/sentry-miniapp.wx.min.js"
// 挂载sentry到vue
Vue.prototype.$sentry = Sentry

class TranspondTransport extends Sentry.Transports.BaseTransport {
	async sendEvent(event) {
		// debugger
		console.log(
			`This is the place where you'd implement your own sending logic. It'd get url: ${this.url} and an event itself:`,
			event
		);
			
	
		// const sentryRequest = eventToSentryRequest(event,this._api)
		// console.log('getEnvelopeEndpointWithUrlEncodedAuth', this._api.getEnvelopeEndpointWithUrlEncodedAuth())
		// console.log('getStoreEndpointWithUrlEncodedAuth', this._api.getStoreEndpointWithUrlEncodedAuth())
		// console.log(this.url === this._api.getStoreEndpointWithUrlEncodedAuth())
	const res = await	uniCloud.callFunction({
			name:'sentry',
				
			data:{
				params:{
					event:event,
					url:this.url
				}
			}
		})
		console.log(res)
		
		return Promise.resolve({
			status: 'success',
		});
	}
}

Sentry.init({
	Vue,
	dsn: "https://6de29ea5575d43d799c56ac78c6c6094@o763185.ingest.sentry.io/5802738",
	environment: 'development',
	release: "maintenance-wxapp@1.3.0",
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	// integrations: [new Breadcrumbs()],
	transport: TranspondTransport,
	tracesSampleRate: 1.0,
	tracingOptions: {
		trackComponents: true,
	},
	autoSessionTracking: true,
	attachStacktrace: true,

	enabled: true,
});

// #endif



// //frontjs测试
// import tracker from './utils/frontjs.mp.min.js'
// tracker({token:"27e8114d34853b6392d2bc88015954d5",behaviour:15,captureConsoleLog:true})


//fundebug测试
// const fundebug = require("fundebug-wxjs");
// fundebug.init(
// {
//     apikey : 'fb22ea919b4795c5b716d0aa9e81310ec006ee9e319b7a8471d4ef4c91779e91'
// })

// #ifdef H5

import ElementUI from 'element-ui'
// 设置，项目中所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。
Vue.prototype.$ELEMENT = {
	size: 'small',
	zIndex: 3000
};
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
// #endif



Vue.config.productionTip = false
Vue.prototype.$store = store
// Vue.prototype.fundebug = fundebug




App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
// app.$mount()

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, '#app');
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
