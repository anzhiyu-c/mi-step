/*
 * @Description: 判断是否是手机
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2022-02-20 14:09:52
 * @LastEditTime: 2022-02-20 14:09:53
 * @LastEditors: 安知鱼
 */
export const useMobile = () => {
  const userAgentInfo = navigator.userAgent

  const mobileAgents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  ]

  let mobile_flag = false

  //根据userAgent判断是否是手机
  for (let v = 0; v < mobileAgents.length; v++) {
    if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
      mobile_flag = true
      break
    }
  }

  const screen_width = window.screen.width
  const screen_height = window.screen.height

  //根据屏幕分辨率判断是否是手机
  if (screen_width < 500 && screen_height < 800) {
    mobile_flag = true
  }

  return mobile_flag
}
