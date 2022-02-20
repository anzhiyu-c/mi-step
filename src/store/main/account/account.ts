/*
 * @Description: 我的账户
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-23 12:37:42
 * @LastEditTime: 2022-02-20 14:57:50
 * @LastEditors: 安知鱼
 */
import { Module } from 'vuex'
import { IRootStore } from './../../type'
import { IAccountState, IPasswordForm, IUpStepForm } from './types'
import {
  changeAvatar,
  changeUserName,
  changePassword,
  changeStep
} from '@/service/main/account/account'

import { useLocalStorage } from '@/hooks'
import { ElMessage } from 'element-plus'

const accountModule: Module<IAccountState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      userInfo: {}
    }
  },
  mutations: {
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async changeAvatarAction({ commit }, payload: any) {
      const changeAvatarResult = await changeAvatar(
        payload.url,
        payload.formData
      )
      console.log(changeAvatarResult)
      if (changeAvatarResult.code === 200) {
        const userInfo = useLocalStorage('userInfo')
        userInfo.value = changeAvatarResult.data

        commit('changeUserInfo', userInfo)

        ElMessage.success('修改头像成功！')
      } else {
        ElMessage.error('修改头像失败！')
      }
    },
    async changeUserName({ commit }, payload: string) {
      const changeUserNameResult = await changeUserName(payload)
      console.log(changeUserNameResult)
      if (changeUserNameResult.code === 200) {
        const userInfo = useLocalStorage('userInfo')
        userInfo.value = changeUserNameResult.data

        commit('changeUserInfo', userInfo)

        ElMessage.success('修改用户名成功！')
      } else {
        ElMessage.error('修改用户名失败！')
      }
    },
    changePassword(context, payload: IPasswordForm) {
      return new Promise((resolve, reject) => {
        changePassword(payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async upStepAction(context, payload: IUpStepForm) {
      const stepForm = {
        user: payload.account,
        pass: payload.password,
        count: payload.step
      }
      const changeStepResult = await changeStep(stepForm)
      console.log(changeStepResult)
      if (changeStepResult.status === 1) {
        ElMessage.success(changeStepResult.msg)
      } else {
        ElMessage.error(changeStepResult.msg)
      }
    },
    async UpStepAllAction() {
      const list = await require('@/data/miaccountList.json')
      const stepFormList: Array<any> = []
      list.data.list.forEach((item: any) => {
        const stepForm = {
          user: item.account,
          pass: item.password,
          count: item.step
        }
        stepFormList.push(stepForm)
      })

      stepFormList.forEach(async (item) => {
        const changeStepResult = await changeStep(item)

        if (changeStepResult.status === 1) {
          ElMessage.success(item.user + changeStepResult.msg)
        } else {
          ElMessage.error(item.user + changeStepResult.msg)
        }
      })
    }
  }
}

export default accountModule
