/*
 * @Description: 动画全局配置
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2022-01-21 08:43:43
 * @LastEditTime: 2022-02-18 16:56:44
 * @LastEditors: 安知鱼
 */
import { onMounted } from 'vue'
import { WOW } from 'wowjs'

export function initAnimation() {
  const animationConfig = {
    duration: '2s',
    delay: '0s',
    fadeInUp: 'wow animate__fadeInUp',
    fadeInLeft: 'wow animate__fadeInLeft',
    tada: 'wow animate__tada',
    zoomIn: 'wow animate__zoomIn'
  }

  const initWoWjs = () => {
    onMounted(() => {
      const wow = new WOW({
        boxClass: 'wow', //需要执行动画的元素的 class
        animateClass: 'animated', //animation.css 动画的 class
        offset: 0, //距离可视区域多少开始执行动画
        mobile: true, //是否在移动设备上执行动画
        live: false //异步加载的内容是否有效
      })
      wow.init()
    })
  }

  return { initWoWjs, animationConfig }
}
