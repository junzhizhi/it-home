<template>
  <div class="layout-container">
    <div class="main">
      <router-view></router-view>

    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/layout/home"
      >้ฆ้กต</van-tabbar-item>
      <van-tabbar-item
        icon="setting-o"
        to="/layout/user"
      >ๆ็</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scope>
.main {
  padding-bottom: 44px;
}
.van-tabber {
  border-top: 1px solid #f8f8f8;
}
</style>
