<template>
  <view class="bg-color">
    <!--    <uni-nav-bar left-icon="left" right-icon="cart" title="标题" />-->
    <uni-nav-bar
      fixed
      left-icon="bars"
      right-icon="shop"
      title="NOVA"
      color="#fff"
      backgroundColor="#1E385A"
      :border="false"
    />
    <view>
      <Vue3Lottie :animationData="animationData" :height="200" :width="200" />
    </view>
  </view>
</template>

<script setup>
  import animationData from '../../../../assets/json/management.json'
  import { Vue3Lottie } from 'vue3-lottie'
  import 'vue3-lottie/dist/style.css'
</script>

<style scoped lang="scss">
  .bg-color {
    height: 470rpx;
    background: #1e385a;
  }
  .animation {
    width: 750rpx;
    height: 300rpx;
    background-color: #ff0000;
    margin-bottom: 20px;
  }
</style>
