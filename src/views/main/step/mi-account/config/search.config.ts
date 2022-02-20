/*
 * @Description: 搜索表单配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-05 19:03:58
 * @LastEditTime: 2022-02-20 12:00:44
 * @LastEditors: 安知鱼
 */
import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '100px',
  itemStyle: {
    padding: '10px 20px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'account',
      type: 'input',
      label: '小米运动账号',
      placeholder: '请输入小米运动账号'
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '开始时间',
        type: 'daterange',
        clearable: true,
        editable: false
      }
    }
  ]
}