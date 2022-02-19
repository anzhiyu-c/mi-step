<!--
 * @Description: 注册 组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-20 16:22:45
 * @LastEditTime: 2021-09-20 17:14:45
 * @LastEditors: 安知鱼
-->
<template>
  <div class="login-register">
    <an-form ref="anFormRef" v-bind="registerConfig" v-model="formData">
      <template #append>
        <el-button
          class="get-code-btn"
          @click="getCode"
          :disabled="!getCodeDisabled"
          >{{ getCodeBtnText }}</el-button
        >
      </template>
    </an-form>
    <div class="handle">
      <el-button type="primary" class="login-btn" @click="handleRegisterClick"
        >注册</el-button
      >
      <el-button type="text" class="register-btn" @click="handleLoginClick"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import AnForm from '@/base-ui/form'
import { useCaptcha } from '../../../hooks/use-captcha'
import { registerConfig } from '../config/register.config'

export default defineComponent({
  components: {
    AnForm
  },
  emits: ['handleLoginClick'],
  setup(props, { emit }) {
    const store = useStore()

    const formItems = registerConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    const anFormRef = ref<InstanceType<typeof AnForm>>()

    const { getCodeDisabled, getCodeBtnText, changeBtn } = useCaptcha()

    const getCode = () => {
      anFormRef.value?.formRef?.validateField('phoneNum', (errorMessage) => {
        if (!errorMessage) {
          store.dispatch('login/getPhoneCode', formData.value['phoneNum'])
          changeBtn()
        }
      })
    }

    const handleRegisterClick = () => {
      anFormRef.value?.formRef?.validate((valid) => {
        if (valid) {
          store.dispatch('login/registerAction', { ...formData.value })
        }
      })
    }

    const handleLoginClick = () => {
      emit('handleLoginClick')
    }

    return {
      handleRegisterClick,
      handleLoginClick,
      formData,
      registerConfig,
      anFormRef,
      getCode,
      getCodeDisabled,
      getCodeBtnText
    }
  }
})
</script>

<style scoped lang="less">
.login-register {
  margin-top: 15px;
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

.el-button.is-disabled,
.el-button.is-disabled:focus,
.el-button.is-disabled:hover {
  cursor: not-allowed;
  color: unset;
  background-image: unset;
  background-color: unset;
  border-color: transparent;
}
:deep(.el-input-group__append, .el-input-group__prepend) {
  background-color: #fff;
  color: #ce2513;
}
</style>
