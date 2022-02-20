/*
 * @Description: login状态管理
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 10:27:31
 * @LastEditTime: 2022-02-20 11:09:50
 * @LastEditors: 安知鱼
 */
import { Module } from 'vuex'
import { ElMessage } from 'element-plus'

import Cache from '@/utils/cache'
import router from '@/router'

import {
  accountLoginRequest,
  phoneLoginRequest,
  getPhoneCodeRequest,
  requestUserInfoById,
  requestUserMenusById,
  resetPasswordRequest
} from '@/service/login/login'

import {
  IAccount,
  IPhone,
  IRegister,
  IResetPassword
} from '@/service/login/type'
import { ILoginState } from './type'
import { IRootStore } from '../type'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userMenus: [],
      permissions: [],
      code: '',
      userInfo: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)

      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 获取用户按钮权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    },
    changeCode(state, code: string) {
      state.code = code
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1. 实现账号密码登录逻辑(记得将此处修改为请求)
      // const loginResult = await accountLoginRequest(payload)
      const loginResult = await require('@/data/login.json')
      const { id, token } = loginResult.data
      commit('changeToken', token)
      Cache.setCache('token', token)

      // 2. 发送初始化的请求
      dispatch('getInitialDataAction', null, { root: true })

      // 3.请求用户信息(记得将此处修改为请求)
      // const userInfoResult = await requestUserInfoById(id)
      const userInfoResult = await require('@/data/userInfo.json')
      const userInfo = userInfoResult.data
      commit('account/changeUserInfo', userInfo, { root: true })
      Cache.setCache('userInfo', userInfo)

      // 4.请求用户菜单(记得将此处修改为请求)
      // const userMenusResult = await requestUserMenusById(userInfo.role.id)
      const userMenusResult = await require('@/data/userMenus.json')
      const userMenus = userMenusResult.data

      commit('changeUserMenus', userMenus)
      Cache.setCache('userMenus', userMenus)

      // 5.跳转首页
      router.push('/main')
    },
    async getPhoneCode({ commit }, payload: string) {
      const loginResult = await getPhoneCodeRequest(payload)
      if (loginResult.code === 200) {
        const { code } = loginResult.data
        commit('changeCode', code)
      } else {
        ElMessage.error('获取验证码失败!')
      }
    },
    async phoneLoginAction({ commit, dispatch }, payload: IPhone) {
      // 1. 实现手机登录逻辑
      const loginResult = await phoneLoginRequest(payload)
      if (loginResult.code === 200) {
        const { id, token } = loginResult.data
        commit('account/changeUserInfo', token)
        Cache.setCache('token', token)

        // 2. 发送初始化的请求
        dispatch('getInitialDataAction', null, { root: true })

        // 3.请求用户信息
        const userInfoResult = await requestUserInfoById(id)
        const userInfo = userInfoResult.data
        commit('changeUserInfo', userInfo, { root: true })
        Cache.setCache('userInfo', userInfo)

        // 4.请求用户菜单
        const userMenusResult = await requestUserMenusById(userInfo.role.id)
        const userMenus = userMenusResult.data
        commit('changeUserMenus', userMenus)
        Cache.setCache('userMenus', userMenus)

        // 5.跳转首页
        router.push('/main')
      } else {
        ElMessage.error('登录失败!')
      }
    },
    async registerAction(context, payload: IRegister) {
      // 1. 实现注册逻辑
      const registerResult = await phoneLoginRequest(payload)

      if (registerResult.code === 200) {
        ElMessage.success('注册成功！')
        // 2. 跳转登录页
        router.push('/login')
      } else {
        ElMessage.error('注册失败!')
      }
    },
    async resetPassword(context, payload: IResetPassword) {
      // 1. 实现重置逻辑
      const resetPasswordResult = await resetPasswordRequest(payload)

      if (resetPasswordResult.code === 200) {
        ElMessage.success('重置密码成功！')
        // 2. 跳转登录页
        window.location.href = './'
      } else {
        ElMessage.error('重置密码失败!')
        return
      }
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = Cache.getCache('token')
      if (token) {
        commit('changeToken', token)
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = Cache.getCache('userInfo')
      if (userInfo) {
        commit('account/changeUserInfo', userInfo, { root: true })
      }
      const userMenus = Cache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
