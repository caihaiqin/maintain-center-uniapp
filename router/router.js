import {RouterMount,createRouter} from 'uni-simple-router';
// #ifdef H5
import * as Sentry from "@sentry/vue";
// #endif
// #ifdef MP-WEIXIN
import * as Sentry from "common/js/sentry/sentry-miniapp.wx.min.js"
// #endif
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...ROUTES,
	{
			  path: '*',
			  redirect:(to)=>{
				  return {name:'404'}
			  }
			},
			],
	
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log('全局路由前置守卫to',to)
	console.log('全局路由前置守卫from',from)
	
		if(to.path === '/pages/login/login'){
			next()
		}else{
			if(!uni.getStorageSync('uni_id_token') || new Date().getTime() > uni.getStorageSync('uni_id_token_expired')){
				
				next({path:'/pages/login/login'})
			}else{
				//统计PV
				console.log('统计PV')
				const {page,visitStartTime} = uni.getStorageSync('pv')
				console.log('page',page)
				console.log('visitStartTime',visitStartTime)
				const visitTime = (new Date().getTime() - visitStartTime)/1000 + 's'
				console.log('visitTime',visitTime)
				
				Sentry.configureScope((scope) => {
					scope.setExtra("type", 'pv');
					scope.setExtra("path", from);
					scope.setExtra("visitTime", visitTime);
					scope.setTag("type", "pv");
					scope.setUser(uni.getStorageSync('user_info'));
				
				});
				Sentry.captureMessage(`pv-${from.path}`)
				
				next()
			}
		}
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束to',to)
    console.log('跳转结束from',from)
		const visitStartTime = new Date().getTime()
		uni.setStorageSync('pv',{page:to.path,visitStartTime})
})

export {
	router,
	RouterMount
}