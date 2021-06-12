const db = uniCloud.database()
const collection = db.collection('equipments')

import {PAGE_SIZE} from "common/constant/constant.js"
const getEquipmentBySerialNumber = (serialNumber) => {
	return collection.where({
		serial_number: serialNumber
	}).get()
}


const getEquipmentCount = () => {
	return collection.count()
}

const getEquipmentInfo = (page) => {
	console.log(PAGE_SIZE)
	return collection
		.skip(PAGE_SIZE * (page-1)) // 跳过前page*PAGE_SIZE条
		.limit(PAGE_SIZE) // 获取PAGE_SIZE条
		.orderBy('_id', 'desc')
		.get()
}
const getEquipmentInfoByDep = (department,page) => {

	return collection
		.where({department:department})
		.skip(100 * (page-1))
		.limit(100)
		.orderBy('_id', 'desc')
		.get()
}

const addEquipmentInfo = (info) => {
	return collection.add(info)
}

const updateEquipmentInfoBySerialNum = (serialNumber, newInfo) => {
	return collection.where({
		serial_number: serialNumber
	}).update(newInfo)
}


const deleteEquipmentInfoById = id => {
	return collection.doc(id).remove()
}
export {
	getEquipmentBySerialNumber,
	addEquipmentInfo,
	getEquipmentCount,
	getEquipmentInfo,
	getEquipmentInfoByDep,
	updateEquipmentInfoBySerialNum,
	// getEquipmentInfoFault,
	deleteEquipmentInfoById
}
