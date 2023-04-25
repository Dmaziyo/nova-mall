<template>
  <view style="padding-bottom: 60rpx">
    <view class="my_head_box bgc_ff7000 boxs_bb pos_r">
      <view class="flex flex-aic">
        <image
          class="my_head_img m_r_24"
          src="http://cdn.becase.top/202303071628801.png"
          mode="aspectFill"
        ></image>
        <view class="flex-fitem">
          <view class="m_b_16 flex flex-aife color_fff">
            <text class="font_36 m_r_16">jiechen</text>
            <view class="font_20 my_binding_box m_b_8">已绑定</view>
          </view>
          <view class="color_fff font_28">18888888888</view>
        </view>
      </view>
      <view class="bgc_fff my_integral_view boxs_bb pos_a color_333 font_40 flexr-jsb flex-aic">
        <view class="tac flex-fitem" @tap="toNav('/pages/integral/integral')">
          <view class="m_r_16">1000</view>
          <text class="font_28">积分</text>
        </view>
        <view class="my_integral_line bgc_eee"></view>
        <view class="tac flex-fitem" @tap="toNav('/pages/collect/collect')">
          <view class="m_r_16">1000</view>
          <text class="font_28">我的收藏</text>
        </view>
      </view>
    </view>
    <view style="padding-bottom: 100rpx">
      <my-tools :columns="columns"></my-tools>
    </view>
  </view>
</template>

<script setup>
  import myTools from '../tabbar/my/components/my-tools.vue'
  import { ref } from 'vue'
  const columns = ref([
    {
      title: '个人信息',
      pages: '',
      icon: 'http://www.liwanying.top/applate-icon/wodemiaosha@2x.png',
    },
    {
      title: '修改密码',
      pages: '/pages/profile/components/password',
      icon: 'http://www.liwanying.top/applate-icon/wodexinxi@2x.png',
    },
    {
      title: '修改手机',
      pages: '/pages/exchange/exchange',
      icon: 'http://www.liwanying.top/applate-icon/duihuanjilu@2x.png',
    },
    {
      title: '我的会员',
      pages: '',
      icon: 'http://www.liwanying.top/applate-icon/fenxiaozhongxin@2x.png',
    },
  ])

  const toNav = (pages) => {
    uni.navigateTo({
      url: pages,
    })
  }
</script>

<style lang="scss">
  page {
    background-color: #f8f8f8;
  }

  .my_head_box {
    height: 284rpx;
    padding: 24rpx 32rpx 0;
    margin-bottom: 104rpx;
  }
  .my_head_img {
    width: 96rpx;
    height: 96rpx;
    border-radius: 100%;
  }
  .my_integral_view {
    width: 686rpx;
    height: 172rpx;
    box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(238, 238, 238, 1);
    border-radius: 20rpx;
    bottom: -104rpx;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
  }
  .my_binding_box {
    height: 26rpx;
    line-height: 26rpx;
    padding: 0 16rpx;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 12rpx;
  }
  .my_integral_line {
    width: 4rpx;
    height: 76rpx;
  }
  .my_order_card {
    margin: 0 auto 24rpx;
    width: 686rpx;
    height: 226rpx;
    box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(238, 238, 238, 1);
    border-radius: 16rpx;
  }
  .my_order_card_title {
    padding: 20rpx 32rpx 32rpx;
  }
  .my_order_icon {
    height: 48rpx;
    width: 48rpx;
  }
  .my_vip_box {
    padding-left: 40rpx;
    height: 136rpx;
    width: 100%;
    background-image: url(http://www.liwanying.top/applate-icon/vip-bgc.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>
