<template>
	<view style="padding: 0 32rpx;">
		<view class="form_item flexr-jsb b_b_2 flex-aic">
			<view class="font_28 color_333" style="width: 132rpx;">收件人</view>
			<view class="flex-fitem">
				<input class="color_333 font_28 tar" v-model="formData.name" :maxlength="30" placeholder="请输入收件人" />
			</view>
		</view>
		<view class="form_item flexr-jsb b_b_2 flex-aic">
			<view class="font_28 color_333" style="width: 132rpx;">手机号码</view>
			<view class="flex-fitem">
				<input class="color_333 font_28 tar" v-model="formData.phone" type="number" :maxlength="11"
					placeholder="请输入手机号码" />
			</view>
		</view>
		<view class="form_item flexr-jsb b_b_2 flex-aic">
			<view class="font_28 color_333" style="width: 132rpx;">选择地区</view>
			<view class="flex-fitem" @tap="tapAddress">
				<input class="color_333 font_28 tar" disabled v-model="formData.regionLabel" placeholder="请选择地区" />
			</view>
		</view>
		<view class="form_item flexr-jsb b_b_2 flex-aic">
			<view class="font_28 color_333" style="width: 132rpx;">详细地址</view>
			<view class="flex-fitem">
				<input class="color_333 font_28 tar" v-model="formData.address" placeholder="请输入详细地址" />
			</view>
		</view>
		<view class="form_item flexr-jsb b_b_2 flex-aic">
			<view class="font_28 color_333" style="width: 172rpx;">设为默认地址</view>
				<switch @change="switchChange" :checked="formData.checked" color="#fe5572" style="transform:scale(0.7)"/>
		</view>
		<lb-picker ref="addressPickerRef"
        v-model="formData.region"
        mode="multiSelector"
        :list="addressList"
        :level="3"
		@confirm="addressConfirm"
		>
			
		</lb-picker>
		<view class="address_nav_view">
			<view class="address_nav_box pos_f bgc_fff flex-aic flexr-jsc">
				<lyz-button @lyzTap="tapRules" width="686rpx" borderColor="#fe5572" backgroundColor="#fe5572"
					title="保存"></lyz-button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import areaData from '@/common/area-data-min.js'
	import lbPicker from '@/components/lb-picker/index.vue'
	const addressPickerRef = ref()
	const addressList = ref(areaData)
	const formData = reactive({
		phone: '',
		name: '',
		address: '',
		region: [],
		regionLabel: '',
		checked: false
	})
	onLoad(() => {
		setTimeout(() => {
			const info = addressPickerRef.value.getColumnsInfo(formData.region)
			formData.regionLabel = info.item.map(m => m.label).join('-')
		},2000)
	})
	const tapAddress = () => {
		addressPickerRef.value.show()
	}
	const switchChange = (e) => {
		formData.checked = e.detail.value
	}
	const addressConfirm = (val) => {
		formData.region = val.value
		formData.regionLabel = val.item.map(m => m.label).join('-')
	}
	const tapRules = () => {
		if (formData.name.trim() == '') {
			uni.showToast({
				icon: "none",
				title: '请输入收件人'
			})
		} else if (formData.phone.trim() == '') {
			uni.showToast({
				icon: "none",
				title: '请输入手机号码'
			})
		} else if (!(/^1[3456789]\d{9}$/.test(formData.phone))) {
			uni.showToast({
				icon: "none",
				title: '请输入正确的手机号码'
			})
		} else if (formData.region.length <= 0 || formData.regionLabel == '') {
			uni.showToast({
				icon: "none",
				title: '请选择地区'
			})
		} else if (formData.address.trim() == '') {
			uni.showToast({
				icon: "none",
				title: '请输入详细地址'
			})
		} else {
			console.log(formData)
		}
	}
</script>

<style lang="scss" scoped>
	.form_item {
		padding: 28rpx 0;
	}

	.address_nav_view {
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.address_nav_box {
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
