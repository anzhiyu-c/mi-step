<!--
 * @Description:
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-23 15:23:33
 * @LastEditTime: 2021-09-30 17:10:58
 * @LastEditors: 安知鱼
-->
<template>
  <div class="password">
    <el-card shadow="hover">
      <template #header>
        <div class="header">
          <span>修改密码</span>
        </div>
      </template>
      <div class="container">
        <AnForm v-bind="passwordFormConfig" v-model="formData" ref="anForm">
          <template #footer>
            <el-button @click="handleSaveClick" class="save-btn" type="primary"
              >保存</el-button
            >
          </template>
        </AnForm>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import { passwordFormConfig } from './config/password.config'
import AnForm from '@/base-ui/form'
import { ElMessage } from 'element-plus'

import { useVerifyPassword } from '@/hooks'

export default defineComponent({
  components: {
    AnForm
  },
  setup() {
    const store = useStore()
    const formItems = passwordFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 处理二次输入密码验证
    useVerifyPassword(formData, passwordFormConfig)

    const handleSaveClick = () => {
      const changePasswordResult = store.dispatch('account/changePassword', {
        ...formData.value
      })
      changePasswordResult
        .then((res) => {
          console.log(res)
          if (res.code === 200) {
            ElMessage.success('修改密码成功！')
          } else ElMessage.error('修改密码失败！')
        })
        .catch((err) => {
          console.log(err)
        })
    }
    return {
      handleSaveClick,
      formData,
      passwordFormConfig
    }
  }
})
</script>

<style scoped lang="less">
.password {
  .header {
    text-align: left;
  }
  .container {
    margin: 0 auto;
    width: 30%;
    .save-btn {
      width: 40%;
    }
  }
}
</style>
