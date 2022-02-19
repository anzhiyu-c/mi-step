<!--
 * @Description: 登录头部组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-18 16:33:46
 * @LastEditTime: 2022-02-19 18:30:19
 * @LastEditors: 安知鱼
-->
<template>
  <div>
    <div>
      <el-container>
        <el-header class="login-header">
          <div style="display: flex; flex-direction: row">
            <div class="logo-left">
              <img src="~@/assets/img/login-heard-logo.svg" alt="" />
            </div>

            <div class="logo-right">
              <div class="text1">安知鱼 | 云步数</div>
              <div class="text2">ANZHIYU CLOUD STEPS</div>
            </div>
          </div>
          <div class="hed-right">欢迎登录</div>
        </el-header>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.login-header {
  height: 70px !important;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.hed-right {
  color: #666666;
}

.logo-left {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(134.9deg, #ef247c 5.19%, #7336ff 100%);
  border-radius: 10px;
}

.logo-right {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  .text1 {
    font-family: PingFang SC;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1.875px;
    text-align: left;
    color: #ce2513;
  }
  .text2 {
    font-family: PingFang SC;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 1px;
    text-align: left;
    color: #ce2513;
    opacity: 48.99%;
  }
}
</style>
