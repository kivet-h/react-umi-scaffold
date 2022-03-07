/*
 * @Description: 操作 url 及其参数的相关函数，都写在这个文件中
 */

import { history } from 'umi';
import _ from 'lodash';

const queryString = require('query-string');

type IUrlParams = 'pageNum' | 'pageSize' | 'pageSort' | 'pageId' | 'id' | string;

const urlHelper = {
  /**
   * 获取地址栏参数
   * @param {string | string[]} key
   * @step1 key as string => 获取单个参数
   * @step2 key as string[] => 获取多个参数
   * @step3 函数没传入 key => 默认获取全部参数
   * @returns {Record<string, string>} 返回的数据格式是一个对象
   */
  getUrlParams: (key?: IUrlParams | IUrlParams[]): Record<string, string> => {
    const currentParams = queryString.parse(location.search);

    // ? 获取单个参数
    if (key && typeof key === 'string') {
      return { [key]: currentParams[key] };
    }

    // ? 获取多个参数
    if (key && Array.isArray(key)) {
      let data = {};
      _.forEach(key, (item) => {
        data = _.assign(data, { [item]: currentParams[item] });
      });
      return data;
    }

    // ? 没传入 key，默认返回地址栏全部参数
    return currentParams;
  },

  /**
   * 设置地址栏 url 参数，存在就更改，没有就添加
   * @param {Record<string, any>} data 传入一个对象数据，会和地址栏已有参数 assign 合并，没有则添加，有则覆盖，重新获得最新地址栏参数并赋值
   */
  setUrlParams: (data: Record<string, any> = {}): void => {
    const pathname = window.location.pathname.includes('/console')
      ? window.location.pathname.split('/console')[1]
      : window.location.pathname;

    const currentParams = queryString.parse(location.search);
    const newParams = _.assign(currentParams, data);
    const newParamsToStr = queryString.stringify(newParams);
    if (newParamsToStr) history.push(`${pathname}?${newParamsToStr}`);
  },

  /**
   * 清除地址栏参数
   * @param {string | string[]} key
   * @step1 key as string => 清除单个参数
   * @step2 key as string[] => 清除多个参数
   * @step3 函数没传入 key => 默认清除全部参数
   */
  delUrlParams: (key?: IUrlParams[]): void => {
    const pathname = window.location.pathname.includes('/console')
      ? window.location.pathname.split('/console')[1]
      : window.location.pathname;
    const currentParams = queryString.parse(location.search);
    const currentParamsKeyArr = _.keys(currentParams);

    // ? 地址栏没有参数，就不用再往后执行了
    if (!currentParamsKeyArr.length) return;

    if (key && key?.length) {
      const newParams = {};
      _.forEach(currentParamsKeyArr, (item) => {
        if (!key.includes(item)) {
          _.assign(newParams, { [item]: currentParams[item] });
        }
      });

      const newParamsToStr = queryString.stringify(newParams)
        ? `?${queryString.stringify(newParams)}`
        : '';

      history.push(`${pathname}${newParamsToStr}`);
      return;
    }

    // ? 没传入 key，默认清除地址栏全部参数
    history.push(`${pathname}`);
  },

  /**
   * 替换地址栏参数
   * @param {Object} obj 一个对象，需要替换的参数键值对
   * @step1 obj 没传 => 默认直接跳转到无参数状态，或清空所有地址栏参数
   * @step2 obj as Object => 替换成 obj，注意是替换，与 setUrlParams 不同
   * 意思就是：不管地址栏上有哪些参数，changeUrlParams 之后，就是传入 obj 的一些参数
   */
  changeUrlParams: (obj: any = {}): void => {
    const pathname = window.location.pathname.includes('/console')
      ? window.location.pathname.split('/console')[1]
      : window.location.pathname;

    if (_.isEmpty(obj)) {
      history.push(`${pathname}`);
      return;
    }

    const newParamsToStr = queryString.stringify(obj);
    history.push(`${pathname}?${newParamsToStr}`);
  },
};

export { urlHelper };
