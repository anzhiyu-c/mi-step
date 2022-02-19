<template>
  <div class="account">
    <el-card shadow="hover" style="margin-bottom: 20px"><Step /></el-card>
    <el-card shadow="hover">
      <template #header>
        <div class="header">
          <span>基础信息</span>
        </div>
      </template>
      <div class="container">
        <el-form label-width="90px">
          <el-form-item label="用户头像：">
            <avatar></avatar>
          </el-form-item>
          <el-form-item label="用户名称：">
            <el-input v-model="defaultForm.userName" readonly>
              <template #append>
                <el-button @click="handleEditUserName">修改</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input v-model="defaultForm.phone" readonly></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-dialog
      title="修改用户名"
      v-model="dialogFormVisible"
      width="30%"
      center
    >
      <el-form :model="form">
        <el-form-item label="用户名" label-width="80px">
          <el-input v-model="form.userName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="ensureEditUserName"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from '@/store'

import Avatar from '@/components/user-avatar'
import Step from './step'

const store = useStore()
const defaultForm = ref({
  userName: computed(() => store.state.account.userInfo.name ?? '安知鱼'),
  phone: computed(() => store.state.account.userInfo.phone ?? '18511111111')
})

const form = ref({ ...defaultForm.value })
// const editModalRef = ref(null)
const dialogFormVisible = ref(false)

const handleEditUserName = () => {
  dialogFormVisible.value = true
}
const ensureEditUserName = () => {
  store.dispatch('account/changeUserName', form.value.userName)
  dialogFormVisible.value = false
}
</script>

<style scoped lang="less">
.account {
  .header {
    text-align: left;
  }
  .container {
    width: 30%;
    margin: 10px auto;
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
