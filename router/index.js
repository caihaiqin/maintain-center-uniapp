// router/index.js

import modules from './modules'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'
// #ifdef H5
import * as Sentry from "@sentry/vue";
// #endif
// #ifdef MP-WEIXIN
import * as Sentry from "common/js/sentry/sentry-miniapp.wx.min.js"
// #endif
Vue.use(Router)
//初始化
const router = new Router({
    routes: [...modules],//路由表,
		
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log('全局路由前置守卫',to,from)
	if(to.name === 'login'){
		next()
	}else{
		if(!uni.getStorageSync('uni_id_token') || new Date().getTime() > uni.getStorageSync('uni_id_token_expired')){
			router.replace('/pages/index/index')
		}else{
			//统计PV
			console.log('统计PV')
			Sentry.configureScope((scope) => {
				scope.setExtra("type", 'pv');
				scope.setExtra("path", to);
				scope.setTag("type", "pv");
				scope.setUser(uni.getStorageSync('user_info'));
			
			});
			Sentry.captureMessage(`pv-${to.path}`)
			
			next()
		}
	}
	
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('全局路由后置守卫')
})
export default router;