// router/modules/network.js
const network = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/network/home/home',
      // aliasPath:'/datacenter',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'network',
        meta: {
	        title: '网络首页',
	    },
    },
    {
	    path: '/pages/network/month-polling/home/home',
        name: 'network/month-polling',
				
        meta: {
	        title: '网络每月巡检',
	    },
		},
		{
		  path: '/pages/network/quarter-polling/home/home',
		    name: 'network/quarter-polling',
				
		    meta: {
		      title: '网络季度巡检',
		  },
		}
	
	
]
export default network