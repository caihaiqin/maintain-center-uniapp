import request from './request.js'

	
const getPollingInfoByDate =(date)=>{
	const options = {url:`/polling/${date}`}
	
	return request(options)
}
const getPollingInfoByArea =(area)=>{
	const options = {url:`/polling/area/${area}`}
	
	return request(options)
}
const getPollingImgById = (pollingId)=>{
	const options = {url:`/polling/${pollingId}/image`}
	return request(options)
}
export {getPollingInfoByDate,getPollingInfoByArea,getPollingImgById}