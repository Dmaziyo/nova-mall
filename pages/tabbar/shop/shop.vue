<template>
	<view>
		<!-- <view style="padding-top: 176rpx;margin-bottom: 176rpx;" class="tac">
			<lyz-nodata color="#333" height="200rpx" text="你的购物车空空如也~"
				imgSrc="http://www.liwanying.top/applate-icon/gouwuche-nodata.png">
			</lyz-nodata>
			<view style="height: 40rpx;"></view>
			<lyz-button borderColor="#fe5572" backgroundColor="#fe5572" title="去逛逛"></lyz-button>
		</view> -->
		<shop-goods-list></shop-goods-list>
		<view class="shop_list bgc_fff">
			<view class="color_333 font_32" style="padding: 24rpx 32rpx;">猜你喜欢</view>
			<shop-flow></shop-flow>
		</view>
		<lyz-tab-bar pagePath="pages/tabbar/shop/shop"></lyz-tab-bar>
	</view>
</template>

<script setup>
	import shopFlow from './components/shop-flow.vue'
	import shopGoodsList from './components/shop-goods-list.vue'
</script>

<style lang="scss">
	page {
		background-color: #F8F8F8;
	}

	.shop_list {
		border-radius: 24rpx;
	}
</style>
