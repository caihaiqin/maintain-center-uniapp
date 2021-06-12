const db = uniCloud.database()
const collection = db.collection('echarts')

const getChartsInfo=()=>{
	
	return collection.get()
}
const addChartsInfo=(info)=>{
	return collection.add(info)
}
export {getChartsInfo,addChartsInfo}