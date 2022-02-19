<!--
 * @Description: 手机号登录
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-29 16:47:46
 * @LastEditTime: 2022-02-19 18:51:59
 * @LastEditors: 安知鱼
-->

<template>
  <an-form ref="anFormRef" v-bind="phoneConfig" v-model="formData">
    <template #append>
      <el-button
        class="get-code-btn"
        @click="getCode"
        :disabled="!getCodeDisabled"
        >{{ getCodeBtnText }}</el-button
      >
    </template>
  </an-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import AnForm from '@/base-ui/form'

import { useCaptcha } from '../../../hooks/use-captcha'
import { phoneConfig } from '../config/phone-config'

export default defineComponent({
  components: {
    AnForm
  },
  setup() {
    const store = useStore()

    const formItems = phoneConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    const { getCodeDisabled, getCodeBtnText, changeBtn } = useCaptcha()

    const anFormRef = ref<InstanceType<typeof AnForm>>()

    const getCode = () => {
      anFormRef.value?.formRef?.validateField('phoneNum', (errorMessage) => {
        if (!errorMessage) {
          changeBtn()
          store.dispatch('login/getPhoneCode', formData.value['phoneNum'])
        }
      })
    }

    const loginAction = () => {
      anFormRef.value?.formRef?.validate((valid) => {
        if (valid) {
          store.dispatch('login/phoneLoginAction', { ...formData.value })
        }
      })
    }
    return {
      changeBtn,
      getCode,
      getCodeDisabled,
      getCodeBtnText,
      loginAction,
      phoneConfig,
      formData,
      anFormRef
    }
  }
})
</script>

<style scoped>
.get-code-btn {
  padding: 8px;
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
