<template>
	<view class="content">
		<view class="ticks uni-flex flex-center" v-show="info.fileIDs.length<=0">
			<view class="room font-size-22">无照片</view>
		</view>
		<view class="image" v-show="info.fileIDs.length>0" @click="imageClick">
				<image lazy-load="true" :src="info.fileIDs[0]" mode="widthFix" class="img"></image>
		</view>
		<view class="info">
			<view class="title">
				<text>{{info.machinery_room}}</text>
			</view>
			<view class="font-size-22">
				<text>巡检时间:</text>
				<text>{{pollingDate(info.polling_date)}}</text>
				<text>{{info.polling_time}}</text>
			</view>
			<view class="tool font-size-22">
				<text class="tool-item">门卡:{{info.card}}</text>
				<text class="tool-item">对讲机:{{info.interphone}}</text>
				<text class="tool-item">手机:{{info.phone}}</text>
				<text class="tool-item">照明:{{info.flashlight}}</text>
			</view>
			<view class="font-size-22">
				<text>机房温度: {{info.room_temperature}}℃</text>
				<text>机房湿度: {{info.room_humidness}}%</text>
			</view>
			<view class="font-size-22">
				<text>精密空调温度: {{info.precision_temperature}}℃</text>
				<text>精密空调湿度: {{info.precision_humidness}}%</text>
			</view>
			<view class="font-size-22">
				<text>消防系统: {{info.fire_system}}

				</text>



				<text>门禁系统: {{info.access_system}}</text>
				<text>UPS: {{info.ups_system}}</text>
				<view class="font-size-22">气瓶环境: {{info.gas}}</view>
			</view>
			<view class="font-size-22">
				<text>AB线: {{info.ab_line}}</text>
				<text>BC线: {{info.bc_line}}</text>
				<text>CA线: {{info.ca_line}}</text>


			</view>
			<view>
				<text class="conclusion font-size-22" :class="info.conclusion =='正常'? 'normal' : 'worning'">{{info.conclusion}}</text>
				<!-- <text v-if="isShowImg" size="mini" class="show-img font-size-22" @click="showImg">查看巡检照片</text> -->
			</view>
			<!-- <uni-popup ref="popup" type="center"  class="popup">
				<view class=".close-popup" @click="closePopup">
					关闭
				</view>
				<scroll-view scroll-y="true" >
					<view class="popup-content">
						
						
						<block v-for="item in pollingImgUrl">
							<image lazy-load="true" :src="item" mode="aspectFit" :key="item" class="image-item"></image>
						</block>
					</view>
				</scroll-view>
			</uni-popup> -->
			<view v-if="info.conclusion !=='正常'" class="font-size-22 abnormal_detail">

				<text>{{info.abnormal_detail}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	import uniBadge from "components/common/uni-badge/uni-badge.vue"
	import uniPopup from "components/common/uni-popup/uni-popup.vue"
	
	import { getPollingImgById	} from "services/network/datacenter.js"
	import { fileUrlFormat} from "utils/format.utils.js"
	import {
		dateFormat
	} from "utils/format.utils.js"

	export default {
		name: "RoomItem",
			
		data(){
				
			return{
				pollingImgUrl:[]
			}
		},
		components: {
			uniBadge,
			uniPopup
		},

		props: {
			info: {
				type: Object,
				required: true
			}
		},
		computed:{
			isShowImg:function(){
				return this.info.fileIDs.length>0
			}
		},
		methods: {
			imageClick:function(){
				uni.previewImage({
					urls:this.info.fileIDs
				})
			},
			pollingDate: function(date) {
				return dateFormat(new Date(date), "YYYY-mm-dd")
			},

			// showImg: function() {
			// 	console.log("弹出照片组件", this.$refs.popup)
				
			// 		if(this.info.fileIDs){
							
			// 			if(this.info.fileIDs.length==0){
			// 				uni.showToast({
			// 				    title: '无照片',
			// 						icon:'none'
			// 				})
			// 			}else{
			// 				this.pollingImgUrl = this.info.fileIDs
			// 				console.log(this.info)
			// 				this.$refs.popup.open()
			// 			}
						
			// 		}else{
						
			// 			uni.showToast({
			// 			    title: '无照片',
			// 					icon:"loading"
			// 			})
						
			// 		}
					
				
				

			// },
			// closePopup:function(){
			// 	console.log("关闭照片组件")
			// 	this.$refs.popup.close()
			// }
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex !important;
		border-bottom: solid 1rpx #BEBEBE;
		// background-color: #09BB07;
		padding: 20rpx 0;
		// .popup{
		// 	position: relative;
		// }
		// .close-popup{
		// 	position: absolute;
		// 	top: -26rpx;
		// 	right: 0;
		// 	width: 30px;
		// 	height: 30rpx;
		// 	padding: 10rpx;
		// 	background-color: #333333;
		// 	text-align: center;
		// 	line-height: 30rpx;
		// 	border-radius: 20rpx;
		// 	color: #FFFFFF;
				
		// 	&:hover{
		// 		cursor: pointer;
		// 	}
		// 	}
		// .popup-content {

			
			
		// 	padding-top: 30rpx;
		// 	width: 600rpx;
		// 	height: 1000rpx;
				
			
				
					
				
			

		// 	.image-item {
		// 		display: block;
		// 		width: 600rpx;
		// 		background-color: #FFFFFF;
		// 		margin: 10rpx auto;
				
				
		// 	}
		// }

		text {
			padding-right: 20rpx;
		}
		.ticks{
			width: 240rpx;
			text-align: center;
			
		}
		.image{
			
			padding: 20rpx;
		}
		.img {
			width: 200rpx;
			
			
			border-radius: 20rpx;
			
			
		}

		.info {
			flex: 1;

			.conclusion,
			.show-img {
				display: inline-block;
				margin-right: 20rpx;
				background-color: #1AAD19;
				border-radius: 20rpx;
				padding: 5rpx 10rpx;
				color: #FFFFFF;

			}

			.show-img {

				&:hover {
					cursor: pointer;
				}
			}


			.abnormal_detail {
				width: 90%;
				text-wrap: wrap;
				margin-top: 10rpx;

			}

			.worning {
				background-color: #FF3333;
			}

			.tool {

				display: flex;


				.tool-item {
					justify-content: space-around;
					padding-right: 20rpx;

				}
			}
		}


	}
</style>
