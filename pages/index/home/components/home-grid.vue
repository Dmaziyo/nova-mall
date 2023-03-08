<template>
  <swiper
    class="swiper"
    :style="{
      height: 4 <= 4 ? '170rpx' : '360rpx',
    }"
  >
    <swiper-item class="swiper-item">
      <lyz-grid
        @tapGrid="tapGrid"
        :border="false"
        :columnNum="4"
        :columns="[
          {
            title: 'Shoes',
            icon: 'http://www.liwanying.top/applate-icon/muying2x.png',
          },
          {
            title: 'T-Shirt',
            icon: 'http://www.liwanying.top/applate-icon/muying2x.png',
          },
          {
            title: 'Tops',
            icon: 'http://www.liwanying.top/applate-icon/muying2x.png',
          },
          {
            title: 'Kid',
            icon: 'http://www.liwanying.top/applate-icon/muying2x.png',
          },
        ]"
      >
      </lyz-grid>
    </swiper-item>
  </swiper>
</template>

<script setup>
  const tapGrid = () => {
    uni.showToast({
      icon: 'none',
      title: '正在开发中...',
    })
  }
</script>

<style lang="scss" scoped></style>
