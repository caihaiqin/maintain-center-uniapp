<template>
	
	<view class="content">
		<view class="main-title uni-flex flex-center">
			<text class="sequence">03</text>
			<text class="main-title-info">运维情况分析</text>
		</view>
		<block v-for="(item,index) in Object.keys(canvasToImgUrl)" :key="item">
			<view class="chartImg" :key="item">
				<image :src="canvasToImgUrl[item]" mode="aspectFit" class="chartImgItem"></image>
			</view>
		</block>
	
		<view class="flow type-item" v-show="canvasShow.uniEcCanvasFlow">
			<uni-ec-canvas  class="uni-ec-canvas" id="uni-ec-canvas-flow" ref="uniEcCanvasFlow" canvas-id="uni-ec-canvas-flow"
				:ec="ecFlow" @inited="()=>{canvasInit('uniEcCanvasFlow')}"></uni-ec-canvas>
				
		</view>
		
			<view class="type-item" v-show="canvasShow.uniEcCanvasFault">
				<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas-fault" ref="uniEcCanvasFault" canvas-id="uni-ec-canvas-fault"
					:ec="ecFaultType" @inited="()=>{canvasInit('uniEcCanvasFault')}"></uni-ec-canvas>
			</view>
			
			<view class="type-item " v-show="canvasShow.uniEcCanvasGroupType">
				<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas-alarm-group" ref="uniEcCanvasGroupType" canvas-id="uni-ec-canvas-alarm-group"
					:ec="ecGroupType"@inited="()=>{canvasInit('uniEcCanvasGroupType')}"></uni-ec-canvas>
			</view>
			
			<view class="type-item" v-show="canvasShow.uniEcCanvasAlarmLocation">
				<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas-alarm-location" ref="uniEcCanvasAlarmLocation" canvas-id="uni-ec-canvas-alarm-location"
					:ec="ecAlarmLocation" @inited="()=>{canvasInit('uniEcCanvasAlarmLocation')}"></uni-ec-canvas>
			</view>
			
			<view class="type-item" v-show="canvasShow.uniEcCanvasAlarmType">
				<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas-alarm-type" ref="uniEcCanvasAlarmType" canvas-id="uni-ec-canvas-alarm-type"
					:ec="ecAlarmType" @inited="()=>{canvasInit('uniEcCanvasAlarmType')}"></uni-ec-canvas>
			</view>
		 
	</view>
</template>

<script>
	import UniEcCanvas from "components/common/uni-ec-canvas/uni-ec-canvas.vue"
	import {flowOption,faultTypeOption,option1,alarmGroupOption,alarmTypeOption,alarmLocationOption} from "common/charts-option/options.js"
	export default {
		name:"MonthlyReportMaintenance",
		props:['reportData'],
		components:{UniEcCanvas},
		data(){
			
			return{
				
				canvasToImgUrl:{
					uniEcCanvasFlow:'',
					uniEcCanvasFault:'',
					uniEcCanvasGroupType:'',
					uniEcCanvasAlarmLocation:'',
					uniEcCanvasAlarmType:''
				},
				canvasShow:{
					uniEcCanvasFlow:true,
					uniEcCanvasFault:true,
					uniEcCanvasGroupType:true,
					uniEcCanvasAlarmLocation:true,
					uniEcCanvasAlarmType:true
				},
				ecFlow:{
					option:{}

				},
				ecFaultType:{
					option:{}
				},
				ecGroupType:{
					option:{}
				},
				ecAlarmType:{
					option:{}
				},
				ecAlarmLocation:{
					option:{}
				}
				
			}
		},
		mounted:function(){
			
			const newFlowOption = {...flowOption,...this.reportData.flow_charts_option}
			faultTypeOption.series[0].data=this.reportData.fault_type_option.series[0].data
			alarmGroupOption.series[0].data=this.reportData.alarm_group_option.series[0].data
			alarmTypeOption.series[0].data=this.reportData.alarm_type_option.series[0].data
			alarmLocationOption.series[0].data=this.reportData.alarm_location_option.series[0].data
			
			
			this.ecFlow.option =  newFlowOption
			this.ecFaultType.option = faultTypeOption
			this.ecGroupType.option = alarmGroupOption
			this.ecAlarmType.option = alarmTypeOption
			this.ecAlarmLocation.option = alarmLocationOption
			
				
			
		},
		methods:{
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
		.uni-ec-canvas{
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
		.flow{
			
			width: 100%;
			height: 400rpx;
			
		}
		
			.type-item{
				width: 95%;
				height: 500rpx;
				margin: 20rpx auto;
				border-radius: 20rpx;
				background-color: #FFFFFF;
			}
		
		
		
	}
</style>
