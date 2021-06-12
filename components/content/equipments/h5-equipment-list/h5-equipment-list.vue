<template>

	<el-container>

		<el-main>
			<el-table :data="equipmentData">
				<el-table-column prop="department" label="部门" width="80" fixed />
				<el-table-column prop="system" label="区域" width="100" show-overflow-tooltip />
				<el-table-column prop="maintenance" label="状态" width="80" show-overflow-tooltip />
				<el-table-column prop="machine_room" label="机房" width="140" show-overflow-tooltip />
				<el-table-column prop="address" label="地址" width="180" show-overflow-tooltip />
				<el-table-column prop="cabinet" label="机柜" width="100" show-overflow-tooltip />
				<el-table-column prop="name" label="设备名称" width="200" show-overflow-tooltip />
				<el-table-column prop="model" label="型号" width="180" show-overflow-tooltip />
				<el-table-column prop="producer" label="厂家" width="100" show-overflow-tooltip />
				<el-table-column prop="type" label="类型" width="100" show-overflow-tooltip />
				<el-table-column prop="serial_number" label="序列号" width="300" show-overflow-tooltip />
				<el-table-column prop="versions" label="版本" width="200" show-overflow-tooltip />
				<el-table-column prop="manage_ip" label="管理地址" width="160" show-overflow-tooltip />
				<el-table-column prop="grade" label="等级" width="80" show-overflow-tooltip />
				<el-table-column prop="form" label="所属网络" width="80" show-overflow-tooltip />
				<el-table-column prop="power_supply" label="电源" width="80" show-overflow-tooltip />
				<el-table-column label="操作" fixed="right" width="120">
				
					<template slot-scope="scope">
						<el-button icon="el-icon-edit" size="mini" type="primary"
							@click="handleEdit(scope.$index, scope.row)"></el-button>
						<el-button icon="el-icon-delete" size="mini" type="danger"
							@click="handleDelete(scope.$index, scope.row)"></el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination @prev-click='prevPage' @next-click='nextPage' @current-change="handleCurrentChange"
				:page-size="pageSize" small layout="total, prev, pager, next" :total="total">
			</el-pagination>
		</el-main>
		<el-dialog
		  title="修改资料"
		  :visible.sync="modifyDialogVisible"
		  width="60%"
		  center>
		  <el-form :model="newEquipmentInfo" label-position="right" label-width="200rpx">
				<view class="uni-flex equipment-info-form">
					<view class="equipment-info-item ">
						<block v-for="(item,index) in equipmentInfo" :key="item.key">
								<el-form-item :label="item.title" :key="item.key" v-if="index%2==0" >
								  <el-input v-model="newEquipmentInfo[item.key]" autocomplete="off" ></el-input>
								</el-form-item>
						</block>
					</view>
					<view class="equipment-info-item">
						<block v-for="(item,index) in equipmentInfo" :key="item.key">
								<el-form-item :label="item.title" :key="item.key" v-if="index%2==1" >
								  <el-input v-model="newEquipmentInfo[item.key]" autocomplete="off"></el-input>
								</el-form-item>
						</block>
					</view>
				</view>
		    </el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="modifyDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="modifyDialogCommit">确 定</el-button>
		  </span>
		</el-dialog>

	</el-container>

</template>

<script>
	import {
		PAGE_SIZE
	} from "common/constant/constant.js"
	
	import {
		getEquipmentInfo,
		getEquipmentCount,
		updateEquipmentInfoBySerialNum,
		deleteEquipmentInfoById
	} from "services/database/equipments.js"
	export default {
		name: "H5EquipmentList",
		data() {

			return {
				equipmentData: [],
				currentPage: 1,
				total: 0,
				pageSize: PAGE_SIZE,
				modifyDialogVisible:false,
				newEquipmentInfo:{},
				equipmentInfo: [{
						key: "department",
						title: "部门",
						value: ""
					},
					{
						key: "system",
						title: "所属系统",
						value: ""
					},
					{
						key: "maintenance",
						title: "维保",
						value: ""
					}, {
						key: "machine_room",
						title: "机房",
						value: ""
					}, {
						key: "address",
						title: "机房地址",
						value: ""
					}, {
						key: "cabinet",
						title: "机柜",
						value: ""
					},
					{
						key: "name",
						title: "设备名称",
						value: ""
					}, {
						key: "type",
						title: "设备类型",
						value: ""
					}, {
						key: "model",
						title: "设备型号",
						value: ""
					}, {
						key: "producer",
						title: "生产商",
						value: ""
					}, {
						key: "serial_number",
						title: "序列号",
						value: ""
					}, {
						key: "versions",
						title: "软件版本",
						value: ""
					}, {
						key: "manage_ip",
						title: "管理IP",
						value: ""
					}, {
						key: "heap_number",
						title: "堆叠数量",
						value: ""
					}, {
						key: "grade",
						title: "设备等级",
						value: ""
					}, {
						key: "form",
						title: "网络结构",
						value: ""
					}, {
						key: "remarks",
						title: "备注",
						value: ""
					}, {
						key: "power_supply",
						title: "电源",
						value: ""
					}
				]

			}
		},
		mounted: function() {

			getEquipmentInfo(1).then(res => {

					this.equipmentData = res.result.data
				}),
				getEquipmentCount().then(res => {

					this.total = res.result.total
				})
		},
		methods: {
				
			modifyDialogCommit(){
				console.log(this.newEquipmentInfo)
				
				delete this.newEquipmentInfo._id
				updateEquipmentInfoBySerialNum(this.newEquipmentInfo.serial_number,this.newEquipmentInfo).then(res=>{
					console.log(res)
				
						//隐藏对话框
						this.modifyDialogVisible = false
						//获取新的数据列表
						getEquipmentInfo(this.currentPage).then(res => {
							console.log(res.result.data)
							this.equipmentData = res.result.data
						})
						//弹出提示
						this.$notify({
							title: '修改成功',
							duration: 2000,
							type: 'success',
							position: 'bottom-right'
						})
						
					
				}).catch(err=>console.log(err))
			},
			handleEdit(index, row) {
				console.log(index, row)
				this.newEquipmentInfo = row
				this.modifyDialogVisible = true
				
			},
			handleDelete(index, row) {
				console.log(index, row)
				deleteEquipmentInfoById(row._id).then(res => {
					console.log(res)
					console.log(this.currentPage)
					getEquipmentInfo(this.currentPage).then(res => {
						console.log(res.result.data)
						this.equipmentData = res.result.data
					})
					getEquipmentCount().then(res => {

						this.total = res.result.total
					})
				}).catch(err => {
					console.log(err)
				})
			},
			prevPage(e) {
				this.currentPage = e
				getEquipmentInfo(e).then(res => {
					console.log(res.result.data)
					this.equipmentData = res.result.data
				})
			},
			nextPage(e) {
				this.currentPage = e
				getEquipmentInfo(e).then(res => {
					console.log(res.result.data)
					this.equipmentData = res.result.data
				})
			},
			handleCurrentChange(e) {
				this.currentPage = e
				console.log(e)
				getEquipmentInfo(e).then(res => {
					console.log(res.result.data)
					this.equipmentData = res.result.data
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.equipment-info-form{
		justify-content: space-evenly;
	}
</style>
