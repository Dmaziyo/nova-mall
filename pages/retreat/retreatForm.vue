<template>
	<view class="p_t_24">
		<retreat-goods></retreat-goods>
		<view class="m_t_16 bgc_fff retreat_form_item font_28 color_333">
			<view class="p_b_24 p_t_24 flexr-jsb b_b_2">
				<text>售后类型</text>
				<text class="font_500">仅退款</text>
			</view>
			<view class="p_b_24 p_t_24 flexr-jsb b_b_2 flex-aic">
				<text class="m_r_16">退款金额</text>
				<text class="flex-fitem color_999 font_24">最多￥9.96</text>
				<text class="color_ff7000">￥9.96</text>
			</view>
			<view class="p_t_24">
				<view class="m_b_24">退款说明</view>
				<textarea class="bgc_f9f9f9 boxs_bb retreat_form_input" placeholder-style="color:#999" :maxlength="200"
					placeholder="最多200字" />
			</view>
			<view class="p_b_24 p_t_24">
				<view class="m_b_24">上传凭证（0/3）</view>
				<lyz-aloss-uploader-img @change="upChange" upload_img_wh="width:200rpx;height:200rpx;"></lyz-aloss-uploader-img>
			</view>
		</view>
		<view class="retreat_form_nav_view">
			<view class="retreat_form_nav_box pos_f bgc_fff flex-aic flexr-jsc">
				<lyz-button @lyzTap="toRetreatStatus"  width="686rpx" borderColor="#fe5572" backgroundColor="#fe5572" title="提交"></lyz-button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import retreatGoods from './components/retreat-goods.vue'
	const toRetreatStatus = () => {
		uni.navigateTo({
			url: '/pages/retreat/retreatStatus'
		})
	}
	const upChange = (data) => {
		console.log(data.list)
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	.retreat_form_item {
		padding: 0 32rpx;
	}

	.retreat_form_input {
		width: 100%;
		padding: 8rpx 16rpx;
		height: 130rpx;
	}

	.retreat_form_nav_view {
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.retreat_form_nav_box {
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
