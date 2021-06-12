import request from './request.js'



const getAreaByGroup=(group)=>{
	const options = {url:`/area/${group}`}
	
	return request(options)
}

export {getAreaByGroup}