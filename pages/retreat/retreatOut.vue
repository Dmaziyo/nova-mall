<template>
	<view>
		<view class="m_b_24 bgc_fff font_28 color_333">
			<view class="flex p_t_24 p_b_24">
				<text class="color_666 out_item_title tar">退货地址：</text>
				<text class="flex-fitem">安徽省合肥市瑶海区金科海昱东方安徽省合肥市瑶海区金科海昱东方安徽省合肥市瑶海区金科海昱东方</text>
			</view>
			<view class="flex p_b_24">
				<text class="color_666 out_item_title tar">退货联系人：</text>
				<text>铃铃铃</text>
			</view>
			<view class="flex p_b_24">
				<text class="color_666 out_item_title tar">联系人电话：</text>
				<text>18888888888</text>
			</view>
		</view>
		<view style="padding: 0 32rpx;" class="bgc_fff">
			<view class="form_item flexr-jsb b_b_2 flex-aic">
				<view class="font_28 color_333" style="width: 132rpx;">快递名称</view>
				<view class="flex-fitem tar">
					<input class="color_333 font_28 tar" v-model="formData.delivery" placeholder="请输入快递名称" />
				</view>
			</view>
			<view class="form_item flexr-jsb b_b_2 flex-aic">
				<view class="font_28 color_333" style="width: 132rpx;">快递单号</view>
				<view class="flex-fitem tar">
					<input class="color_333 font_28 tar" v-model="formData.code" placeholder="请输入快递单号" />
				</view>
			</view>
			<view class="form_item flexr-jsb b_b_2 flex-aic">
				<view class="font_28 color_333" style="width: 132rpx;">联系人</view>
				<view class="flex-fitem tar">
					<input class="color_333 font_28 tar"  v-model="formData.name" placeholder="请输入联系人名称" />
				</view>
			</view>
			<view class="form_item flexr-jsb b_b_2 flex-aic">
				<view class="font_28 color_333" style="width: 132rpx;">联系电话</view>
				<view class="flex-fitem tar">
					<input class="color_333 font_28 tar" v-model="formData.phone" type="number" :maxlength="11"
						placeholder="请输入手机号码" />
				</view>
			</view>
		</view>
		<view class="out_nav_view">
			<view class="out_nav_box pos_f bgc_fff flex-aic flexr-jsc">
				<lyz-button  @lyzTap="tapRules" width="686rpx" borderColor="#fe5572" backgroundColor="#fe5572"
					title="提交"></lyz-button>
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
	const formData = reactive({
		phone: '',
		name: '',
		code: '',
		delivery: ''
	})
const tapRules = () => {
		if (formData.delivery.trim() == '') {
			uni.showToast({
				icon: "none",
				title: '请输入快递名称'
			})
		} else if (formData.code.trim() == '') {
			uni.showToast({
				icon: "none",
				title: '请输入快递单号'
			})
		} else if (formData.name.trim() == '') {
			uni.showToast({
				icon: "none",
				title: '请输入联系人名称'
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
		} else {
			console.log(formData)
			uni.showToast({
				title: '提交成功'
			})
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	.form_item {
		padding: 28rpx 0;
	}
	.out_item_title {
		width: 200rpx;
	}
	.out_nav_view {
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
	
	.out_nav_box {
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
