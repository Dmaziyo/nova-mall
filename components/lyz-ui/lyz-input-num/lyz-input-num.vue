<template>
	<view style="width: 240rpx;">
		<view class="flex flex-aic xlb_input_number_box b_2 bgc_f8f8f8">
			<view class="xlb_input_number_btn tac b_r_2" :class="numberVal <= 1 ? 'color_999' : 'color_333'" @tap="updateNum(true)">-</view>
			<input @blur="inputNum" type="number" v-model="numberVal" class="xlb_input_number_ipt flex-fitem tac font_28" />
			<view class="xlb_input_number_btn tac b_l_2" :class="numberVal >= max ? 'color_999' : 'color_333'"  @tap="updateNum(false)">+</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		watchEffect
	} from 'vue'
	import lyzDebounce from "@/js_sdk/lyz-debounce/lyz-debounce.js"
	let numberVal = ref(1)
	let props = defineProps({
		num: {
			type: Number,
			default: 1
		},
		max: {
			type: Number,
			default: 99999
		},
	});
	watchEffect(() => {
		numberVal.value = props.num
	})
	const inputNum = (e) => {
		if(isNaN(e.detail.value)) {
			numberVal.value = 1
			emitFun(numberVal.value)
		}else if (Number(e.detail.value) <= 0 || e.detail.value == 'e') {
			numberVal.value = 1
			emitFun(numberVal.value)
		} else if (Number(e.detail.value) > props.max) {
			numberVal.value = props.max
			emitFun(numberVal.value)
		} else {
			emitFun(Number(e.detail.value))
		}
	}
	const emitFun = lyzDebounce.debounce((val) => {
		emit('update:num', val)
	}, 200, false)
	const emit = defineEmits(['update:num'])
	const updateNum = (flg) => {
		if (flg) {
			if (numberVal.value - 1 <= 0) return
			emitFun(numberVal.value -= 1)
		} else {
			if (props.max !== 0 && props.max < numberVal.value + 1) return
			emitFun(numberVal.value += 1)
		}
	}
</script>

<style lang='scss' scoped>
	.xlb_input_number_box {
		height: 64rpx;
	}

	.xlb_input_number_ipt {
		margin: 0 10rpx;
		border: none;
	}

	.xlb_input_number_btn {
		width: 64rpx;
		height: 64rpx;
		line-height: 64rpx;
	}
</style>
