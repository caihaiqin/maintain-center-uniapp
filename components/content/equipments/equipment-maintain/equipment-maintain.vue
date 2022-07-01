<template>
	<view class="content">
			<view class="maintain-type">
				<view class="maintain-type-left">
					选择维护类型:
				</view>
				<view class="maintain-type-right">
					<picker @change="bindPickerChange" :value="index" :range="maintainType" range-key="type">
						<view class="uni-input">{{maintainType[index].type}}</view>
					</picker>
				</view>
			</view>
			<view class="maintain-details">
				<textarea :value="maintainDetails" placeholder="请描述异常详情:" class="textarea" @blur="maintainDetailEnter" />
			</view>
		
		<view class="operation">
			<view class="operation-item-left" @click="maintainBackClick">
				<text >返回</text>
			</view>
			<view class="operation-item-right" @click="maintainCommit">
				<text >提交</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {addMaintainResult	} from "@/services/database/maintains.js"
	export default {
		name:"EquipmentMaintain",
		data(){
			return{
				maintainType:[{
					type:"更换配件"
				},{
					type:"例行重启"
				},{
					type:"备份"
				},{
					type:"其他"
				}],
				index:0,
				maintainDetails:"",
				maintainResult:{
					maintainType:"",
					maintainDetails:""
				}
					
			
			}
		},
		methods:{
			//点击返回按钮
			maintainBackClick(){
				this.$emit('maintainBackClick','equipmentMaintain')
			},
			maintainCommit(){
				console.log(this.maintainResult)
					
				addMaintainResult(this.maintainResult).then(res=>{
					console.log(res)
				})
			},
			//选择维护类型
			bindPickerChange(e	){
				console.log(e)
				this.maintainResult.maintainType = this.maintainType[e.detail.value].type
				
			},
			//输入维护详情
			maintainDetailEnter(e){
				console.log(e)
				this.maintainResult.maintainDetails = e.detail.value
			}
		}
	}
</script>

<style scoped lang="less">
	.content{
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		margin: 20rpx auto;
		
		border-radius: 20px;
			
		.maintain-type{
			display: flex;
			
			align-items: center;
			padding: 30rpx;
			border-bottom: solid 1rpx #F1F1F1;
			.uni-input{
				padding: 0 20rpx;
			}
		}
		.maintain-details {
			
			
			
			border-radius: 5rpx;
			margin: 10rpx 0;
		
			.textarea {
				
				padding: 30rpx;
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