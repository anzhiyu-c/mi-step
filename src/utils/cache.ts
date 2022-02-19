/*
 * @Description: 处理缓存文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 09:44:27
 * @LastEditTime: 2021-08-30 14:18:27
 * @LastEditors: 安知鱼
 */

class Cache {
  setCache(key: string, value: any, isSessionStorage?: boolean) {
    if (isSessionStorage) {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } else {
      // 默认使用localStorage
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string, isSessionStorage?: boolean) {
    if (isSessionStorage) {
      const value = window.sessionStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    } else {
      const value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    }
  }

  deleteCache(key: string, isSessionStorage?: boolean) {
    if (isSessionStorage) {
      window.sessionStorage.removeItem(key)
    } else {
      window.localStorage.removeItem(key)
    }
  }

  clearCache() {
    window.localStorage.clear()
    window.sessionStorage.clear()
  }
}

export default new Cache()
