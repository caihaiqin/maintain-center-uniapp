<template>
	<swiper autoplay=true class="swiper-content">
		<swiper-item>
			<view class="team-item">
				<overview></overview>
			</view>
		</swiper-item>
	
	</swiper>
</template>

<script>
	import Overview from "../overview/overview.vue"
	
	export default{
		name:"Team",
		components:{Overview}

	}
</script>

<style lang="less" scoped>
	
.swiper-content{
	background-color: #FFFFFF;
	margin-top: 10rpx;
}
</style>
