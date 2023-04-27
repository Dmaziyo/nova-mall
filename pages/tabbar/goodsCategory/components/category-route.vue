<template>
  <view class="category-link">
    <view class="icon-box">
      <uni-icons
        @click="clickHandler"
        style="font-size: 30px"
        class="back-btn iconfont"
        :type="checked ? activeType : iconType"
      />
    </view>
    <view>{{ text }}</view>
  </view>
</template>

<script>
  export default {
    props: {
      iconType: String,
      activeType: String,
      text: String,
      url: String,
      checked: Boolean,
    },
    methods: {
      clickHandler() {
        this.$emit('iconClick', this.text)
      },
    },
    // other options and methods
  }
</script>

<style lang="scss">
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
