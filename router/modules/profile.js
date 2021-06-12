// router/modules/profile.js
const profile = [
	{
        
      path: '/pages/profile/profile',
      
      name: 'profile',
        meta: {
	        title: '个人首页',
	    },
    },
    {
          
        path: '/pages/profile/changepsw/changepsw',
        
        name: 'profile/changepsw',
          meta: {
            title: '修改密码',
        },
      },
			{
			      
			    path: '/pages/profile/changephone/changephone',
			    
			    name: 'profile/changephone',
			      meta: {
			        title: '修改绑定手机',
			    },
			  }
]
export default profile