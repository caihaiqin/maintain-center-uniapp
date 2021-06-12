<template>
	<view class="content">
	
		<view class="info">
			添加设备
			<view class="info-item" >
				<view class="info-item-left">
					<text >部门:</text>
				</view>
				<view class="info-item-right">
					<picker @change="departmentIndexPickerChange" :range="departmentInfo" :value="departmentIndex">
					   <view class="uni-input">{{departmentInfo[departmentIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="info-item" >
				<view class="info-item-left">
					<text >设备类型:</text>
				</view>
				<view class="info-item-right">
					<picker @change="typeIndexPickerChange"  :range="equipmentType" :value="typeIndex">
					   <view class="uni-input">{{equipmentType[typeIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="info-item" >
				<view class="info-item-left">
					<text >机房:</text>
				</view>
				<view class="info-item-right">
					<picker @change="machineRoomIndexPickerChange"  range-key="room_name" :range="areaInfo" :value="machineRoomIndex">
					   <view class="uni-input">{{areaInfo[machineRoomIndex].room_name}}</view>
					</picker>
				</view>
			</view>
			<block v-for="(value,index) in fields" :key = "value">
				<view class="info-item" >
					<text class="info-item-left">{{value[1]}}:</text>
					<input class="info-item-right" placeholder=请输入 v-model="equipmentInfo[value[0]]"></input>
				</view>
			</block>
			
		</view>
		<!-- <view class="map_container">
			<map class="map" 
			:latitude="latitude" 
			:longitude="longitude" 
			show-location="true"
			:markers="markers"
			:circles="markers"
			@markertap="markertapClick"
			></map>
		</view> -->
		<view class="operation">
			<view class="operation-item-left"@click="reback" >
				<text>返回</text>
			</view>
			<view class="operation-item-right" @click="addEquipmentClick">
				<text>添加</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		name:"AddEquipment",
		props:{
			areaInfo:{
				type:Array
			}
		},
		data(){
			return {
				departmentIndex:0,
				machineRoomIndex:0,
				typeIndex:0,
				equipmentType:['网络','服务器'],
				departmentInfo:['IDC部','网络部','云平台部','大数据部','综合部'],
				fields:[
					// ["department","部门"],
					// ["system","地点"],
					// ["machine_room","机房"],
					["cabinet","机柜"],
					["name","设备名称"],
					["model","设备型号"],
					// ["type","设备类型"],
					["grade","设备等级"],
					["manage_ip","管理地址"],
					["versions","软件版本"],

				],
				equipmentInfo:{
					
					department:'',
					system:'',
					address:'',
					machine_room:'',
					
					cabinet:'',
					name:'',
					model:'',
					type:'',
					grade:"1",
					manage_ip:'',
					versions:''
				}
			}
		},
		
		
	methods:{
		departmentIndexPickerChange: function(e) {
		            console.log('picker发送选择改变，携带值为', e.target.value)
		            
								this.departmentIndex = e.target.value
								this.equipmentInfo.department = this.departmentInfo[this.departmentIndex]
								
								
		
		 },
		 typeIndexPickerChange: function(e) {
		             console.log('picker发送选择改变，携带值为', e.target.value)
		             
		 						this.typeIndex = e.target.value
		 						this.equipmentInfo.type = this.equipmentType[this.typeIndex]
		 						
		 
		 },
		machineRoomIndexPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            
									this.machineRoomIndex = e.target.value
									this.equipmentInfo.machine_room = this.areaInfo[this.machineRoomIndex].room_name
									this.equipmentInfo.system = this.areaInfo[this.machineRoomIndex].location
									this.equipmentInfo.address = this.areaInfo[this.machineRoomIndex].address
									
			
		},
		
		addEquipmentClick(){
			console.log(this.equipmentInfo)
			// 判断三个选择框是否有选择 没有的话赋值默认值
			if(!this.equipmentInfo.department){
				this.equipmentInfo.department = this.departmentInfo[this.departmentIndex]
			}
			if(!this.equipmentInfo.machine_room){
				this.equipmentInfo.machine_room = this.areaInfo[this.machineRoomIndex].room_name
				this.equipmentInfo.system = this.areaInfo[this.machineRoomIndex].location
				this.equipmentInfo.address = this.areaInfo[this.machineRoomIndex].address
			}
			if(!this.equipmentInfo.type){
				this.equipmentInfo.type = this.equipmentType[this.typeIndex]
			}
			this.$emit('addEquipmentClick',this.equipmentInfo)
			
		},
			
		reback(){
			
			uni.navigateBack({
				
			})
		}
	}
	
	
	}
</script>

<style scoped lang="less">
	
		.content{
			display: flex;
			flex-direction: column;
			
			
			background-color: #FFFFFF;
			border-radius: 20rpx;
			margin: 20rpx auto;
			.info{
				width: 100%;
				flex: 1;
				padding: 20rpx;
				.info-item{
					display: flex;
					width: 90%;
					justify-content: space-between;
					padding: 5rpx;
				}
				.info-item-left{
					flex: 3;
				}
				.info-item-right{
					flex:7;
					border-bottom: solid 1rpx #808080;
				}
			}
			
			}
			.operation{
				display: flex;
				height: 120rpx;
				justify-content: space-around;
				align-items: center;
				color: #007AFF;
				font-size: 30rpx;
				.operation-item-left,.operation-item-right{
					flex:1;
					
					text-align: center;
					
					
				}
				.operation-item-left {
					border-right: solid 2rpx #999999;
					}
				
			}
		
		
		
		
</style>
