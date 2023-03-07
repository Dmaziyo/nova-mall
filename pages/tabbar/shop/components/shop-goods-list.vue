<template>
	<view class="shop_tool_view">
		<view class="shop_tool_box flex-aic flexr-jfe boxs_bb pos_f bgc_fff">
			<text>完成</text>
		</view>
	</view>
	<view class="shop_list_view">
		<view class="bgc_fff shop_list_box">
			<template v-for="item in 5">
				<view class="flex flex-aic p_t_24">
					<radio style="transform:scale(0.6)" checked="true" color="#fe5572" />
					<image class="shop_item_img m_r_16"
						src="https://cdn.becase.xyz/202303071628801.png"
						mode="aspectFill"></image>
					<view class="flex-fitem">
						<view class="color_333 font_26 m_b_8">dunk panda</view>
						<view class="flex flex-aic m_b_4">
							<view class="color_999 font_24 m_r_24">长沙；于金兰</view>
							<uni-icons type="bottom" size="14" color="#999999"></uni-icons>
						</view>
						<view class="flex-aic flexr-jsb">
							<view class="color_ff0003">
								<text class="font_28">¥</text>
								<text class="font_40">277</text>
							</view>
							<lyz-input-num></lyz-input-num>
						</view>
					</view>
				</view>
			</template>
		</view>
	</view>
	<view class="shop_nav_box pos_f bgc_fff flex-aic flexr-jsb boxs_bb">
		<label class="flex flex-aic color_999 font_24"><radio style="transform:scale(0.7)" color="#fe5572" />全选</label>
		<view class="flex-fitem flex-aic flexr-jfe m_r_16">
			<text class="font_28 color_333">合计：</text>
			<view class="color_ff7000">
				<text class="font_28">¥</text>
				<text class="font_40">277</text>
			</view>
		</view>
		<lyz-button borderColor="#fe5572" backgroundColor="#fe5572" >
			<template #title>
				<view class="pos_r flex flex-aic flex-fitem" style="height: 100%;">
					<text>结算</text>
					<text class="pos_a btn_shop_a bgc_fff color_ff7000 font_16">11</text></view>
			</template>
		</lyz-button>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.shop_list_view {
		padding: 24rpx 32rpx;
	}

	.shop_list_box {
		padding: 0 20rpx 20rpx 0;
		border-radius: 12rpx;
	}

	.shop_item_img {
		width: 152rpx;
		height: 152rpx;
		border-radius: 6rpx;
	}

	.shop_tool_view {
		width: 100%;
		height: 88rpx;
	}

	.shop_tool_box {
		height: 88rpx;
		left: 0;
		right: 0;
		z-index: 1;
		padding-right: 32rpx;
	}

	.shop_nav_box {
		width: 100%;
		height: 100rpx;
		box-shadow: 0rpx -2rpx 6rpx 0rpx rgba(215, 215, 215, 0.5);
		bottom: calc(constant(safe-area-inset-bottom) + 100rpx);
		bottom: calc(env(safe-area-inset-bottom) + 100rpx);
		left: 0;
		right: 0;
		z-index: 1;
		padding: 0 32rpx 0 16rpx;
	}
	.btn_shop_a {
		padding: 0 8rpx;
		height: 24rpx;
		top: 10rpx;
		right: -16rpx;
		line-height: 26rpx;
		border-radius: 24rpx;
	}
</style>
