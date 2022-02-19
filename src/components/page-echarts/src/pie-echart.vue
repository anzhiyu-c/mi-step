<!--
 * @Description: 圆形echart
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-16 09:57:14
 * @LastEditTime: 2021-09-16 10:25:47
 * @LastEditors: 安知鱼
-->
<template>
  <div>
    <base-echart :options="pieOptions"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '../types'

const props = defineProps<{ pieData: IDataType[] }>()

const pieOptions = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'right'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="scss" scoped></style>
