/*
 * @Description: 系统管理
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-07 13:48:26
 * @LastEditTime: 2022-02-20 11:40:55
 * @LastEditors: 安知鱼
 */

import { Module } from 'vuex'
import { IRootStore } from './../../type'
import { IStepState, IPagePayload } from './types'
import {
  editPageData,
  createPageData,
  deletePageData,
  getPageListData
} from '@/service/main/system/system'

import { ElMessage } from 'element-plus'

const systemModule: Module<IStepState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      miAccountList: [],
      miAccountCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeMiaccountList(state, miAccountList: any[]) {
      state.miAccountList = miAccountList
    },
    changeMiaccountCount(state, miAccountCount: number) {
      state.miAccountCount = miAccountCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        if (pageName === 'miaccount') {
          return (state as any)[`miAccountList`]
        } else {
          return (state as any)[`${pageName}List`]
        }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        if (pageName === 'miaccount') {
          return (state as any)[`miAccountCount`]
        } else {
          return (state as any)[`${pageName}Count`]
        }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: IPagePayload) {
      // 1.获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `${pageName}/list`

      // 2.对页面发送请求(记得将此处修改为请求)
      // const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      console.log(payload)
      let pageResult
      if (pageUrl === 'miaccount/list') {
        pageResult = await require('@/data/miaccountList.json')
      } else if (pageUrl === 'role/list') {
        pageResult = await require('@/data/roleList.json')
      } else if (pageUrl === 'users/list') {
        pageResult = await require('@/data/pageUserList.json')
      }

      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    async deletePageDataAction({ dispatch, rootState }, payload: IPagePayload) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await deletePageData(pageUrl)
      ElMessage({
        type: 'success',
        message: '删除成功!'
      })
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...rootState.queryInfo
        }
      })
    },
    async createPageDataAction({ dispatch, rootState }, payload: IPagePayload) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      ElMessage({
        type: 'success',
        message: '新建成功!'
      })

      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...rootState.queryInfo
        }
      })
    },
    async editPageDataAction({ dispatch, rootState }, payload: IPagePayload) {
      if (!payload.id) return
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      ElMessage({
        type: 'success',
        message: '编辑成功!'
      })
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...rootState.queryInfo
        }
      })
    }
  }
}

export default systemModule
