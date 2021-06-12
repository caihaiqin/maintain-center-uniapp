<template>
	<view class="main">
		<button size="mini" @click="addImage">添加照片</button>
		<canvas canvas-id="canvas" :style="{
			width:canvasWidth+'px',height:canvasHeight+'px',position:'absolute',left:'-1000%',top:'-1000%'
		}"></canvas>
		
		<view class="image-content">
			<block v-for="(item,index) in filePaths">
				<view class="image-item" :key="item">
					<image :src="item" mode="aspectFit" @click="previewImg(index)"></image>
				</view>
			</block>
			
		</view>
		
		
		
	</view>
</template>

<script>
	
	
	export default{
		name:"ImageUpload",
		
		data(){
				
			return {
				canvasWidth: '', // 当前图片的宽度
				canvasHeight: '', // 当前图片的高度
				filePaths:[]
			}
		},
		methods:{
				
			
			compressImage:function(index, tempImageArr, compressImageArr) {
				console.log('压缩图片', index, tempImageArr, compressImageArr)
				uni.showLoading({
					title: `图片压缩中${index}/${tempImageArr.length}`,
					mask: true
				})
				if (index < tempImageArr.length) {
					uni.getImageInfo({
						src: tempImageArr[index],
						success: info => {
							// 获取当前图片尺寸，用于设置 Canvas 尺寸
							console.log('info',info)
							this.canvasWidth = info.width
							this.canvasHeight = info.height
							
							// 延迟 100ms 绘制图片，避免首张图片绘制为空白图片
							setTimeout(() => {
								console.log('开始压缩',tempImageArr[index])
								const ctx = uni.createCanvasContext('canvas',this);
								
								ctx.drawImage(tempImageArr[index], 0, 0, info.width, info.height);
								
								//uni.compressImage
								uni.compressImage({
								  src: tempImageArr[index],
								  quality: 10,
									width:"10%",
									height:"10%",
								  success: res => {
								    console.log(res)
										compressImageArr.push(res.tempFilePath);
										index = index + 1;
										this.compressImage(index, tempImageArr,compressImageArr);
								  }
								})
								
								// ctx.draw(false, () => {
								// 	index = index + 1;
									
									
									
									// uni.canvasToTempFilePath({
									// 	canvasId: 'canvas',
									// 	fileType: 'png',
									// 	quality: 0.6,
									// 	destWidth:info.width*0.3,
									// 	destHeight:info.height*0.3,
									// 	success: image => {
									// 		console.log('image',image)
									// 		compressImageArr.push(image.tempFilePath);
											
									// 		this.compressImage(index, tempImageArr,
									// 			compressImageArr);
									// 	},
									// 	fail: err => {
									// 		console.log(err)
									// 	}
									// },this)
								// })
							}, 100);
						}
					})
				} else {
					console.log('压缩完成')
					console.log(compressImageArr)
					//压缩完成 通知父组件
					this.$emit('uploadImg',[],compressImageArr)
					wx.hideLoading();
					
				}
			},
			addImage:function(e){
				console.log("添加图片")
				uni.chooseImage({
					count: 9,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						console.log('添加成功',res)
						
						let newPaths = this.filePaths.concat(res.tempFilePaths)
						

						this.filePaths = newPaths
						console.log('原图片',this.filePaths)
						const compressImageArr = []
						this.compressImage(0,newPaths,compressImageArr)
						
						
					},
					fail: (err) => {
						console.log(err)
					}
				})
			
			},
			previewImg:function(index){
				console.log("预览",index)
				const imgUrl = this.filePaths
				uni.previewImage({
					urls:imgUrl,
					current:index,
					indicator:"number",
					loop:true,
					success: () => {
						console.log("预览",index)
					},
					fail: (err) => {
						console.log("预览图片",err)
					}
				})
			}
		},
				
		
	}
</script>

<style scoped lang="less">
		
	.image-content{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
			
		.image-item {
			border-radius: 30rpx;
			margin: 10rpx;
			width: 50rpx;
			height: 50rpx;
			image{
				width: 50rpx;
			height: 50rpx;
			}
			
		}
		
	}
		
	
</style>
