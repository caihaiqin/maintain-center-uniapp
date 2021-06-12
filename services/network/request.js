import {BASE_URL} from './config.js'

export default function(options){
  return new Promise((resolve,reject)=>{
		console.log("请求数据",BASE_URL+options.url)
    uni.request({
      url: BASE_URL+options.url,
      method:options.method || "GET",
      data:options.data || {},
      success:resolve,
      fail:reject,
    })
  })
}