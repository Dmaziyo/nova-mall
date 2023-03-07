<template>
	<view @tap="tapButton" class="ball_box bgc_3c7fff color_fff font_20 flex-aic flexr-jsc" @touchmove.prevent="touchmove" :style="{
		top: clientY+'px'
	}">
		<slot>
			<image style="width: 20rpx;height: 20rpx;margin-right: 8rpx;" src="/static/icon/out-left-icon.png" mode=""></image>
			<text class="font_bold">应用首页</text>
		</slot>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onShow
	} from '@dcloudio/uni-app'
	const emit = defineEmits(['tapButton'])
	let clientY = ref(100)
	const initY = (y) => {
		clientY.value = y
	}
	let minTop = ref(100)
	let maxTop = ref(55)
	onShow(() => {
		const info = uni.getSystemInfoSync()
		minTop.value = uni.upx2px(88) + info.statusBarHeight
		maxTop.value = info.screenHeight - uni.upx2px(60)
		console.log(minTop.value)
		clientY.value = maxTop.value /2
	})
	const touchmove = (event) => {
		if (event.touches[0].clientY < minTop.value) return clientY.value = minTop.value
		if (event.touches[0].clientY > maxTop.value) return clientY.value = maxTop.value
		clientY.value = event.touches[0].clientY
	}
	const tapButton = () => {
		emit('tapButton')
	}
	defineExpose({
		initY
	})
</script>

<style lang="scss" scoped>
	.ball_box {
		position: fixed;
		z-index: 1;
		width: 148rpx;
		right: 0;
		height: 60rpx;
		border-radius: 30rpx 0rpx 0rpx 30rpx;
	}
</style>
