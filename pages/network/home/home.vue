<template>
	<view>
		<view class="content">
<!-- 			<view class="task-type">
				<service :serviceInfo="serviceInfo"></service>
			</view> -->
			<view class="list">
				
				<equipment-polling-info-list :equipmentPollingInfoList='equipmentPollingInfoList'></equipment-polling-info-list>
			</view>
			<view v-show="loading" class="loading font-size-22">加载中...</view>
			<view v-show="more" class="loading font-size-22">没有更多了</view>
			<view class="back-top" v-if="backTopShow">
				<back-top ></back-top>
			</view>
		</view>
	</view>
</template>

<script>
	import Service from "components/content/index/service/service.vue"; 
	import EquipmentPollingInfoList from "components/content/equipments/equipment-polling-info-list/equipment-polling-info-list.vue" 
	import BackTop from "components/common/back-top/back-top.vue"
	import {getNetEqPollingList} from "services/database/network-equipment-polling.js"
	import {backToTop} from "utils/tool.js"
	export default {
		components:{Service,EquipmentPollingInfoList,BackTop},
		data() {
			return {
				page:0,//列表页
				equipmentPollingInfoList:[],
				more:false,
				loading:false,
				backTopShow:false,
				serviceInfo:[{
					id:"network/month-polling",
					name:"远程巡检",
					img:"/static/img/network/month_polling.png"
				},
				{
					id:"network/quarter-polling",
					name:"现场巡检",
					img:"/static/img/network/quarter_polling.png"
				},
				{
					id:"network/network-task1",
					name:"待定",
					img:"/static/img/network.png"
				},
				{
					id:"network/network-task2",
					name:"待定",
					img:"/static/img/network.png"
				}
				]
				
			}
		},
		mounted:function(){
			getNetEqPollingList(this.page).then(res=>{
				
				this.equipmentPollingInfoList = this.equipmentPollingInfoList.concat(res.result.data)
				console.log(this.equipmentPollingInfoList)
			}).catch(err=>{console.log(err)})
		},
		methods: {
			
		},
		onReachBottom:function(){
			this.more = false
			this.loading = true
			getNetEqPollingList(++this.page).then(res=>{

				if(res.result.data.length>0){
					this.equipmentPollingInfoList = this.equipmentPollingInfoList.concat(res.result.data)
					console.log(this.equipmentPollingInfoList)
					this.loading = false
				}else{
					this.loading = false
					this.more =true
				}
			}).catch(err=>{console.log(err)})
			
		},
		onPullDownRefresh:function(){
			console.log('下拉刷新')
			uni.showNavigationBarLoading()
			getNetEqPollingList(0).then(res=>{
				this.page = 0
				this.equipmentPollingInfoList = res.result.data
				console.log(this.equipmentPollingInfoList)
				
				uni.hideNavigationBarLoading()
				uni.stopPullDownRefresh()
			}).catch(err=>{console.log(err)})
		},
		onPageScroll:backToTop
	}
</script>

<style  scoped lang="less">
		
	page {
	background-color: #F1F1F1;
	}
		
	.content{
		
		.list{
			width: 100%;
		}
		
		.loading {
    padding: 20px;
    text-align: center;
  }
	}
		
	.task-type{
		border-radius: 5rpx;
		background-color: #FFFFFF;
	}

</style>
