<template>
	<view class="content uni-flex uni-column flex-center">
		<view class="image">
			<image :src="menuInfo.img" mode="scaleToFill" class="img"></image>
		</view>
		<view class="font-size-22">
			<text>{{menuInfo.name}}</text>
		</view>
	</view>
</template>
	
<script>
	
	export default{
		name:"MenuItem",
		props:['menuInfo']
	}
</script>

<style scoped lang="less">
	.content{
		width: 100%;
		background-color: #FFFFFF;
		box-shadow:0px 0px 10px #CCCCCC;
		padding:20rpx 10rpx;
		.img{
			width: 200rpx;
			
			height: 200rpx;
		}
	}
</style>
