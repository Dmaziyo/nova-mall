<template>
  <view>
    <view class="integral_user boxs_bb bgc_ff7000 pos_r">
      <view class="flex flex-aic">
        <image
          class="integral_user_img m_r_24"
          src="https://cdn.becase.xyz/202303071628801.png"
          mode=""
        ></image>
        <view class="flex-fitem">
          <view class="m_b_16 color_fff font_36 font_bold">jiechen</view>
          <view @tap="toIntegral">
            <text class="m_r_16 color_fff font_28">当前积分：5652</text>
            <image
              style="width: 10rpx; height: 18rpx"
              src="http://www.liwanying.top/applate-icon/gengduo.png"
              mode=""
            >
            </image>
          </view>
        </view>
      </view>
      <!--			<image class="integral_turn_img pos_a"-->
      <!--				src="http://www.liwanying.top/applate-icon/zhibojifenzhuanhuan.png"-->
      <!--				mode="aspectFill"></image>-->
    </view>
    <view class="goods_search_box bgc_fff flex-aic flexr-jsc">
      <view class="search_box pos_r boxs_bb">
        <image
          class="search_icon pos_a"
          src="http://www.liwanying.top/applate-icon/icon_search.png"
          mode=""
        ></image>
        <input class="search_input bgc_f8f8f8 boxs_bb" placeholder="请输入商品" />
      </view>
    </view>
    <goods-flow></goods-flow>
    <lyz-tab-bar pagePath="pages/tabbar/good/good"></lyz-tab-bar>
  </view>
</template>

<script setup>
  import goodsFlow from './components/goods-flow.vue'
  const toIntegral = () => {
    uni.navigateTo({
      url: '/pages/integral/integral',
    })
  }
</script>

<style lang="scss" scoped>
  .integral_user {
    padding: 28rpx 32rpx 0;
    height: 228rpx;
    margin-bottom: 68rpx;
  }
  .goods_search_box {
    position: sticky;
    /* #ifdef H5 */
    top: var(--window-top);
    /* #endif */
    /* #ifndef H5 */
    top: 0;
    /* #endif */
    z-index: 1;
    width: 100%;
    height: 112rpx;
  }
  .integral_user_img {
    width: 96rpx;
    height: 96rpx;
    border-radius: 50%;
    overflow: hidden;
  }

  .integral_turn_img {
    bottom: -68rpx;
    width: 702rpx;
    height: 136rpx;
  }
  .search_box {
    width: 686rpx;
  }
  .search_icon {
    top: 18rpx;
    left: 32rpx;
    width: 40rpx;
    height: 40rpx;
  }
  .search_input {
    width: 100%;
    display: block;
    height: 76rpx;
    border-radius: 76rpx;
    padding-left: 88rpx;
  }
</style>
