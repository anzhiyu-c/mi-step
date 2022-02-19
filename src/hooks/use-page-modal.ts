/*
 * @Description: 模态框处理逻辑
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-13 13:45:46
 * @LastEditTime: 2021-09-14 10:43:05
 * @LastEditors: 安知鱼
 */
import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (item?: any) => void

export function usePageModal(
  Title: string,
  newCb?: CallbackFn,
  editCb?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value!.dialogTitle = '新建' + Title
    }
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value!.dialogTitle = '编辑' + Title
    }

    editCb && editCb(item)
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
