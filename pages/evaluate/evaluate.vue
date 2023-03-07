<template>
	<view>
		<view style="height: 88rpx;width: 100%;">
			<view class="tabs_box pos_f bgc_fff">
				<lyz-tabs :tabLine="false" v-model="tabIndex"
					:columns="[{title:'全部（10）',id:'4'},{title:'图文（6）',id:'5'}]"></lyz-tabs>
			</view>
		</view>
		<view class="item_box bgc_fff m_t_24">
			<evaluate-item></evaluate-item>
		</view>
		<view class="item_box bgc_fff m_t_24">
			<evaluate-item></evaluate-item>
		</view>
		<view class="item_box bgc_fff m_t_24">
			<evaluate-item></evaluate-item>
		</view>
		<view class="item_box bgc_fff m_t_24">
			<evaluate-item></evaluate-item>
		</view>
	</view>
</template>

<script setup>
	import evaluateItem from '@/components/evaluate-item/evaluate-item.vue'
	import {
		ref
	} from 'vue'
	let tabIndex = ref(0)
</script>

<style lang="scss">
	page {
		background-color: #F8F8F8;
	}

	.tabs_box {
		/* #ifdef H5 */
		top: var(--window-top);
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		z-index: 1;
		left: 0;
		right: 0;
		padding: 24rpx 0;
	}

	.item_box {
		padding: 24rpx 32rpx;
	}
</style>
