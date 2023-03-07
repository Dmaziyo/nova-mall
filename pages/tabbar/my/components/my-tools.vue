<template>
	<view class="bgc_fff my_tools_box boxs_bb" v-if="columns.length >=1">
		<template v-for="(item,index) in columns">
			<view @tap="toPages(item.pages)" class="my_tools_item flex-aic flexr-jsb" :class="columns.length-1 == index ? '' : 'b_b_2'">
				<image class="m_r_16 my_tools_img" :src="item.icon" mode=""></image>
				<view class="flex-fitem color_333 font_28">{{item.title}}</view>
				<uni-icons color="#ccc" type="forward" size="32"></uni-icons>
			</view>
		</template>
	</view>
</template>

<script setup>
let props = defineProps({
		columns:{
			type: Array,
			default: () => {
				return []
			}
		}
	})
	const toPages = (pages) => {
		if(!pages) {
			uni.showToast({
				icon:'none',
				title: '正在开发中...'
			})
		} else {
			uni.navigateTo({
				url: pages
			})
		}
	}
</script>

<style lang="scss" scoped>
	.my_tools_box {
		width: 686rpx;
		margin: 0 auto;
		padding: 0 32rpx;
		border-radius: 16rpx;
		overflow: hidden;
	}
	.my_tools_item {
		padding: 24rpx 0;
	}

	.my_tools_img {
		width: 56rpx;
		height: 56rpx;
	}
</style>
