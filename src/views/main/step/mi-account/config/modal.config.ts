/*
 * @Description: 模态框的配置文件(新增/编辑)
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-13 11:46:13
 * @LastEditTime: 2022-02-20 13:52:19
 * @LastEditors: 安知鱼
 */
import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'account',
      type: 'input',
      label: '小米运动账号',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'input',
      label: '小米运动密码',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'step',
      type: 'input',
      label: '刷取步数',
      placeholder: '请输入密码',
      isHidden: false
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
