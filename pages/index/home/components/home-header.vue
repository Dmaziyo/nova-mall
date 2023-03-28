<template>
  <view class="bg-color">
    <!-- <uni-nav-bar left-icon="left" right-icon="cart" title="标题" /> -->
    <uni-nav-bar
      left-icon="bars"
      right-icon="shop"
      title="SHOPPAY"
      color="#fff"
      backgroundColor="#1E385A"
      :border="false"
    />
    <view>hhh</view>
    <view>
      <!--      <Vue3Lottie :animationData="animationData" :height="200" :width="200" />-->
      <Lottie
        :options="animationOptions"
        :height="200"
        :width="200"
        @animCreated="handleAnimation"
      />
    </view>
  </view>
</template>

<script setup>
  import * as animationData from '../../../../assets/json/management.json'
  import Lottie from 'vue-lottie/src/lottie.vue'
  // import Vue3Lottie from 'vue3-lottie'
  // import VueLottie from 'vue-lottie'
  import { onMounted, reactive } from 'vue'

  const animationOptions = reactive({
    animationData: animationData.default,
  })

  const handleAnimation = () => {}

  onMounted(() => {
    handleAnimation()
  })
</script>

<style scoped lang="scss">
  .bg-color {
    height: 470rpx;
    background: #1e385a;
  }
</style>
