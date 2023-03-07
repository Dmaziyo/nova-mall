<template>
	<view class="input_dom pos_r" :style="{
		margin:margin
	}">
		<view style="top:0;left: 0;width: 750rpx;height: 88rpx;background-color: #fff;padding-top: 24rpx;"
			class="pos_f flexr-jsc flex-aic boxs_bb">
			<view style="width: 686rpx;
		height: 68rpx;">
				<uni-icons color="#999999" class="input_search pos_a" type="search" size="38rpx"></uni-icons>
				<input @confirm="tapInput" class="input_box boxs_bb font_28" :placeholder="placeholder" />
			</view>
		</view>
	</view>
</template>

<script setup>
	let props = defineProps({
		placeholder: {
			type: String,
			default: '请输入作品名称'
		},
		margin: {
			type: String,
			default: '0'
		}
	})
	const emit = defineEmits(['search'])
	const tapInput = (event) => {
		emit('search', event.detail.value)
	}
</script>

<style lang="scss" scoped>
	.input_dom {
		width: 100%;
		height: 68rpx;
	}

	.input_search {
		left: 18rpx;
		top: 12rpx;
		width: 38rpx;
		height: 38rpx;
	}

	.input_box {
		padding: 0 18rpx 0 66rpx;
		width: 686rpx;
		height: 68rpx;
		background-color: #F4F4F4;
		border-radius: 34rpx;
	}
</style>
