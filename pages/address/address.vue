<template>
	<view>
		<!-- <view style="padding-top: 176rpx;">
			<lyz-nodata color="#333" height="200rpx" text="暂无地址信息" imgSrc="http://www.liwanying.top/applate-icon/zanwudizhi.png"></lyz-nodata>
		</view> -->
		<address-item></address-item>
		<address-item></address-item>
		<address-item></address-item>
		<address-item></address-item>
		<address-item></address-item>
		<view class="address_nav_view">
			<view class="address_nav_box pos_f bgc_fff flex-aic flexr-jsc">
				<lyz-button @lyzTap="toAddress" width="686rpx" borderColor="#fe5572" backgroundColor="#fe5572" title="新增地址"></lyz-button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import addressItem from './components/address-item.vue'
	const toAddress = () => {
		uni.navigateTo({
			url: '/pages/address/addAddress'
		})
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
.address_nav_view {
	height: 100rpx;
	width: 100%;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}
.address_nav_box {
	bottom: 0;
	left: 0;
	right: 0;
	height: 100rpx;
	width: 100%;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}
</style>
