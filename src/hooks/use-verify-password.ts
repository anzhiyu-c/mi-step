/*
 * @Description: 处理二次输入密码验证
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-30 17:00:54
 * @LastEditTime: 2021-09-30 17:12:39
 * @LastEditors: 安知鱼
 */

type CallbackFn = (error?: any) => void

export function useVerifyPassword(formData: any, formConfig: any) {
  const verifyPasswordValidator = (
    rule: any[],
    value: any,
    callback: CallbackFn
  ) => {
    if (value === '') {
      callback(new Error('请再次输入您的密码'))
    } else if (value !== formData.value['newPassword']) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  }
  const verifyPasswordRule = {
    validator: verifyPasswordValidator,
    trigger: 'blur'
  }
  const verifyPasswordItem = formConfig.formItems.find(
    (item: any) => item.field === 'verifyPassword'
  )
  verifyPasswordItem?.rules?.push(verifyPasswordRule)
}
