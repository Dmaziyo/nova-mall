<template>
	<view>
		<goods-swiper></goods-swiper>
		<view class="goods_title boxs_bb m_b_24 bgc_fff">
			<view class="m_b_8 color_333 font_32 font_bold">邂逅香水柔情黄清新女士持久淡香水</view>
			<view class="m_b_16 color_999 font_28">销量99999+</view>
			<view class="flex m_b_24 flex-aife">
				<view class="price_color">
					<text class="font_36">¥</text><text class="font_64 m_r_24">277</text>
				</view>
				<text class="font_36 color_999 m_b_12" style="text-decoration:line-through !important;">¥477</text>
			</view>
		</view>
		<view class="bgc_fff font_28 color_333 m_b_24">
			<view @tap="showSku" class="goods_item_box boxs_bb flex-aic flexr-jsb">
				<text class="goods_item_cla color_999">选择</text><text class="flex-fitem">柔情黄/50ml</text>
				<image class="goods_item_icon"
					src="http://www.liwanying.top/applate-icon/gengduo.png" mode=""></image>
			</view>
			<view class="goods_item_box boxs_bb">
				<text class="goods_item_cla color_999">类型</text><text>实物</text>
			</view>
			<view class="goods_item_box boxs_bb">
				<text class="goods_item_cla color_999">发货</text><text>浙江金华</text>
			</view>
			<view class="goods_item_box boxs_bb">
				<text class="goods_item_cla color_999">运费</text><text>免运费<text class="color_eee">｜</text>48小时内发货</text>
			</view>
		</view>
		<goods-evaluate></goods-evaluate>
		<view class="bb_title font_28 color_999 flex-aic flexr-jsc">
			<view class="bgc_ddd"></view><text>宝贝详情</text>
			<view class="bgc_ddd"></view>
		</view>
		<rich-text style="width: 100%;" :nodes="htmlSnip" />
		<goods-sku @toOrder="toOrder" ref="goodsSkuRef"></goods-sku>
		<goods-nav @add="goodsAdd" @pay="goodsTapPay"></goods-nav>
	</view>
</template>

<script setup>
	import goodsSwiper from './components/goods-swiper.vue'
	import goodsNav from './components/goods-nav.vue'
	import goodsSku from './components/goods-sku.vue'
	import goodsEvaluate from './components/goods-evaluate.vue'
	import {
		ref
	} from "vue";
	let goodsSkuRef = ref()
	const htmlSnip =
	`<div style="text-align:center;"><img style="width: 100%;" src="https://img1.baidu.com/it/u=1147992555,4285883113&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"/></div>
	<div class="div_class">
	  <h1>链接啊收到啦收到啦就睡了多久</h1>
	</div>
	`
	const showSku = () => {
		goodsSkuRef.value.showSku()
	}
	const goodsAdd = () => {
		console.log('goodsAdd')
		uni.showToast({
			title: '添加成功，在购物车等亲!',
			mask:true,
			icon:'none'
		});
	}
	const toOrder = () => {
		uni.navigateTo({
			url: '/pages/orderInfo/orderInfo'
		})
	}
	const goodsTapPay = () => {
		goodsSkuRef.value.showSku()
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	.goods_title {
		padding: 0 32rpx;
	}

	.price_color {
		color: #FAAD14;
		background: linear-gradient(360deg, #FF3636 0%, #FF6600 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.goods_item_box {
		padding: 20rpx 32rpx;
	}

	.goods_item_cla {
		margin-right: 16rpx;
	}

	.goods_item_icon {
		width: 12rpx;
		height: 24rpx;
	}

	.bb_title {
		padding: 24rpx 0;

		text {
			margin: 0 16rpx;
		}

		view {
			width: 100rpx;
			height: 2rpx;
		}
	}
</style>
