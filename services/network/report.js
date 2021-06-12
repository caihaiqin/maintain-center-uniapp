import request from './request.js'

const getPollingReport = (type, equipmentList,coverInfo,faultList) => {
	const options = {
		url: '/report',
		method: 'POST',
		responseType: 'arraybuffer',
		headers: {
			'Accept': 'application/pdf'
		},
		data: {
			type: type,
			faultList: faultList,
			equipmentList: equipmentList,
			coverInfo:coverInfo
		}
	}

	return request(options)
}

export {
	getPollingReport
}
