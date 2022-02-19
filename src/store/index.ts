import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { getPageListData } from '@/service/main/system/system'

import { IRootStore, IStoreType } from './type'

import login from './login/login'
import system from './main/system/system'
import account from './main/account/account'

const store = createStore<IRootStore>({
  state() {
    return {
      name: 'anzhiyu',
      age: 18,
      isFold: false,
      queryInfo: {},
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    saveQueryInfo(state, queryInfo) {
      state.queryInfo = queryInfo
    },
    changeEntireDepartment(state, entireDepartment) {
      state.entireDepartment = entireDepartment
    },
    changeEntireRole(state, entireRole) {
      state.entireRole = entireRole
    },
    changeEntireMenu(state, entireMenu) {
      state.entireMenu = entireMenu
    },
    ChangeIsFold(state, isFold) {
      state.isFold = isFold
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求全部部门数据(记得将此处修改为请求)
      // const departmentResult = await getPageListData('/department/list', {
      //   offset: 0,
      //   size: 1000
      // })
      const departmentResult = await require('@/data/departmentList.json')

      const { list: departmentList } = departmentResult.data
      // 2.请求全部角色数据(记得将此处修改为请求)
      // const roleResult = await getPageListData('/role/list', {
      //   offset: 0,
      //   size: 1000
      // })
      const roleResult = await require('@/data/roleList.json')
      const { list: roleList } = roleResult.data
      // 3.请求全部菜单数据(记得将此处修改为请求)
      // const menuResult = await getPageListData('/menu/list', {})
      const menuResult = await require('@/data/menuList.json')
      const { list: menuList } = menuResult.data

      // 2.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system,
    account
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

// 解决Vuex中useStore类型问题(比如：子模块中的类型不能识别)
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
