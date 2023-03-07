<template>
	<view class="card_box bgc_fff boxs_bb" :style="{
		borderRadius:borderRadius,
		width:width,
		...cardStyle
	}">
		<slot name="title">
			<view class="title_box font_32 font_bold boxs_bb" :class="titleColorc">
				{{title}}
			</view>
		</slot>
		<view class="content_box boxs_bb" :style="contentStyle">
			<slot name="content">{{content}}</slot>
		</view>
	</view>
</template>

<script setup>
	let props = defineProps({
		titleColorc: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		content: {
			type: String,
			default: ''
		},
		borderRadius:{
			type: String,
			default: '24rpx'
		},
		cardStyle:{
			type: Object,
			default: {}
		},
		width: {
			type: String,
			default: '100%'
		},
		contentStyle: {
			type: String,
			default: ''
		}
	})
</script>

<style lang="scss" scoped>
	.card_box {
		box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(51, 51, 51, 0.0400);
		margin: 0 auto 16rpx;
		.title_box {
			padding: 26rpx 32rpx;
			border-bottom: 2rpx solid #ECEEEF;
		}
		.content_box {
			padding: 32rpx 32rpx 14rpx;
		}
	}
</style>
