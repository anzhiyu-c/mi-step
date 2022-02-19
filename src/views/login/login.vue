<template>
  <div class="login">
    <div class="header">
      <login-header></login-header>
    </div>

    <div class="container" v-if="login">
      <login-container @ForgetClick="ForgetClick" />
    </div>

    <div class="forget-password" v-else>
      <login-forget @resetPassword="ForgetClick"></login-forget>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LoginContainer from './components/login-container.vue'
import LoginHeader from './components/login-heard.vue'
import LoginForget from './components/login-forget'

const login = ref(true)

const ForgetClick = () => {
  login.value = !login.value
}
</script>

<style scoped lang="less">
.login {
  background: url('@/assets/img/login-bg.svg');
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  .container {
    position: absolute;
    right: 50%;
    top: 10%;
    transform: translate(50%, 50%);
  }
}
</style>
