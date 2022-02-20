/*
 * @Description: hooks出口
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-30 15:47:36
 * @LastEditTime: 2022-02-20 14:10:49
 * @LastEditors: 安知鱼
 */
import { useLocalStorage } from './use-local-storage'
import { useChangeTitle } from './use-change-title'
import { useVerifyPassword } from './use-verify-password'
import { initAnimation } from './use-animation'
import { useCaptcha } from './use-captcha'
import { usePageModal } from './use-page-modal'
import { usePageSearch } from './use-page-search'
import { usePermission } from './use-permissions'
import { useMobile } from './use-mobile'

export {
  useLocalStorage,
  useChangeTitle,
  useVerifyPassword,
  initAnimation,
  useCaptcha,
  usePageModal,
  usePageSearch,
  usePermission,
  useMobile
}
