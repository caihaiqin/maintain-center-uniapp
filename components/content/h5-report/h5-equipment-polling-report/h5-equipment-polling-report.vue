<template>
	<view class="content">
		<view class="generate-polling-report">
			<view class="item block">
				<text class="demonstration">日期范围：</text>
				<el-date-picker v-model="pickDate" type="daterange" range-separator="至" start-placeholder="开始日期"
					end-placeholder="结束日期" value-format="yyyy-MM-dd" @change="datePickerChange">
				</el-date-picker>
			</view>
			<view class="item">
				<el-select v-model="department" placeholder="请选择部门" @change="departmentSelect">
					<el-option v-for="item in departmentList" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</view>
			<view class="item">
				<el-select v-model="cycle" placeholder="请选择周期" @change="cycleSelect">
					<el-option v-for="item in cycleList" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</view>
			<view class="item">
				<el-button type="primary" @click="report">生成巡检报告</el-button>
			</view>

		</view>


	</view>
</template>

<script>
	import {
		DEPARTMENT,REPORT_DEPARTMENT,REPORT_CYCLE,CYCLE
	} from "common/constant/constant.js"


	export default {
		name: "H5EquipmentPollingReport",

		data() {
			return {

				pickDate: '',
				department: DEPARTMENT[0].value,
				departmentList: DEPARTMENT,
				cycleList:CYCLE,
				cycle:CYCLE[0].value,
				coverInfo: {
					year: 2021,
					department:REPORT_DEPARTMENT[DEPARTMENT[0].value],
					month: 5,
					type: "周",
					beginDate: '20210501',
					endDate: '20210507'

				}
			}
		},
		mounted() {


		},
		methods: {
			datePickerChange() {
				console.log(this.pickDate)
			},

			departmentSelect() {
				console.log(this.department)
				this.coverInfo.department = REPORT_DEPARTMENT[this.department]
			},
			cycleSelect() {
				console.log(this.cycle)
				
			},
			report() {
				console.log('生成pdf')
				//给报表模板首页信息赋值
				if (this.pickDate) {
					this.coverInfo.beginDate = this.pickDate[0].split('-').join('.')
					this.coverInfo.endDate = this.pickDate[1].split('-').join('.')

					const year = this.pickDate[1].split('-')[0]
					const month = this.pickDate[1].split('-')[1]
					if (year) {
						this.coverInfo.year = year
					}
					if (month) {
						this.coverInfo.month = month
					}

				} else {
					uni.showToast({
						title: '请选择日期范围',
						icon: 'none',

						duration: 1000
					})
					return
				}
				
				this.coverInfo.type = REPORT_CYCLE[this.cycle]
				//巡检报告模板名
				const reportType = `${this.department}${this.cycle}Polling`
				uni.setStorageSync('coverInfo',this.coverInfo)
				uni.navigateTo({
					url: `/pages/h5/equipment-weekly-polling-report/equipment-weekly-polling-report?reportType=${reportType}`,
				
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.content {
		padding: 20rpx;
	}

	.generate-polling-report {
		box-shadow: 0px 0px 10px #CCCCCC;
		padding: 20rpx;
		border-radius: 10rpx;
	}

	.item {
		margin: 20rpx 0;
	}
</style>
