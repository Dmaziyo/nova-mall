<template>
	<view>
		<view class="bgc_fff2e5 flex-aic flexr-jsc retreat_notify_box m_b_24">
			<text class="font_28 color_ff7000">退换中：寄回商品需3-5个工作日完成审核</text>
		</view>
		<!-- <view class="bgc_ebfedf flex-aic flexr-jsc retreat_notify_box m_b_24">
			<text class="font_28 color_4ab018">退款成功：退款金额于2-3个工作日到账</text>
		</view> -->
		<view class="bgc_fff info_box m_b_24">
			<view class="flex flex-aic m_b_24">
				<view class="title_box_line bgc_ff7000 m_r_16"></view>
				<view class="color_333 font_32 font_500">买家回寄物流信息</view>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">快递名称：</text><text class="color_333 flex-fitem">圆通快递</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">快递单号：</text><text class="color_333 flex-fitem">20230201113481521</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">联系人：</text><text class="color_333 flex-fitem">铃铃铃</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">联系电话：</text><text class="color_333 flex-fitem">18888888888</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">寄回日期：</text><text class="color_333 flex-fitem">2023-02-27 18:19:29</text>
			</view>
		</view>
		<view class="bgc_fff info_box m_b_24">
			<view class="flex flex-aic m_b_24">
				<view class="title_box_line bgc_ff7000 m_r_16"></view>
				<view class="color_333 font_32 font_500">售后地址</view>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">退货地址：</text><text class="color_333 flex-fitem">中信证券上海溧阳路</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">联系人：</text><text class="color_333 flex-fitem">赵老哥</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">联系电话：</text><text class="color_333 flex-fitem">18888888888</text>
			</view>
		</view>
		<view class="bgc_fff info_box m_b_24">
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
				<text class="info_box_title tar">申请时间：</text><text class="color_333 flex-fitem">2023-02-21
					16:23:54</text>
			</view>
			<view class="m_b_24 flex font_28 color_666">
				<text class="info_box_title tar">退款类型：</text><text class="color_333 flex-fitem">退货退款</text>
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
					<image class="info_img_box m_b_16 m_r_16"
						src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F3d901398-5fff-4b1b-9b39-e8d37d9ac62c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1679732419&t=6b23c25c95e62682e4e30d0c12d38027"
						mode="aspectFill"></image>
					<image class="info_img_box m_b_16 m_r_16"
						src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F3d901398-5fff-4b1b-9b39-e8d37d9ac62c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1679732419&t=6b23c25c95e62682e4e30d0c12d38027"
						mode="aspectFill"></image>
				</view>
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

	.retreat_notify_box {
		height: 68rpx;
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
