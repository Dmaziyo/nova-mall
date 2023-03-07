<template>
	<view class="coupon_item m_b_20">
		<!-- 角标 -->
		<view class="coupon_item_left tac">
			<view class="">
				<view class="color-FA4141">
					<text class="font-30">¥</text><text class="font_48">30.00</text>
				</view>
				<text class="color_666 font_24">无门槛</text>
			</view>
		</view>
		<view class="coupon_item_line">
			<view>
			</view>

			<text></text>
			<view>
			</view>
		</view>
		<view class="coupon_item_right">
			<view class="item_right_text">
				<text class="color_333 font_28">30元无门槛优惠券</text>
				<text class="color_666 font_24">有效期至2023-06-22</text>
			</view>
			<view class="coupon_item_btn bgc_ff7000 tac font_24">
				立即使用
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.coupon_item {
		display: flex;
		border-radius: 12rpx;
		align-items: center;
		justify-content: space-between;
		position: relative;
		box-sizing: border-box;
		height: 184rpx;
		padding: 0 30rpx;
		background-color: #f9d8d8;

		.coupon_item_corner {
			position: absolute;
			top: 0;
			left: 0;
			width: 92rpx;
			height: 93rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.coupon_item_left {
			flex: 1;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.coupon_item_right {
			width: 449rpx;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			.item_right_text {
				flex: 1;
				padding-left: 33rpx;

				text {
					display: block;
					width: 270rpx;
				}

				text:nth-child(1) {
					margin-bottom: 18rpx;
				}
			}

			.coupon_item_btn {
				width: 128rpx;
				height: 50rpx;
				color: #FFFFFF;
				line-height: 50rpx;
				border-radius: 25rpx;
			}
		}

		.coupon_item_line {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 195rpx;
			width: 30rpx;
			height: 100%;
			display: flex;
			flex-flow: column;

			view:nth-child(1) {
				width: 30rpx;
				height: 16rpx;
				background-color: #F8F8F8;
				border-radius: 0 0px 15rpx 15rpx;
				line-height: 30rpx;
			}

			view:nth-child(3) {
				width: 30rpx;
				height: 16rpx;
				background-color: #F8F8F8;
				border-radius: 15rpx 15rpx 0 0px;
				line-height: 30rpx;
			}

			text {
				flex: 1;
				width: 2rpx;
				height: 80%;
				margin: 0 auto;
				background-image: linear-gradient(to top, #fe5572 5px, #fff 0px, transparent 50%);
				background-size: 2rpx 21rpx;
				background-repeat: repeat-y;
			}
		}
	}

	.coupon_item_opacity {
		opacity: 0.7;
	}

	.coupon_item_expired {

		.coupon_item_right,
		.coupon_item_left {
			text {
				color: #CCCCCC;
			}

			.coupon_item_btn {
				color: #999999;
				background-color: #EEEEEE;
			}
		}

	}
</style>
