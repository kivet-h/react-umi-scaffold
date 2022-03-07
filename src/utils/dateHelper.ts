/*
 * @Description: 日期/时间相关的处理函数，都写在这个文件中
 */

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const dateHelper = {
  /**
   * UTC 时间转 本地时间
   * @param utcDate 后端返回的UTC时间
   * @param format 返回时间格式，默认： YYYY-MM-DD HH:mm:ss
   * @param placeholder 时间无效时返回占位符，默认： -
   */
  utcToLocal: (utcDate: string, format: string = YMDHMS, placeholder: string = '-') =>
    utcDate ? dayjs(utcDate).utc().format(format) : placeholder,

  /**
   * 计算某个时间节点（dateVal）与当前时间之间，相差xx天xx月xx小时xx分钟xx秒
   * @param {string} dateVal 对比时间
   * @param {'D' | 'DHMS' | 'DHM'} type 返回数据格式，默认：D
   * @type-D eg: 3天
   * @type-DHM eg: 3天5小时6分钟、5小时6分钟(天数为0时)、6分钟(天数，小时都为0时)
   * @type-DHMS eg: 3天5小时6分钟7秒、5小时6分钟7秒(天数为0时)、6分钟7秒(天数，小时都为0时)、7秒(天数，小时，分钟都为0时)
   * @returns 两个时间之间的天数，小时数，分钟数，秒等，根据传入type控制返回的数据
   */
  getDiffDate: (dateVal: string, type: 'D' | 'DHM' | 'DHMS' = 'D') => {
    // ? 传入 dateVal 无效时
    if (!dateVal) return undefined;

    /**
     * 传入的 dateVal 时间，有可能是当前时间之后的某个时间节点
     * 所以相减的话得到的 diff 的值有可能是负数
     * 所以这里需要取一下绝对值，保证下面用于计算的 diff 的值一定是正数
     */
    const diff = Math.abs(dayjs().valueOf() - dayjs(dateVal).utc().valueOf());
    const days = Math.floor(diff / (24 * 3600 * 1000)); // * 计算天数

    const leaveD = diff % (24 * 3600 * 1000); // * 计算天数后剩余的毫秒数
    const hours = Math.floor(leaveD / (60 * 60 * 1000)); // * 计算小时

    const leaveH = leaveD % (3600 * 1000); // * 计算小时数后剩余的毫秒数
    const minutes = Math.floor(leaveH / (60 * 1000)); // * 计算分钟

    const leaveM = leaveH % (60 * 1000); // * 计算分钟数后剩余的毫秒数
    const seconds = Math.round(leaveM / 1000); // * 计算秒

    // ? 返回几天几小时几分钟几秒
    if (type === 'DHMS') {
      let result = `${days}天${hours}小时${minutes}分钟${seconds}秒`;
      if (days === 0) result = `${hours}小时${minutes}分钟${seconds}秒`;
      if (days === 0 && hours === 0) result = `${minutes}分钟${seconds}秒`;
      if (days === 0 && hours === 0 && minutes === 0) result = `${seconds}秒`;
      return result;
    }

    // ? 返回几天几小时几分钟
    if (type === 'DHM') {
      let result = `${days}天${hours}小时${minutes}分钟`;
      if (days === 0) result = `${hours}小时${minutes}分钟`;
      if (days === 0 && hours === 0) result = `${minutes}分钟`;
      return result;
    }

    // ? 先暂时兼容这么几种情况，后期如有需要其它格式再添加

    // ? 默认只返回天数
    return days;
  },

  /**
   * 判断传入日期是否还在有效期内。时间戳大于当前时间时间戳，说明还在有效期内
   * @param date 后端返回的有效期时间
   * @return true-在有效期内 false-没在
   */
  isInValidityPeriod: (date: string): boolean => {
    // ? 如果date没有值是个空串，表示永久有效
    if (!date) return true;

    return dayjs(date).utc().valueOf() - dayjs().valueOf() >= 0;
  },
};

export { dateHelper };
