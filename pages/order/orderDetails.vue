<template>
	<view>
		<view class="bgc_ffe7e6 flex-aic flexr-jsc order_notify_box">
			<text class="font_28 color_ff3b30">待付款：剩23小时15分钟自动关闭</text>
		</view>
		<view class="flex-aic flexr-jsb bgc_fff order_address_box m_t_24 m_b_24">
			<image class="order_location_icon m_r_16"
				src="http://www.liwanying.top/applate-icon/location.png" mode=""></image>
			<view class="flex-fitem">
				<text class="color_333 font_28 m_b_4">玲玲领 18888888888</text>
				<view class="text_nowrap color_999 font_24" style="max-width: 500rpx;">江苏省 南京市 雨花台区 云密城</view>
			</view>
		</view>
		<order-goods-item></order-goods-item>
		<view class="bgc_fff m_b_24" style="padding: 0 32rpx;">
			<order-details-item title="商品总价" content="￥9.96"></order-details-item>
			<order-details-item title="优惠卷" color="color_ff7000" content="￥0.00"></order-details-item>
			<order-details-item title="其他优惠" color="color_ff7000" content="￥0.00"></order-details-item>
			<order-details-item title="运费" content="￥0.00"></order-details-item>
			<order-details-item title="订单备注" content="可以保密发货吗"></order-details-item>
			<order-details-item title="订单总价" content="￥9.96"></order-details-item>
			<order-details-item title="实付款" color="color_ff7000" content="￥9.96" size="font_40"></order-details-item>
		</view>
		<view class="bgc_fff" style="padding: 0 32rpx;">
			<order-details-item title="商品总价" content="￥9.96">
				<template #content>
					<view>
						<text class="color_999 m_r_24">FX230204200858240264</text>
						<text class="color_ff7000">复制</text>
					</view>
				</template>
			</order-details-item>
			<order-details-item title="下单时间" color="color_999" content="2023-02-21 12:25:36"></order-details-item>
		</view>
		<view class="order_nav_view">
			<view class="order_nav_box pos_f bgc_fff flex-aic flexr-jfe">
				<!-- <lyz-button @lyzTap="cancelOrder" :btnStyle="{
					padding:'0 16rpx',
					marginRight: '16rpx'
				}" titleSize="28rpx" height="56rpx" titleColor="#333" borderColor="#ddd" backgroundColor="#fff" title="取消订单"></lyz-button> -->
				<lyz-button @lyzTap="toRetreat" :btnStyle="{
					padding:'0 16rpx',
					marginRight: '16rpx'
				}" titleSize="28rpx" height="56rpx" titleColor="#333" borderColor="#ddd" backgroundColor="#fff" title="申请售后"></lyz-button>
				
				<lyz-button @lyzTap="catLogistics" :btnStyle="{
					padding:'0 16rpx',
					marginRight: '16rpx'
				}" titleSize="28rpx" height="56rpx" titleColor="#333" borderColor="#ddd" backgroundColor="#fff" title="查看物流"></lyz-button>
				<lyz-button @lyzTap="toPay" :btnStyle="{
					padding:'0 16rpx',
					marginRight: '32rpx'
				}" titleSize="28rpx" height="56rpx" titleColor="#fe5572" borderColor="#fe5572" backgroundColor="#fff" title="立即付款"></lyz-button>
				<lyz-button @lyzTap="toEvaluate" :btnStyle="{
					padding:'0 16rpx',
					marginRight: '32rpx'
				}" titleSize="28rpx" height="56rpx" titleColor="#fe5572" borderColor="#fe5572" backgroundColor="#fff" title="评价"></lyz-button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import orderGoodsItem from './components/order-goods-item.vue'
	import orderDetailsItem from './components/order-details-item.vue'
	const cancelOrder = () => {
		uni.showModal({
			title: "取消提示",
			content: "是否取消该订单？",
			confirmColor: "#fe5572"
		})
	}
	const toPay = () => {
		uni.navigateTo({
			url: '/pages/orderInfo/orderInfo'
		})
	}
	const toEvaluate = () => {
		uni.navigateTo({
			url: '/pages/evaluate/addEvaluate'
		})
	}
	const toRetreat = () => {
		uni.navigateTo({
			url: '/pages/retreat/retreat'
		})
	}
	const catLogistics = () => {
		uni.navigateTo({
			url: '/pages/logistics/logistics'
		})
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	.order_notify_box {
		height: 68rpx;
	}

	.order_address_box {
		padding: 28rpx 32rpx;
	}

	.order_location_icon {
		width: 40rpx;
		height: 40rpx;
	}
	.order_nav_view {
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
	
	.order_nav_box {
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
