<template>
	<view class="content">
		
		<view class="main-title uni-flex flex-center">
			<text class="sequence">{{reportData.services_main_title_sequence}}</text>
			<text class="main-title-info">{{reportData.services_main_title_info}}</text>
		</view>
		<view class="services-gather uni-flex">
			<block v-for="(item,index) in reportData.services_ganther_info" >
				<view :key=item.title class="services-gather-item" :style="[item.gatherItemStyle]">
					<view class="top uni-flex uni-column flex-center">
						<text class="iconfont icon-font-size-100" :class="item.topIconClass">
						</text>
						<text>{{item.title}}</text>
					</view>
					<view class="middle uni-flex uni-column flex-center"
					:style="[item.middleBorderStyle]"
					>
						<view class="font-size-60">
							<text>{{item.count}}</text>
						</view>
						<view class="">
							<text>{{item.countUint}}</text>
							
						</view>
					</view>
					<view class="bottom uni-flex flex-center">
						<text class="iconfont icon-font-size-50" :class="item.up?'icon-arrowTop':'icon-arrowBottom-fill'"></text>
						<text class="font-size-60">{{item.percent}}</text>
						<text>{{item.percentUnit}}</text>
					</view>
				</view>
			</block>
			
		</view>
		<block v-for="(item,index) in Object.keys(canvasToImgUrl)" :key="item">
			<view class="chartImg" :key="item">
				<image :src="canvasToImgUrl[item]" mode="aspectFit" class="chartImgItem"></image>
			</view>
		</block>
		<view class="services-charts" v-show="canvasShow.uniEcCanvasServices">
			<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas" ref="uniEcCanvasServices" canvas-id="uni-ec-canvas"
				:ec="ec" @inited="()=>{canvasInit('uniEcCanvasServices')}"></uni-ec-canvas>
		</view>
	</view>
</template>

<script>
	import UniEcCanvas from "components/common/uni-ec-canvas/uni-ec-canvas.vue"
	import * as echarts from 'components/common/uni-ec-canvas/echarts.js'
	import {option1,ServicesChartsOptionShadow} from "common/charts-option/options.js"
	export default {
		name: "MonthlyReportServices",
		props:['reportData'],
		components: {
			UniEcCanvas
		},
		data() {
			return {
				canvasToImgUrl:{
					uniEcCanvasServices:'',
					
				},
				canvasShow:{
					uniEcCanvasServices:true,
					
				},
				ec: {
					option:{}
					
				},
				test:{color: '#00DDFF',border: '1rpx solid #00DDFF'},
				// servicesGantherInfo:[
				// 	{
				// 		title:"电话受理",
				// 		count:625,
				// 		countUint:"件",
				// 		percent:29,
				// 		percentUnit:'%',
				// 		up:false,
				// 		topIconClass:'iconfont icon-font-size-100 icon-kefu',
						
				// 		gatherItemStyle:{color: '#00DDFF',border: '1rpx solid #00DDFF'},
				// 		middleBorderStyle:{borderTop: '1rpx #00DDFF dashed',borderBottom: '1rpx #00DDFF dashed'}
				// 	},
				// 	{
				// 		title:"技术服务",
				// 		count:217,
				// 		countUint:"单",
				// 		percent:25,
				// 		percentUnit:'%',
				// 		up:false,
				// 		topIconClass:'iconfont icon-font-size-100 icon-hrcollegepeopleCardingRange',
						
				// 		gatherItemStyle:{color: '#37A2FF',border: '1rpx solid #37A2FF'},
				// 		middleBorderStyle:{borderTop: '1rpx #37A2FF dashed',borderBottom: '1rpx #37A2FF dashed'}
				// 	},
					
				// 	{
				// 		title:"绿色通道",
				// 		count:35,
				// 		countUint:"次",
				// 		percent:29,
				// 		percentUnit:'%',
				// 		up:false,
				// 		topIconClass:"iconfont icon-lvsetongdaofuwu-12 icon-font-size-100",
						
				// 		gatherItemStyle:{color: '#d6a892',border: '1rpx solid #d6a892'},
				// 		middleBorderStyle:{borderTop: '1rpx #d6a892 dashed',borderBottom: '1rpx #d6a892 dashed'}
				// 	},
				// 	{
				// 		title:"投诉",
				// 		count:0,
				// 		countUint:"件",
				// 		percent:0,
				// 		percentUnit:'%',
				// 		up:false,
				// 		topIconClass:"iconfont icon-tousuchuli icon-font-size-100",
						
				// 		gatherItemStyle:{color: '#FFBF00',border: '1rpx solid #FFBF00'},
				// 		middleBorderStyle:{borderTop: '1rpx #FFBF00 dashed',borderBottom: '1rpx #FFBF00 dashed'}
				// 	}
					
					
				// ]
			}
		},
		mounted:function(){
			//给柱状图设置数据
			const newOption = {...ServicesChartsOptionShadow,...this.reportData.services_charts_option}
			this.ec.option =  newOption
			
		},
		methods: {
			canvasInit(refType){
				console.log(refType)
				this.$refs[refType].canvasToTempFilePath({
					success: (res) => {
						console.log(res.tempFilePath)
						
						this.canvasShow[refType] = !this.canvasShow[refType]
						this.canvasToImgUrl[refType] = res.tempFilePath
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.content{
		width: 100%;
		height: 100%;
		.uni-ec-canvas {
			width: 100%;
			height: 100%;
			display: block;
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
		.chartImg{
			.chartImgItem{
				width: 100%;
			}
		}
		.services-charts{
			width: 100%;
			height: 600rpx;
		}
		.services-gather{
			justify-content: space-evenly;
			margin: 20rpx;
			
		}
		.services-gather-item{
			width: 20%;
			border-radius: 20rpx;
			
			
			.top{
				padding-bottom: 20rpx;
			}
			.middle{
				padding: 20rpx 0;
				
			}
		}
		.font-size-60{
			font-size: 60rpx;
		}
		.icon-font-size-50{
			font-size: 50rpx;
		}
		.icon-font-size-100{
			font-size: 100rpx;
		
		}
	}
</style>
