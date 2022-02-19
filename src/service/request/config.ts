/*
 * @Description:请求配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 15:02:57
 * @LastEditTime: 2022-02-19 21:56:44
 * @LastEditors: 安知鱼
 */

// 根据process.env.NODE_ENV判断 开发环境/生产环境
// 开发环境: development
// 生产环境: production
// 测试环境: test

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV == 'production') {
  BASE_URL = 'http://152.136.185.211:5000'
} else {
  // BASE_URL = 'http://152.136.185.210:5000'
}

const MI_BASE_URL = 'http://49.234.28.156'

export { BASE_URL, TIME_OUT, MI_BASE_URL }
