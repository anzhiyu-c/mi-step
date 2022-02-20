<!--
 * @Description: Heard组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 17:21:27
 * @LastEditTime: 2022-02-20 14:21:38
 * @LastEditors: 安知鱼
-->
<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" class="fold-menu">
      <expand v-if="isFold" />
      <operation v-else />
    </el-icon>
    <div class="content">
      <an-breadcrumb :breadcrumbs="breadcrumbs" v-if="!isMobile" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'

import AnBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import { useMobile } from '@/hooks'

export default defineComponent({
  components: {
    UserInfo,
    AnBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    // store
    const store = useStore()

    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
      store.commit('ChangeIsFold', isFold.value)
    }

    // 面包屑数据: [{name: "首页", path: "/main"}]
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    const isMobile = useMobile()
    if (isMobile) {
      handleFoldClick()
    }
    return {
      breadcrumbs,
      isFold,
      isMobile,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
