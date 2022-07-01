<template>
	<view class="day-polling-content">
		
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					选择机房
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="room_name">
						<view class="uni-input">{{array[index].room_name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="polling-list">
			<polling-item title="交班情况">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						当班工程师
					</view>
					<view class="uni-list-cell-db">
						<picker @change="dutyEnginnerChange" :value="dutyEnginnerIndex" :range="enginners" range-key="nickname">
							<view class="uni-input">{{pollingInfo.duty_enginner}}</view>
						</picker>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						交班人员
					</view>
					<view class="uni-list-cell-db">
						<picker @change="handOverEnginnerChange" :value="handOverEnginnerIndex" :range="enginners" range-key="nickname">
							<view class="uni-input">{{pollingInfo.hand_over_enginner}}</view>
						</picker>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						接班人员
					</view>
					<view class="uni-list-cell-db">
						<picker @change="takeOverEnginnerChange" :value="takeOverEnginnerIndex" :range="enginners" range-key="nickname">
							<view class="uni-input">{{pollingInfo.take_over_enginner}}</view>
						</picker>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						交班时间
					</view>
					<view class="uni-list-cell-db">
						<picker mode="time" :value="takeOverTime" start="00:00" end="24:00" @change="takeOverTimeChange">
							<view class="uni-input">{{pollingInfo.take_over_time}}</view>
						</picker>
					</view>
				</view>
			</polling-item>
			<polling-item title="巡检时间" :extra="currentDate">
				<view class="uni-list-cell">
					
					<view class="uni-list-cell-db">
						<picker mode="time" :value="pollingTime" start="00:00" end="24:00" @change="pollingTimeChange">
							<view class="uni-input">{{pollingTime}}</view>
						</picker>
					</view>
				</view>
			</polling-item>
			<polling-item title="工具情况">
				<view class="tool-item">
					<text class="tool-item-title">门禁卡</text>
					<uni-number-box :value="pollingInfo.card" @change="toolChange($event,'card')"></uni-number-box>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">对讲机</text>
					<uni-number-box :value="pollingInfo.interphone" @change="toolChange($event,'interphone')"></uni-number-box>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">手机</text>
					<uni-number-box :value="pollingInfo.phone" @change="toolChange($event,'phone')"></uni-number-box>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">照明工具</text>
					<uni-number-box :value="pollingInfo.flashlight" @change="toolChange($event,'flashlight')"></uni-number-box>
				</view>
			</polling-item>
			<polling-item title="温湿度">
				<view class="tool-item">
					<text class="tool-item-title">机房温度</text>
					<uni-number-box 
					:value="pollingInfo.room_temperature" 
					@change="toolChange($event,'room_temperature')"
					:step="0.1"></uni-number-box>
					
				</view>
				<view class="tool-item">
					<text class="tool-item-title">机房湿度</text>
					<uni-number-box :step="0.1" :value="pollingInfo.room_humidness" @change="toolChange($event,'room_humidness')"></uni-number-box>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">精密空调温度</text>
					<uni-number-box :step="0.1" :value="pollingInfo.precision_temperature" @change="toolChange($event,'precision_temperature')"></uni-number-box>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">精密空调湿度</text>
					<uni-number-box :step="0.1" :value="pollingInfo.precision_humidness" @change="toolChange($event,'precision_humidness')"></uni-number-box>
				</view>
			</polling-item>
			<polling-item title="UPS情况">
				<view class="tool-item">
					<text class="tool-item-title">AB线</text>
					<uni-number-box 
					:value="pollingInfo.ab_line" 
					:max="1000"
					@change="toolChange($event,'ab_line')"
					></uni-number-box>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">BC线</text>
					<uni-number-box :max="1000" :value="pollingInfo.bc_line" @change="toolChange($event,'bc_line')"></uni-number-box>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">CA线</text>
					<uni-number-box :max="1000" :value="pollingInfo.ca_line" @change="toolChange($event,'ca_line')"></uni-number-box>
				</view>
				
			</polling-item>
			<polling-item title="系统情况">
				<view class="tool-item">
					<text class="tool-item-title">消防系统</text>
					<text class="font-size-22">正常</text>
					<switch 
					style="transform:scale(0.7)" 
					:checked="fireSystemNormal" 
					color="#4c9e44" @change="systemNormalChange($event,'fire_system')"></switch>
					<text class="font-size-22">异常</text>
					<switch 
					style="transform:scale(0.7)" 
					:checked="!fireSystemNormal" 
					color="#d83c32" @change="systemNormalChange($event,'fire_system')"></switch>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">门禁系统</text>
					<text class="font-size-22">正常</text>
					<switch 
					style="transform:scale(0.7)" 
					:checked="accessSystemNormal" 
					color="#4c9e44" @change="systemNormalChange($event,'access_system')"></switch>
					<text class="font-size-22">异常</text>
					<switch 
					style="transform:scale(0.7)" 
					:checked="!accessSystemNormal" 
					color="#d83c32" @change="systemNormalChange($event,'access_system')"></switch>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">UPS系统</text>
					<text class="font-size-22">正常</text>
					<switch 
					style="transform:scale(0.7)" 
					:checked="upsSystemNormal" 
					color="#4c9e44" @change="systemNormalChange($event,'ups_system')"></switch>
					<text class="font-size-22">异常</text>
					<switch 
					style="transform:scale(0.7)" 
					:checked="!upsSystemNormal" 
					color="#d83c32" @change="systemNormalChange($event,'ups_system')"></switch>
				</view>
				<view class="tool-item">
					<text class="tool-item-title">气瓶环境</text>
					<text class="font-size-22">正常</text>
					<switch 
					style="transform:scale(0.7)" 
					:checked="gasSystemNormal" 
					color="#4c9e44" @change="systemNormalChange($event,'gas')"></switch>
					<text class="font-size-22">异常</text>
					<switch 
					style="transform:scale(0.7)" 
					:checked="!gasSystemNormal" 
					color="#d83c32" @change="systemNormalChange($event,'gas')"></switch>
				</view>
				<view class="abnormal_detail" >
					<textarea 
					:value="abnormalDetail" 
					placeholder="请描述异常详情:" 
					v-if="conclusion"
					@blur="abnormalDetailEnter"/>
				</view>
			</polling-item>
			<polling-item title="上传巡检照片">
				<image-upload @uploadImg="uploadImg"></image-upload>
			</polling-item>
			
			<button class="commit"  @click="submit">提交</button>
		</view>
	</view>
</template>

<script>
	import uniCombox from "components/common/uni-combox/uni-combox.vue"
	import uniNumberBox from "components/common/uni-number-box/uni-number-box.vue"
	import pollingItem from "components/common/polling-item/polling-item.vue"
	import imageUpload from "components/common/image-upload/image-upload.vue"
	
	import {getAreaByGroup} from "services/database/area.js"
	import {getUsersByGroup} from "services/database/user.js"
	
	import { getPollingInfoByArea} from "services/database/datacenter.js"
	import {dateFormat} from "utils/format.utils.js"
	export default {
		
		components:{
			imageUpload,pollingItem,uniCombox,uniNumberBox
		},
			
		data() {
			return {
				array: [{name:'资源中心'},{name: '灾备中心'}],
				currentRoomName: "资源中心",
				index:0,
				pollingInfo:{},
				enginners:[{name:"张三"},{name:"李四"},{name:"王五"}],
				dutyEnginner:"",
				handOverEnginner:"",
				takeOverEnginner:"",
				takeOverTime:"",
				dutyEnginnerIndex:0,
				handOverEnginnerIndex:0,
				takeOverEnginnerIndex:0,
				takeOverTime: '',
				abnormalDetail:"",
				currentDate:"",
				pollingTime:"22:00",
				filePaths:[],
				filePathsBase64:[]

			}
		},

		computed:{
				
			fireSystemNormal:function(){
				return this.pollingInfo.fire_system == '正常'
			},
			accessSystemNormal:function(){
				return this.pollingInfo.access_system == '正常'
			},
			upsSystemNormal:function(){
				return this.pollingInfo.ups_system == '正常'
			},
			gasSystemNormal:function(){
				return this.pollingInfo.gas == '正常'
			},
				
			conclusion:function(){
				
				return !(this.pollingInfo.fire_system == '正常' && 
				this.pollingInfo.access_system == '正常' && 
				this.pollingInfo.ups_system == '正常' && 
				this.pollingInfo.gas == '正常')
			}
		},
		methods: {
			bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            
									this.index = e.target.value
									this.currentRoomName = this.array[this.index].room_name
									// 根据选择的机房获取最近一次巡检信息
									console.log("根据选择的机房获取最近一次巡检信息")
									getPollingInfoByArea(this.currentRoomName).then(res=>{
										// 获取最近一次巡检信息
										this.pollingInfo = res.data[res.data.length-1]
										console.log(this.pollingInfo)
										
									}).catch(err=>{
										console.log(err)
									})

			        },
			dutyEnginnerChange:function(e) {
			            
			            
									this.dutyEnginnerIndex = e.target.value
									this.pollingInfo.duty_enginner = this.enginners[this.dutyEnginnerIndex].nickname
									console.log('当前值班工程师选择，携带值为', e.target.value,this.dutyEnginner)

			        },
			handOverEnginnerChange:function(e) {
			            
			            
									this.handOverEnginnerIndex = e.target.value
									this.pollingInfo.hand_over_enginner = this.enginners[this.handOverEnginnerIndex].nickname
									console.log('交班工程师选择，携带值为', e.target.value,this.handOverEnginner)
			
			        },
			takeOverEnginnerChange:function(e) {
			            
			            
									this.takeOverEnginnerIndex = e.target.value
									this.pollingInfo.take_over_enginner = this.enginners[this.takeOverEnginnerIndex].nickname
									console.log('接班工程师选择，携带值为', e.target.value,this.takeOverEnginner)
			
			        },
			takeOverTimeChange:function(e) {
			            
			            this.pollingInfo.take_over_time = e.target.value
									
			        },
			pollingTimeChange:function(e) {
			            
			            this.pollingInfo.polling_time = e.target.value
									this.pollingTime = e.target.value
									
			        },
			toolChange:function(e,tool) {
								
			            this.pollingInfo[tool] = e.toString()
			             console.log(this.pollingInfo[tool],tool,typeof this.pollingInfo[tool])
									 
									
			        },
			
			systemNormalChange:function(e,system){
				console.log(e,system)
				this.pollingInfo[system]= this.pollingInfo[system]=="异常"? "正常" : "异常"
				console.log(this.pollingInfo[system])
		},
			
		abnormalDetailEnter:function(e){
			
			this.pollingInfo.abnormal_detail = e.detail.value
			
			console.log(this.pollingInfo.abnormal_detail)
		},
		redirectToHome:function(){
			console.log("跳转")
			uni.navigateBack({
				
			})
			// uni.navigateTo({
			// 	url:"pages/datacenter/home/home"
			// })
		},
		submit:function(){
			this.pollingInfo.conclusion= (this.pollingInfo.fire_system == '正常' &&
			 this.pollingInfo.access_system == '正常' && 
			 this.pollingInfo.ups_system == '正常' && 
			 this.pollingInfo.gas == '正常') ? "正常" : "异常"
			 this.pollingInfo.polling_date = this.currentDate
			 this.pollingInfo.polling_time = this.pollingTime
			 this.pollingInfo.machinery_room = this.currentRoomName
			 
			 console.log(this.pollingInfo)
			 console.log(this.pollingInfo)
			 delete this.pollingInfo._id
			 console.log(typeof this.pollingInfo.phone)
			
			 
			 
				 console.log("上传图片")
				
				 let success = []
				 let fail = []
				 let failIndex = []
				 let fileIDs=[]
				 let index=0
				let promiseList=[]
				let fileCount = this.filePaths.length
				//判断网络状态是否差
				let timeout = true
					uni.showLoading({
						title:`正在上传${++index}/${fileCount}`
					})
					// 计算上传时间
					let startUploadTime = new Date().getTime()
					
					this.filePaths.forEach((filePath,indey)=>{
						console.log(filePath,indey)
						promiseList.push(
							uniCloud.uploadFile({
									        filePath: filePath,
									        cloudPath:filePath+'.jpg',
									            }).then(res=>{
																console.log(res)
																uni.hideLoading()
																uni.showLoading({
																	title:`正在上传${++index}/${fileCount}`
																})
																return res
															})
						)
					})
					
					Promise.all(promiseList).then(res=>{
						console.log(res)
						res.forEach((item,index)=>{
							fileIDs.push(item.fileID)
							if(item.success){
								success.push(index)
							}else{
								fail.push(item.filePath)
								failIndex.push(index)
							}
							
						})
						if(success.length == res.length){
							let endUploadTime = new Date().getTime()
							console.log('上传时间',endUploadTime-startUploadTime)
							timeout = false
							uni.hideLoading()
							uni.showToast({
							    title: '图片上传成功',
									duration:1000
								
							})
							
							//提交数据库
							this.pollingInfo.fileIDs=fileIDs
							// this.pollingInfo.fileBase64 = this.filePathsBase64
							const db = uniCloud.database();
							db.collection("pollings")
							    .add(this.pollingInfo)
							    .then((res) => {
							        uni.showToast({
							            title: '提交成功',
													duration:1000
							        })
											setTimeout(()=>{
												uni.navigateBack({
													
												})
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
							
						}else{
							
							console.log(list)
							uni.showToast({
							    title: '图片上传失败，请重新点击提交',
									icon:"none"
							})
							this.filePaths=fail
						}
					})
		
			 
		},
		uploadImg:function(filePathsBase64,filePaths){
			console.log("图片上传",filePathsBase64,filePaths)
			
			this.filePaths = filePaths
			this.filePathsBase64 = filePathsBase64
			
		},
		// uploadFiles:function(filePaths,sucess,fail,fileIDs,index){
		// 	if(filePaths.length>0){
		// 		let filePath=filePaths[index]
		// 			uniCloud.uploadFile({
		// 			       filePath: filePath,
		// 			       cloudPath:filePath+'.jpg',
		// 						 success(res) {
		// 							 success.push(index)
		// 							 console.log("上传成功",res)
		// 							 },
		// 						 fail() {
		// 							 fail.push(index)
		// 						 },
		// 						 complete() {
		// 							 console.log("上传完成",index)
		// 							 index++
										 
		// 							 if(index==filePaths.length){
		// 								 //传输完毕
		// 								 console.log("传输完毕")
		// 							 }else{
		// 								 uploadFiles(filePaths,sucess,fail,fileIDs,index)
		// 							 }
		// 						 }
		// 		})
		// 	}
		// }
		},
		onReady: function(){
			console.log("每日巡检页面")
				let time =new Date()
				
				
				const formatDate=dateFormat(time,"YYYY-mm-dd,HH:MM:SS").split(',')
				
				this.currentDate = formatDate[0]
				this.pollingTime = formatDate[1]
				
				console.log("今天日期",this.currentDate)
				console.log("当前时间",this.pollingTime)
				
				// 获取机房列表
			getAreaByGroup(1).then(res=>{
				
				this.array = res.result.data
			}).catch(err=>{
				console.log(err)
			})
			
			// 按组获取人员名单
			getUsersByGroup(1).then(res=>{
				console.log(res)
				this.enginners = res.result.data
			}).catch(err=>{
				console.log(err)
			})
			
			
			
			getPollingInfoByArea(this.currentRoomName).then(res=>{
				// 获取最近一次巡检信息
				console.log(res)
				this.pollingInfo = res.result.data.length > 0? res.result.data[res.result.data.length-1]:{}
				console.log(this.pollingInfo)
				
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style scoped lang="less">
		
	page{
		background-color: #FFFFFF;
	}
.day-polling-content{
	background-color: #F1F1F1;
		
	.tool-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
			
		.tool-item-title{
			width: 30%;
			padding: 0 30rpx;
		}
	}
	.commit{
		background-color: #1296db;
	}
}
</style>
