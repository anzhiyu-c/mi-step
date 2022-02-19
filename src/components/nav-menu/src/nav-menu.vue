<!--
 * @Description: menu侧边菜单栏组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 17:20:29
 * @LastEditTime: 2022-02-18 20:23:17
 * @LastEditors: 安知鱼
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">
        <div class="text_1">安知鱼 | 云步数</div>
        <div class="text_2">ANZHIYU CLOUD STEPS</div>
      </span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#fff"
      text-color="#666666"
      active-text-color="#CE2513"
    >
      <template v-for="item in userMenus" :key="item.id + ''">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id + ''">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 只有一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item
            :index="item.id + ''"
            @click="handleMenuItemClick(item)"
          >
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // store
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    // router
    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path

    // data
    const menu = pathMapToMenu(userMenus.value, currentPath)

    const defaultValue = ref(menu.id + '')

    // event handle
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }

    // console.log(userMenus);

    return {
      defaultValue,
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  // background-color: #ce2513;

  .logo {
    display: flex;
    height: 44px;
    padding: 12px 10px 8px 0px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #ce2513;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      overflow: hidden;
      .text_1 {
        // font-size: 16px;
        // font-weight: 700;
        height: 30px;
        line-height: 30px;
      }
      .text_2 {
        font-size: 12px;
        height: 15px;
        line-height: 15px;
        color: #eba8a1;
        overflow: hidden;
      }
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #fff !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #fff !important;
    }
  }

  :deep(.el-sub-menu__title) {
    background-color: #fff !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #ce2513 !important; // 菜单
  }

  .el-menu-item.is-active {
    background-color: #ffefed !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  // height: calc(100% - 48px);
}
</style>
