<template>
	
		<view class="content">
			
			<view class="service-content">
				<service :serviceInfo="serviceInfo"></service>
			</view>
			
			<view class="room-info">
				<block v-for="item in pollingInfo">
					<view class="room-info-item" :key="item._id">
						<room-item  :info="item"/>
					</view>
				</block>
			</view>
			<view v-show="loading" class="loading font-size-22">加载中...</view>
			<view v-show="more" class="loading font-size-22">没有更多了</view>
			<view class="back-top" v-if="backTopShow">
				<back-top ></back-top>
			</view>
			
		</view>
	
</template>

<script>
	
	import Service from "components/content/index/service/service.vue"; 
	import RoomItem from "components/content/datacenter/room-item/room-item.vue"
	import BackTop from "components/common/back-top/back-top.vue"
	
	import { getPollingInfo	} from "services/database/datacenter.js"
	import {backToTop} from "utils/tool.js"
	import {dateFormat} from "utils/format.utils.js"
	
	export default {
		components:{Service,RoomItem,BackTop},
		data() {
			return {
				more:false,
				loading:false,
				backTopShow:false,
				page:0,
				serviceInfo:[{
					id:"datacenter/day-polling",
					name:"每日巡检",
					img:"/static/img/datacenter/day_polling.png"
				},
				{
					id:"network-task3",
					name:"待定",
					img:"/static/img/network.png"
				},
				{
					id:"network-task1",
					name:"待定",
					img:"/static/img/network.png"
				},
				{
					id:"network-task2",
					name:"待定",
					img:"/static/img/network.png"
				}
				],
				pollingInfo:[],
				currentTime:""
				
			}
		},
		methods: {
				
		
			
		},
		mounted: function() {
				console.log("机房首页load")
		
			getPollingInfo(this.page).then(res=>{
				
				this.pollingInfo = this.pollingInfo.concat(res.result.data)
				console.log(this.pollingInfo)
				// console.log(dateFormat(new Date(res.data[0].polling_data),"YYYY-mm-dd"))
			}).catch(err=>{
				console.log(err)
			})
			
		},
		onShow:function(){
			//为了提交巡检后重新进入页面重新获取最新数据
			getPollingInfo(0).then(res=>{
				this.pollingInfo = res.result.data
				console.log(this.pollingInfo)
				
				
			}).catch(err=>{
				console.log(err)
				
			})
		},
		onReachBottom:function(){
			this.more = false
			this.loading = true
			getPollingInfo(++this.page).then(res=>{
					
				if(res.result.data.length>0){
					this.pollingInfo = this.pollingInfo.concat(res.result.data)
					console.log(this.pollingInfo)
					this.loading = false
					
				}else{
					this.loading = false
					this.more = true
					}
				
			}).catch(err=>{console.log(err)})
			
			
		},
		onPullDownRefresh:function(){
			
			uni.showNavigationBarLoading()
			getPollingInfo(0).then(res=>{
				this.page = 0
				this.pollingInfo = res.result.data
				console.log(this.pollingInfo)
				
				uni.hideNavigationBarLoading()
				uni.stopPullDownRefresh()
			}).catch(err=>{console.log(err)})
		},
		onPageScroll:	backToTop
		
	}
</script>

<style  scoped lang="less" scoped>


	.content{
		padding: 20rpx;
		background-color: #F1F1F1;
		
		.room-info{
			margin-top: 40rpx;
			background-color: #FFFFFF;
				
		
		}
		.loading {
		padding:0 20px;
		text-align: center;}
		
	}
		
	

</style>
