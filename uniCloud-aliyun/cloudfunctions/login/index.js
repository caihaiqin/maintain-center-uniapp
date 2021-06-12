const uniID= require('uni-id')
exports.main=async function(event,context){
	console.log(event,context)
	
	const { username,password} = event
	console.log(username,password)
	
		
	const res = await uniID.login({
		username,
		password,
		queryField: ['username']
	})
	return res
}