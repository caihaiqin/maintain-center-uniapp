<template>
	<view class="content">
		<view class="item">
			<view class="img">
				<image :src="serviceImg" mode="" class="image"></image>
			</view>
			
			<view class="text">
				<view class="font-size-22">{{serviceName}}</view>
			</view>
		</view>
	</view>
</template>

<script>
		
	export default{
		name:"ServiceItem",
		props:{
				
			serviceName:{
				type:String,
				required:true
			},
				
			serviceImg:{
				type:String,
				required:true
			}
		}
	}
</script>

<style lang="less">
	.content{
		
		.item{
			// width: 100rpx !important;
			height: 84rpx;
			// background-color: #;
			display: flex;
			align-items: center;
			flex-direction: column;
			.text{
				// width: 100rpx;
				
				flex: 1;
				text-align: center;
				font-size: 22rpx;
				color: #555555;
				margin-top: 10rpx;
			}
				
			.img{
				.image{
					width: 64rpx;
					height: 64rpx;
				}
				flex: 4;
				
				// background-color: #007AFF;
			}
		}
	}	
	
		
/* 	.item img{
		flex:4;
		width: 128rpx;
	} */
		
/* 	.item text{
		flex: 1;
		color:#007AFF;
	} */
</style>
