<template>
	<view class="content">
		<input class="username info" type="text" v-model="oldPassword" password="true" placeholder="请输入旧密码" />
		<input class="password info" type="text" v-model="newPassword" password="true" placeholder="请输入新密码" />
		<input class="password info" type="text" v-model="confirmPassword" password="true" placeholder="再次输入新密码" />
		<button type="default" @click="changePassword" class="login info">修改密码</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPassword:'',
				newPassword:'',
				confirmPassword:''
			}
		},
		methods: {
			changePassword(){
				
				//验证两次输入的新密码是否一致
					
				if(this.newPassword !== this.confirmPassword){
					uni.showToast({
						title:"两次新密码输入不一致",
						icon:"none"
					})
				}
				
				
				// 调用接口修改密码
				
				uniCloud.callFunction({
					name:"user-center",
					
					data:{
						action:"updatePwd",
						params:{
							oldPassword:this.oldPassword,
							newPassword:this.newPassword
						}
					},
					success:function(res){
						if(res.result.code == 0){
							uni.showToast({
								title: res.result.message,
								icon:"none",
								duration:1000
							});
							uni.removeStorageSync('uni_id_token')
							uni.removeStorageSync('uni_id_token_expired')
							uni.removeStorageSync('user_role')
							uni.removeStorageSync('user_nickname')
							
							setTimeout(()=>{
								uni.navigateTo({
									url:"/pages/login/login"
								})
							},1000)
						}else{
							uni.showToast({
								title: res.result.message,
								icon:"none"
							})
						}
					},
					fail:function(err){
						uni.showToast({
							title: err,
							icon:"none"
						})
					}
					
				})
			}
		}
	}
</script>

<style scoped lang="less">
.content{
		padding: 0 10%;
		
			
			
		.info{
			border: 1px solid #CCCCCC;
			height: 80rpx;
			margin: 30rpx;
			border-radius: 40rpx;
		}
		.username,.password{
			padding-left: 20rpx;
			background-color: #e5f4fb;
		}
		.login{
			line-height: 80rpx;
			background-color: #65b0f7;
			color: #FFFFFF;
		}
	}
</style>
