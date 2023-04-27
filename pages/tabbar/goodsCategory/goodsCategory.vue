<template>
  <view>
    <search-bar></search-bar>
    <category-header></category-header>
  </view>
</template>

<script>
  import searchBar from './components/search-bar.vue'
  import categoryHeader from './components/category-header.vue'
  export default {
    components: {
      searchBar,
      categoryHeader,
    },
    // other options and methods
  }
</script>

<style lang="scss"></style>
