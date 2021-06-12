<template>
	<view>
		
			<view>
				<switch checked color="#4c9e44" style="transform:scale(0.7)"/ >
				<switch checked color="#d73d34" style="transform:scale(0.7)"/>
				
			</view>

		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'switch 开关'
			}
		},
		methods: {
			switch1Change: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.detail.value)
			},
			switch2Change: function (e) {
				console.log('switch2 发生 change 事件，携带值为', e.detail.value)
			}
		}
	}
</script>

