<template>
  <view class="route-header">
    <category-route
      @iconClick="clickHandler"
      v-for="item in list"
      :iconType="item.iconType"
      :text="item.text"
      :key="item.text"
      :activeType="item.activeType"
      :checked="item.text === current"
    ></category-route>
  </view>
</template>

<script>
  import categoryRoute from './category-route.vue'

  export default {
    components: {
      categoryRoute,
    },
    methods: {
      // 返回上一页
      clickHandler(val) {
        this.current = val
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
            text: '母婴亲子',
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
</style>
