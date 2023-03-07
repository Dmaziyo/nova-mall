<template>
	<view>
		<view class="collect_nav_view">
			<view class="collect_nav_box pos_f">
				<view class="collect_search_box pos_a bgc_fff boxs_bb flex-aic flexr-jsb">
					<image class="search_icon pos_a"
						src="http://www.liwanying.top/applate-icon/icon_search.png" mode="">
					</image>
					<input class="search_input bgc_f8f8f8 boxs_bb flex-gitem" placeholder="请输入商品名称" />
				</view>
			</view>
		</view>
		<uni-swipe-action autoClose>
			<uni-swipe-action-item v-for="(item, index) in 13" :right-options="options" :key="index">
				<collect-goods></collect-goods>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script setup>
	import collectGoods from './components/collect-goods.vue'
	import {
		ref
	} from 'vue'
	const options = ref([{
		text: '删除',
		style: {
			backgroundColor: '#F56C6C'
		}
	}])
</script>

<style lang="scss" scoped>
	.collect_nav_view {
		width: 100%;
		height: 124rpx;
	}

	.collect_nav_box {
		width: 100%;
		height: 124rpx;
		z-index: 1;
		/* #ifdef H5 */
		top: var(--window-top);
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		left: 0;
		right: 0;
	}

	.collect_search_box {
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

	// .content-box {
	// 	flex: 1;
	// 	/* #ifdef APP-NVUE */
	// 	justify-content: center;
	// 	/* #endif */
	// 	height: 120px;
	// 	line-height: 120px;
	// 	padding: 0 15px;
	// 	position: relative;
	// 	background-color: #fff;
	// 	border-bottom-color: #f5f5f5;
	// 	border-bottom-width: 1px;
	// 	border-bottom-style: solid;
	// }

	// .content-text {
	// 	font-size: 15px;
	// }
</style>
