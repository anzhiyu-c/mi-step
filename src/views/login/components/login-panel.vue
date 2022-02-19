<!--
 * @Description: 登录卡片组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-29 14:53:11
 * @LastEditTime: 2021-09-20 17:58:02
 * @LastEditors: 安知鱼
-->
<template>
  <div class="login-panel">
    <el-tabs stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" style="margin-top: 10px" />
        <div class="account-control">
          <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
          <el-link type="primary" @click="handleForgetClick">忘记密码</el-link>
        </div>
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 短信登录</span>
        </template>
        <login-phone ref="phoneRef" style="margin-top: 10px" />
      </el-tab-pane>

      <div class="handle">
        <el-button type="primary" class="login-btn" @click="handleLoginClick"
          >立即登录</el-button
        >
        <el-button type="text" class="register-btn" @click="handleRegisterClick"
          >立即注册</el-button
        >
      </div>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account'
import LoginPhone from './login-phone'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  emits: ['RegisterClick', 'ForgetClick'],
  setup(props, { emit }) {
    // 1.定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    // 2.定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }

    const handleForgetClick = () => {
      emit('ForgetClick')
    }

    const handleRegisterClick = () => {
      emit('RegisterClick')
    }

    return {
      phoneRef,
      accountRef,
      isKeepPassword,
      currentTab,
      handleLoginClick,
      handleForgetClick,
      handleRegisterClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .handle {
    display: flex;
    flex-direction: column;
    .login-btn {
      width: 100%;
      margin-top: 10px;
    }
    .register-btn {
      margin: 0 auto;
    }
  }
}
</style>
