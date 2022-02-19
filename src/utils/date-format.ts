/*
 * @Description: dayjs格式化时间
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-10 09:33:00
 * @LastEditTime: 2021-09-14 09:16:16
 * @LastEditors: 安知鱼
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

/**
 * @Description: 格式化utc时间
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 */
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}

/**
 * @Description: 格式化时间戳
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 */
export function formatTimestamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.unix(timestamp).format(format)
}
