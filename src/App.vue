<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    hello() {
      console.log('ssss')
    }
  }
}
</script>

<style>
.app-container {
  font-size: 10px;
}
</style>
