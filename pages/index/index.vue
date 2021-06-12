<template>
	<view class="content">
		<!-- //H5页面  用于后台管理 -->
		<!-- #ifdef H5 -->
		<h5-header></h5-header>
		<view class="menu-content">
			<view class="menu uni-flex ">
				<block v-for="(item,index) in manageSystemMenu" :key="item.id">
					<view class="menu-item" :key="item.id" @click="()=>{menuItemClick(item.path,index)}">
						<menu-item :menuInfo="item"></menu-item>
					</view>
				</block>
			</view>
			<button @click="throwError">
				Throw error
			</button>
		</view>
		<!-- #endif -->
		<!-- //H5页面  用于后台管理 -->
		<!-- #ifndef H5  -->
		<view class="service">
			<service :serviceInfo="serviceInfo"></service>
		</view>
		<view class="analytics">
			<analytics :analyticsCount="analyticsCount" :analyticsInfo="analyticsInfo"></analytics>
		</view>



		<view class="scan">
			<view class="scanContent">
				<image src="../../static/img/scan.svg" mode="aspectFill" class="scanImg" @click="scan"></image>
				<text class="scanText">扫一扫巡检</text>
			</view>
		</view>
		<button @click="throwError">
			Throw error
		</button>
		<!-- #endif -->

	</view>
</template>

<script>
	import store from "@/store/index.js"
	import Service from "components/content/index/service/service.vue";
	import Team from "components/content/index/team/team.vue"
	import Overview from "components/content/index/overview/overview.vue"
	import Analytics from "components/content/index/analytics/analytics.vue"

	//h5组件
	import H5Header from "components/common/h5-header/h5-header.vue"
	import MenuItem from "components/common/menu-item/menu-item.vue"


	import {
		ANALYTICS_LINE_COLOR
	} from "common/constant/constant.js"
	import {
		getPollingInfoByArea
	} from "services/database/datacenter.js"
	import {
		getEquipmentBySerialNumber,
		getEquipmentCount
	} from "services/database/equipments.js"
	import {
		getEqPollingCount,
		getAlarmAndFaultCount
	} from "services/database/network-equipment-polling.js"

	export default {
		components: {
			Service,
			Team,
			Overview,
			Analytics,
			MenuItem,
			H5Header
		},
		data() {
			return {
				// 后台管理系统菜单
				// #ifdef H5
				manageSystemMenu: [{
						id: "equipmentManage",
						name: "设备管理",
						path: "/pages/h5/equipment-manage/equipment-manage",
						img: "/static/h5/equipment.svg"
					},
					{
						id: "reportManage",
						name: "报表管理",
						path: "/pages/h5/report-manage/report-manage",
						img: "/static/h5/report.svg"
					}
				],
				// #endif

				title: 'Hello',
				analyticsInfo: {
					equipment: {
						id: 1,
						width: '100rpx',
						title: '设备',
						type: 'equipment',
						color: ANALYTICS_LINE_COLOR[0],
						count: 0,
						unit: '台',
						iconClass: 'icon-guanlianshebei'
					},
					polling: {
						id: 2,
						width: '100rpx',
						title: '巡检',
						type: 'polling',
						color: ANALYTICS_LINE_COLOR[1],
						count: 0,
						unit: '次',
						iconClass: 'icon-liucheng1'
					},
					alarm: {
						id: 3,
						width: '100rpx',
						title: '告警',
						type: 'alarm',
						color: ANALYTICS_LINE_COLOR[2],
						count: 2,
						unit: '台',
						iconClass: 'icon-jinggao'
					},
					fault: {
						id: 4,
						width: '100rpx',
						title: '故障',
						type: 'fault',
						color: ANALYTICS_LINE_COLOR[3],
						count: 1,
						unit: '台',
						iconClass: 'icon-yuanquyunwei'
					}

				},
				analyticsCount: {
					equipment: 0,
					polling: 0,
					fault: 0,
					alarm: 0

				},
				serviceInfo: [{
						id: "service",
						name: "服务台",
						img: "/static/img/telehpone.png"
					},
					{
						id: "network",
						name: "网络",
						img: "/static/img/network.png"
					},
					{
						id: "cloud",
						name: "云平台",
						img: "/static/img/cloud.png"
					},
					{
						id: "datacenter",
						name: "机房",
						img: "/static/img/datacenter.png"
					}
				]
			}
		},
		methods: {

			throwError: function() {
				console.log('captureMessage')
				
				this.$sentry.captureMessage("Hello, world!")
			},

			menuItemClick: function(path, index) {
				console.log(path, index)
				uni.navigateTo({
					url: path
				})
			},

			scan() {
				// 允许从相机和相册扫码
				console.log('扫码')
				uni.scanCode({
					fail: function(err) {
						uni.showToast({
							title: "无效码",
							icon: "none",
							duration: 1000
						})
					},
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						// 二维码信息包含序列号和其他信息版本
						let codeContent = ''
						let serial_number = ''
						if (res.scanType === 'CODE_128') {
							serial_number = res.result
						} else if (res.scanType === 'QR_CODE') {

							codeContent = res.result.split('\n')
							if (codeContent.length > 1) {
								// 自定义的二维码包含多行信息,split('\n')后数组有多个元素
								serial_number = codeContent[0].split(':')[1].trim()
							} else {
								//普通二维码包含一行信息
								serial_number = codeContent[0].trim()
							}

						}

						// 二维码只有序列号信息版本
						// const serial_number = res.result

						console.log('序列号', serial_number);

						if (serial_number) {
							getEquipmentBySerialNumber(serial_number).then(res => {
								//查询到设备信息
								if (res.result.data.length > 0) {
									store.commit('setEquipmentsInfo', res.result.data[0])
									uni.setStorageSync('equipmentsInfo', res.result.data[0])
									uni.setStorageSync('addEquipment', false)
									uni.navigateTo({
										url: "../common/equipments-info/equipments-info"
									})

								} else {
									//未查到设备信息
									uni.showModal({
										title: "是否添加设备信息",
										content: `未查询到序列号${serial_number}记录`,
										showCancel: true,
										success: (res) => {
											if (res.confirm) {
												uni.setStorageSync('equipmentsInfo', {
													serial_number: serial_number
												})
												uni.setStorageSync('addEquipment', true)
												uni.navigateTo({
													url: "../common/equipments-info/equipments-info"
												})

											} else if (res.cancel) {

											}
										}
									})


								}
							}).catch(err => {
								console.log("出错了", err)
							})

						} else {
							uni.showToast({
								title: "未识别到序列号",
								icon: "none",
								duration: 1000
							})
						}
					}
				})
			},
			btnClick() {
				console.log("点击");
				uni.navigateTo({
					url: "../datacenter/home/home",
					success: res => {},
					fail: () => {},
					complete: () => {}
				})
			}
		},


		onLoad: function() {
			console.log('主页加载--------------------------')
			// this.fundebug.notify("TEST", "Hello, cedric!");
			

		},

		onShow() {
			getEquipmentCount().then(res => {
				console.log('设备数量', res.result.total)
				this.analyticsCount.equipment = res.result.total
				store.commit('setAnalyticsCount', this.analyticsCount)
			})
			getEqPollingCount().then(res => {
				console.log('巡检次数', res.result.total)
				this.analyticsCount.polling = res.result.total
				store.commit('setAnalyticsCount', this.analyticsCount)
			})
			getAlarmAndFaultCount().then(res => {
				console.log('告警故障数', res)
				res.result.data.forEach(item => {
					if (item.totality == '异常') {
						this.analyticsCount.alarm = item.alarmCount
						this.analyticsCount.fault = item.faultCount
						store.commit('setAnalyticsCount', this.analyticsCount)
					}
				})

			})
			//获取当前网络状态
			// uni.getNetworkType({
			// 	success:function(res){
			// 		console.log('网络状态',res.networkType)
			// 	}
			// })
			// let startDownloadTime = new Date().getTime()
			// wx.downloadFile({
			// 	url:'https://static-848f277d-c3ed-4866-88d9-fa2293f6f8f0.bspapp.com/file/IMG_6138.JPG',
			// 	fail: (err) => {
			// 		console.log(err)
			// 	},
			// 	success:res=>{
			// 		let endDownloadTime = new Date().getTime()
			// 		console.log(res,`downloadtime${endDownloadTime-startDownloadTime}`)
			// 		uniCloud.uploadFile({
			// 			filePath:res.tempFilePath,
			// 			cloudPath:'test1.jpg',
			// 			fail: (err) => {
			// 				console.log(err)
			// 			},
			// 			success: (res) => {
			// 				let endUploadTime = new Date().getTime()
			// 				console.log(res,`uploadtime${endUploadTime-endDownloadTime}`)
			// 				uniCloud.deleteFile({
			// 					fileList:[res.fileID],
			// 					success: (res) => {
			// 						console.log('deletefile sucess',res)
			// 					},
			// 					fail: (err) => {
			// 						console.log('deletefile fail',err)
			// 					}
			// 				})
			// 			}
			// 		})
			// 	}
			// })

		}


	}
</script>



<style lang="less" scoped>
	/* #ifdef H5 */
	page {
		background-color: #FFFFFF;

	}

	.content {

		.menu-content {
			background-color: #FFFFFF;
			padding: 20rpx;
			margin: 0 auto;
		}

		.menu {
			justify-content: space-around;
		}

		.menu-item:hover {
			transform: scale(1.03);


		}

		.menu-item {}
	}

	/* #endif */
	// @nice-blue: #5B83AD;

	/* #ifndef H5 */
	.content {
		padding: 20rpx;

		.analytics {
			margin: 40rpx 0;
		}

		.scan {
			position: relative;
			margin: 150rpx auto;
			width: 300rpx;
			height: 300rpx;
			background-color: #2b5196;
			border-radius: 150rpx;
			box-shadow: 0px 0px 20px #40B2F5;
			opacity: .9;
		}

		.scanContent {
			position: absolute;
			display: flex;
			flex-direction: column;
			align-items: center;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}

		.scanImg {

			width: 150rpx;
			height: 150rpx;


		}

		.scanText {
			color: #FFFFFF;


		}
	}

	/* #endif */
</style>
