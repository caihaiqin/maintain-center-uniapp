	
export function checkPermission(role,page){
	
	console.log(role,page)
	for (var i = 0; i < role.length; i++) {
		console.log(role[i].split('_')[0])
		if(page.indexOf(role[i].split('_')[0])!=-1 || role[i].split('_')[0]=='super'){
			
			return true
		}
	}
	
	return false
	
}