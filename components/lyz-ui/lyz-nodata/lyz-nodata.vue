<template>
	<view class="no_box" :style="{
    height: height
  }">
		<image :src="imgSrc" mode="aspectFit"></image>
		<view :style="{
			color:color
		}">{{text}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: '#999'
			},
			imgSrc: {
				type: String,
				default: '/static/common/empty.png'
			},
			text: {
				type: String,
				default: '正在开发中，尽请期待……'
			},
			height: {
				type: String,
				default: '550rpx'
			}
		}
	}
</script>

<style scoped lang="scss">
	.no_box {
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		>image {
			width: 440rpx;
			height: 440rpx;
			// margin-bottom: 44rpx;
		}

		>view {
			font-size: 24rpx;
			white-space: pre-wrap;
			color: #888888;
		}
	}
</style>
