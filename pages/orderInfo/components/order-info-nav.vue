<template>
	<view class="order_info_nav_view">
		<view class="order_info_nav_box pos_f bgc_fff flex-aic flexr-jfe">
			<text class="color_333 font_28">合计：</text>
			<text class="font_40 color_ff7000">277</text>
			<text class="font_28 color_ff7000 m_r_16">积分</text>
			<lyz-button @lyzTap="tapPay" :btnStyle="{
				marginRight:'32rpx'
			}" borderColor="#fe5572" backgroundColor="#fe5572" title="确定兑换"></lyz-button>
		</view>
	</view>
</template>

<script setup>
	const emit = defineEmits(['pay'])
	const tapPay = () => {
		emit('pay')
	}
</script>

<style lang="scss" scoped>
.order_info_nav_view {
	height: 100rpx;
	width: 100%;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}
.order_info_nav_box {
	bottom: 0;
	left: 0;
	right: 0;
	height: 100rpx;
	width: 100%;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}
</style>