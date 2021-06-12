<template>
	<view class="content">
		<view class="main-title uni-flex flex-center">
			<text class="sequence">{{reportData.special_main_title_sequence}}</text>
			<text class="main-title-info">{{reportData.special_main_title_info}}</text>
		</view>
	<view class="special-content" :class="{'uni-flex':isFlex}">
		<view class="content-column">
			<block v-for="(item,index) in reportData.special_work_info">
				<view class="info-item" :key="item.title"  v-if="index%2==0">
					<info-card :info="item"></info-card>
				</view>
			</block>
		</view>
		<view class="content-column">
			<block v-for="(item,index) in reportData.special_work_info">
				<view class="info-item" :key="item.title" v-if="index%2==1">
					<info-card :info="item" ></info-card>
				</view>
			</block>
		</view>
	</view>
</view>
</template>

<script>
	import InfoCard from "components/common/info-card/info-card.vue"
	export default{
		name:"MonthlyReportSpecial",
		props:["reportData"],
		components:{InfoCard},
		data(){
			return{
				isFlex:false,//控制是否分列
				
			}
		}
	}
</script>

<style scoped lang="less">
	
	.special-content{
		padding: 20rpx;
		.uni-ec-canvas {
			width: 100%;
			height: 100%;
			display: block;
			}
		.content-column{
			display: flex;
			flex-direction: column;
		}
		
	
		.info-item{
			
			margin: 10rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			box-shadow:0px 0px 10px #CCCCCC;
			
		}
	}
</style>
