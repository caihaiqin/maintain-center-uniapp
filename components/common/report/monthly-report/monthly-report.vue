<template>
	<view class="content">
		<view class="placeholder">
			<text></text>
		</view>
		
		<uni-transition class="menu-select" :mode-class="['slide-top']"  :show="menuShow">
			<view class="tab-nav-content">
				<block v-for="(item,index) in title" :key="item">
					<view class="tab-nav-item" :key="item" @click="()=>{tabNavClick(index)}">
						<view>{{item}}</view>
					</view>
				</block>
			</view>
		</uni-transition>
		<view class="tab uni-flex" v-if="barShow" >
			<view class="prev uni-flex" @click="prevClick">
				<view class="iconfont icon-shangyige"></view>
				<view>上一页</view>
			</view>
			<view class="menu uni-flex flex-center" @click="showMenu">
				<view class="iconfont icon-liebiaoqingdan"></view>
			</view>
			<view class="next uni-flex" @click="nextClick">
				<view>下一页</view>
				<view class="iconfont icon-xiayige"></view>
			</view>
		</view>
		<view class="tab uni-flex" v-if="!barShow">
			<view class="prev uni-flex" @click="prevClick">
				<view class="iconfont icon-shangyige"></view>
				<view>上一页</view>
			</view>
			<view class="menu uni-flex flex-center" @click="showMenu">
				<view class="iconfont icon-caidan"></view>
			</view>
			<view class="next uni-flex" @click="nextClick">
				<view>下一页</view>
				<view class="iconfont icon-xiayige"></view>
			</view>
		</view>
		
		<view class="monthly-report-target" v-if="isShowIndex===0">
			<monthly-report-target :reportData="reportData"></monthly-report-target>
		</view>
		<view class="monthly-report-services" v-if="isShowIndex===1">
			<monthly-report-services :reportData="reportData"></monthly-report-services>
		</view>
		<view class="monthly-report-maintenance" v-if="isShowIndex===2">
			<monthly-report-maintenance :reportData="reportData"></monthly-report-maintenance>
		</view>
		<view class="monthly-report-special" v-if="isShowIndex===3">
			<monthly-report-special :reportData="reportData"></monthly-report-special>
		</view>
		
	</view>
</template>

<script>
	import UniTransition from "components/common/uni-transition/uni-transition.vue"
	import MonthlyReportTarget from "./monthly-report-target/monthly-report-target.vue"
	import MonthlyReportServices from "./monthly-report-services/monthly-report-services.vue"
	import MonthlyReportMaintenance from "./monthly-report-maintenance/monthly-report-maintenance.vue"
	import MonthlyReportSpecial from "./monthly-report-special/monthly-report-special.vue"
	
	import {getChartsInfo } from "services/database/echarts.js"
	export default {
		name: "MonthlyReport",
		data() {
			return {
				barShow:true,
				menuShow:false,
				isShowIndex:0,
				title:['运营重点指标','服务支撑情况','运维情况分析','专项工作'],
				reportData:{}
			}
		},
		components: {
			MonthlyReportTarget,
			MonthlyReportServices,
			MonthlyReportMaintenance,
			MonthlyReportSpecial,
			UniTransition
		},
		methods: {
			nextClick(){
				this.isShowIndex = (this.isShowIndex +1)%4
			},
			prevClick(){
			if(this.isShowIndex==0){
				return 
			}
			this.isShowIndex = (this.isShowIndex -1)%4
		},
		showMenu(){
			this.menuShow = !this.menuShow
		},
		tabNavClick(index){
			this.isShowIndex = index
			this.menuShow = !this.menuShow
		}
		},
		mounted: function() {
				getChartsInfo().then(res=>{
					console.log('报表数据',res.result.data[0])
					this.reportData = res.result.data[0]
				})
		}
	}
</script>

<style scoped lang="less">
 .content{
		.placeholder{
			height: 80rpx;
		}
	 .tab{
		 background-color: #FFFFFF!important;
		position: fixed;
		 top: 0;
		 left: 0;
		 right: 0;
		 height: 80rpx;
		
	 }
	
	 .prev{
		 justify-content: space-between;
		 
	 }
	 .prev,.next{
		 width: 200rpx;
		 
		 justify-content: center;
		 align-items: center;
	 }
	 .menu{
		 flex: 1;
	 }
	 .menu-select{
		
		 position: fixed;
		 left: 0;
		 right: 0;
		 top:80rpx;
		 
	 }
	 .tab-nav-content{
		 
		 display: flex;
		 justify-content: space-evenly;
		 box-shadow:0px 0px 10px #CCCCCC;
	 }
	 .tab-nav-item{
	 		
	 		padding: 10rpx 0;
			
	 }
 }
</style>
