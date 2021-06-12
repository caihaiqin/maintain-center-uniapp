<template>
	<view class="content">
		<el-container>
			<el-header style="text-align: right; font-size: 12px" class="header uni-flex">
				<view class="back iconfont icon-shangyige" @click="backClick">
				</view>
				<view class="uni-flex flex-center">
					<el-dropdown @command="handleCommand">
						<i class="el-icon-setting setting" style="margin-right: 15px;color: #afafaf;"></i>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="changePsw">修改密码</el-dropdown-item>
							<el-dropdown-item command="logout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<span v-if="!wxName" class="name">{{nickName}}</span>
					<span v-if="wxName" class="name">{{wxName}}</span>
					<el-avatar shape="circle" :size="40" fit="contain" :src="avatarUrl" v-if="avatarUrl"></el-avatar>
				</view>
			</el-header>
			<el-dialog title="修改密码" :visible.sync="changePswDialog" center>
				<el-form :model="form">
					<el-form-item label="原密码" :label-width="formLabelWidth">
						<el-input v-model="form.oldPsw" autocomplete="off" show-password></el-input>
					</el-form-item>
					<el-form-item label="新密码" :label-width="formLabelWidth">
						<el-input v-model="form.newPsw" autocomplete="off" show-password></el-input>
					</el-form-item>
					<el-form-item label="确认新密码" :label-width="formLabelWidth">
						<el-input v-model="form.newPswConfirm" autocomplete="off" show-password></el-input>
					</el-form-item>
					<el-form-item label="提示:" :label-width="formLabelWidth" v-if="form.tickMessage">
						<text class="font-size-22" style="color: #FF3333;">{{form.tickMessage}}</text>
					</el-form-item>

				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="changePswDialog = false">取 消</el-button>
					<el-button type="primary" @click="changePswCommit">确 定</el-button>
				</div>
			</el-dialog>
		</el-container>
	</view>
</template>

<script>
	export default {
		name: "H5Header",

		data: function() {
			return {
				changePswDialog: false,
				nickName: "",
				avatarUrl: "",
				wxName: "",
				form: {
					oldPsw: "",
					newPsw: "",
					newPswConfirm: "",
					tickMessage: ""
				},
				formLabelWidth: '120px'

			}
		},
		mounted: function() {

			const userInfo = uni.getStorageSync('user_info')
			this.nickName = userInfo.nickname
			this.avatarUrl = userInfo.avatarUrl
			this.wxName = userInfo.wxname
		},
		methods: {
			changePswCommit() {
				console.log('修改密码提交')
				//验证两次输入的新密码是否一致

				if (this.form.newPsw !== this.form.newPswConfirm) {

					this.form.tickMessage = "两次输入的密码不一致"

					return
				}


				// 调用接口修改密码
				console.log('调用修改接口')
				uniCloud.callFunction({
					name: "user-center",
					data: {
						action: "updatePwd",
						params: {
							oldPassword: this.form.oldPsw,
							newPassword: this.form.newPsw
						}
					},
					success: res => {
						console.log('res', res)
						if (res.result.code == 0) {
							console.log('更新成功')
							uni.removeStorageSync('uni_id_token')
							uni.removeStorageSync('uni_id_token_expired')
							uni.removeStorageSync('user_role')
							uni.removeStorageSync('user_nickname')

							this.changePswDialog = false
							
							this.$notify({
								title: '修改成功',
								duration: 2000,
								type: 'success',
								position: 'bottom-right'
							});
							setTimeout(() => {
								uni.navigateTo({
									url: "/pages/login/login"
								})
							}, 1000)
						} else {
							this.$notify({
								title: '错误',
								duration: 2000,
								type: 'error',
								message: res.result.message,
								position: 'bottom-right'
							});
							console.log(res.result.message)

						}
					},
					fail: function(err) {
						console.log(err)
						this.$notify({
							title: '错误',
							duration: 2000,
							type: 'error',
							message: err,
							position: 'bottom-right'
						});
					}

				})
			},
			backClick() {
				// uni.switchTab({
				// 	url: "/pages/index/index"
				// })
				uni.navigateBack({
					
				})
			},
			handleCommand(command) {
				console.log(command)
				if (command === 'changePsw') {
					this.changePswDialog = true
					this.form = {
					oldPsw: "",
					newPsw: "",
					newPswConfirm: "",
					tickMessage:""
				}
				}
				if (command === 'logout') {
					uniCloud.callFunction({
						name: "user-center",
						data: {
							action: 'logout',

						},
						success: function(res) {
							uni.removeStorageSync('uni_id_token')
							uni.removeStorageSync('uni_id_token_expired')
							uni.removeStorageSync('user_role')
							uni.removeStorageSync('user_nickname')
							uni.removeStorageSync('user_info')
							uni.removeStorageSync('userProfile')
							uni.reLaunch({
								url: "/pages/login/login"
							})



						}
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.el-header {
		justify-content: space-between;
		align-items: center;
		background-color: rgba(51, 51, 51,.95);
		color: #afafaf;
		line-height: 60px;
	}

	.name {
		padding: 0 10rpx;
	}

	.back {
		padding: 20rpx;
	}
	.setting{
		padding: 20rpx;
	}
	.back:hover {
		color: #6FE9D2;
	}
	
</style>
