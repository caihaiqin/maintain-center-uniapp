<template>
	<view class="">
		<h5-header></h5-header>
		<web-view  :src="pdfUrl" style="width: 100%; margin-top: 60px;"></web-view>
	</view>
</template>

<script>
	import H5Header from "components/common/h5-header/h5-header.vue"
	import { getPollingReport} from "services/network/report.js"
	import {getEquipmentInfoByDep} from "services/database/equipments.js"
	import {getEquipmentInfoFault,getEquipmentAndPollingList} from "services/database/network-equipment-polling.js"
	import {REPORT_TYPE,REPORT_DEPARTMENT} from "common/constant/constant.js"
	export default {
		components:{H5Header},
		data(){
			return {
				
				list:[],
				pdfUrl:''
			}
		},
		onLoad:async function(option){
			
			//获取报表首页信息
			const coverInfo = uni.getStorageSync('coverInfo')
			console.log('coverInfo',coverInfo)
			
			uni.showLoading({
				title:'正在生成PDF'
			})
			//
			
			//获取告警设备列表
			const faultList =await getEquipmentAndPollingList(coverInfo.department,coverInfo.beginDate,coverInfo.endDate)
			console.log('faultList',faultList.result.data)
			//循环获取所有数据
			let equipmentList = []
			let page =1
			let res = await getEquipmentInfoByDep(coverInfo.department,1)
			
			while(res.result.data.length>0){
				page++
				
				console.log('page',page)
				 equipmentList = [...equipmentList,...res.result.data]
				 res = await getEquipmentInfoByDep(coverInfo.department,page)
			}
			
			console.log('equipmentList',equipmentList)
			getPollingReport(option.reportType,equipmentList,coverInfo,faultList.result.data).then(res=>{
				
				
				if(res.err){
					uni.showToast({
						title:res.message,
						icon:'none',
						duration:2000
					})
				}else{
					this.pdfUrl = 'http://81.68.227.246:8000/pdf/index.pdf'
					uni.hideLoading()
				}
				
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
