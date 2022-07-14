<template>
	<view class="content">
		<view class="dialog">
			<view class="logo">
				<image src="/static/img/login/logo.png" mode="aspectFill"></image>
			</view>
			<view class="">
				<view class="input-item">
					<image class="input-item-image" src="/static/img/login/username.png" mode="aspectFill"></image>
					<input class="username info" type="text" v-model="username" placeholder="请输入用户名" />
				</view>
				<view class="input-item">
					<image class="input-item-image" src="/static/img/login/password.png" mode="aspectFill"></image>
					<input class="password info" type="text" v-model="password" password="true" placeholder="请输入密码" />
				</view>
				<view class="input-item">
					<image class="input-item-image" src="/static/img/login/phonenum.png" mode="aspectFill"></image>
					<input class="phone info" type="text" v-model="phonenum" placeholder="请输入手机号" />
					<button type="default" class="getcode" :class="{isDisabled:isGetCodeDisable}" @click="getCodeClick" :disabled="isGetCodeDisable">{{getCodeText}}</button>
				</view>
				<view class="input-item">
					<image class="input-item-image" src="/static/img/login/code.png" mode="aspectFill"></image>
					<input class="code info" type="text" v-model="inputCode" placeholder="验证码" />
				</view>
			</view>
			<!-- #ifndef H5 -->
			<button type="default" @click="loginNotH5" class="login">登录</button>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<button type="default" @click="loginH5" class="login">登录</button>
			<!-- #endif -->
			
			<!-- <button type="default" @click="register" class="login info">注册</button> -->
		</view>

	</view>
</template>


<script>
	import {SMS_CONFIG} from "common/constant/constant.js"
	import {
		updateUsersProfile,bindUserPhone
	} from "services/database/user.js"

	export default {
		data() {
			return {
				username: '',
				password: '',
				phonenum:'',
				sendCode:'',
				inputCode:'',
				expiresIn:'',
				isGetCodeDisable:false,
				getCodeText:'获取验证码',
				timer:''
				
			}
		},

		methods: {
			
			loginH5:function(){
				this.login()
			},
			loginNotH5:function(){
				//判断是否有输入验证码
				if(!this.inputCode){
					uni.showToast({
						title:"请输入验证码",
						icon:"none"
					})
					return
				}
					
				if(this.inputCode !== this.sendCode){
					uni.showToast({
						title:"验证码不正确",
						icon:"none"
					})
					return
				}
				console.log('当前时间',new Date().getTime())
				console.log('过期时间',this.expiresIn)
				if(new Date().getTime()>this.expiresIn){
					uni.showToast({
						title:"验证码已过期",
						icon:"none"
					})
					return
				}
				
				//验证通过
				this.getUserProfile()
				
				
				},
				getCodeClick:async function(){
					if(this.username.length == 0){
						uni.showToast({
							title:"请输入用户名",
							icon:"none"
						})
						return
					}
					if(this.password.length == 0){
						uni.showToast({
							title:"请输入密码",
							icon:"none"
						})
						return
					}
					
					if(this.phonenum.length == 0){
						uni.showToast({
							title:"请输入手机号",
							icon:"none"
						})
						return
					}
					if(!this.isMobile(this.phonenum)){
						uni.showToast({
							title:"请输入正确手机号",
							icon:"none"
						})
						return
					}
					uni.showToast({
						title:"正在验证，请稍候",
						icon:"none"
					})
					this.checkUserInfo()
				},
			//设置倒计时
			setCountDown:function(){
				
				this.count = 60
				
				this.timer = setInterval(this.countDown,1000)
			},
			countDown:function(){
				
				if(this.count>0){
					this.getCodeText = this.count--
				}else{
					clearInterval(this.timer)
					this.isGetCodeDisable = false
					this.getCodeText = "获取验证码"
				}
			},
			getcode: function(){
				console.log('获取验证码')
				this.isGetCodeDisable = true
				//生成短信验证码
				const randomStr = '00000' + Math.floor(Math.random() * 1000000)
				this.sendCode = randomStr.substring(randomStr.length - 6)
				this.expiresIn = new Date().getTime()+1000*60
				console.log('发送验证码',this.sendCode)
				
				 uniCloud.callFunction({
					 name: 'sendSms',
					 data: {
					 	
					 	params: {
					 		phone: this.phonenum,
					 		code:this.sendCode
					 	}
					 },
					 success:(res)=>{
					 	console.log(res)
						if(res.result.errCode ==0){
							//调用成功 设置过期时间 倒计时
							uni.showToast({
								title:"验证码已发送",
								icon:"none"
							})
							this.expiresIn = new Date().getTime()+1000*60
							console.log(this.expiresIn)
							this.setCountDown()
						}else{
							uni.showToast({
								title:"验证码发送失败，请重试",
								icon:"none"
							})
							this.isGetCodeDisable = false
						}
								
					 },
					 fail:function(err){
					 	console.log(err)
						uni.showToast({
							title:"验证码发送失败，请重试",
							icon:"none"
						})
						this.isGetCodeDisable = false
					 }
					 
				 }) 
			},
			// 验证短信验证码
			verityCode:function(){
				
			},
			bindPhone: function(username,phonenum){
					bindUserPhone(username,phonenum).then(res=>{
					console.log('绑定res',res)
					if(res.result.updated == 1){
						//判断更新条数是否为1
						uni.showToast({
							title:"绑定成功",
							icon:"none"
						})
						//绑定成功
						console.log('发送验证码')
						this.getcode()
						
					}else{
						uni.showToast({
							title:"绑定失败，请重试",
							icon:"none"
						})
					}
				}).catch(err=>{
						
					uni.showToast({
						title:"绑定失败，请重试",
						icon:"none"
					})
				})
				},
			isMobile:function(mobile) {  
			  return /^1[3-9]\d{9}$/.test(mobile)
			},
			checkUserInfo:async function(){
			console.log('验证用户名 密码 手机号')
				
			const res =await uniCloud.callFunction({
					name: 'user-center',
					data: {
						action: "login",
						params: {
							username: this.username,
							password: this.password,
							needPermission: true
						}
				
					}
					})
						
						if (res.result.code == 0) {
							console.log('用户密码验证成功')
							const userInfo = res.result.userInfo
							//判断是否有绑定手机号
							
							if(userInfo.phonenum){
								if(userInfo.phonenum===this.phonenum){
									//手机号已绑定且正确，发送验证码
									console.log('发送验证码')
									this.getcode()
								}else{
									uni.showToast({
										icon: "none",
										title: "手机号非绑定号码"
									})
								}
							}else{
								//未绑定手机号
								console.log('手机号未绑定')
								uni.showModal({
									content:"手机号未绑定，是否绑定该手机号",
									showCancel:true,
									success:res=>{	
											
										if(res.confirm){
											//确定绑定手机号
											this.bindPhone(userInfo.username,this.phonenum)
										}else{
											return
										}
										
									}
									
								})
							}
							
							
							} else {
								//登录不成功
							uni.showToast({
								icon: "none",
								title: res.result.msg
							})
							return false
						}
					
			},
			getUserProfile: function() {
				if (uni.getUserProfile) {
					uni.getUserProfile({
						desc: '测试',
						lang: "zh_CN",
						success: res => {
							console.log(res)

							uni.setStorageSync('userProfile', res.userInfo)
						},
						fail: err => {
							console.log(err)
						},
						complete: mes => {
							console.log('mes')
							this.login()

						}
					})
				} else {
					console.log("不支持")
				}
			},
			login: function() {

				uniCloud.callFunction({
					name: 'user-center',
					data: {
						action: "login",
						params: {
							username: this.username,
							password: this.password,
							needPermission: true
						}

					},
					success: function(res) {
						console.log(res)
						if (res.result.code == 0) {
							const userInfo = res.result.userInfo
							const userId = res.result.uid
							delete userInfo.password
							//更新用户头像和微信名称
							// #ifndef H5
							const userProfile = uni.getStorageSync('userProfile')
							updateUsersProfile(userInfo.username, {
								avatarUrl: userProfile.avatarUrl,
								wxname: userProfile.nickName
							}).then(res => {
								console.log('更新成功')
							}).catch(err => {
								console.log('更新失败', err)
							})
							// #endif
							
							
							
							uni.setStorageSync('user_info', userInfo)
							uni.setStorageSync('uni_id_token', res.result.token)
							uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
							uni.setStorageSync('user_role', res.result.userInfo.role)
							uni.setStorageSync('user_nickname', res.result.userInfo.nickname)
							
							
							console.log('登录成功')
							uni.showToast({
								title: '登录成功'
							})
							uni.switchTab({
								url: "../index/index"
							})
						} else {
							uni.showToast({
								icon: "none",
								title: res.result.msg
							})
						}
					},
					fail: function(err) {
						// console.log(err)
						uni.showToast({
							icon: "none",
							title: "登录失败"
						})
					}
				})
			},
			register() {
				uniCloud.callFunction({
					name: 'user-center',
					data: {
						action: 'register',
						params: {
							username: this.username,
							password: this.password,
							needPermission: true
						}
					},
					success(res) {
						uni.showModal({
							showCancel: false,
							content: JSON.stringify(res.result.message)
						})
						uni.setStorageSync('uni_id_token', res.result.token)
						uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
						uni.setStorageSync('user_role', res.result.userInfo.role)
						uni.setStorageSync('user_nickname', res.result.userInfo.nickname)
					},
					fail(e) {
						console.error(e)
						uni.showModal({
							showCancel: false,
							content: '注册失败，请稍后再试'
						})
					}
				})
			}

		},

	}
</script>

<style>
	page {
		background-color: #F7F7F7;
	}
</style>
<style scoped lang="less">
	.content {



		.dialog {
			position: absolute;

			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 80%;

			padding: 20rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			box-shadow: 0px 0px 20px #CCCCCC;
			opacity: .9;

			.logo {
				width: 100%;

				image {
					width: 100%;
				}

			}

			.input-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 30rpx;
				border-bottom: 1px solid #CCCCCC;
			}

			.input-item-image {
				width: 40rpx;
				height: 40rpx;
			}

		}


		.info {

			height: 80rpx;
			flex: 1;


		}

		.username,
		.password ,.phone,.code{
			padding-left: 20rpx;

		}
			
		.getcode{
			width: 180rpx;
		}

		.login {
			width: 100%;
			line-height: 80rpx;
			background-color: #65b0f7;
			color: #FFFFFF;
			margin-top: 80rpx;

		}
			
		.getcode{
			
			background-color: #65b0f7;
			color: #FFFFFF;
			font-size: 20rpx;
			
		}
		.isDisabled{
			background-color:rgba(33, 35, 30,.5);
			
			
			
		}
	}
</style>
