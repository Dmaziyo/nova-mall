<template>
	<view>
		<uni-popup ref="popupRef" type="bottom">
			<view class="popup_box bgc_fff boxs_bb">
				<view class="b_b_2 p_b_24 flexr-jsb">
					<image class="goods_chart"
						src="https://img1.baidu.com/it/u=1147992555,4285883113&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
						mode=""></image>
					<view class="color_ff0003 font_40 flex-fitem flex flex-aife"><text
							class="font_28">¥</text><text>277</text></view>
					<image @tap="popupRef.close()" class="goods_close"
						src="http://www.liwanying.top/applate-icon/close.png" mode=""></image>
				</view>
				<view class="b_b_2 p_t_16">
					<view class="color_333 font_28 m_b_16">
						香凋
					</view>
					<lyz-tag title="花香调" :tagStyle="{
						margin: '0 16rpx 16rpx 0'
					}"></lyz-tag>
					<lyz-tag title="花香调" :tagStyle="{
						margin: '0 16rpx 16rpx 0'
					}"></lyz-tag>
				</view>
				<view class="b_b_2">
					<view class="color_333 font_28 m_b_16">
						净含量
					</view>
					<lyz-tag title="30ml" :tagStyle="{
						margin: '0 16rpx 16rpx 0'
					}"></lyz-tag>
					<lyz-tag title="50ml" :tagStyle="{
						margin: '0 16rpx 16rpx 0'
					}"></lyz-tag>
				</view>
				<view class="b_b_2 p_b_24 p_t_24 flexr-jsb flex-aic boxs_bb" style="height: 88rpx;margin-bottom: 32rpx;">
					<text class="font_28 color_333 m_r_8">数量</text>
					<text class="flex-fitem font_24 color_999">库存999</text>
					<!-- <text>库存999</text> -->
					<lyz-input-num :max="99"></lyz-input-num>
				</view>
				<view class="tac">
					<lyz-button width="100%" borderColor="#fe5572" backgroundColor="#fe5572" title="确认"
						@lyzTap="tapBtn"></lyz-button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const emit = defineEmits(['toOrder'])
	let popupRef = ref()
	let props = defineProps({
		num: {
			type: Number,
			default: 0
		},
	})
	const showSku = (val) => {
		popupRef.value.open()
	}
	const tapBtn = () => {
		popupRef.value.close()
		emit('toOrder')
	}
	defineExpose({
		showSku
	})
</script>

<style lang="scss" scoped>
	.popup_box {
		padding: 32rpx 32rpx 8rpx 32rpx;
		border-radius: 16rpx 16rpx 0rpx 0rpx;
	}

	.goods_chart {
		width: 108rpx;
		height: 108rpx;
		border-radius: 6rpx;
		margin-right: 16rpx;
	}

	.goods_close {
		width: 32rpx;
		height: 32rpx;
	}
</style>
