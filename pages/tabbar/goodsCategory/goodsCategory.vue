<template>
  <view>
    <category-header></category-header>
    <category-nav :routeList="routeList"></category-nav>
    <side-bar :sideList="sideList" @sideChange="sideChangeHandler"></side-bar>
  </view>
</template>

<script>
  import categoryHeader from './components/category-header.vue'
  import categoryNav from './components/category-nav.vue'
  import sideBar from './components/side-bar.vue'
  export default {
    components: {
      categoryHeader,
      categoryNav,
      sideBar,
    },
    data() {
      return {
        routeList: [
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
        sideList: [
          {
            title: '全部商品',
          },
          {
            title: 'Vida Glow',
          },

          {
            title: 'SRW',
          },
          {
            title: 'eimcic',
          },
          {
            title: 'MittoQ',
          },
          {
            title: 'BEE+',
          },

          {
            title: 'NATUREADY',
          },

          {
            title: 'THALISSI',
          },

          {
            title: 'Dr.LeWirns',
          },
          {
            title: 'LOVEKINS',
          },
          {
            title: 'LOVEKINS WOMEN',
          },
          {
            title: 'Minerssey',
          },
        ],
      }
    },
    methods: {
      sideChangeHandler() {},
    },
    // other options and methods
  }
</script>

<style lang="scss"></style>
