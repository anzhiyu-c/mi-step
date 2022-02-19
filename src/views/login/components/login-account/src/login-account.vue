<!--
 * @Description: 账号登录组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-20 09:38:54
 * @LastEditTime: 2021-09-20 12:37:49
 * @LastEditors: 安知鱼
-->
<template>
  <div class="login-account">
    <an-form
      ref="anFormRef"
      v-bind="accountConfig"
      v-model="formData"
    ></an-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import AnForm from '@/base-ui/form'
import { accountConfig } from '../config/account-config'
import cache from '@/utils/cache'

export default defineComponent({
  components: {
    AnForm
  },
  setup() {
    const store = useStore()
    const formData = ref<any>({})

    const defaultInfo: any = reactive({
      name: cache.getCache('name') ?? 'anzhiyu',
      password: cache.getCache('password') ?? '123456'
    })

    // 处理记住密码显示问题
    for (const item of accountConfig.formItems) {
      formData.value[`${item.field}`] = defaultInfo[`${item.field}`]
    }

    const anFormRef = ref<InstanceType<typeof AnForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      anFormRef.value?.formRef?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            cache.setCache('name', formData.value.name)
            cache.setCache('password', formData.value.password)
          } else {
            cache.deleteCache('name')
            cache.deleteCache('password')
          }
          // 2.开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...formData.value })
        }
      })
    }

    return {
      loginAction,
      formData,
      defaultInfo,
      accountConfig,
      anFormRef
    }
  }
})
</script>

<style scoped></style>
