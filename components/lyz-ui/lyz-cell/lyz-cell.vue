<template>
	<view class="cell_box flex-aic flexr-jsb font_28" @tap="tapCell" :class="[bgc]" :style="cellStyle">
		<slot>
			<slot name="title">
				<view class="color_6d7278 font_500">
					{{title}}
				</view>
			</slot>
			<view class="flex-fitem">
				<slot name="content">
				</slot>
			</view>
			<view>
				<slot name="right">
					<uni-icons v-show="isIcon" type="forward" color="#ccc" size="38rpx"></uni-icons>
				</slot>
			</view>
		</slot>
	</view>
</template>

<script setup>
	const emit = defineEmits(['tapCell'])
	let props = defineProps({
		bgc: {
			type: String,
			default: 'bgc_fff'
		},
		title: {
			type: String,
			default: ''
		},
		isIcon: {
			type: Boolean,
			default: true
		},
		cellStyle: {
			type: String,
			default: ''
		}
	})
	const tapCell = () => {
		emit('tapCell')
	}
</script>

<style lang="scss" scoped>
	.cell_box {
		padding: 24rpx 28rpx;
		border-bottom: 2rpx solid #ECEEEF;
	}

	.right_icon {
		width: 32rpx;
		height: 32rpx;
		opacity: 0.3;
	}
</style>
