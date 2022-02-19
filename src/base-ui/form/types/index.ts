/*
 * @Description: form类型文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-05 17:09:01
 * @LastEditTime: 2022-02-19 18:48:16
 * @LastEditors: 安知鱼
 */

type IFormType = 'input' | 'password' | 'select' | 'datepicker' | 'inputAppend'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  // 针对单独item设置样式
  itemStyle?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  // 控制item编辑时隐藏
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
  inline?: boolean
}
