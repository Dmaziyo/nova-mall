<template>
	<view class="calendar bgc_fff">
		<view class="calendar_title font_28 tac color_3c7fff font_500 flex-aic flexr-jsc">
			<view class="flex-fitem flex-aic flexr-jfe" @tap="getPreMonth">
				<image class="calendar_icon" src="/static/icon/calendar-left-icon.png" mode=""></image>
			</view>
			<view style="margin: 0 4rpx;">{{dateDay.year}}年{{dateDay.month}}月</view>
			<view class="flex-fitem flex flex-aic tal" @tap="getNextMonth">
				<image class="calendar_icon" src="/static/icon/calendar-right-icon.png" mode=""></image>
			</view>
		</view>
		<view class="weeks flex">
			<view class="week-item tac flex-fitem" v-for="week in weeks" :key="week">{{ week }}
			</view>
		</view>
		<view class="flex flex-fww">
			<view @tap="tapDay(item)" v-for="(item,index) in dayList" :key="index"
				style="background-color: #fff;width: 14.285%;" class="flex-aic flexr-jsc">
				<view class="item_box tac font_28 color_6d7278"
					:class="{'bgc_3c7fff color_fff' : activeIndex == item.date, 'item_box_out' : item.type !== 'current'}">
					<text>{{item.day < 10 ? '0' + item.day : item.day}}</text>
					<view class="day_tips" :class="true? tipsClass[4] : ''"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted,
	} from "vue"
	import {
		initDate,
		getCurrentDate,
		getPrevMonthInfo,
		getNextMonthInfo
	} from './calendar.js'
	const emit = defineEmits(['change', 'tapDate'])
	let activeIndex = ref(null)
	let dateDay = reactive({
		year: null,
		month: null,
		day: null,
	})
	let tipsClass = reactive(['bgc_3c7fff', 'bgc_10b53c', 'bgc_fa6400', 'bgc_ff971b', 'bgc_5820e0', 'bgc_e02020'])
	let weeks = reactive(['日', '一', '二', '三', '四', '五', '六'])
	let dayList = ref([])
	onMounted(async() => {
		const dataTemp = await getCurrentDate()
		dateDay.year = dataTemp.year
		dateDay.month = dataTemp.month
		emit('change', dateDay)
		dayList.value = await initDate(dateDay.year, dateDay.month)
	})
	const tapDay = (day) => {
		if (day.type == "current") {
			activeIndex.value = day.date
			emit('tapDate', day)
			return
		}
		if (day.type == "prev") return getPreMonth()
		if (day.type == "next") return getNextMonth()
	}
	const getPreMonth = () => {
		const {
			prevYear,
			prevMonth
		} = getPrevMonthInfo(
			dateDay.year,
			dateDay.month
		)
		dayList.value = initDate(prevYear, prevMonth)
		dateDay.year = prevYear
		dateDay.month = prevMonth
		emit('change', dateDay)
	}
	const getNextMonth = () => {
		const {
			nextYear,
			nextMonth
		} = getNextMonthInfo(
			dateDay.year,
			dateDay.month
		)
		dayList.value = initDate(nextYear, nextMonth)
		dateDay.year = nextYear
		dateDay.month = nextMonth
		emit('change', dateDay)
	}
</script>
<style lang="scss" scoped>
	.calendar {}

	.calendar_title {
		width: 100%;
		height: 80rpx;
		border-radius: 0rpx 0rpx 4rpx 4rpx;
	}

	.weeks {
		font-size: 30rpx;
		padding: 32rpx 0;
		border-top: 2rpx rgba(241,241,241,0.8000) solid;
		.week-item {}
	}

	.item_box {
		position: relative;
		width: 70rpx;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 4rpx;
		.day_tips {
			position: absolute;
			bottom: 8rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 4px;
			height: 4px;
			border-radius: 50%;
		}
	}

	.item_box_out {
		opacity: 0.5;
	}

	.calendar_icon {
		width: 32rpx;
		height: 32rpx;
	}
</style>
