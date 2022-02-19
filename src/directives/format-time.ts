/*
 * @Description: format-time
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-30 17:46:24
 * @LastEditTime: 2021-09-30 18:01:04
 * @LastEditors: 安知鱼
 */
// v-format-time="YYYY/MM/DD"
import dayjs from 'dayjs'
import { App } from 'vue'

export default function (app: App) {
  app.directive('format-time', {
    created(el, bindings: any) {
      bindings.formatString = 'YYYY-MM-DD HH:mm:ss'
      if (bindings.value) {
        bindings.formatString = bindings.value
      }
    },
    mounted(el, bindings: any) {
      const textContent = el.textContent
      let timestamp = parseInt(textContent)
      if (textContent.length === 10) {
        timestamp = timestamp * 1000
      }
      el.textContent = dayjs(timestamp).format(bindings.formatString)
    }
  })
}
