/*
 * @Description: 验证码公共逻辑
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-20 14:18:03
 * @LastEditTime: 2021-09-20 15:58:23
 * @LastEditors: 安知鱼
 */
import { ref } from 'vue'

export function useCaptcha() {
  const getCodeBtnText = ref('获取验证码')
  const getCodeDisabled = ref(true)
  const TIME_COUNT = ref<number>(60)
  let timer: any = null

  const changeBtn = () => {
    if (!timer) {
      const count = ref(TIME_COUNT)
      getCodeDisabled.value = false
      timer = setInterval(() => {
        if (count.value > 0 && count.value <= TIME_COUNT.value) {
          count.value--
          getCodeBtnText.value = '重新发送' + count.value + 'S'
        } else {
          getCodeDisabled.value = true
          getCodeBtnText.value = '获取验证码'
          clearInterval(timer)
          timer = null
        }
      }, 1000)
    } else {
      return
    }
  }

  return { getCodeDisabled, getCodeBtnText, changeBtn }
}
