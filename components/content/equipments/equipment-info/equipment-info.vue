<template>
	<view class="content">
	
		<view class="info">
			<block v-for="(value,index) in fields" :key = "value">
				<view class="info-item" >
					<text class="info-item-left">{{value[1]}}:</text>
					<text class="info-item-right">{{equipmentInfo[0][value[0]]}}</text>
				</view>
			</block>
			
		</view>
		<view class="map_container">
			<map class="map" 
			:latitude="latitude" 
			:longitude="longitude" 
			show-location="true"
			:markers="markers"
			:circles="markers"
			@markertap="markertapClick"
			></map>
		</view>
		<view class="operation">
			<view class="operation-item-left" @click="pollingClick">
				<text >巡检</text>
			</view>
			<view class="operation-item-right" @click="maintainClick">
				<text>维护</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		name:"EquipmentInfo",
			
		data(){
			return {
				circles:[]
			}
		},
		props:{
			equipmentInfo:{
				type:Array
			},
			fields:{
				type:Array
			},
			markers:{
				type:Array
			},
			latitude:{
				type:String
			},
			longitude:{
				type:String
			}
		},
	methods:{
		pollingClick(){
			
			this.$emit('pollingClick')
		},
		maintainClick(){
			this.$emit('maintainClick')
		},
		markertapClick(e){
			console.log(e)
			const markerId = e.detail.markerId
			for (let item of this.markers) {
				if(item.id === markerId){
					let lat = item.latitude
					let lon = item.longitude
					let name = item.callout.content
					uni.openLocation({
						latitude:lat,
						longitude:lon,
						name:name,
						success: (res) => {
							console.log(res)
						},
						fail: (err) => {
							console.log(err)
						}
					})
				}
				break
			}
			
		}
	},
	onLoad: () => {
		
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
					justify-content: space-between;
					padding: 5rpx;
				}
				.info-item-left{
					flex: 3;
				}
				.info-item-right{
					flex:7;
				}
			}
			.map_container{ 
			    height: 300px; 
			    width: 90%; 
					margin: 0 auto;
			} 
			
			.map { 
			    height: 100%; 
			    width: 100%; 
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
				.operation-item-left{border-right: solid 2rpx #999999;}
				
			}
		}
		
		
		
</style>
