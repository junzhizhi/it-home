<template>
  <div class="login-container">
    <van-nav-bar title="IT之家-登录"></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入正确的手机号', pattern :/^1[3-9]\d{9}$/ }]"
      />
      <van-field
        v-model="user.code"
        type="password"
        name="code"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入正确的密码', pattern :/^\d{6}$/ }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          :loading="isLoading"
          loading-text="登录中..."
          :disabled="isLoading"
        >登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// 导入登录接口
import { loginAPI } from '@/api/index'
import { Notify } from 'vant'
import { setToken } from '@/utils/token'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        mobile: '',
        code: '246810'
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit(values) {
      this.isLoading = true
      try {
        const { data: res } = await loginAPI(this.user)
        console.log(res.data.token)
        const myToken = res.data.token
        // 成功通知
        Notify({ type: 'success', message: '登陆成功OvO！' })
        setToken(myToken)
        this.$router.push('/')
      } catch (error) {
        // 危险通知
        Notify({ type: 'danger', message: '登录失败QAQ！' })
      }
      this.isLoading = false
    }
  }
}
</script>

<style lang="less" scope>
.van-nav-bar {
  background-color: #2b88ece4;
  .van-nav-bar__title {
    color: white;
  }
}
</style>
