<template>
	<view>
		<view class="bgc_ffe7e6 flex-aic flexr-jsc logistics_notify_box m_b_24">
			<text class="font_28 color_ff3b30">待付款：剩23小时15分钟自动关闭</text>
		</view>
		<view class="bgc_fff flex logistics_code_box b_b_2">
			<image class="logistics_icon m_r_24" src="http://www.liwanying.top/applate-icon/kuaidicheche.png" mode=""></image>
			<view class="flex-fitem">
				<view>中通快递</view>
				<view class="flex-aic flexr-jsb font_28">
					<text class="color_666">78657039467652</text>
					<view class="color_ff7000">
						<text class="m_r_16">复制</text>
					</view>
				</view>
			</view>
		</view>
		<!-- <view style="padding-top: 176rpx;">
			<lyz-nodata color="#333" height="200rpx" text="暂时还没有物流信息哦~" imgSrc="http://www.liwanying.top/applate-icon/kuaidikong.png"></lyz-nodata>
		</view> -->
		<view class="logistics_steps_box bgc_fff">
			<lyz-steps backgroundColor='#F0F3F5' :infoList="infoList">
				<template #icon="iconProps">
					<view class="logistics_steps_icon flex-aic flexr-jsc" :class="iconProps.index == 0 ?'' : 'logistics_steps_icon_out'">
						<view class="bgc_ff7000"></view>
					</view>
				</template>
				<template #content="contentProps">
						<view class="p_b_24">
							<view class="m_b_8 flex flex-aife" :class="contentProps.index == 0 ? 'color_ff7000' : 'color_999'">
								<text class="font_32 m_r_16">{{contentProps.data.status}}</text>
								<text class="font_24">{{contentProps.data.time}}</text>
							</view>
							<view class="font_28" style="width: 614rpx;" :class="contentProps.index == 0 ? 'color_333' : 'color_999'">
								{{contentProps.data.context}}
							</view>
						</view>
				</template>
			</lyz-steps>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const infoList = ref([
        {
            "time": "2022-08-23 14:31:50",
            "context": "客户签收人: 他人代收 已签收 感谢使用圆通速递，期待再次为您服务 如有疑问请联系：13958492389，投诉电话：18248586322 疫情期间圆通每天对网点多次消毒，快递小哥新冠疫苗已接种，每天测量体温，佩戴口罩",
            "ftime": "2022-08-23 14:31:50",
            "areaCode": null,
            "areaName": null,
            "status": "签收"
        },
        {
            "time": "2022-08-23 08:33:04",
            "context": "【浙江省金华市金东区傅村镇杨家分部公司】 派件中 派件人: 曾中奇 电话 13958492389 如有疑问，请联系：18248586322 新冠疫苗已接种。95161和185211号段的上海号码为圆通业务员专属号码",
            "ftime": "2022-08-23 08:33:04",
            "areaCode": "CN330703102000",
            "areaName": "浙江,金华市,金东区,傅村镇",
            "status": "派件"
        },
        {
            "time": "2022-08-23 04:41:51",
            "context": "【浙江省金华市金东区】 已发出",
            "ftime": "2022-08-23 04:41:51",
            "areaCode": "CN330703000000",
            "areaName": "浙江,金华市,金东区",
            "status": "在途"
        },
        {
            "time": "2022-08-23 03:51:51",
            "context": "【浙江省金华市金东区公司】 已收入",
            "ftime": "2022-08-23 03:51:51",
            "areaCode": "CN330703000000",
            "areaName": "浙江,金华市,金东区",
            "status": "在途"
        },
        {
            "time": "2022-08-23 03:20:35",
            "context": "【金华转运中心】 已发出",
            "ftime": "2022-08-23 03:20:35",
            "areaCode": "CN330700000000",
            "areaName": "浙江,金华市",
            "status": "在途"
        },
        {
            "time": "2022-08-23 02:30:35",
            "context": "【金华转运中心公司】 已收入",
            "ftime": "2022-08-23 02:30:35",
            "areaCode": "CN330700000000",
            "areaName": "浙江,金华市",
            "status": "在途"
        },
        {
            "time": "2022-08-21 22:17:48",
            "context": "【广州转运中心】 已发出 下一站 【金华转运中心公司】",
            "ftime": "2022-08-21 22:17:48",
            "areaCode": "CN440100000000",
            "areaName": "广东,广州市",
            "status": "在途"
        },
        {
            "time": "2022-08-21 22:16:16",
            "context": "【广州转运中心公司】 已收入",
            "ftime": "2022-08-21 22:16:16",
            "areaCode": "CN440100000000",
            "areaName": "广东,广州市",
            "status": "在途"
        },
        {
            "time": "2022-08-21 21:01:43",
            "context": "【广东省广州市荔湾区光复路】 已发出 下一站 【广州转运中心公司】",
            "ftime": "2022-08-21 21:01:43",
            "areaCode": "CN440103000000",
            "areaName": "广东,广州市,荔湾区",
            "status": "在途"
        },
        {
            "time": "2022-08-21 20:17:51",
            "context": "【广东省广州市荔湾区光复路公司】 已收入",
            "ftime": "2022-08-21 20:17:51",
            "areaCode": "CN440103000000",
            "areaName": "广东,广州市,荔湾区",
            "status": "在途"
        },
        {
            "time": "2022-08-21 11:37:46",
            "context": "【广东省广州市越秀区万福路公司】 已揽收 取件人: 吴行杨 (13268385578) 新冠疫苗已接种",
            "ftime": "2022-08-21 11:37:46",
            "areaCode": "CN440104000000",
            "areaName": "广东,广州市,越秀区",
            "status": "揽收"
        }
    ])
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
	.logistics_notify_box {
		height: 68rpx;
	}
	.logistics_icon {
		width: 72rpx;
		height: 72rpx;
	}
	.logistics_code_box {
		padding: 24rpx 32rpx;
	}
	.logistics_steps_box {
		padding: 24rpx 0 100rpx 56rpx;
	}
	.logistics_steps_icon {
		width: 24rpx;
		height: 24rpx;
		background-color: rgba(255, 112, 0, 0.3);
		border-radius: 50%;
		view {
			width: 12rpx;
			height: 12rpx;
			border-radius: 50%;
		}
	}
	.logistics_steps_icon_out {
		background-color: rgba(194, 199, 204, 0.3);
		view {
			background-color: #C2C7CC;
		}
	}
</style>
