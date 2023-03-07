export const initDate = (year, month) => {
	const prevMonthDays = getPrevMonthDays(year, month)
	const currentMonthDays = getCurrentMonthDays(year, month)
	const nextMonthDays = getNextMonthDays(year, month)
	return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
}
export const getCurrentMonthDays = (year, month) => {
	const currentMonthLastDay = getMonthLastDay(year, month)
	const days = []
	const {
		year: currentYear,
		month: currentMonth,
		day: currentDay
	} = getCurrentDate()

	for (let i = 1; i <= currentMonthLastDay; i++) {
		let isToday =
			currentYear === year && currentMonth === month && currentDay === i
		days.push({
			type: 'current',
			isToday,
			date:`${year}-${month < 10 ? '0'+month :month}-${i <10 ? '0' + i : i}`,
			day: i
		})
	}
	return days
}
export const getPrevMonthDays = (year, month) => {
	const {
		prevYear,
		prevMonth
	} = getPrevMonthInfo(year, month)
	const prevMonthLastDay = getMonthLastDay(prevYear, prevMonth)
	const date = new Date(`${year}/${month}/1`)
	const week = date.getDay()
	const days = []

	for (let i = 0; i < week; i++) {
		days.unshift({
			type: 'prev',
			isToday:false,
			date:`${prevYear}-${prevMonth < 10 ? '0' + prevMonth : prevMonth}-${prevMonthLastDay - i}`,
			day: prevMonthLastDay - i
		})
	}

	return days
}
export const getMonthLastDay = (year, month) => {
	const {
		nextYear,
		nextMonth
	} = getNextMonthInfo(year, month)
	const date = new Date(`${nextYear}/${nextMonth}/1`)
	const firstDayTimeStamp = date.getTime()
	const oneDayTimeStamp = 24 * 60 * 60 * 1000
	const prevMonthLastDay = new Date(
		firstDayTimeStamp - oneDayTimeStamp
	).getDate()

	return prevMonthLastDay
}
export const getNextMonthInfo = (year, month) => {
	let nextYear = year
	let nextMonth = month + 1

	if (nextMonth > 12) {
		nextMonth = 1
		nextYear += 1
	}

	return {
		nextYear,
		nextMonth
	}
}
export const getPrevMonthInfo = (year, month) => {
	let prevYear = year
	let prevMonth = month - 1
	if (prevMonth < 1) {
		prevMonth = 12
		prevYear -= 1
	}
	return {
		prevYear,
		prevMonth
	}
}
export const getCurrentDate = () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	return {
		year,
		month,
		day
	}
}
export const getNextMonthDays = (year, month) => {
	const {
		nextYear,
		nextMonth
	} = getNextMonthInfo(year, month)
	const currentMonthLastDay = getMonthLastDay(year, month)
	const date = new Date(`${year}/${month}/${currentMonthLastDay}`)
	console.log(date.getDay())
	const week = date.getDay()
	const days = []
	let day = 0
	for (let i = week + 1; i <= 6; i++) {
		day++
		days.push({
			type: 'next',
			isToday:false,
			date:`${nextYear}-${nextMonth <10 ? '0' + nextMonth : nextMonth}-${day <10 ? '0' + day : day}`,
			day
		})
	}

	return days
}
