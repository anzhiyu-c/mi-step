<template>
  <div class="user-info">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          style="margin-right: 10px"
          :src="avatarUrl ? avatarUrl : defaultAvatar"
        ></el-avatar>
        <span>{{ name }}</span>
        <el-icon style="margin-left: 5px"><arrow-down-bold /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleChangePasswordClick"
            >修改密码</el-dropdown-item
          >
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

import cache from '@/utils/cache'
import { defaultAvatar } from '../config/header.config'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.account.userInfo.name)
    const avatarUrl = computed(() => store.state.account.userInfo.avatarUrl)

    const handleExitClick = () => {
      cache.clearCache()
      router.push('/login')
    }
    const handleChangePasswordClick = () => {
      router.push('/main/password')
    }

    return {
      defaultAvatar,
      avatarUrl,
      name,
      handleChangePasswordClick,
      handleExitClick
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
