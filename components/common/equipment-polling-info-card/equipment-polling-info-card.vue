<template>
	<view class="content">
	
		<view class="title uni-flex ">
			<!-- <text class="index">{{info.index}}</text> -->
			<text class="title-info hidden">序列号:{{info.serial_number ? info.serial_number : '无'}}</text>
		</view>
		<view class="image" v-show="info.polling_img.length>0" @click="imageClick">		
				<image lazy-load="true" :src="info.polling_img[0]" mode="widthFix" class="img"></image>
		</view>
		<view class="context">
			
			<view class="info">
				<view class="info-item" >
					<!-- <text class="info-item-left font-size-22">巡检时间</text> -->
					<text class="info-item-right font-size-22">{{info.polling_date}}</text>
				</view>
				<block v-for="(value,index) in pollingItemList" :key="value.type">
					<view class="info-item" :key="value.type">
						<text class="info-item-left font-size-22">{{value.title}}</text>
						<view class="info-item-right font-size-22">
							<radio-group >
								<label v-show="info[value.type]==0">
									<radio  :value="0" :checked="info[value.type]==0" class="radio" color="#09BB07" /><text>正常</text>
								</label>
								<label v-show="info[value.type]==1">
									<radio  :value="1" :checked="info[value.type]==1" color="#F0AD4E" class="radio" /><text>告警</text>
								</label>
								<label v-show="info[value.type]==2">
									<radio  :value="2" :checked="info[value.type]==2" color="#FF3333" class="radio" /><text>故障</text>
								</label>
							</radio-group>
						</view>
					</view>
				</block>
				<block v-for="(value,index) in sliderList" :key="value.type">
					<view class="info-item" :key="value.type">
						<text class="info-item-left font-size-22">{{value.title}}</text>
						<view class="info-item-right font-size-22 uni-flex flex-center">
							<text>{{info[value.type]}}</text>
							<text>{{value.type == "temperature" ? "°C" : "%"}}</text>
						</view>
					</view>
				</block>
				<view class="abnormal_detail" v-if="info.abnormal_detail">
					<text class="font-size-22">{{info.abnormal_detail}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"EquipmentPollingInfoCard",
		props:['info'],
		
		data:()=>{
			return{
				sliderList: [{
						type: "cpu",
						title: "cpu利用率"
					},
					{
						type: "memory",
						title: "内存利用率"
					},
					{
						type: "temperature",
						title: "温度"
					}
				],
				pollingItemList:[],
				pollingItemListNet: [{
						type: "indicator_light",
						title: "面板指示灯"
					},
					{
						type: "power_status",
						title: "电源状态"
					},
					{
						type: "fan_status",
						title: "风扇状态"
					},
					{
						type: "board_status",
						title: "板卡状态"
					},
					{
						type: "ports_status",
						title: "端口状态"
					},
					{
						type: "log_status",
						title: "日志状态"
					}
				],
				pollingItemListSer: [{
						type: "indicator_light",
						title: "面板指示灯"
					},
					{
						type: "power_status",
						title: "电源状态"
					},
					{
						type: "fan_status",
						title: "风扇状态"
					},
					
					{
						type: "hard_disk_status",
						title: "硬盘状态"
					},
					{
						type: "log_status",
						title: "日志状态"
					}
				],
				
			}
		},
		mounted:function(){
			
			switch (this.info.type){
				case '网络':
				
					this.pollingItemList = this.pollingItemListNet
					break;
				case '服务器':
					this.pollingItemList = this.pollingItemListSer
					break;
				default:
				this.pollingItemList = this.pollingItemListNet
					break;
			}
		},
		methods:{
			imageClick:function(){
				uni.previewImage({
					urls:this.info.polling_img
				})
			}
		}
		
	}
</script>

<style scoped lang="less">
	.content{
		padding: 20rpx;
		.title{
			
			align-items: center;
			margin-bottom: 20rpx;
			border-bottom: solid 1rpx #60607b;
			.index{
				background-color: #5983f5;
				padding: 0 20rpx;
				font-size: 16rpx;
				color: #FFFFFF;
				
				border-radius: 30rpx;
			}
			.title-info{
				
				
				font-size: 22rpx;
				font-weight: 700;
				color: #60607b;
			}	
		}
		.img{
			width: 100%;
			border-radius: 20rpx;
		}
		/////////////
		.context {
			display: flex;
			flex-direction: column;
		
		
			.info {
				width: 100%;
				flex: 1;
				padding: 5rpx;
				
				.info-item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 36rpx;
		
				}
		
				.info-item-left {
					flex: 4;
				}
		
				.info-item-right {
					flex: 4;
		
					.radio {
						transform: scale(0.4);
					}
		.slider {
			height: 25rpx;
		}
				
				}
			}
		
			
		
			.abnormal_detail {
				
				width: 95%;
				background-color: #CCCCCC;
				border-radius: 5rpx;
				margin: 10rpx 0;
				padding: 5rpx;
		
				
			}
		
			
		}
		
	}
</style>
