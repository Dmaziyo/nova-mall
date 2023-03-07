<template>
	<view>
		<view class="retreat_nav_view">
			<view class="retreat_nav_box pos_f">
				<view class="retreat_search_box pos_a bgc_fff boxs_bb">
					<image class="search_icon pos_a"
						src="http://www.liwanying.top/applate-icon/icon_search.png" mode="">
					</image>
					<input class="search_input bgc_f8f8f8 boxs_bb" placeholder="请输入商品" />
				</view>
			</view>
		</view>
		<retreat-goods-card @cat="toDetails" @out="outGoods"></retreat-goods-card>
	</view>
</template>

<script setup>
import retreatGoodsCard from './components/retreat-goods-card.vue'
const toDetails = () => {
	uni.navigateTo({
		url: '/pages/retreat/retreatDetails'
	})
}
const outGoods = () => {
	uni.navigateTo({
		url: '/pages/retreat/retreatOut'
	})
}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	.retreat_nav_view {
		width: 100%;
		height: 124rpx;
	}

	.retreat_nav_box {
		width: 100%;
		height: 124rpx;
		/* #ifdef H5 */
		top: var(--window-top);
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		z-index: 1;
		left: 0;
		right: 0;
	}

	.retreat_search_box {
		width: 100%;
		padding: 24rpx 32rpx;
	}

	.search_icon {
		top: 42rpx;
		left: 64rpx;
		width: 40rpx;
		height: 40rpx;
	}

	.search_input {
		width: 100%;
		display: block;
		height: 76rpx;
		border-radius: 76rpx;
		padding-left: 88rpx;
	}
</style>
