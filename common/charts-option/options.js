const echarts = require("components/common/uni-ec-canvas/echarts.js")

// 服务支撑情况堆叠图配置项
const option1 = {
	color: ["#00DDFF", "#37A2FF", "#d6a892", "#FFBF00"],
	title: {
		// text: "渐变堆叠面积图"
	},
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "cross",
			label: {
				backgroundColor: "#6a7985"
			}
		}
	},
	legend: {
		data: ["电话受理", "技术服务", "绿色通道", "投诉"],
		itemWidth: 10,
		itemHeight: 2,
		textStyle: {
			fontSize: 8
		},
		
	},

	grid: {
		left: "3%",
		right: "4%",
		bottom: "3%",
		containLabel: true
	},
	xAxis: [{
		type: "category",
		boundaryGap: false,
		data: ["11月", "12月", "1月", "2月"]
	}],
	yAxis: [{
		type: "value"
	}],
	series: [{
			name: "电话受理",
			type: "line",
			stack: "总量",
			smooth: true,
			label: {
				show: true,
				position: "top"
			},
			lineStyle: {
				width: 0
			},
			showSymbol: false,
			areaStyle: {
				opacity: 0.8,
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: "rgba(0, 221, 255)"
				}, {
					offset: 1,
					color: "rgba(77, 119, 255)"
				}])
			},
			emphasis: {
				focus: "series"
			},
			data: [1089, 983, 883, 625]
		},
		{
			name: "技术服务",
			type: "line",
			stack: "总量",
			smooth: true,
			label: {
				show: true,
				position: "top"
			},
			lineStyle: {
				width: 0
			},
			showSymbol: false,
			areaStyle: {
				opacity: 0.8,
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: "rgba(55, 162, 255)"
				}, {
					offset: 1,
					color: "rgba(116, 21, 219)"
				}])
			},
			emphasis: {
				focus: "series"
			},
			data: [328, 312, 291, 217]
		},
		{
			name: "绿色通道",
			type: "line",
			stack: "总量",
			smooth: true,
			label: {
				show: true,
				position: "top"
			},
			lineStyle: {
				width: 0
			},
			showSymbol: false,
			areaStyle: {
				opacity: 0.8,
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,

					color: "rgba(214, 168, 146)"
				}, {
					offset: 1,
					color: "rgba(135, 0, 157)"
				}])
			},
			emphasis: {
				focus: "series"
			},
			data: [45, 28, 39, 35]
		},
		{
			name: "投诉",
			type: "line",
			stack: "总量",
			smooth: true,
			label: {
				show: true,
				position: "top"
			},
			lineStyle: {
				width: 0
			},
			showSymbol: false,
			areaStyle: {
				opacity: 0.8,
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: "rgba(255, 191, 0)"
				}, {
					offset: 1,
					color: "rgba(224, 62, 76)"
				}])
			},
			emphasis: {
				focus: "series"
			},
			data: [0, 0, 0, 0]
		}

	]
};
// 服务支撑情况柱状图配置项
const ServicesChartsOptionShadow = {
	color: ["#00DDFF", "#37A2FF", "#d6a892", "#FFBF00"],
	animation:false,
	tooltip: {
		trigger: "axis",
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: "shadow" // 默认为直线，可选为："line" | "shadow"
		}
	},
	legend: {
		data: ["电话受理", "技术服务", "绿色通道", "投诉"],
		itemWidth: 10,
		itemHeight: 2,
		textStyle: {
			fontSize: 10
		}
	},
	grid: {
		left: "3%",
		right: "4%",
		bottom: "3%",
		containLabel: true
	},
	xAxis: [{
		type: "category",
		data: ["11月", "12月", "1月", "2月"]
	}],
	yAxis: [{
		type: "value"
	}],
	series: [

		{
			name: "电话受理",
			type: "bar",
			stack: "技术服务单",
			label: {
				show: true,
				position: "inside"
			},
			data: [1089, 983, 883, 625]
		},
		{
			name: "技术服务",
			type: "bar",
			stack: "技术服务单",
			label: {
				show: true,
				position: "inside"
			},
			data: [328, 312, 291, 217]
		},
		{
			name: "绿色通道",
			type: "bar",
			stack: "技术服务单",
			label: {
				show: true,
				position: "inside"
			},
			data: [45, 28, 39, 35]
		},
		{
			name: "投诉",
			type: "bar",
			stack: "技术服务单",
			label: {
				show: true,
				position: "inside"
			},
			data: [0, 0, 0, 0]
		},


	]
}

// 网络流量柱状图Option
let labelOption = {
	show: true,
	rotate: 1,
	align: "center",
	verticalAlign: "bottom",
	position: "top",
	distance: 3,

	fontSize: 8,
	rich: {
		name: {}
	}
};
let textStyle = {
	fontSize: 8
}
const flowOption = {
	color: ["#5a6fc0", "#b4dd9d", "#f2ca6b"],
	animation:false,
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "shadow"
		}
	},
	legend: {
		data: ["流入峰值(Mbps)", "流出峰值(Mbps)", "平均(Mbps)"],
		itemWidth: 10,
		itemHeight: 2,
		textStyle: {
			fontSize: 8
		}
	},

	xAxis: [{
		type: "category",
		axisTick: {
			show: false
		},
		axisLabel: {
			interval: 0,
			rotate: 20
		},

		// data:["4G","联通600M","联通1G","","",""]
		data: [{
				value: "市民中心(4G)",
				textStyle: textStyle
			}, {
				value: "市民中心(联通600M)",
				textStyle: textStyle
			}, {
				value: "市民中心(联通1G)",
				textStyle: textStyle
			},
			{
				value: "市民中心-教育网500M",
				textStyle: textStyle
			},
			{
				value: "市民中心-APN100M",
				textStyle: textStyle
			},
			{
				value: "灾备中心-电信4G",
				textStyle: textStyle
			}
		]
	}],
	yAxis: [{
		type: "value",
		axisLabel: {
			interval: 0,
			fontSize: 8,

		},
	}],
	series: [{
			name: "流入峰值(Mbps)",
			type: "bar",
			barGap: 0,
			label: labelOption,
			emphasis: {
				focus: "series"
			},
			data: [782, 153, 145, 31, 0.217, 3298]
		},
		{
			name: "流出峰值(Mbps)",
			type: "bar",
			label: labelOption,
			emphasis: {
				focus: "series"
			},
			data: [2837, 371, 963, 62, 74, 1464]
		},
		{
			name: "平均(Mbps)",
			type: "bar",
			label: labelOption,
			emphasis: {
				focus: "series"
			},
			data: [820, 81, 238, 12, 56, 845]
		}

	]
};

// 故障责任分类圆环图
const faultTypeOption = {
	color: ["#37A2FF", "#d6a892", "#FFBF00"],
	animation:false,
title:{
		text:"故障责任",
			
		textStyle:{
			fontSize:12,
			color:"#0f0b28",
			
		}
	},
	tooltip: {
		trigger: "item",
		formatter: "{a} <br/>{b}\n{c}\n({d}%)"
	},
	// legend: {
	// 	data: ["第三方", "网络侧", "用户侧"],
	// 	itemWidth: 15,
	// 	itemHeight: 3,
	// 	textStyle: {
	// 		fontSize: 10
	// 	}
	// },
	series: [

		{
			name: "故障责任",
			type: "pie",
			radius: ["30%", "45%"],
			itemStyle: {
				borderRadius: 10,
				borderColor: "#fff",
				borderWidth: 1
			},
			labelLine: {
				length: 15,
			},
			label: {
				formatter: "{b|{b} : }{c}  \n{per|{d}%}",


				rich: {
					a: {
						color: "#6E7079",
						lineHeight: 22,
						align: "center"
					},
					hr: {
						borderColor: "#8C8D8E",
						width: "100%",
						borderWidth: 1,
						height: 0
					},
					b: {
						color: "#4C5058",
						fontSize: 12,
						fontWeight: "bold",
						lineHeight: 22
					},
					per: {
						color: "#fff",
						backgroundColor: "#4C5058",
						padding: [3, 4],
						borderRadius: 4
					}
				}
			},
			data: [{
					value: 2,
					name: "第三方"
				},
				{
					value: 6,
					name: "网络侧"
				},
				{
					value: 8,
					name: "用户侧"
				},

			]
		}
	]
};

// 告警分类饼图
const alarmGroupOption = {
	color: ["#9262af", "#d6a892", "#dc83c9", "#bcdca2"],
	animation:false,
title:{
		text:"告警分布",
			
		textStyle:{
			fontSize:12,
			color:"#0f0b28"
		}
	},
	tooltip: {
		trigger: "item",
		formatter: "{a} <br/>{b}\n{c}\n({d}%)"
	},
	// legend: {
	// 	data: ["机房组", "服务台", "云平台", "网络组"],
	// 	itemWidth: 15,
	// 	itemHeight: 3,
	// 	textStyle: {
	// 		fontSize: 10
	// 	}
	// },
	series: [

		{
			name: "告警分类",
			type: "pie",
			radius: "45%",
			itemStyle: {
				borderRadius: 10,
				borderColor: "#fff",
				borderWidth: 1
			},
			labelLine: {
				length: 15,
			},
			label: {
				formatter: "{b|{b} : }{c}\n{per|{d}%}",


				rich: {
					a: {
						color: "#6E7079",
						lineHeight: 22,
						align: "center"
					},
					hr: {
						borderColor: "#8C8D8E",
						width: "100%",
						borderWidth: 1,
						height: 0
					},
					b: {
						color: "#4C5058",
						fontSize: 12,
						fontWeight: "bold",
						lineHeight: 22
					},
					per: {
						color: "#fff",
						backgroundColor: "#4C5058",
						padding: [3, 4],
						borderRadius: 4
					}
				}
			},
			data: [{
					value: 2,
					name: "机房组"
				},
				{
					value: 6,
					name: "服务台"
				},
				{
					value: 8,
					name: "云平台"
				},
				{
					value: 8,
					name: "网络组"
				},

			]
		}
	]
}

// 告警地点分布饼图
const alarmLocationOption = {
	color: ["#627ad3", "#de6e6a", "#f9dd74", "#bcdca2"],
	animation:false,
	title:{
		text:"机房告警地点",
			
		textStyle:{
			fontSize:12,
			color:"#0f0b28"
		}
	},
	// legend: {
	// 	top: "bottom",
	// 	itemWidth: 15,
	// 	itemHeight: 3,
	// 	textStyle: {
	// 		fontSize: 10
	// 	}
	// },

	series: [{
		name: "面积模式",
		type: "pie",
		radius: [10, 50],
		center: ["50%", "50%"],
		roseType: "radius",
		itemStyle: {
			borderRadius: 10,
			borderColor: "#fff",
			borderWidth: 1
		},
		labelLine: {
			length: 15,
		},
		label: {
			show: true,
			formatter: "{b}: {c}",
			position: "outside"
		},
		data: [{
				value: 3,
				name: "灾备中心"
			},
			{
				value: 2,
				name: "资源中心"
			},
			{
				value: 2,
				name: "同心路"
			},
			{
				value: 1,
				name: "市民中心"
			},

		]
	}]
}

// 机房告警类型分布

const alarmTypeOption = {
	color: ["#ccccfb", "#a4cbcb", "#7198c8", "#f7cea0"],
	animation:false,
	title:{
		text:"机房告警类型",
			
		textStyle:{
			fontSize:12,
			color:"#0f0b28"
		}
	},
	// legend: {
	// 	top: "bottom",
	// 	itemWidth: 15,
	// 	itemHeight: 3,
	// 	textStyle: {
	// 		fontSize: 10
	// 	}
	// },

	series: [{
		name: "面积模式",
		type: "pie",
		radius: [10, 50],
		center: ["50%", "50%"],
		roseType: "area",
		itemStyle: {
			borderRadius: 10,
			borderColor: "#fff",
			borderWidth: 1
		},
		labelLine: {
			length: 15,
		},
		label: {
			show: true,
			formatter: "{b}: {c}",
			position: "outside"
		},
		data: [{
				value: 0,
				name: "消防系统"
			},
			{
				value: 1,
				name: "配电系统"
			},
			{
				value: 1,
				name: "动环系统"
			},
			{
				value: 6,
				name: "空调系统"
			},

		]
	}]
}
export {
	option1,
	ServicesChartsOptionShadow,
	flowOption,
	faultTypeOption,
	alarmTypeOption,
	alarmLocationOption,
	alarmGroupOption

}
