<template>
	<view class="content">

		<!-- <view class="main-title uni-flex flex-center">
			<text class="sequence"></text>
			<text class="main-title-info">设备巡检记录</text>
		</view> -->
	<view class="special-content" :class="{'uni-flex':isFlex}">
		<view class="content-column">
			<block v-for="(item,index) in equipmentPollingInfoList">
				<view class="info-item" :key="item.title"  v-if="index%2==0">
					<equipment-polling-info-card :info="item"></equipment-polling-info-card>
				</view>
			</block>
		</view>
		<view class="content-column">
			<block v-for="(item,index) in equipmentPollingInfoList">
				<view class="info-item" :key="item.title" v-if="index%2==1">
					<equipment-polling-info-card :info="item" ></equipment-polling-info-card>
				</view>
			</block>
		</view>
	</view>
</view>
</template>

<script>
	import EquipmentPollingInfoCard from "components/common/equipment-polling-info-card/equipment-polling-info-card.vue"
	export default{
		name:"EquipmentPollingInfoList",
		components:{EquipmentPollingInfoCard},
		props:{
			equipmentPollingInfoList:{
				type:Array
			}
		},
		data(){
			return{
				isFlex:true,//控制是否分列,
				
				
				infoList:[
					{
						title:"2021年春节通信重保工作",
						subTitle:'',
						context:"提前部署,开展现场安全宣贯、机房巡检隐患排查、系统平台安全检查、组织应急演练等，保障期间安排25人次现场7*24小时值守，定时巡检，做好每日保障情况零报告，春节重保期间系统平稳。",
						imgUrl:['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-848f277d-c3ed-4866-88d9-fa2293f6f8f0/a78abf52-25ea-44ae-ad71-fd748bb32120.png'],
						index:1
					},
					{
						title:"汇聚机房空调修理",
						subTitle:'',
						context:"2月4日汇聚机房日常巡检时发现工商物价汇聚机房空调冷凝管有结冰现象，并及时通知空调维保工程师检修。由维保工程师检查其原因为冷凝管有渗漏雪种的情况，修复渗漏点和补充雪种后恢复正常。",
						imgUrl:['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-848f277d-c3ed-4866-88d9-fa2293f6f8f0/667604ad-47c6-415c-bb60-f6fa65ae9994.png'],
						index:2
					},
					{
						title:"机房设备深度维护",
						subTitle:'',
						context:"2月4日汇聚机房日常巡检时发现工商物价汇聚机房空调冷凝管有结冰现象，并及时通知空调维保工程师检修。由维保工程师检查其原因为冷凝管有渗漏雪种的情况，修复渗漏点和补充雪种后恢复正常。",
						imgUrl:['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-848f277d-c3ed-4866-88d9-fa2293f6f8f0/ca7e9d66-1e74-4054-a5c1-e2dffa355107.png'],
						index:3
					},
					{
						title:"柴油发电机空载测试",
						subTitle:'',
						context:"为确保客户机房的平稳运营，2月机房运维组与维保厂家联合开展了2次机房柴油发电机空载测试，设备运行正常。",
						imgUrl:['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-848f277d-c3ed-4866-88d9-fa2293f6f8f0/594ed360-cafc-41b1-87b3-838c01e2e9dc.png'],
						index:4
					},
					{
						title:"机房月度安全生产检查",
						subTitle:'',
						context:" 为了消除机房基础设备运行安全隐患，有效遏制重大安全事故的发生，驻场运维团队联合客户组织三个值守片区及7个数据中心机房开展春节前节前隐患排查。",
						imgUrl:['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-848f277d-c3ed-4866-88d9-fa2293f6f8f0/2d2443db-bc59-41bc-a85a-6ceb360fa046.png'],
						index:5
					},
					{
						title:"防火墙设备替换割接工作",
						subTitle:'',
						context:"为确保客户网络的稳定运行，2月网络运维组多次凌晨加班加点协助客户完成防火墙设备替换割接工作",
						imgUrl:['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-848f277d-c3ed-4866-88d9-fa2293f6f8f0/6e7fd7ee-37a8-458a-8aee-eb457d7a52ec.png'],
						index:6
					}
				]
			}
		},
		mounted: function() {
			
			
		},
		
	}
</script>

<style scoped lang="less">
	.content{
		
	}
	.special-content{
		
		padding: 20rpx;
		.uni-ec-canvas {
			width: 100%;
			height: 100%;
			display: block;
			}
		.content-column{
			width: 50%;
			display: flex;
			flex-direction: column;
		}
		
	
		.info-item{
			
			margin: 10rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			box-shadow:0px 0px 10px #CCCCCC;
			
		}
	}
</style>
