<template>
	<view>
		<swiper class="swiper" circular indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.6)"
			:indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item flexr-jsc flex-aic">
				<image mode="aspectFill" class="swiper-item-img"
					src="https://via.placeholder.com/200x100.png/FFB6C1">
				</image>
			</swiper-item>
			<swiper-item class="swiper-item flexr-jsc flex-aic">
				<image mode="aspectFill" class="swiper-item-img"
					src="https://via.placeholder.com/200x100.png/FFB6C1">
				</image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.swiper {
		height: 470rpx;
		.swiper-item {
			width: 100%;
			height: 100%;
		}
		.swiper-item-img {
			width: 686rpx;
			height: 100%;
		}
	}
</style>