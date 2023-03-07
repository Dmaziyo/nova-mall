<template>
	<view>
		<!-- <view>
			<view class="pay_view flex-aic flexr-jsc m_b_24">
				<view class="pay_box flex-aic flexr-jsc">
					<uni-icons class="pay_icon" type="closeempty" color="#fff" size="34"></uni-icons>
				</view>
			</view>
			<view class="color_999 font_28 tac">支付失败，请尝试重新支付</view>
			<view class="tac" style="padding-top: 64rpx;">
				<lyz-button :btnStyle="{
					marginBottom: '32rpx'
				}" width="480rpx" borderColor="#fe5572" backgroundColor="#fe5572" title="重新支付"></lyz-button>
				<lyz-button width="480rpx" titleColor="#fe5572" borderColor="#fe5572" backgroundColor="#fff" title="返回首页"></lyz-button>
			</view>
		</view> -->
		<view>
			<view class="pay_view pay_success_view view flex-aic flexr-jsc m_b_24">
				<view class="pay_box pay_success_box flex-aic flexr-jsc">
					<uni-icons class="pay_icon" type="checkmarkempty" color="#fff" size="34"></uni-icons>
				</view>
			</view>
			<view class="color_999 font_28 tac">支付成功</view>
			<view class="font_28 m_b_24 order_code_box">
				<view class="m_b_24 color_666">支付金额：<text class="color_333">¥277</text></view>
				<view class="color_666">订单编号：<text class="color_333">20230201113481521</text></view>
			</view>
			<view class="tac">
				<lyz-button width="480rpx" titleColor="#fe5572" borderColor="#fe5572" backgroundColor="#fff" title="返回首页"></lyz-button>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.pay_view {
	width: 236rpx;
	height: 236rpx;
	margin-top: 112rpx;
	margin-left: auto;
	margin-right: auto;
	border-radius: 50%;
	background-color: rgba(255, 68, 70, 0.1);
}
.pay_box {
	width: 180rpx;
	height: 180rpx;
	border-radius: 50%;
	background-color: #FF4446;
}
.pay_success_view {
	background-color: rgba(0, 208, 102, 0.1);
}
.pay_success_box {
	background-color: #00D066;
}
.order_code_box {
	padding-top: 24rpx;
	width: 400rpx;
	margin-left: auto;
	margin-right: auto;
}
</style>
