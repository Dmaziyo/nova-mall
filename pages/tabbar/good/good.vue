<template>
  <view class="page">
    <view class="search_box">
      <uni-search-bar
        placeholder="Search brand, products..."
        @confirm="search"
        @input="input"
      ></uni-search-bar>
    </view>

    <view class="suggestions">
      <view class="title"> SUGGESTIONS </view>
      <view class="content">
        <view class="img-box" v-for="item in imgList" :key="item.label">
          <img src="../../../assets/img/200-gray.png" alt="" />
          <view class="img-text">{{ item.label }}</view>
        </view>
      </view>
    </view>

    <lyz-tab-bar pagePath="pages/tabbar/good/good"></lyz-tab-bar>
  </view>
</template>

<script setup>
  import { ref } from 'vue'

  const imgList = ref([
    { label: 'Women', img: '' },
    {
      label: 'Men',
      img: '',
    },
    {
      label: 'Kids',
      img: '',
    },
    {
      label: 'Teens',
      img: '',
    },
    { label: 'Old', img: '' },
  ])
</script>

<style lang="scss" scoped>
  @import '@/common/styles/custom.scss';
  .page {
    .search_box {
      margin-bottom: 32upx;
    }
    .suggestions {
      padding: 0 20upx;
      .title {
        margin: 16upx 0;
        font-size: 32upx;
        font-weight: 600;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        .img-box {
          display: flex;
          align-items: center;
          padding: 10upx;
          img {
            width: 140upx;
            border-radius: 20upx;
          }
          .img-text {
            margin-left: 10upx;
            font-size: 28upx;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
