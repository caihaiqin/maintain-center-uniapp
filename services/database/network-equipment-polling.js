const db = uniCloud.database()
const dbCmd = db.command
const collection = db.collection('network-equipment-polling')
const dbEquipmentAndPolling = uniCloud.database()
const collectionEqAndPo = dbEquipmentAndPolling.collection('network-equipment-polling,equipments')		


const getNetEqPollingList =(page)=>{
	
	return collection
		.skip(10*page) // 跳过前page*10条
		.limit(10) // 获取10条
		.orderBy('polling_date','desc')
		.get()
}
const getEquipmentAndPollingList=(department,beginDate,endDate)=>{
	console.log('beginDate,endDate',beginDate,endDate)
	const newBeginDate = new Date(beginDate).getTime()
	const newEndDate = new Date(endDate).getTime()
	console.log('newBeginDate,newEndDate',newBeginDate,newEndDate,newEndDate-newBeginDate)
	const query = `serial_number.department == "${department}" && totality=="异常" && polling_date_timestamp>${newBeginDate} && polling_date_timestamp<${newEndDate}`
	console.log(query)
	return collectionEqAndPo
		.where(query)
		.field('polling_date,totality,abnormal_detail,serial_number{serial_number,department,machine_room,cabinet,model}')
		.get()
}
const getEqPollingCount = ()=>{
	return collection.count()
}
// 获取告警数和故障数
const getAlarmAndFaultCount = ()=>{
	return collection
	.groupBy('totality')
	.groupField('sum(alarm) as alarmCount,sum(fault) as faultCount')
	.get()
}
const getEquipmentInfoFault = (department) => {
	
	
	return collection
		.where(dbCmd.and({
      department:department
    },{
      totality:'异常'
    }))
		.orderBy('_id', 'desc')
		.get()
}
export {getEquipmentInfoFault,getNetEqPollingList,getEqPollingCount,getAlarmAndFaultCount,getEquipmentAndPollingList}