const db = uniCloud.database()
const collection = db.collection('uni-id-users')

const getUsersByGroup=(group)=>{
	
	return collection.where({group:group}).field('nickname').get()
}

const updateUsersProfile = (username,profile)=>{
	return collection.where({username:username}).update({
		avatarUrl:profile.avatarUrl,
		wxname:profile.wxName
	})
}

const bindUserPhone = (username,phonenum)=>{
	return collection.where({username}).update({phonenum:phonenum})
}

export {getUsersByGroup,updateUsersProfile,bindUserPhone}