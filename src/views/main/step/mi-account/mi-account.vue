<template>
  <div class="mi-account">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="(handleResetClick as any)"
      @queryBtnClick="(handleQueryClick as any)"
      v-if="!useMobile"
    />

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="miaccount"
      storeName="step"
      @newBtnClick="(handleNewData as any)"
      @editBtnClick="(handleEditData as any)"
      @UpStepBtnClick="(UpStepBtnClick as any)"
      @handleUpStepAllClick="(handleUpStepAllClick as any)"
    >
      <template #enable="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
    </page-content>

    <div class="page-modal">
      <page-modal
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        pageName="mi-account"
        :modalConfig="modalConfig"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageModal, usePageSearch, useMobile } from '@/hooks'
const store = useStore()

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const {
  pageModalRef,
  defaultInfo,
  handleNewData,
  handleEditData,
  UpStepBtnClick
} = usePageModal('用户')

const handleUpStepAllClick = () => {
  store.dispatch('account/UpStepAllAction')
}
</script>

<style scoped lang="less">
@media screen and (max-width: 768px) {
  :deep(.el-pagination__sizes) {
    display: none !important;
  }
  :deep(.el-pagination__jump) {
    display: none !important;
  }
  :deep(button.el-button.el-button--primary.el-button--default.isCreate) {
    display: none !important;
  }
  :deep(button.el-button.el-button--danger.el-button--default.isDelete) {
    display: none !important;
  }
}
</style>
