<template>
	<view class="tag_box font_24 tac text_nowrap" :style="{
		borderColor:borderColor,
		color:titleColor,
		backgroundColor:backgroundColor,
		...tagStyle
	}">
		<text :style="{
			fontSize:titleSize
		}">{{title}}</text>
	</view>
</template>

<script setup>
	let props = defineProps({
		title: {
			type: String,
			default: ''
		},
		titleSize:{
			type: String,
			default: ''
		},
		titleColor:{
			type: String,
			default: '#fe5572'
		},
		borderColor:{
			type: String,
			default: '#fe5572'
		},
		backgroundColor:{
			type: String,
			default: '#FFF5EE'
		},
		tagStyle:{
			type: Object,
			default: {}
		},
	});
</script>

<style lang="scss" scoped>
.tag_box {
	display: inline-block;
	padding:0 20rpx;
	height: 40rpx;
	line-height: 40rpx;
	border-radius: 4rpx;
	border: 2rpx solid;
}
</style>
