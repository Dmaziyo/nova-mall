<template>
  <view class="side-bar">
    <van-sidebar v-model="current" @change="changeHandler">
      <van-sidebar-item v-for="item in sideList" :title="item.title" :key="item.title" />
    </van-sidebar>
  </view>
</template>

<script>
  export default {
    props: {
      sideList: Array,
    },
    methods: {
      changeHandler(e) {
        console.log(this.sideList[e])
        this.$emit('sideChange', this.sideList[e])
      },
    },
    data() {
      return {
        current: 0,
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
  :deep(.van-sidebar-item) {
    text-align: center;
  }
</style>
