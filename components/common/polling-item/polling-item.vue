<template>
	<view class="polling-item-content">
	
		<uni-card :title="title" 
							:thumbnail="thumbnail" 
							:extra="extra" 
							:note="note">
				<slot></slot>
		</uni-card>
		
	</view>
	
</template>

<script>
		import UniCard from "../uni-card/uni-card.vue"
	export default{
		name:"PollingItem",
		components:{UniCard},
			
		props:{
				
			title:{
				type:String,
				default:""
			},
			extra:{
				type:String,
				default:""
			},
			note:{
				type:String,
				default:""
			},
				
			thumbnail:{
				type:String,
				default:"/static/img/datacenter/day_polling.png"
			}
		}
	}
</script>

<style lang="less" scoped>
		
	.polling-item-content{
		display: flex;
		flex-direction: column;
		width: 700rpx;
		margin: 0 auto;
		
	}
	
	
</style>
