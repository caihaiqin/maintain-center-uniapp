const db = uniCloud.database()
const collection = db.collection('maintains')

const addMaintainResult = (result)=>{
	console.log('提交维护结果')
	return collection.add(result)
}

export {
	addMaintainResult
}