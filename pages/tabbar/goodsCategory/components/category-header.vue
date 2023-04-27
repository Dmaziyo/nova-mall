<template>
  <view class="route-header">
    <!-- <category-route
      @iconClick="clickHandler"
      v-for="item in list"
      :iconType="item.iconType"
      :text="item.text"
      :key="item.text"
      :activeType="item.activeType"
      :checked="item.text === current"
    ></category-route> -->
    <view v-for="item in routeList" class="category-link" :key="item.text">
      <view class="icon-box">
        <uni-icons
          @click="clickHandler(item.text, item.url)"
          style="font-size: 30px"
          class="back-btn iconfont"
          :type="item.text === current ? item.activeType : item.iconType"
        />
      </view>
      <view>{{ item.text }}</view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      routeList: Array,
    },
    methods: {
      // 返回上一页
      clickHandler(text, url) {
        console.log(url)
        this.current = text
      },
    },
    data() {
      return {
        list: [
          {
            iconType: 'shop',
            activeType: 'shop-filled',
            text: '全部',
            url: 'link',
          },
          {
            iconType: 'gift',
            activeType: 'gift-filled',
            text: '营养健康',
            url: 'link',
          },
          {
            iconType: 'star',
            activeType: 'starhalf',
            text: '口服美容',
            url: 'link',
          },
          {
            iconType: 'navigate',
            activeType: 'navigate-filled',
            text: '美妆护肤',
            url: 'link',
          },
          {
            iconType: 'camera',
            activeType: 'camera-filled',
            text: '母婴亲子',
            url: 'link',
          },
          {
            iconType: 'gear',
            activeType: 'gear-filled',
            text: '电子设备',
            url: 'link',
          },
        ],
        current: '全部',
      }
    },
    // other options and methods
  }
</script>

<style lang="scss">
  .route-header {
    padding: 15px;
    display: flex;
    column-gap: 30px;
    overflow-x: scroll;
  }
  .category-link {
    font-size: 12px;
    white-space: nowrap;
    .icon-box {
      background-color: #f7f7f7;
      padding: 8px;
      border-radius: 50%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
  }
</style>
