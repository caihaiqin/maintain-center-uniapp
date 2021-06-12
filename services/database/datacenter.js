const db = uniCloud.database()
const collection = db.collection('pollings')
			
const getPollingInfoByDate =(date)=>{
	
	return collection.where({polling_date:date}).get()
}
const getPollingInfo =(page)=>{
	
	return collection
	.skip(10*page) // 跳过前page*10条
	.limit(10) // 获取10条
	.orderBy('_id','desc')
	.get()
}
const getPollingInfoByArea =(area)=>{

	return collection.where({machinery_room:area}).get()
}
const getPollingImgById = (pollingId)=>{
	const options = {url:`/polling/${pollingId}/image`}
	return request(options)
}
export {getPollingInfoByDate,getPollingInfoByArea,getPollingImgById,getPollingInfo}