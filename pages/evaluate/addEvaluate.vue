<template>
	<view>
		<view class="bgc_fff evaluate_goods_box">
			<view class="flex m_b_24">
				<image class="item_goods_img m_r_16"
					src="https://img0.baidu.com/it/u=1120845135,2895795328&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
					mode=""></image>
				<view class="flex-fitem">
					<view class="m_b_8 flex-aic flexr-jsb">
						<text class="color_333 font_24 text_nowrap"
							style="max-width: 480rpx;">邂逅香水柔情黄清新女士持久淡香水邂逅香水柔情黄清新女士持久淡香水</text>
					</view>
					<view class="color_999 font_24 m_b_4 text_nowrap" style="max-width: 560rpx;">香调：花香</view>
					<view class="color_999 font_24 text_nowrap flex-aic flexr-jsb" style="max-width: 560rpx;">
						<text>净含量：30ml</text>
					</view>
				</view>
			</view>
			<view class="flex flex-aic m_b_24">
				<text class="color_333 font_30 m_r_16">商品评分</text>
				<uni-rate size="22" active-color="#fe5572" :value="2.5" />
			</view>
			<textarea class="bgc_f9f9f9 evaluate_textarea_box boxs_bb m_b_24" adjust-position :maxlength="200"
				placeholder="请输入您对该商品的评价…"></textarea>
			<lyz-aloss-uploader-img upload_img_wh="width:200rpx;height:200rpx;"></lyz-aloss-uploader-img>
			<view class="color_666 font_28 m_t_24 flex flex-aic">
				<radio color="#fe5572" style="transform:scale(0.7)" /><text>匿名发布</text>
			</view>
		</view>
		<view class="evaluate_form_nav_view">
			<view class="evaluate_form_nav_box pos_f bgc_fff flex-aic flexr-jsc">
				<lyz-button width="686rpx" borderColor="#fe5572" backgroundColor="#fe5572" title="提交"></lyz-button>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	.item_goods_img {
		width: 108rpx;
		height: 108rpx;
		border-radius: 2rpx;
		overflow: hidden;
	}

	.evaluate_goods_box {
		padding: 24rpx 24rpx 30rpx;
	}

	.evaluate_textarea_box {
		width: 100%;
		padding: 12rpx;
	}

	.evaluate_form_nav_view {
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.evaluate_form_nav_box {
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
