<template>
	<view class="content">

		<view class="info">
			<block v-if="equipmentType == '网络'" v-for="(value,index) in pollingItemListNet" :key="value.type">
				<view class="info-item" :key="value.type">
					<text class="info-item-left">{{value.title}}</text>
					<view class="info-item-right">
						<radio-group @change="(e)=>{radioSelect(e,value.type)}">
							<label>
								<radio :value="0" checked="true" class="radio" color="#09BB07" /><text>正常</text>
							</label>
							<label>
								<radio :value="1" color="#F0AD4E" class="radio" /><text>告警</text>
							</label>
							<label>
								<radio :value="2" color="#FF3333" class="radio" /><text>故障</text>
							</label>
						</radio-group>
					</view>
				</view>
			</block>
			<block v-if="equipmentType == '服务器'" v-for="(value,index) in pollingItemListSer" :key="value.type">
				<view class="info-item" :key="value.type">
					<text class="info-item-left">{{value.title}}</text>
					<view class="info-item-right">
						<radio-group @change="(e)=>{radioSelect(e,value.type)}">
							<label>
								<radio :value="0" checked="true" class="radio" color="#09BB07" /><text>正常</text>
							</label>
							<label>
								<radio :value="1" color="#F0AD4E" class="radio" /><text>告警</text>
							</label>
							<label>
								<radio :value="2" color="#FF3333" class="radio" /><text>故障</text>
							</label>
						</radio-group>
					</view>
				</view>
			</block>
			<block v-for="(value,index) in sliderList" :key="value.type">
				<view class="info-item" :key="value.type">
					<text class="info-item-left">{{value.title}}</text>
					<view class="info-item-right">
						<slider class="slider" @change="(e)=>{sliderChange(e,value.type)}" block-size="12"
							show-value="true" value="20" />
					</view>
				</view>
			</block>
			<!-- <polling-item title="上传巡检照片"> -->
			<view class="img">
				<image-upload @uploadImg="uploadImg"></image-upload>
			</view>
			<!-- </polling-item> -->
			<view class="abnormal_detail" v-if="conclusion">
				<textarea :value="abnormalDetail" placeholder="请描述异常详情:" class="textarea" @blur="abnormalDetailEnter" />
			</view>

		</view>
		<view class="operation">
			<view class="operation-item-left" @click="pollingBackClick">
				<text >返回</text>
			</view>
			<view class="operation-item-right" @click="commit">
				<text >提交</text>
			</view>
		</view>

	</view>
</template>

<script>
	import store from "@/store/index.js"
	import imageUpload from "components/common/image-upload/image-upload.vue"
	
	import {
		dateFormat
	} from "utils/format.utils.js"
	export default {
		name: "EquipmentPolling",
		components: {
			// pollingItem,
			imageUpload
		},
		data() {
			return {
				abnormalDetail: "",
				filePaths: [],
				equipmentType:'网络',
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
				//保存巡检结果
				pollingResult: {
					indicator_light: 0,
					power_status: 0,
					fan_status: 0,
					board_status: 0,
					ports_status: 0,
					log_status: 0,
					hard_disk_status:0,
					cpu: 20,
					memory: 20,
					temperature: 20,
					alarm:0,
					fault:0,
					polling_date: "",
					polling_enginner: "",
					polling_img: [],
					totality: "正常",
					abnormal_detail: ""
				}
			}

		},
		computed: {
			//总体情况判断
			conclusion: function() {

				return !(this.pollingResult.indicator_light === 0 &&
					this.pollingResult.power_status === 0 &&
					this.pollingResult.fan_status === 0 &&
					this.pollingResult.board_status === 0 &&
					this.pollingResult.ports_status === 0 &&
					this.pollingResult.log_status === 0 && this.pollingResult.hard_disk_status ===0)
			},
			
		},
		mounted:function(){
			// 获取设备类型 加载相应的巡检模板
			this.equipmentType = uni.getStorageSync('equipmentsInfo').type
			switch (this.equipmentType){
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
		methods: {
			radioSelect(e, type) {
				console.log(e, type)
				this.pollingResult[type] = parseInt(e.detail.value)
			},
			sliderChange(e, type) {
				console.log(e, type)
				this.pollingResult[type] = e.detail.value
			},
			uploadImg(filePathsBase64, filePaths) {
				console.log("图片上传", filePathsBase64, filePaths)

				this.filePaths = filePaths

			},
			abnormalDetailEnter(e) {
				console.log(e.detail.value)
				this.pollingResult.abnormal_detail = e.detail.value
			},
			
			pollingBackClick(){
				
				this.$emit('pollingBackClick','equipmentPolling')
			},
			commit() {
				console.log("提交巡检")
				//获取当前时间
				let time = new Date()
				
				const formatDate = dateFormat(time, "YYYY-mm-dd,HH:MM:SS")
				
				
				this.pollingResult.polling_date = formatDate
				this.pollingResult.polling_date_timestamp = time.getTime()
				// 获取当前登录用户名--巡检工程师名字
				this.pollingResult.polling_enginner = uni.getStorageSync('user_nickname')
				//设置设备类型
				this.pollingResult.type = this.equipmentType
				//获取设备序列号 
				const info = uni.getStorageSync('equipmentsInfo')
				console.log(info)
				this.pollingResult.serial_number=info.serial_number
				
				//判断是否有异常项  给总体状态赋值
				if(this.conclusion){
					this.pollingResult.totality='异常'
				}
				//计算告警数和故障数
				for (let value of this.pollingItemList) {
					
					if (this.pollingResult[value.type] == 1) {
						this.pollingResult.alarm++
						
					}
					if (this.pollingResult[value.type] == 2) {
						this.pollingResult.fault++
						
					}
					
				}

				// 上传图片

				console.log("上传图片")

				let success = []
				let fail = []
				let failIndex = []
				let fileIDs = []
				let index = 0
				let promiseList = []
				uni.showLoading({
					title: `正在上传${++index}/${this.filePaths.length}`
				})
				this.filePaths.forEach((filePath, indey) => {
					console.log(filePath, indey)
					let arr = filePath.split('/')
					let fileName = arr[arr.length-1]
					promiseList.push(
						uniCloud.uploadFile({
							filePath: filePath,
							cloudPath: fileName+'.jpg',
						}).then(res => {
							console.log(res)
							uni.hideLoading()
							uni.showLoading({
								title: `正在上传${++index}/${this.filePaths.length}`
							})
							return res
						})
					)
				})

				Promise.all(promiseList).then(res => {
					console.log(res)
					res.forEach((item, index) => {
						fileIDs.push(item.fileID)
						if (item.success) {
							success.push(index)
						} else {
							fail.push(item.filePath)
							failIndex.push(index)
						}

					})
					if (success.length == res.length) {
						uni.hideLoading()
						uni.showToast({
							title: '图片上传成功',
							duration: 1000

						})

						//提交数据库
						this.pollingResult.polling_img = fileIDs
						// this.pollingInfo.fileBase64 = this.filePathsBase64
						const db = uniCloud.database();
						db.collection("network-equipment-polling")
							.add(this.pollingResult)
							.then((res) => {
								uni.showToast({
									title: '提交成功',
									duration: 1000
								})
								//更新vuex 
								const analyticsCount = this.$store.state.analyticsCount
								analyticsCount.polling++
								analyticsCount.alarm = this.pollingResult.alarm
								analyticsCount.fault = this.pollingResult.fault
								store.commit('analyticsCount',analyticsCount)
								// 切换显示设备信息
								setTimeout(()=>{
									this.$emit('pollingSubmit','equipmentPolling')
								},1000)
								

							})
							.catch((err) => {
								uni.showModal({
									content: err.message || '提交失败',
									showCancel: false
								})
							})
							.finally(() => {

							})

					} else {

						
						uni.showToast({
							title: '图片上传失败，请重新点击提交',
							icon: "none"
						})
						this.filePaths = fail
					}
				})

			}
		}
	}
</script>

<style scoped lang="less">
	.content {
		display: flex;
		flex-direction: column;
		
		background-color: #FFFFFF;
		border-radius: 20rpx;
		margin: 20rpx auto;

		.info {
			width: 100%;
			flex: 1;
			padding: 20rpx;

			.info-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 5rpx;

			}

			.info-item-left {
				flex: 3;
			}

			.info-item-right {
				flex: 7;

				.radio {
					transform: scale(0.7);
				}

				.slider {
					height: 25rpx;
				}
			}
		}

		.img {
			width: 90%;
		}

		.abnormal_detail {
			height: 100rpx;
			width: 95%;
			border: solid 1rpx #999999;
			border-radius: 5rpx;
			margin: 10rpx 0;

			.textarea {
				height: 150rpx;
			}
		}

		.operation {
			display: flex;
			height: 120rpx;
			justify-content: space-around;
			align-items: center;
			color: #007AFF;
			font-size: 30rpx;

			.operation-item-left,
			.operation-item-right {
				flex: 1;

				text-align: center;


			}

			.operation-item-left {
				border-right: solid 2rpx #999999;
			}

		}
	}
</style>
