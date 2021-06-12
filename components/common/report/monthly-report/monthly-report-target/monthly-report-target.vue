<template>
	<view class="content">
		<view class="title uni-flex uni-column flex-center">
			<text class="year title-1">{{reportData.target_title_year}}</text>
			<text class="title-info title-1">{{reportData.target_title_info}}</text>
			<text class="company">{{reportData.target_title_company}}</text>
			
		</view>
		<view class="main-title uni-flex flex-center">
			<text class="sequence">{{reportData.target_main_title_sequence}}</text>
			<text class="main-title-info">{{reportData.target_main_title_info}}</text>
		</view>
		<!-- <button type="default" @click="addChartsInfo">插入数据</button> -->
		<view class="target">
			<block v-for="(item,index) in  reportData.target_info">
				<view class="target-item uni-flex flex-center">
					
					<view class="target-item-left">
						<image :src="item.iconUrl" mode="aspectFill"></image>
						
					</view>
					<view class="target-item-middle uni-flex flex-center uni-column">
						
						<view class="">
							<text class="number-6fe9d2">{{item.titleCount}}</text>
							<text class="font-color-8c8c8c">{{item.titleUnit}}</text>
						</view>
						<text class="font-color-8c8c8c">{{item.title}}</text>
					</view>
					<view class="target-item-right uni-flex flex-center uni-column">
						
						<view class="">
							<text class="number-6fe9d2">{{item.targetCount}}</text>
							<text class="font-color-8c8c8c">{{item.targetUnit}}</text>
						</view>
						<text class="font-color-8c8c8c">{{item.target}}</text>
					</view>
					
				</view>
			</block>
			
		</view>
		
	</view>
</template>

<script>
	import {addChartsInfo } from "services/database/echarts.js" 
	export default {
		name:"MonthlyReportTarget",
		props:['reportData'],
		data() {
			return {
				
	}
	},
	
		methods: {
			addChartsInfo(){
				addChartsInfo(this.targetInfo).then(res=>{
					console.log(res)
				})
			}
		},
		onLoad: () => {


		}
	}
</script>
<style>
	page{
		background-color: #eef4f4;
	}
</style>
<style scoped lang="less">
	.content{
		
		width: 100%;
		height: 100%;
		
		.title{
			padding-top:40rpx;
			.company{
				background-color: #6fe9d2;
				height: 36rpx;
				line-height: 36rpx;
				padding: 0 60rpx;
				border-radius: 36rpx;
			}
			
		}
		.main-title{
			width: 80%;
			margin: 40rpx auto 0;
		
			border-top: solid 2rpx  #6fe9d2;
			border-bottom: solid 2rpx  #6fe9d2;
			
			.sequence{
				padding: 0 20rpx;
				color: #ee8f72!important;
			}
		}
		.target{
			margin-top: 20rpx;
		}
		.target-item{
			box-shadow:0px 0px 10px #CCCCCC;
			width: 90%;
			margin: 0 auto;
			padding: 10rpx;
			margin-bottom: 10rpx;
			border-radius: 10rpx;
			background-color: #FFFFFF;
			.target-item-left{
				width: 100rpx;
				height: 100rpx;
				padding: 20rpx;
				border-radius: 50%;
				
				image{
					width: 100%;
					height: 100%;
					
				}
			}
			.target-item-middle,.target-item-right{
				flex:1;
			}
		}
		.service-targer{
			width: 800rpx;
			height: 800rpx;
		}
		
	}
	.uni-ec-canvas {
		width: 100%;
		height: 100%;
		display: block;
		}
</style>
