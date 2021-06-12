'use strict';
exports.main = async (e, context) => {
	//event为客户端上传的参数
	console.log('e : ', e)
	let params = e.params || {}
	const {event,url} = params
 const res =await	uniCloud.httpclient.request(url,{
		method:'POST',
		data:JSON.stringify(event)
	})
	//返回数据给客户端
	return res
};
