<template>
	<view class="content">
		
		<view>
			<view class="arcbar">
				<block v-for="(item, index) in arcbarList" :key="index">
					<view class="arcbar-chart-item">
						<arcbar-chart
							:canvasId="`index_arcbar_${index}`"
							:ref="`arcbar${index}`"
							:dataAs="item"
							:basicAs="{
								colors: ['#1296db']
							}"
						><view class="title">
							
						</view>
						</arcbar-chart>
					</view>
				</block>
			</view>
			
		</view>
	</view>
</template>

<script>
	import ArcbarChart from "../../../common/stan-ucharts/ArcbarChart.vue"
	export default{
		name:"Overview",
		components:{ArcbarChart},
		data(){
			return {
				arcbarList: [
					//圆环
					{
						series: [
							{
								name: '可靠性',
								data: 1
							}
						]
					},
					{
						series: [
							{
								name: '及时率',
								data: 0.9999
							}
						]
					},
					{
						series: [
							{
								name: '接通率',
								data: 0.9999
							}
						]
					}
				]
			}
		},
		created() {
			this.$nextTick(() => {
				
				//圆环(注意循环可能会导致出现下面情况,请更具实际情况作出判断// console.log(this.$refs);)
				this.$refs['arcbar0'][0].showCharts();
				this.$refs['arcbar1'][0].showCharts();
				this.$refs['arcbar2'][0].showCharts();
				
			});
		}
	}
</script>

<style lang="less" scoped>
		
	.arcbar{
		display: flex;
		justify-content: space-evenly;
		
		.arcbar-chart-item{
			flex: 1;
			// background-color: red;
				
			.title{
				font-size: 24rpx;
			}
		}
	
	}
</style>
