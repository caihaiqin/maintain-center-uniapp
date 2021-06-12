import request from './request.js'

	
const getEquipments = (area)=>{
	const options = {url:`/equipment/${area}`}
	
	return request(options)
}
const getAreaByGroup = (group)=>{
	const options = {url:`/area/${group}`}
	
	return request(options)
}
export {getEquipments,getAreaByGroup}