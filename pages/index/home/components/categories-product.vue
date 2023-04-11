<template>
  <view class="page">
    <view class="header">
      <view class="header-left"> 分类 </view>
      <view class="header-right"> 全部 </view>
    </view>
    <scroll-view scroll-x="true" scroll-left="120">
      <view class="scroll-view">
        <view
          :class="['scroll-item', activeName === item.value ? 'active' : '']"
          v-for="item in categories"
          :key="item.value"
          @click="scrollItemHandler(item)"
          >{{ item.label }}</view
        >
      </view>
    </scroll-view>

    <scroll-view scroll-x="true" scroll-left="120">
      <view class="content">
        <view v-for="item in list" :key="item" class="img-wrapper">
          <img class="img-item" src="../../../../assets/img/200-blue.png" alt="" />
          <view class="title">Nike Air Max</view>
          <view class="number">101.00</view>
          <view class="desc">这是描述描述</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup>
  import { reactive, ref, toRefs } from 'vue'

  const list = ref([1, 2, 3, 4, 5])
  const state = reactive({
    activeName: 'Tops',
    categories: [
      {
        label: 'Shoes',
        value: 'Shoes',
      },
      {
        label: 'T-Shirts',
        value: 'T-Shirts',
      },
      {
        label: 'Tops',
        value: 'Tops',
      },
      {
        label: 'Kid',
        value: 'Kid',
      },
      {
        label: 'Kid',
        value: 'Kid',
      },
    ],
  })

  const scrollItemHandler = (item) => {
    state.activeName = item.value
  }

  const { categories, activeName } = toRefs(state)
</script>

<style lang="scss" scoped>
  .page {
    margin-bottom: 20upx;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10upx;
    padding: 10upx 30upx;
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
  }
  .scroll-view {
    display: flex;
    align-items: center;
    .scroll-item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 10upx 32upx 10upx 32upx;
      //margin-right: 16upx;
      background: rgb(245, 245, 246);
      margin-right: 16upx;
      border-radius: 50upx;
      white-space: nowrap;
    }
    .active {
      background: rgb(222, 96, 83);
      color: #fff;
    }
  }
  .content {
    display: flex;
    margin-top: 20upx;
    font-size: 26upx;
    .img-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 20upx;
    }
    .img-item {
      width: 200upx;
      border-radius: 20upx;
    }
    .title,
    .number {
      font-weight: 500;
    }
    .desc {
      font-size: 24upx;
    }
  }
</style>
