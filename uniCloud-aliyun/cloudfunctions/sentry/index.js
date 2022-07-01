'use strict';
const db = uniCloud.database();
// 获取 `user` 集合的引用
const collection = db.collection('pv');
exports.main = async (e, context) => {
	//event为客户端上传的参数
	console.log('e : ', e)
	let params = e.params || {}
	const {event,url} = params
	delete event.user.token
	const addDocumentRes = await collection.add(event)
 const sentryRes =await	uniCloud.httpclient.request(url,{
		method:'POST',
		data:JSON.stringify(event)
	})
	//返回数据给客户端
	return {dbRes:addDocumentRes,sentryRes}
};
