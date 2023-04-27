<template>
  <view class="filter-tab">
    <view class="filter-bar">
      <view class="quantity-filter">
        <view>综合</view>
        <view>销量</view>
      </view>
      <van-dropdown-menu class="brand-filter">
        <van-dropdown-item v-model="brandFilter" title="品牌" :options="brandOptions" />
      </van-dropdown-menu>
    </view>
    <van-card
      v-for="(good, index) in goodsList"
      :key="good.title + index"
      :price="good.price"
      :title="good.title"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
      <template #tags>
        <van-tag
          v-for="(tag, index) in good.tags"
          plain
          :type="index === 0 ? 'warning' : 'primary'"
          :key="index"
          >标签</van-tag
        >
        <van-tag plain type="primary">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">购买</van-button>
      </template>
    </van-card>
  </view>
</template>

<script>
  export default {
    props: {
      goodsList: Array,
    },
    data() {
      return {
        brandFilter: '品牌',
        brandOptions: [
          { text: 'Nike', value: 0 },
          { text: 'Adidas', value: 1 },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .filter-tab {
    flex: 1;
  }
  :deep(.van-card__content .van-card__title) {
    margin-bottom: 8px;
  }
  :deep(.van-card) {
    background-color: #ffffff;
    .van-image {
      background-color: #f7f8fa;
    }
  }
  .filter-bar {
    align-items: center;
    display: flex;
    padding: 0 25px;
    justify-content: space-between;
    .quantity-filter {
      width: 80px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      view {
        background-color: #f7f7f7;
        padding: 5px;
        text-align: center;
        border-radius: 20px;
      }
    }
    .brand-filter {
      :deep(.van-dropdown-menu__bar) {
        padding: 0 5px;
        height: 30px;
        border-radius: 20px;
        background-color: #f7f8fa;
      }
    }
  }
</style>
