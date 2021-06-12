<template>
	<view class="main">
		<block v-for="(item,index) in serviceInfo" :key="item.id">
			<view class="service-item" @click="serviceItemClick(index)">
				<service-item :serviceName=item.name :serviceImg="item.img"></service-item>
			</view>
		</block>
		
		
	</view>
</template>

<script>
	import ServiceItem from "./service-item.vue"
	import {checkPermission } from "utils/user.utiles.js"
export default{
	name:"Service",
	components:{ServiceItem},
	
		props:{
				
			serviceInfo:{
				type:Array,
				required:true
			}
		},
	data(){
			
		return {
			
		}
	},
	mounted: function(){
		console.log("service挂载")
		console.log(this.serviceInfo)
		
	},
		
	methods:{
			
		serviceItemClick(index){
			console.log(index);
			const role = uni.getStorageSync('user_role')
			if(checkPermission(role,this.serviceInfo[index].id)){
				
				const url = `/pages/${this.serviceInfo[index].id}/home/home`;
				console.log(url);
				uni.navigateTo({
					url:url,
					success: res => {},fail: (e) => {console.log(e)},complete: () => {}
				})
			}else{
				uni.showToast({
					title:"无权限访问",
					icon:"none"
				})
			}
			
			
		}
	}
	
}
</script>

<style lang="less" scoped>
		
	.main{
		display: flex;
		justify-content: space-around;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		flex-wrap: wrap;
		padding: 20rpx 0;
			
		.service-item{
			height: 120rpx;
		}	
		
		
	}
</style>
