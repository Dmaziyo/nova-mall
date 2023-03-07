<template>
		<view class="steps flexc">
			<view class="steps_item flex" v-for="(item, index) in infoList" :key="index">
				<view class="font_24 color_333 tac" style="padding-top: 18rpx;">
					<slot name="left" :row="item || {}" :index="index"></slot>
				</view>
				<view class="s_r flexc-aic" :style="{marginRight:lineRightMargin,marginLeft:lineLeftMargin}">
					<slot name="icon" :row="item || {}" :index="index">
						<image style="width: 20rpx;height: 20rpx;margin: 20rpx 0;" src="http://www.liwanying.top/applate-icon/location.png" mode=""></image>
					</slot>
					<view class="line flex-fitem" :style="{borderColor:backgroundColor,borderWidth:lineWidth}"></view>
				</view>
				<view class="steps_content flex-fitem">
					<slot name="content" :data="item || {}" :index='index'>
						<view class="steps_content_text">
							{{JSON.stringify(item)}}
						</view>
					</slot>
				</view>
			</view>
		</view>
</template>
<script>
	export default {
		props: {
			infoList: {
				type: Array,
				default: []
			},
			color: {
				type: String,
				default: '#fff'
			},
			backgroundColor: {
				type: String,
				default: '#ff3838'
			},
			lineWidth: {
				type: String,
				default: '2rpx'
			},
			lineLeftMargin: {
				type: String,
				default: '0rpx'
			},
			lineRightMargin:{
				type: String,
				default: '20rpx'
			},
		}
	};
</script>

<style lang="scss" scoped>
	.steps {
	background-color: #fff;
		.steps_item {
			.s_r {
				position: relative;
				.line {
					border-left: 2rpx solid;
				}
				.index {
					width: 16rpx;
					height: 16rpx;
					border-radius: 50rpx;
					margin: 20rpx 0;
				}
			}
		}
	}
	.steps_content {
		// margin-left: 20rpx;
		.steps_content_text {
			padding: 20rpx 24rpx 20rpx 0;
		}
	}
</style>
