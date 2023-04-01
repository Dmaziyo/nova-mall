<template>
  <view>
    <HomeHeader></HomeHeader>
    <view class="content-container">
      <CategoriesProduct></CategoriesProduct>
      <view class="divider"></view>
      <PopularProduct></PopularProduct>
    </view>
  </view>
</template>

<script setup>
  import HomeHeader from './components/home-header.vue'
  import CategoriesProduct from './components/categories-product.vue'
  import PopularProduct from './components/popular-product.vue'
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
