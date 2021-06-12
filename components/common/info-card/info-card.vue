<template>
	<view class="content">
		<view class="title uni-flex">
			<!-- <text class="index">{{info.index}}</text> -->
			<text class="title-info hidden">{{info.title}}</text>
		</view>
		<view class="image" >
			<block v-for="(item,index) in info.imgUrl" :key = "item">
				<image :src="item" mode="widthFix" class="img"></image>

			</block>
			
		</view>
		<view class="context">
			
			<view class="info">
				<text>{{info.context}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"InfoCard",
		props:{
			info:{
				title:{
					type:String
				},
				subTitle:{
					type:String
				},
				context:{
					type:String
				},
				imgUrl:{
					type:Array
				},
				index:{
					type:Number
				}
			}
		}
		
	}
</script>

<style scoped lang="less">
	.content{
		padding: 20rpx;
		.title{
			align-items: center;
			margin-bottom: 20rpx;
			border-bottom: solid 1rpx #60607b;
			.index{
				background-color: #5983f5;
				padding: 0 20rpx;
				font-size: 16rpx;
				color: #FFFFFF;
				
				border-radius: 30rpx;
			}
			.title-info{
				font-size: 22rpx;
				font-weight: 700;
				color: #60607b;
			}	
		}
		.context{
			.info{
				color: #808080;
				font-size: 20rpx;
			}
		}

		.img{
			width: 100%;
			border-radius: 20rpx;
		}
	}
</style>
