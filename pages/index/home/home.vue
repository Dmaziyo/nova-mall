<template>
  <view>
    <!--		<home-search></home-search>-->
    <!--		<home-swiper></home-swiper>-->
    <HomeHeader></HomeHeader>
    <home-grid></home-grid>
    <!--		<image class="bar_box" src="http://www.liwanying.top/applate-icon/bar.png" mode="widthFix"></image>-->
    <view class="tabs_box">
      <lyz-tabs
        type="scroll"
        v-model="tabIndex"
        @change="(item) => getTab(item.id)"
        :columns="[
          { title: 'ALL', id: '4' },
          { title: 'NIKE', id: '5' },
          { title: 'adidas', id: '3' },
          { title: 'Converse', id: '6' },
          { title: 'ERKE', id: '7' },
        ]"
      ></lyz-tabs>
    </view>
    <home-flow></home-flow>
  </view>
</template>

<script setup>
  import HomeSearch from './components/home-search.vue'
  import HomeSwiper from './components/home-swiper.vue'
  import HomeGrid from './components/home-grid.vue'
  import HomeFlow from './components/home-flow.vue'
  import { ref } from 'vue'
  import HomeHeader from './components/home-header.vue'
  let tabIndex = ref(0)
  const getTab = (id) => {
    console.log(id)
  }
</script>

<style lang="scss" scoped>
  .bar_box {
    width: 100%;
    height: 140rpx;
  }
  .tabs_box {
    padding: 24rpx 0;
  }
</style>
