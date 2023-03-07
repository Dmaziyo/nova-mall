<template>
	<view class="order_goods_card" @tap.stop="tapEmit('tapCard')">
		<view class="bgc_fff order_goods_card_item">
			<view class="color_ff7000 font_28 m_b_24">待收货</view>
			<view class="flex m_b_24">
				<image class="order_goods_card_img m_r_24" src="https://img1.baidu.com/it/u=31714559,2974441821&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" mode="aspectFill"></image>
				<view class="flex-fitem">
					<view class="color_333 font_32 text_nowrap" style="max-width: 420rpx;">古驰香水</view>
					<view class="flex-aic flexr-jsb font_24 color_999 m_b_24">
						<text class="text_nowrap" style="max-width: 340rpx;">花香调；花悦绽放30ml</text>
						<text class="font_28">x1</text>
					</view>
					<view class="color_ff0003">
						<text class="font_28">¥</text>
						<text class="font_40">277.00</text>
					</view>
				</view>
			</view>
			<view class="flex-aic flexr-jfe">
				<lyz-button @lyzTap="tapEmit('cancel')" :btnStyle="{
					padding:'0 16rpx',
					marginRight: '16rpx'
				}" titleSize="28rpx" height="56rpx" titleColor="#333" borderColor="#ddd" backgroundColor="#fff" title="取消订单"></lyz-button>
				<lyz-button  @lyzTap="tapEmit('logistics')" :btnStyle="{
					padding:'0 16rpx',
					marginRight: '16rpx'
				}" titleSize="28rpx" height="56rpx" titleColor="#333" borderColor="#ddd" backgroundColor="#fff" title="查看物流"></lyz-button>
				<lyz-button :btnStyle="{
					padding:'0 16rpx',
				}" titleSize="28rpx" height="56rpx" titleColor="#fe5572" borderColor="#fe5572" backgroundColor="#fff" title="确认收货"></lyz-button>
			</view>
		</view>
	</view>
</template>

<script setup>
const emit = defineEmits(['cancel','tapCard','logistics'])
	const tapEmit = (val) => {
		emit(val)
	}
</script>

<style lang="scss" scoped>
	.order_goods_card {
		padding: 24rpx 32rpx 0;
	}

	.order_goods_card_item {
		padding: 24rpx;
		border-radius: 12rpx;
	}
	.order_goods_card_img {
		width: 151rpx;
		height: 152rpx;
		border-radius: 12rpx;
		overflow: hidden;
	}
</style>
