/*
 * @Description:vue(webpack)配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 11:20:29
 * @LastEditTime: 2022-02-19 22:08:21
 * @LastEditors: 安知鱼
 */
const path = require('path')

module.exports = {
  // 方式一：直接通过CLI提供给我们的选项来配置
  outputDir: './dist',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://49.234.28.156:80',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
