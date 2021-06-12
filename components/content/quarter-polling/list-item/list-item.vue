<template>
	
	<view class="content">
		<view class="img">
			<view class="icon iconfont icon-luyouqi router"></view>
		</view>
		<view class="info">
			<text>{{info.type}}</text>
		</view>
	</view>
</template>

<script>
			
		export default{
			name:"ListItem",
				
			props:{
					
				info:{
					type:Object,
					required:true
				}
			}
		}
</script>

<style scoped lang="less">
		
	.content{
		display: flex !important;
		
		background-color: #09BB07;
		margin-bottom: 20rpx;
			
		.img{
			
				
			.router{
				height: 80rpx;
				font-size: 80rpx;
				line-height: 80rpx;
			}
		}
	}
		
	
</style>
