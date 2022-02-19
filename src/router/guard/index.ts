/*
 * @Description: 路由守卫
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-30 09:41:33
 * @LastEditTime: 2022-02-19 22:18:01
 * @LastEditors: 安知鱼
 */
import { Router } from 'vue-router'
import { firstMenu } from '@/utils/map-menus'
import cache from '@/utils/cache'
import { useChangeTitle } from '@/hooks'

export default function (router: Router) {
  router.beforeEach((to) => {
    useChangeTitle(`${to.meta.title} | 云刷步`)
    if (to.path !== '/login') {
      const token = cache.getCache('token')
      if (!token) {
        return '/login'
      }
    }

    if (firstMenu) {
      if (to.path === '/main') {
        return firstMenu.url
      }
    }

    // console.log(router.getRoutes())
    // console.log(to)
  })
}
