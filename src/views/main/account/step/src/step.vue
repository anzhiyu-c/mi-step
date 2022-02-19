<!--
 * @Description:
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2022-02-19 19:38:52
 * @LastEditTime: 2022-02-19 21:10:20
 * @LastEditors: 安知鱼
-->
<template>
  <div class="step">
    <AnForm ref="anFormRef" v-bind="stepConfig" v-model="formData"></AnForm>
    <el-button @click="upStepAction">开始刷步</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import AnForm from '@/base-ui/form'
import { stepConfig } from '../config/step-config'

const store = useStore()

const formItems = stepConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)

const anFormRef = ref<InstanceType<typeof AnForm>>()

const upStepAction = () => {
  anFormRef.value?.formRef?.validate((valid) => {
    if (valid) {
      store.dispatch('account/upStepAction', { ...formData.value })
    }
  })
}
</script>

<style></style>
