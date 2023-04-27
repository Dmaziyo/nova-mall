<template>
  <view class="search_box">
    <uni-icons
      style="font-size: 30px"
      class="back-btn iconfont iconarrow_btn_left"
      type="arrowleft"
      @click="navBack"
    />
    <uni-search-bar placeholder="Search brand, products..." cancelButton="none"></uni-search-bar>
    <uni-icons style="font-size: 30px" class="back-btn iconfont shop-filled" type="shop-filled" />
  </view>
</template>

<script>
  export default {
    methods: {
      // 返回上一页
      navBack() {
        uni.switchTab({
          url: '/',
        })
      },
    },
    // other options and methods
  }
</script>

<style lang="scss">
  .search_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  :deep(.uni-searchbar) {
    flex: 1;
  }
  :deep(uni-icons) {
    font-size: 35px;
  }
</style>
