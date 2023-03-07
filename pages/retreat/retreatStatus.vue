<template>
	<view>
		<view class="bgc_fff m_b_24" style="padding: 48rpx 0;">
			<view class="retreat_view retreat_success_view view flex-aic flexr-jsc m_b_24">
				<view class="retreat_box retreat_success_box flex-aic flexr-jsc">
					<uni-icons class="retreat_icon" type="checkmarkempty" color="#fff" size="34"></uni-icons>
				</view>
			</view>
			<view class="color_333 font_32 tac m_b_16">退款申请提交成功</view>
			<view class="color_999 font_28 tac m_b_24">请耐心等待工作人员审核</view>
			<view class="tac">
				<lyz-button @lyzTap="toHome" width="480rpx" titleColor="#fe5572" borderColor="#fe5572" backgroundColor="#fff" title="返回首页"></lyz-button>
			</view>
		</view>
		<view class="bgc_fff info_box">
			<view class="flex flex-aic m_b_24">
				<view class="title_box_line bgc_ff7000 m_r_16"></view>
				<view class="color_333 font_32 font_500">退款信息</view>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">商品名称：</text><text class="color_333 flex-fitem">邂逅香水柔情黄清新女士持久淡香水</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">订单号：</text><text class="color_333 flex-fitem">20230201113481521</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">申请时间：</text><text class="color_333 flex-fitem">2023-02-21 16:23:54</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">退款类型：</text><text class="color_333 flex-fitem">仅退款</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">退款金额：</text><text class="color_333 flex-fitem">¥188.00</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">退款说明：</text><text class="color_333 flex-fitem">不想要了</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">上传凭证：</text>
				<view class="flex-fitem">
					<image class="info_img_box m_b_16 m_r_16" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F3d901398-5fff-4b1b-9b39-e8d37d9ac62c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1679732419&t=6b23c25c95e62682e4e30d0c12d38027" mode="aspectFill"></image>
					<image class="info_img_box m_b_16 m_r_16" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F3d901398-5fff-4b1b-9b39-e8d37d9ac62c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1679732419&t=6b23c25c95e62682e4e30d0c12d38027" mode="aspectFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {login} from '@/common/login.js'
	const toHome = () => {
		login((token) => {
			console.log(token)
		})
	}
	const getPhoneNumber = (code) => {
		console.log(code.target)
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
.retreat_view {
	width: 236rpx;
	height: 236rpx;
	margin-left: auto;
	margin-right: auto;
	border-radius: 50%;
	background-color: rgba(255, 68, 70, 0.1);
}
.retreat_box {
	width: 180rpx;
	height: 180rpx;
	border-radius: 50%;
	background-color: #FF4446;
}
.retreat_success_view {
	background-color: rgba(0, 208, 102, 0.1);
}
.retreat_success_box {
	background-color: #00D066;
}
.info_box {
	padding: 24rpx 32rpx;
}
.title_box_line {
	width: 8rpx;
	height: 28rpx;
	border-radius: 6rpx;
}
.info_box_title {
	width: 144rpx;
}
.info_img_box {
	width: 152rpx;
	height: 152rpx;
	border-radius: 12rpx;
	overflow: hidden;
}
</style>
