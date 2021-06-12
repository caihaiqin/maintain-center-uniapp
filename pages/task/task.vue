<template>
	<view class="content">
	
		<view class="monthly-report">
			<monthly-report></monthly-report>
		</view>
	</view>
</template>

<script>
	import MonthlyReport from "components/common/report/monthly-report/monthly-report.vue"
	export default {
		data(){
			return {
				
			}
		},
		components: {
			MonthlyReport
		},

	}
</script>

<style scoped lang="less">
	.monthly-report{
		width:100%;
		height: 1000rpx;
		// background-color: #007AFF;
	}
</style>
