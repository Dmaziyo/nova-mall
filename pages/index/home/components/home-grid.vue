<template>
  <view>
    <view class="header">
      <view class="header-left"> CATEGORIES </view>
      <view class="header-right"> See All </view>
    </view>
    <!--    <swiper-->
    <!--      class="swiper"-->
    <!--      :style="{-->
    <!--        height: 4 <= 4 ? '170rpx' : '360rpx',-->
    <!--      }"-->
    <!--    >-->
    <!--      <swiper-item class="swiper-item">-->
    <!--        <lyz-grid-->
    <!--          @tapGrid="tapGrid"-->
    <!--          :border="false"-->
    <!--          :columnNum="4"-->
    <!--          :columns="[-->
    <!--            {-->
    <!--              title: 'Shoes',-->
    <!--              icon: 'http://www.liwanying.top/applate-icon/muying2x.png',-->
    <!--            },-->
    <!--            {-->
    <!--              title: 'T-Shirt',-->
    <!--              icon: 'http://www.liwanying.top/applate-icon/muying2x.png',-->
    <!--            },-->
    <!--            {-->
    <!--              title: 'Tops',-->
    <!--              icon: 'http://www.liwanying.top/applate-icon/muying2x.png',-->
    <!--            },-->
    <!--            {-->
    <!--              title: 'Kid',-->
    <!--              icon: 'http://www.liwanying.top/applate-icon/muying2x.png',-->
    <!--            },-->
    <!--          ]"-->
    <!--        >-->
    <!--        </lyz-grid>-->
    <!--      </swiper-item>-->
    <!--    </swiper>-->
  </view>
</template>

<script setup>
  const tapGrid = () => {
    uni.showToast({
      icon: 'none',
      title: '正在开发中...',
    })
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10upx;
    padding: 20upx 30upx;
  }
  .header-left {
    color: #000;
    font-size: 32upx;
    font-weight: 600;
  }
  .header-right {
    color: #de6053;
    font-size: 28upx;
    font-weight: 600;
  }
</style>
