<template>
	<view>
		<view @tap="toAddress" class="flex-aic flexr-jsb bgc_fff address_box m_t_24 m_b_24">
			<image class="location_icon m_r_16"
				src="http://www.liwanying.top/applate-icon/location.png" mode=""></image>
			<!-- <text class="flex-fitem color_333 font_26">请选择收货地址</text> -->
			<view class="flex-fitem">
				<text class="color_333 font_28 m_b_4">玲玲领 18888888888</text>
				<view class="text_nowrap color_999 font_24" style="max-width: 500rpx;">江苏省 南京市 雨花台区 云密城</view>
			</view>
			<image class="address_icon" src="http://www.liwanying.top/applate-icon/gengduo.png"
				mode=""></image>
		</view>
		<order-goods-item></order-goods-item>
		<view class="order_info_box bgc_fff color_333">
			<view class="b_t_2 flex-aic flexr-jsb order_info_item_p24">
				<text class="font_28">运费</text>
				<text class="font_28 font_bold">快递 免邮</text>
			</view>
			<view class="b_t_2 flex-aic flexr-jsb order_info_item_p24">
				<text class="font_28 m_r_16">订单备注</text>
				<input class="font_28 tar flex-fitem" type="text" placeholder="请输入订单备注">
			</view>
			<view class="b_t_2 order_info_item_p24 tar ">
				<text class="font_28">小记：¥</text>
				<text class="font_40">277.00</text>
			</view>
		</view>
		<view class="bgc_fff m_t_24 wx_pay_box m_b_24">
			<view class="color_333 font_28" style="margin-bottom: 32rpx;">支付方式</view>
			<view class="flex-aic flexr-jsb">
				<image class="wx_icon m_r_16"
					src="http://www.liwanying.top/applate-icon/weixinzhifu.png" mode="">
				</image>
				<text class="color_333 font_28 flex-fitem">微信支付</text>
				<image class="wx_select_icon"
					src="http://www.liwanying.top/applate-icon/xuanzhong.png" mode=""></image>
			</view>
		</view>
		<order-info-nav @pay="tapPay"></order-info-nav>
	</view>
</template>

<script setup>
	import orderGoodsItem from './components/order-goods-item.vue'
	import orderInfoNav from './components/order-info-nav.vue'
	const toAddress = () => {
		uni.navigateTo({
			url: '/pages/address/address'
		})
	}
	const tapPay = () => {
		uni.navigateTo({
			url: '/pages/pay/pay'
		})
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	.address_box {
		padding: 28rpx 32rpx;
	}

	.location_icon {
		width: 40rpx;
		height: 40rpx;
	}

	.wx_icon {
		width: 46rpx;
		height: 40rpx;
	}

	.wx_select_icon {
		width: 32rpx;
		height: 32rpx;
	}

	.address_icon {
		width: 12rpx;
		height: 24rpx;
	}

	.order_info_box {
		padding: 0 32rpx;
	}

	.order_info_item_p24 {
		padding: 24rpx 0;
	}

	.wx_pay_box {
		padding: 20rpx 32rpx;
	}
</style>
