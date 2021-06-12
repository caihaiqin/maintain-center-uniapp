<template>
	<view class="content">

		<uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas" ref="uni-ec-canvas" canvas-id="uni-ec-canvas" :ec="ec"
			@inited="inited"></uni-ec-canvas>
	</view>
</template>

<script>
	import uniEcCanvas from "components/common/uni-ec-canvas/uni-ec-canvas.vue"
	export default {
		name:"Report",
		data() {
			return {
				ec: {
					option: {
						legend: {
						        top: 'bottom'
						    },
						    toolbox: {
						        show: false,
						        feature: {
						            mark: {show: true},
						            dataView: {show: true, readOnly: false},
						            restore: {show: true},
						            saveAsImage: {show: true}
						        }
						    },
						    series: [
						        {
						            name: '面积模式',
						            type: 'pie',
						            radius: [10, 50],
						            center: ['50%', '50%'],
						            roseType: 'area',
						            itemStyle: {
						                borderRadius: 8
						            },
						            data: [
						                {value: 40, name: 'rose 1'},
						                {value: 38, name: 'rose 2'},
						                {value: 32, name: 'rose 3'},
						                {value: 30, name: 'rose 4'},
						                {value: 28, name: 'rose 5'},
						                {value: 26, name: 'rose 6'},
						                {value: 22, name: 'rose 7'},
						                {value: 18, name: 'rose 8'}
						            ]
						        }
						    ]
					} //echart 配置项
				}
			}
		}
	,
	components: {
			uniEcCanvas
		},
		methods: {
			inited(chart) {
				console.log('图表初始化完毕')
				console.log('chart实例', chart)
			}
		},
		onLoad: () => {


		}
	}
</script>

<style scoped lang="less">
	.content{
		width: 100%;
		height: 100%;
	}
	.uni-ec-canvas {
		width: 100%;
		height: 100%;
		display: block;
		}
</style>
