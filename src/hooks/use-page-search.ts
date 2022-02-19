/*
 * @Description: 搜索公共逻辑
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-11 14:39:34
 * @LastEditTime: 2021-09-13 11:22:26
 * @LastEditors: 安知鱼
 */
import { ref } from 'vue'
import { useStore } from 'vuex'
import PageContent from '@/components/page-content/index'
export function usePageSearch() {
  const store = useStore()
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
    store.commit('saveQueryInfo', queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
