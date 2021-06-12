<template>
	<view class="content uni-flex">
		<block v-for="(item,index) in Object.keys(analyticsInfo)" :key='analyticsInfo[item].id'>
			<view class="analytics-item" :key='analyticsInfo[item].id'>
				<analytics-item :info="analyticsInfo[item]" ></analytics-item>
				
			</view>
		</block>
		
	</view>
</template>

<script>
	import AnalyticsItem from "components/common/analytics-item/analytics-item.vue"
	import {ANALYTICS_LINE_COLOR} from "common/constant/constant.js"
	import {getEquipmentCount} from "services/database/equipments.js"
	export default{
		name:"Analytics",
		components:{AnalyticsItem},
		props:{analyticsInfo:Object,analyticsCount:Object},
		
		data(){
			return{
				info:{
					equipment:{
						id:1,
						width:'100rpx',
						title:'设备',
						color:ANALYTICS_LINE_COLOR[0],
						count:998,
						unit:'台',
						iconClass:'icon-guanlianshebei'
					},
					polling:{
						id:2,
						width:'100rpx',
						title:'巡检',
						color:ANALYTICS_LINE_COLOR[1],
						count:200,
						unit:'次',
						iconClass:'icon-liucheng1'
					},
					alarm:{
						id:3,
						width:'100rpx',
						title:'告警',
						color:ANALYTICS_LINE_COLOR[2],
						count:2,
						unit:'台',
						iconClass:'icon-jinggao'
					},
					fault:{
						id:4,
						width:'100rpx',
						title:'故障',
						color:ANALYTICS_LINE_COLOR[3],
						count:1,
						unit:'台',
						iconClass:'icon-yuanquyunwei'
					}
					
				}
			}
		},
		mounted:function(){
			console.log(this.analyticsCount,this.analyticsInfo)
		}
	}
</script>

<style scoped lang="less">
	.content{
		width: 100%;
		justify-content: space-between;
		.analytics-item{
			width: 24%;
		}
	}
</style>
