<template>
  <view>
    <category-header></category-header>
    <category-nav :routeList="routeList"></category-nav>
    <view class="content">
      <side-bar :sideList="sideList" @sideChange="sideChangeHandler"></side-bar>
      <filter-tab :goodsList="goodsList"></filter-tab>
    </view>
  </view>
</template>

<script>
  import categoryHeader from './components/category-header.vue'
  import categoryNav from './components/category-nav.vue'
  import sideBar from './components/side-bar.vue'
  import filterTab from './components/filter-tab.vue'
  export default {
    components: {
      categoryHeader,
      categoryNav,
      sideBar,
      filterTab,
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
        goodsList: [
          {
            title: '商品标题',
            tags: ['包邮', '每4秒售出1个'],
            price: 213.83,
          },
          {
            title: '商品标题',
            tags: ['满$3800包邮', '专家级肤色管理'],
            price: 213.83,
          },
          {
            title: '商品标题',
            tags: ['满$3800包邮', '专家级肤色管理'],
            price: 213.83,
          },
          {
            title: '商品标题',
            tags: ['满$3800包邮', '专家级肤色管理'],
            price: 213.83,
          },
          {
            title: '商品标题',
            tags: ['满$3800包邮', '专家级肤色管理'],
            price: 213.83,
          },
          {
            title: '商品标题',
            tags: ['满$3800包邮', '专家级肤色管理'],
            price: 213.83,
          },
          {
            title: '商品标题',
            tags: ['满$3800包邮', '专家级肤色管理'],
            price: 213.83,
          },
        ],
      }
    },
    methods: {
      sideChangeHandler() {
        // 修改content
      },
    },
    // other options and methods
  }
</script>

<style lang="scss">
  .content {
    display: flex;
    column-gap: 10px;
  }
</style>
