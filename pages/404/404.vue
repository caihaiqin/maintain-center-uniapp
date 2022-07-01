<template>
	<view>
		<!-- #ifdef H5 -->
		<!-- <h5-header></h5-header> -->
		<!-- #endif -->
		
		<view class="main uni-flex flex-center">
			<h1 class="message">功能待开发</h1>
			<view class="message"></view>
		</view>
	</view>
</template>


<script>
	
	import H5Header from "components/common/h5-header/h5-header.vue"
	
	
	export default {
		data() {
			return {
				
			}
		},
		
		components:{H5Header},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">

		
		
	.main{
		flex-direction: column;
		
	}
	.message{
		padding: 100rpx;
		
		// background-color: #007AFF;
	}
</style>
