<template>
	<view class="p_t_24">
		<retreat-goods></retreat-goods>
		<view class="m_t_24 bgc_fff retreat_tools_box">
			<view @tap="toRetreatForm" class="retreat_tools_item flex-aic flexr-jsb b_b_2">
				<image class="m_r_16 retreat_tools_img" src="http://www.liwanying.top/applate-icon/jintuikuan@2x.png" mode=""></image>
				<view class="flex-fitem color_333 font_28">
					<view class="color_333 font_28 m_b_4">仅退款</view>
					<view class="color_999 font_24">未收到货，或与客服协商同意仅退款</view>
				</view>
				<uni-icons color="#ccc" type="forward" size="18"></uni-icons>
			</view>
			<view @tap="toRetreatForm" class="retreat_tools_item flex-aic flexr-jsb b_b_2">
				<image class="m_r_16 retreat_tools_img" src="http://www.liwanying.top/applate-icon/tuihuantuikuan@2x.png" mode=""></image>
				<view class="flex-fitem color_333 font_28">
					<view class="color_333 font_28 m_b_4">退货退款</view>
					<view class="color_999 font_24">已收到货，需要退还已收到的货物</view>
				</view>
				<uni-icons color="#ccc" type="forward" size="18"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	import retreatGoods from './components/retreat-goods.vue'
	const toRetreatForm = () => {
		uni.navigateTo({
			url: '/pages/retreat/retreatForm'
		})
	}
</script>

<style lang="scss">
page {
	background-color: #f8f8f8;
}
.retreat_tools_box {
	padding: 0 32rpx;
}
	.retreat_tools_item {
		padding: 24rpx 0;
	}

	.retreat_tools_img {
		width: 40rpx;
		height: 38rpx;
	}
</style>
