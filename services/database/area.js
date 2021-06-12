const db = uniCloud.database()
const collection = db.collection('area')

const getAreaByGroup=(group)=>{
	// const options = {url:`/area/${group}`}
	
	// return request(options)
	return collection.where({group:group}).get()
}

export {getAreaByGroup}