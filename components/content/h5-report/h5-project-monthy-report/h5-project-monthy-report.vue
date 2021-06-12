<template>
	<el-container>
		<el-main>
			<el-table :data="projectMonthyReportInfo">
				<el-table-column prop="month" label="月份" width="80" fixed />
				<el-table-column  label="运营重点指标" align="center">
					<block v-for="(item,index) in Object.keys(targetKeys)" :key="item">
						<el-table-column :prop="targetKeys[item].titleProp" :label="targetKeys[item].title"  show-overflow-tooltip />
						<el-table-column :prop="targetKeys[item].targetProp" :label="targetKeys[item].target"  show-overflow-tooltip />
					</block>
				</el-table-column>
				
			</el-table>
			<button type="default" @click="generate">生成报表</button>
		</el-main>
	</el-container>
</template>

<script>
	import { getChartsInfo	} from "services/database/echarts.js"
	export default{
		name:"H5ProjectMonthyReport",
			
		data(){
			return{
				projectMonthyReportInfo:[],
				targetKeys:{
					"tech_service":{
						title:"技术服务单",
						target:"及时率",
						titleProp:"target_info.tech_service.titleCount",
						targetProp:"target_info.tech_service.targetCount"
					},
					"fault_response":{
						title:"故障响应",
						target:"及时率",
						titleProp:"target_info.fault_response.titleCount",
						targetProp:"target_info.fault_response.targetCount"
					},
					"backbone_network":{
						title:"骨干网设备可用时长",
						target:"及时率",
						titleProp:"target_info.backbone_network.titleCount",
						targetProp:"target_info.backbone_network.targetCount"
					},
					"power_supply":{
						title:"电力系统可用时长",
						target:"及时率",
						titleProp:"target_info.power_supply.titleCount",
						targetProp:"target_info.power_supply.targetCount"
					}
				},
				
			}
		},
		methods:{
			generate(){
				uniCloud.callFunction({
					name: 'generate-pdf',
					data: { a: 1 }
				})
				
			}
		},
		mounted() {
			
			//获取报表数据
			getChartsInfo().then(res=>{
				console.log(res.result.data)
				this.projectMonthyReportInfo = res.result.data
				this
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style>
</style>
