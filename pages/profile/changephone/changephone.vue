<template>
	<view class="content">
		<input class="phone info" type="text" v-model="newPhone" placeholder="请输入新手机号" />
		<button type="default" @click="changePhone" class="change-phone info">修改绑定手机</button>
		
	</view>
</template>

<script>
	import {bindUserPhone} from "services/database/user.js"
	export default {
		data() {
			return {
				newPhone:''
			}
		},
		methods: {
			isMobile(mobile) {
			  return /^1[3-9]\d{9}$/.test(mobile)
			},
			changePhone(){
					
				if(this.newPhone.length ==0){
					uni.showToast({
						title:"请输入手机号",
						icon:'none'
					})
					return
				}
				if(!this.isMobile(this.newPhone)){
					uni.showToast({
						title:"请输入正确手机号",
						icon:'none'
					})
					return
				}
				const userInfo = uni.getStorageSync('user_info')
				
				bindUserPhone(userInfo.username,this.newPhone).then(res=>{
					console.log(res)
						
					if(res.result.updated==1){
						uni.showToast({
							title:"修改绑定成功",
							icon:'none'
						})
					}
					if(res.result.updated==0){
						uni.showToast({
							title:"新旧手机号相同",
							icon:'none'
						})
					}
					
				}).catch(err=>{
					console.log(err)
					uni.showToast({
						title:"修改绑定失败",
						icon:'none'
					})
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
		.phone{
			padding-left: 20rpx;
			background-color: #e5f4fb;
		}
		.change-phone{
			line-height: 80rpx;
			background-color: #65b0f7;
			color: #FFFFFF;
		}
	}
</style>
