// router/modules/h5.js
const h5 = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/h5/equipment-manage/equipment-manage',
      
      name: 'h5/equipment-manage',
        meta: {
	        title: '设备管理',
	    },
    },
		{
		      //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		    path: '/pages/h5/report-manage/report-manage',
		    
		    name: 'h5/report-manage',
		      meta: {
		        title: '报表管理',
		    },
		  },
			{
			      //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
			    path: '/pages/h5/equipment-weekly-polling-report/equipment-weekly-polling-report',
			    
			    name: 'h5/report-manage/equipment-weekly-polling-report',
			      meta: {
			        title: '设备巡检报表',
			    },
			  }
    
]
export default h5