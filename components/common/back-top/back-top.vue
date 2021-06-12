<template>
	<view class="content">
		<view class="top iconfont icon-arrowTop" @click="backToTop">
			
		</view>
	</view>
</template>

<script>
	
	export default{
		name:'BackTop',
		methods:{
			backToTop(){
				
				uni.pageScrollTo({
					scrollTop:0,
					duration:1000
				})
			}
		},
		
	}
</script>

<style scoped lang="less">
	.top{
		
		padding: 20rpx;
		width: 50rpx;
		height: 50rpx;
		text-align:center;;
		line-height: 50rpx;
		border-radius: 50rpx;
		background-color:rgba(33, 35, 30,.5);
		font-size: 40rpx;
		font-weight: 30rpx;
		color: #FFFFFF;
		
		
				}
</style>
