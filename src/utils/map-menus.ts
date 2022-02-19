/*
 * @Description: 处理路由映射/动态路由
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-01 08:33:41
 * @LastEditTime: 2022-02-19 19:34:54
 * @LastEditors: 安知鱼
 */

import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'
import Cache from '@/utils/cache'

let firstMenu: any = null

/**
 * @Description: 映射路由，动态注册路由
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {any} userMenus
 */
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1.先加载默认所有的路由routes
  const allRoutes: RouteRecordRaw[] = []

  /**
   * @Description:  require.context webpack中的函数,
   * @Author: 安知鱼
   * 第一个参数表示查找路径
   * 第二个参数表示是否递归查找文件夹下的文件，true为是
   * 第三个参数表示查找的后缀，此处匹配所有ts文件（包括tsx）
   */
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // 对路径进行处理，以点分割 "/system/user/user"
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单添加需要获取的路由routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // 判断是否含有父节点
      // 有子节点 type: 1
      // 无子节点 type: 2
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        // 保存第一个路由，方便首页重定向至第一个路由，防止侧边栏找不到id
        if (!firstMenu) {
          firstMenu = menu
          const password = allRoutes.find(
            (route) => route.path === '/main/password'
          )
          if (password) routes.push(password)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

/**
 * @Description: 映射面包屑
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {any} userMenus
 * @param {string} currentPath
 */
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

/**
 * @Description: 保存当前路由，防止刷新侧边栏激活状态丢失
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {any} userMenus
 * @param {string} currentPath
 */
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  if (currentPath === '/main/password') {
    breadcrumbs?.push({
      name: '修改密码'
    })
    return Cache.getCache('menu')
  }
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        // 找到的最后一级路由
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      breadcrumbs?.push({ name: menu.name, path: menu.url })
      Cache.setCache('menu', menu)
      return menu
    }
  }
}

/**
 * @Description: 递归获取按钮权限(type : 3的菜单)
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {any} userMenus
 */
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _recurseGetPermission(userMenus)
  return permissions
}

export function menuMapLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }

  _recurseGetLeaf(menuList)

  return leftKeys
}

export { firstMenu }
