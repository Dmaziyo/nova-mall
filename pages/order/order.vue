<template>
	<view style="padding-bottom: 100rpx;">
		<view class="order_nav_view">
			<view class="bgc_fff order_nav_box pos_f">
				<order-search></order-search>
				<lyz-tabs v-model="tabIndex" :tabLine="false" :columns="tabColumns"></lyz-tabs>
			</view>
		</view>
		<template v-for="item in 20">
			<order-goods-card @logistics="catLogistics" @tapCard="tapCard" @cancel="cancelOrder"></order-goods-card>
		</template>
	</view>
</template>

<script setup>
	import orderSearch from './components/order-search.vue'
	import orderGoodsCard from './components/order-goods-card.vue'
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	let tabIndex = ref(0)
	const tabColumns = ref([{
		title: '全部',
		id: '4'
	}, {
		title: '待付款',
		id: '5'
	}, {
		title: '待发货',
		id: '6'
	}, {
		title: '待收货',
		id: '7'
	}, {
		title: '待评价',
		id: '8'
	}])
	onLoad(() => {
	})
	const tapCard = () => {
		uni.navigateTo({
			url: '/pages/order/orderDetails'
		})
	}
	const catLogistics = () => {
		uni.navigateTo({
			url: '/pages/logistics/logistics'
		})
	}
	const cancelOrder = () => {
		uni.showModal({
			title: "取消提示",
			content: "是否取消该订单？",
			confirmColor: "#fe5572"
		})
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
	.order_nav_view {
		width: 100%;
		height: 184rpx;
	}
	.order_nav_box {
		width: 100%;
		height: 184rpx;
		/* #ifdef H5 */
		top: var(--window-top);
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		z-index: 1;
		left: 0;
		right: 0;
	}
</style>
