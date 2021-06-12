<template>
	<view class="user">
		<view class="user-wrap">
			<view class="setting iconfont icon31shezhi"></view>
			<view class="info">
				<image class="avatar" mode="aspectFill" :src="avatarUrl"></image>
				<view class="wxname">{{wxName}}</view>
				<view class="nickname">{{nickName}}</view>
				
			</view>
		</view>
		<view class="order-status">
			<view class="status-wrap">
				<!-- 单元格 -->
				<view class="cell">
					<view class="cell-left">
						<!-- <image class="cell-icon" src="/static/images/user/icon-order.png" mode="aspectFill"></image> -->
						<!-- <view class="cell-text">全部订单</view> -->
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
		
				<!--  -->
				<!-- <view class="status-list">
					<view class="status-item" hover-class="btn-hover" v-for="(item, index) in orderStatusList" :key="index">
						<view class="item-icon" :class="item.icon"></view>
						<view class="item-text">{{ item.name }}</view>
					</view>
				</view> -->
			</view>
		</view>
		
		<view class="com-item">
			<view class="com-wrap">
				<view class="cell" v-for="(item, index) in serverList" :key="item.title" @click="cellClick(index)">
					<view class="cell-left">
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view>
		</view>
		
		
		
		<button class="lgout" type="default" @click="lgout">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
					avatarUrl:'',
					wxName:'',
					nickName: ''
				,
				orderStatusList: [
					{ name: '', icon: 'iconfont icon31daifukuan', status: 10 },
					{ name: '', icon: 'iconfont icon31daifahuo', status: 30 },
					{ name: '', icon: 'iconfont icon31daishouhuo', status: 40 },
					{ name: '', icon: 'iconfont icon31daipingjia', status: 50 },
					{ name: '', icon: 'iconfont icon31yiguanzhudianpu', status: 55 }
				],
				serverList: [
					{
						title: '修改密码',
						icon: '/static/img/user/icon-kefu.png',
						path: '/pages/profile/changepsw/changepsw'
					},
					{
						title: '更改绑定手机',
						icon: '/static/img/user/icon-about.png',
						path: '/pages/profile/changephone/changephone'
					},
					// {
					// 	title: '',
					// 	icon: '/static/img/user/icon-about.png',
					// 	text: '1.0.0'
					// }
				]
			}
		},
		methods: {
				
			
				
			cellClick(index){
				console.log(index)
				uni.navigateTo({
					
					// url:"/pages/profile/changepsw/changepsw"
					url:this.serverList[index].path
				})
			},
				
			lgout(){
				
				uniCloud.callFunction({
					name:"user-center",
					data:{
						action:'logout',
						
					},
					success:function(res){
							uni.removeStorageSync('uni_id_token')
							uni.removeStorageSync('uni_id_token_expired')
							uni.removeStorageSync('user_role')
							uni.removeStorageSync('user_nickname')
							uni.removeStorageSync('user_info')
							uni.removeStorageSync('userProfile')
							uni.reLaunch({
								url:"/pages/login/login"
							})
								
						
						
					}
				})
			}
			
		},
		
		onShow: function(){
			this.nickName = uni.getStorageSync('user_nickname')
			const userProfile = uni.getStorageSync('userProfile')
			if(userProfile){
				
				this.avatarUrl = userProfile.avatarUrl
				this.wxName = userProfile.nickName
			}
			uni.login({
			  provider: 'weixin',
			  success: function (loginRes) {
			    console.log(loginRes);
			  }
			});
			}
	}
</script>

<style scoped lang="less">
	page {
		background: #f2f2f2;
	}
.user {
	.user-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vw;
		padding: 30rpx;
		z-index: 9;
		border-radius: 0 0 20% 20%;
		background: #32b4ea;
		background-size: cover;
		
		.setting {
			color: #fff;
			position: absolute;
			top: 60rpx;
			left: 60rpx;
			font-size: 50rpx;
		}
		.info {
			position: absolute;
			text-align: center;
			.avatar {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
			}
			.wxname,.nickname {
				color: #fff;
				font-size: 28rpx;
			}
		}
	}
	.order-status {
		// z-index: 10;
		padding: 0 20rpx;
		margin-top: -10vw;
		.status-wrap {
			border-radius: 25rpx;
			overflow: hidden;
			.status-list {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				background: #fff;
				padding-top: 30rpx;
				padding-bottom: 30rpx;
				.status-item {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.item-icon {
						line-height: 1;
						font-size: 65rpx;
						color: #bbb;
					}
					.item-text {
						font-size: 28rpx;
						color: #666;
						margin-top: 5rpx;
					}
				}
			}
		}
	}
	.com-item {
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 20rpx;
		.com-wrap {
			border-radius: 25rpx;
			overflow: hidden;
		}
	}
	.cell {
		height: 80rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #f8f8f8;
		&:active {
			background: #f2f2f2;
		}
		&:last-child {
			border-bottom: none !important;
		}
		.cell-left {
			display: flex;
			align-items: center;
			.cell-icon {
				width: 50rpx;
				height: 50rpx;
			}
			.cell-text {
				color: #666;
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}
		.iconfont {
			font-size: 40rpx;
			color: #999;
		}
	}
	.cell {
		height: 80rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #f8f8f8;
		&:active {
			background: #f2f2f2;
		}
		&:last-child {
			border-bottom: none !important;
		}
		.cell-left {
			display: flex;
			align-items: center;
			.cell-icon {
				width: 50rpx;
				height: 50rpx;
			}
			.cell-text {
				color: #666;
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}
		.iconfont {
			font-size: 40rpx;
			color: #999;
		}
	}
	.lgout{
		position: relative;
		bottom: -140rpx;
		
		width: 80%;
		height: 80rpx;
		line-height: 80rpx;
		color: #FFFFFF;
		border-radius: 40rpx;
		background-color: #32b4ea;
	}
	}
</style>
