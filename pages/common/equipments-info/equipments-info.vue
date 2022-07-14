<template>
	<view class="content">
		<view class="serial-number">
			<text class="serial-number-left">序列号:</text>
			<text class="serial-number-right">{{equipmentInfo[0].serial_number}}</text>
		</view>
		<view class="info-content">
			<!-- 展示设备信息组件 -->
			<equipment-info 
			@pollingClick="pollingClick"
			@maintainClick="maintainClick"
			v-show="showControl.equipmentInfo"
			:equipmentInfo="equipmentInfo" 
			:fields="fields"
			:latitude="equipmentLatitude"
			:longitude="equipmentLongitude"
			:markers="markers"
			/>
			<!-- 添加新设备信息 -->
			<add-equipment 
			v-show="showControl.addEquipment"
			@addEquipmentClick="addEquipmentClick"
			:areaInfo="areaInfo"
			/>
			<!-- 网络设备巡检 -->
			
			<equipment-polling 
			v-show="showControl.equipmentPolling"
			@pollingSubmit="pollingSubmit"
			@pollingBackClick="pollingBackClick"
			/>
			
			<!-- 设备维护模块 -->
			<equipment-maintain 
			v-show="showControl.equipmentMaintain"
			@maintainBackClick = "maintainBackClick"
			@maintainSubmit="maintainSubmit"
			/>
		</view>
		
	
	</view>
</template>

<script>
	import EquipmentInfo from "components/content/equipments/equipment-info/equipment-info.vue"
	import EquipmentPolling from "components/content/equipments/equipment-polling/equipment-polling.vue"
	import AddEquipment from "components/content/equipments/add-equipment/add-equipment.vue"
	import EquipmentMaintain from "components/content/equipments/equipment-maintain/equipment-maintain.vue"
	// 导入百度地图api
	import BMap from "utils/bmap-wx.js"
	//导入腾讯地图api
	import QQMapWX from 'utils/qqmap-wx-jssdk.js'
	//计算两个经纬度坐标间的距离
	import { getGreatCircleDistance} from "utils/compute.js"
	import {LOCATION_RADIUS} from "common/constant/constant.js"
	
	import {addEquipmentInfo} from "services/database/equipments.js"
	import {getAreaByGroup} from "services/database/area.js"
	export default {
		data() {
			return {
				areaInfo:[],
				equipmentInfo:[],
				showControl:{
					equipmentPolling:false,
					equipmentInfo:true,
					addEquipment:false,
					equipmentMaintain:false
				},
				//百度地址解析相关  保存经度纬度
				
				markers: [], 
				//实时定位坐标
				latitude: '', 
				longitude: '', 
				//设备机房地点坐标
				equipmentLatitude:'',
				equipmentLongitude:'',
				//两个坐标点之间的距离
				distance:0,
				
				rgcData: {} ,
				
				
				fields:[
					["department","部门"],
					["system","地点"],
					["machine_room","机房"],
					["cabinet","机柜"],
					["name","设备名称"],
					["model","设备型号"],
					["type","设备类型"],
					["grade","设备等级"],
					["manage_ip","管理地址"],
					["versions","软件版本"],
					
					
				]
			}
		},
		components:{EquipmentInfo,EquipmentPolling,AddEquipment,EquipmentMaintain},
		methods: {
			// 监听添加设备添加按钮点击
				
			addEquipmentClick(info){
				const newEquipmentInfo = {...this.equipmentInfo[0],...info}
				this.equipmentInfo[0] = {...newEquipmentInfo}
				
				
				addEquipmentInfo(newEquipmentInfo).then(res=>{
					uni.setStorageSync('equipmentsInfo',newEquipmentInfo)
					uni.showToast({
						title:"添加成功",
						icon:"none",
						duration:1000
					})
					
					setTimeout(()=>{
						this.showControl.addEquipment = false
						this.showControl.equipmentInfo = true
						uni.switchTab({
							url:"/pages/index/index"
						})
					},1000)
				}).catch(err=>{
					uni.showModal({
						content:err.message,
						showCancel:false
					})
				})
			},
			//监听巡检提交按钮
			pollingSubmit(type){
				console.log("巡检提交",type)
				// 切换到首页
				uni.switchTab({
					url:"/pages/index/index"
				})
				this.showControl[type]=false
				this.showControl.equipmentInfo = true
				
			},
			// 巡检页点击返回
			pollingBackClick(type){
				console.log("返回")
				this.showControl[type]=false
				this.showControl.equipmentInfo = true
			},
			//维护页点击返回
	
			maintainBackClick(type){
				console.log("维护返回")
				this.showControl[type]=false
				this.showControl.equipmentInfo = true
			},
			//监听维护页面提交按钮点击
			maintainSubmit(type){
					console.log('维护提交')
					this.showControl[type]=false
					this.showControl.equipmentInfo = true
			},
			//维护按钮点击
			maintainClick(){
				console.log("点击维护")
				//  创建百度地图接口对象
				const bmap = new BMap.BMapWX(
				{
					ak:'AGsjlUHa5H8WBdN9QWQ1fOwfhSoq0GFf'
				}
				)
				// 获取当前实时定位
				uni.getLocation({
					type:"gcj02",
					altitude:true,
					success: (res) => {
						console.log(res)
						this.latitude = res.latitude
						this.longitude = res.longitude
						// 调用百度API逆解析地址
								bmap.regeocoding({
									location:this.latitude+','+this.longitude,
									iconPath:"/static/img/map/marker_red.png",
									iconTapPath:"/static/img/map/marker_yellow.png",
									success:res=>{
										 console.log("当前位置",res.originalData.result.formatted_address)
										
										
									},
									fail:err=>{
										console.log(err)
									}
								})
								
							},
							fail: (err) => {
								console.log(err)
							}
						})
						
						console.log("当前位置坐标",this.latitude,this.longitude)
						console.log("机房位置坐标",this.equipmentLatitude,this.equipmentLongitude)
						//计算当前位置距离机房距离  如果超过locationRadius则无法进行巡检
						this.distance = getGreatCircleDistance(this.latitude,this.longitude,this.equipmentLatitude,this.equipmentLongitude)
						// qqmapsdk.calculateDistance({
						// 	mode:'straight',
						// 	from:{
						// 		latitude:this.latitude,
						// 		longitude:this.longitude
						// 	},
						// 	to:[{
						// 		latitude:this.equipmentLatitude,
						// 		longitude:this.equipmentLongitude
						// 	}],
						// 	success:res=>{
						// 		console.log(res)
						// 	},
						// 	fail:err=>{
						// 		console.log(err)
						// 	}
						// })
						console.log("当前位置距离机房-百度api",this.distance,"米")
						
							
						if(this.distance > LOCATION_RADIUS){
							uni.showToast({
								title:"当前不在巡检距离范围内",
								icon:"none",
								duration:1000
							})
						}else{
							this.showControl.equipmentMaintain = true
							this.showControl.equipmentInfo = false
						}
				
				
			},
			//巡检按钮点击
			pollingClick(){
				console.log("点击巡检","设备类型",this.equipmentInfo[0].type)
				//  创建百度地图接口对象
				const bmap = new BMap.BMapWX(
				{
					ak:'AGsjlUHa5H8WBdN9QWQ1fOwfhSoq0GFf'
				}
				)
				//创建腾讯地图接口对象
				// const qqmapsdk = new QQMapWX({
    //         key: 'HB7BZ-UUNEX-4DU47-TJ4IO-SHXZZ-FGBOQ'
    //     });
				// 获取当前实时定位
				uni.getLocation({
					type:"gcj02",
					altitude:true,
					success: (res) => {
						console.log(res)
						this.latitude = res.latitude
						this.longitude = res.longitude
						// 调用百度API逆解析地址
								bmap.regeocoding({
									location:this.latitude+','+this.longitude,
									iconPath:"/static/img/map/marker_red.png",
									iconTapPath:"/static/img/map/marker_yellow.png",
									success:res=>{
										 console.log("当前位置",res.originalData.result.formatted_address)
										
										
									},
									fail:err=>{
										console.log(err)
									}
								})
								
							},
							fail: (err) => {
								console.log(err)
							}
						})
						
						console.log("当前位置坐标",this.latitude,this.longitude)
						console.log("机房位置坐标",this.equipmentLatitude,this.equipmentLongitude)
						//计算当前位置距离机房距离  如果超过locationRadius则无法进行巡检
						this.distance = getGreatCircleDistance(this.latitude,this.longitude,this.equipmentLatitude,this.equipmentLongitude)
						// qqmapsdk.calculateDistance({
						// 	mode:'straight',
						// 	from:{
						// 		latitude:this.latitude,
						// 		longitude:this.longitude
						// 	},
						// 	to:[{
						// 		latitude:this.equipmentLatitude,
						// 		longitude:this.equipmentLongitude
						// 	}],
						// 	success:res=>{
						// 		console.log(res)
						// 	},
						// 	fail:err=>{
						// 		console.log(err)
						// 	}
						// })
						console.log("当前位置距离机房-百度api",this.distance,"米")
						
							
						if(this.distance > LOCATION_RADIUS){
							uni.showToast({
								title:"当前不在巡检距离范围内",
								icon:"none",
								duration:1000
							})
						}else{
							switch (this.equipmentInfo[0].type){
								case "网络":
								  this.showControl.equipmentInfo = false
								  this.showControl.equipmentPolling = true
									break;
								case "服务器":
								  this.showControl.equipmentInfo = false
								  this.showControl.equipmentPolling = true
									break;
								
								default:
									break;
							}
						}
						
				
				
			}
			
		},
		onReady:function(option){
			const info = uni.getStorageSync('equipmentsInfo')
			this.equipmentInfo.push(info)
			console.log("设备信息",this.equipmentInfo)
			// 选择添加新设备
			const addEquipment = uni.getStorageSync('addEquipment')
			if(addEquipment){
				const userInfo = uni.getStorageSync('user_info')
				getAreaByGroup(userInfo.group).then(res=>{
					
					this.areaInfo = res.result.data
					console.log(this.areaInfo)
				}).catch(err=>{
					console.log(err.message)
				})
				
				
				this.showControl.equipmentInfo=false
				this.showControl.addEquipment=true
				
				
			}else{
				
					// 获取位置信息
					const bmap = new BMap.BMapWX(
					{
						ak:'AGsjlUHa5H8WBdN9QWQ1fOwfhSoq0GFf'
					}
					)
					// 获取设备地点坐标位置
					const equipmentAddress = info.address
					console.log('equipmentAddress',equipmentAddress)
					bmap.geocoding({
						address:equipmentAddress,
						iconPath:"/static/img/map/marker_red.png",
						iconTapPath:"/static/img/map/marker_yellow.png",
						success:res=>{
							
							const location = res.wxMarkerData[0]
							console.log("location",location)
							this.equipmentLatitude = location.latitude
							this.equipmentLongitude = location.longitude
							// 设置地点圆圈
							location.color = "#50a4ec4A"
							location.fillColor = "#50a4ec4A"
							location.radius = LOCATION_RADIUS
							// 设置标注图标宽高
							location.width = 20,
							location.height = 20,
							// 设备地图标点气泡
							location.id = 1001,
							location.callout={
								content:"机房位置",
								color:"#f0923d",
								bgColor:"#ffffff",
								borderRadius:5,
								display:"ALWAYS",
								padding:5
							}
							
							let newArr = []
							newArr.push(location)
							console.log("id",typeof newArr[0].id)
							this.markers=newArr
						}
					})
				
				// 获取当前实时定位
				uni.getLocation({
					type:"gcj02",
					altitude:true,
					success: (res) => {
						console.log(res)
						this.latitude = res.latitude
						this.longitude = res.longitude
						
						
						// 调用百度API逆解析地址
								bmap.regeocoding({
									location:this.latitude+','+this.longitude,
									iconPath:"/static/img/map/marker_red.png",
									iconTapPath:"/static/img/map/marker_yellow.png",
									success:res=>{
										 console.log("当前位置",res.originalData.result.formatted_address)
										
										
									},
									fail:err=>{
										console.log(err)
									}
								})
								
							},
							fail: (err) => {
								console.log(err)
							}
						})
			}
		
			
			
			
		}
		
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style scoped lang="less">
	
	.content{
		display: flex;
		flex-direction: column;
		padding: 40rpx;
		.info-content{
			flex: 1;
			
		}
		.serial-number{
			display: flex;
			// justify-content: space-between;
			align-items: center;
			padding: 10rpx;
			// font-size: 36rpx;
			
			height: 80rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			color: #000000;
			
			.serial-number-left{
				display: inline-block;
				width: 120rpx;
				
			}
			.serial-number-right{
				display: inline-block;
				font-size: 20rpx;
				padding-left: 20rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				
			}
		}
		
		
		
			
	}
	
</style>
