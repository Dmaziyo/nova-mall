<template>
  <view>
    <HomeHeader></HomeHeader>
    <view class="content-container">
      <CategoriesSwiper></CategoriesSwiper>
      <view class="divider"></view>
      <CategoriesSwiper></CategoriesSwiper>
    </view>
  </view>
</template>

<script setup>
  import HomeHeader from './components/home-header.vue'
  import CategoriesSwiper from '@/pages/index/home/components/categories-swiper.vue'
</script>

<style lang="scss" scoped>
  @import '@/common/styles/custom.scss';

  .content-container {
    display: flex;
    flex-direction: column;
    padding: 10upx 30upx 0;
    background-color: #fff;
  }
</style>
