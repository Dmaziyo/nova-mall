<template>
	<view style="padding: 24rpx 0 20rpx;" class="bgc_fff">
		<swiper class="swiper" circular indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.6)"
			:indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item flexr-jsc flex-aic">
				<image mode="aspectFill" class="swiper-item-img"
					src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/124394/24/30277/122521/63e653e5Fe19a2e7a/7ecf692713c6d48e.jpg">
				</image>
			</swiper-item>
			<swiper-item class="swiper-item flexr-jsc flex-aic">
				<image mode="aspectFill" class="swiper-item-img"
					src="https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/50959/32/23475/137403/63e6530cF5421a049/55285d2300cf7e39.jpg">
				</image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.swiper {
		height: 560rpx;
		.swiper-item {
			width: 100%;
			height: 100%;
		}
		.swiper-item-img {
			width: 686rpx;
			border-radius: 10rpx;
			height: 100%;
		}
	}
</style>