<template>
	<view>
		<view class="content">
		待开发
			<!-- <view class="uni-title uni-common-pl">选择机房</view>
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						当前选择
					</view>
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
							<view class="uni-input">{{array[index].name}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="polling-list">
				<text>巡检列表</text>
				<block v-for="item in equipmentList">
					<view class="list-item" :key="item.id">
						<list-item :info = "item"></list-item>
					</view>
				</block>
					
				</view>
			</view>-->
		</view> 
	</view>
</template>

<script>
	
	import ListItem from "components/content/quarter-polling/list-item/list-item.vue"
	import {getEquipments} from "services/network/equipment.js"	
	import {getAreaByGroup} from "services/network/area.js"
	
	export default {
		data() {
			return {
				array: [{name:'平台外网'},{name: '灾备中心外网'}, {name:'市委外网'}, {name:'市民中心外网'},{name:'资源中心外网'}],
				index: 0,
				equipmentList:[]

			}
		},
		components:{ListItem},
		methods: {
			bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
									const area = this.array[this.index].name
									getEquipments(area).then(res=>{
										console.log(res)
												this.equipmentList=res.data;
									}).catch(err=>{
										console.log(err)
									})
									
			        }

		},
		onLoad:function(){
			getEquipments(this.array[0].name).then(res=>{
				console.log(res)
						this.equipmentList=res.data;
			}).catch(err=>{
				console.log(err)
			})
			getAreaByGroup(2).then(res=>{
				console.log(res)
				this.array = res.data
				
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style scoped>
	.content{
		padding: 20rpx;
	}
.polling-list{
		
	
	/* background-color: #007AFF; */
}
</style>
