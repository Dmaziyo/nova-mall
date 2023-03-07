<template>
	<view class="flow_box">
		<!-- <button class="btn" type="default" @click="add()">增加数据</button> -->
		<custom-waterfalls-flow-vue3-2 @tapClick="tapClick" :value="data.list" :column="column" :columnSpace="2" :seat="2"
			>
			<!-- #ifdef MP-WEIXIN -->
			<view class="item" v-for="(item,index) in data.list" :key="index" :slot="`slot${index}`">
				<view class="title m_b_16 color_333 font_28 text_nowrap_2">{{item.title}}</view>
				<view class="flex-aic flexr-jsb color_ff0003">
					<view><text class="font_16">¥</text><text class="font_28">299</text></view>
					<text class="color_999 font_22">已售99999+</text>
				</view>
			</view>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<template #card="cardData">
				<view class="item" >
					<view class="title m_b_16 color_333 font_28 text_nowrap_2">{{cardData.data.title}}</view>
					<view class="flex-aic flexr-jsb color_ff0003">
						<view><text class="font_16">¥</text><text class="font_28">299</text></view>
						<text class="color_999 font_22">已售99999+</text>
					</view>
				</view>
			</template>
			<!-- #endif -->
		</custom-waterfalls-flow-vue3-2>
	</view>
</template>
<script setup>
	import {
		ref,
		reactive,
		computed
	} from 'vue';
	const data = reactive({
		list: [{
				image: 'https://via.placeholder.com/200x500.png/ff0000',
				title: '我是标题1',
			},
			{
				image: 'https://via.placeholder.com/200x200.png/2878ff',
				title: '我是标题2',
			},
			{
				image: 'https://via.placeholder.com/200x100.png/FFB6C1',
				title: '我是标题3',
			},
			{
				image: 'https://via.placeholder.com/200x300.png/9400D3',
				title: '我是标题4',
			},
			{
				image: 'https://via.placeholder.com/100x240.png/B0E0E6',
				title: '我是标题a飒飒三大撒打飒飒三大撒打算的撒打算的算的撒打算的',
			},
			{
				image: 'https://via.placeholder.com/140x280.png/7FFFAA',
				title: '我是标题6',
			},
			{
				image: 'https://via.placeholder.com/40x60.png/EEE8AA',
				title: '我是标题7',
			},
		]
	})
	const column = ref(2);

	function add() {
		const newArr = [{
				image: 'https://via.placeholder.com/58x100.png/FF7F50',
				title: '我是标题8',
			},
			{
				image: 'https://via.placeholder.com/59x100.png/C0C0C0',
				title: '我是标题9',
			},
			{
				image: 'https://via.placeholder.com/60x100.png/FAEBD7',
				title: '我是标题10',
			}
		]
		data.list = data.list.concat(newArr);
	}
	const tapClick = (item) => {
		console.log(item)
		uni.navigateTo({
			url: '/pages/goodsDetails/goodsDetails'
		})
	}
</script>
<style lang="scss" scoped>
	.flow_box {
		padding: 0 32rpx 100rpx;
	}
	.item {
		padding-top: 16rpx;
		.title {
			max-height: 72rpx;
			line-height: 28rpx;
		}
	}
</style>
