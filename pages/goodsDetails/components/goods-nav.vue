<template>
	<view class="goods_nav_view">
		<view class="pos_f g_nav_box bgc_fff flex flex-aic">
			<view class="flex-fitem flex-aic flexr-jsc font_20 color_333">
				<image class="g_nav_icon m_r_8"
					src="http://www.liwanying.top/applate-icon/shouye.png" mode=""></image>
				<text>首页</text>
			</view>
			<view @tap="collectionFlg = 1" class="flex-fitem flex-aic flexr-jsc font_20 color_333">
				<image class="g_nav_icon m_r_8"
					:src="collectionFlg == 0 ? 'http://www.liwanying.top/applate-icon/shoucang.png' : 'http://www.liwanying.top/applate-icon/shoucangxuanzhong.png'"
					mode=""></image>
				<text>收藏</text>
			</view>
			<view class="btns_box color_fff font_32 flex flex-aic">
				<view class="bgc_ffa259 tac" @tap="emit('add')">加入购物车</view>
				<view class="bgc_ff7000 tac" @tap="emit('pay')">立即购买</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const collectionFlg = ref(0);
	const emit = defineEmits(['add', 'pay'])
</script>

<style lang="scss" scoped>
	.goods_nav_view {
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.g_nav_box {
		padding: 0 32rpx;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		box-shadow: 0rpx -2rpx 6rpx 0rpx rgba(215, 215, 215, 0.5);
	}

	.g_nav_icon {
		width: 40rpx;
		height: 40rpx;
	}

	.btns_box {
		border-radius: 6rpx;
		overflow: hidden;

		view {
			width: 200rpx;
			height: 80rpx;
			line-height: 80rpx;
		}
	}
</style>
