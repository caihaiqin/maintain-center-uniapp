<template>
	<view class="content uni-flex uni-column">
		<view class="line">
			 <view :style="[lineStyle]">
			 	
			 </view>
		</view>
		<view class="info uni-flex uni-column">
			<view class="title font-color-f2f2f2">
				{{info.title}}
			</view>
			<view class="count uni-flex uni-column">
				<text class="font-size-60 font-color-f2f2f2 ">{{count}}</text>
				<text class="font-size-22 " v-if="!count">加载中</text>
				<text class="font-size-22 ">{{info.unit}}</text>
				
			</view>
		</view>
		<view class="icon uni-flex">
			<text class="iconfont font-size-22" :class="[info.iconClass]"></text>
		</view>
	</view>
</template>

<script>
	import {ANALYTICS_LINE_COLOR} from "common/constant/constant.js"
	export default {
		name:"AnalyticsItem",
		props:{
			info:{
			type:Object
		},
		},
		computed: {
        count() {
					console.log(this.$store.state.analyticsCount,this.info.type)
            return this.$store.state.analyticsCount[this.info.type]
        },
				
    },
		data(){
			return {
				
				lineStyle:{
					width:this.info.width,
					height:'10rpx',
					
					backgroundColor:this.info.color,
					borderRadius:'10rpx',
					
					
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.content{
		view{
			line-height: 1.2;
		}
		
		background-color: rgba(76, 78, 117,.5);
		
		padding:30rpx;
		border-radius: 20rpx;
		.line{
			padding: 0 0 30rpx 0;
		}
		.info{
			
		}
		.line,.icon{
			flex:1
		}
		.info{
			flex:2;
		}
		.icon{
			flex-direction: row-reverse;
		}
	}
</style>
