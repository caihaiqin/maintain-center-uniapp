<template>
	<view>
		<h5-header></h5-header>
		<el-container style=" border: 1px solid #eee">
			<el-aside width="200px">
				<el-menu :default-openeds="['1',]" default-active="1-1" background-color="#545c64" text-color="#fff"
					active-text-color="#ffd04b">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-menu"></i>报表管理</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">设备巡检报告</el-menu-item>
							<!-- <el-menu-item index="1-2">设备巡检报告</el-menu-item> -->
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			
			<h5-equipment-polling-report></h5-equipment-polling-report>
		</el-container>
	</view>
</template>

<script>
	import H5Header from "components/common/h5-header/h5-header.vue"
	import H5ProjectMonthyReport from "components/content/h5-report/h5-project-monthy-report/h5-project-monthy-report.vue"
	import H5EquipmentPollingReport from "components/content/h5-report/h5-equipment-polling-report/h5-equipment-polling-report.vue"
	import {getEquipmentAndPollingList} from "services/database/network-equipment-polling.js"
	import {getEquipmentInfoTotal} from "services/database/equipments.js"
	export default {
		data() {
			return {

			}
		},
		components: {
			H5Header,H5ProjectMonthyReport,H5EquipmentPollingReport
		},
		methods: {
			
		},
		onLoad() {
			
		}
	}
</script>

<style>

</style>
