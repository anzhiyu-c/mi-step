<!--
 * @Description: 登录容器
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-20 09:32:09
 * @LastEditTime: 2021-09-20 17:59:21
 * @LastEditors: 安知鱼
-->
<template>
  <div class="login-container">
    <el-card>
      <!-- <transition name="el-fade-in-linear" mode="out-in"> -->
      <login-panel
        @RegisterClick="handleExchange"
        @ForgetClick="ForgetClick"
        v-if="login"
      ></login-panel>
      <login-register
        v-else
        @handleLoginClick="handleExchange"
      ></login-register>
      <!-- </transition> -->
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginPanel from './login-panel.vue'
import LoginRegister from './login-register'
export default defineComponent({
  components: {
    LoginPanel,
    LoginRegister
  },
  emits: ['ForgetClick'],
  setup(props, { emit }) {
    const login = ref(true)
    const handleExchange = () => {
      login.value = !login.value
    }
    const ForgetClick = () => {
      emit('ForgetClick')
    }
    return {
      ForgetClick,
      handleExchange,
      login
    }
  }
})
</script>

<style scoped lang="less">
.login-container {
  width: 360px;
}
</style>
