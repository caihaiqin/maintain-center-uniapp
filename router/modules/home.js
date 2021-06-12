// router/modules/home.js
const home = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/index/index',
      aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'index',
        meta: {
	        title: '首页',
	    },
    },
    {
	    path: '/pages/task/task',
        name: 'task',
        meta: {
	        title: '工单',
	    },
	},
	{
	    path: '/pages/profile/profile',
	      name: 'profile',
	      meta: {
	        title: '我的',
	    },
	},
	
]
export default home