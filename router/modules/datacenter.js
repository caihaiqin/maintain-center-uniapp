// router/modules/datacenter.js
const datacenter = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/datacenter/home/home',
      // aliasPath:'/datacenter',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'datacenter',
        meta: {
	        title: '机房首页',
	    },
    },
    {
	    path: '/pages/datacenter/day-polling/home/home',
        name: 'datacenter/day-polling',
				// aliasPath:'/datacenter/day-polling',  //对于h5端你必须在首页加上aliasPath并设置为/
        meta: {
	        title: '机房每日巡检',
	    },
	},
	
]
export default datacenter