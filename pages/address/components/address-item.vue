<template>
	<view class="m_t_24 bgc_fff address_item_box">
		<view class="b_b_2 flex flex-aic p_b_24">
			<image class="address_item_location m_r_16"
				src="http://www.liwanying.top/applate-icon/location.png" mode=""></image>
			<view class="flex-fitem">
				<view class="m_b_4 color_333 font_28">嗷嗷 18888888888</view>
				<view class="color_999 font_24 text_nowrap" style="max-width: 580rpx;">江苏省 南京市 雨花台区
					云密城云密城云密城云密城云密城云密城云密城</view>
			</view>
		</view>
		<view class="p_t_24 flex-aic flexr-jsb">
			<view @tap="addressActive = !addressActive" class="address_item_check m_r_16"
				:class="addressActive ? 'address_item_check_active' : ''"></view>
			<text class="flex-fitem color_333 font_24">默认地址</text>
			<view class="font_24 color_ff7000">
				<text class="m_r_32">编辑</text>
				<text @tap="delAddress">删除</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	let addressActive = ref(false)
	const delAddress = () => {
		uni.showModal({
			title: '收货地址',
			content: '确定删除收货地址吗？',
			success: function(res) {
				if (res.confirm) {
					uni.showToast({
						title: "删除成功",
						icon: "none"
					})
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	}
</script>

<style lang="scss" scoped>
	.address_item_box {
		padding: 24rpx 32rpx;
	}

	.address_item_location {
		width: 40rpx;
		height: 40rpx;
	}

	.address_item_check {
		width: 32rpx;
		height: 32rpx;
		border: 2rpx solid #DDDDDD;
		border-radius: 50%;
	}

	.address_item_check_active {
		border: none;
		width: 36rpx;
		height: 36rpx;
		background-image: url(http://www.liwanying.top/applate-icon/xuanzhong.png);
		background-repeat: no-repeat;
		background-size: 100%;
	}
</style>
