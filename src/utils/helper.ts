/*
 * @Description: 一些功能函数
 * @Author: kivet
 * @Date: 2022-02-07 10:55:43
 * @LastEditTime: 2022-02-07 10:55:43
 */

import { history } from 'umi';
import { DruidLocalStorage } from './storage';

const Helper = {
  /**
   * 移除传入值 data 中值为空、null, undefined的参数
   * @param data
   */
  handleNullData: (data: object | []) => {
    if (!data) return '';
    return JSON.parse(
      JSON.stringify(data, (k, v) => {
        if (v !== null && v !== undefined) {
          return v;
        }
      }),
    );
  },
  /**
   * 执行重定向操作
   */
  handleRedirect: () => {
    if (window.location.pathname !== '/login') {
      // history.replace({
      //   pathname: '/login',
      //   search: stringify({
      //     redirect: window.location.href,
      //   }),
      // });
      history.push('/login');
      DruidLocalStorage.removeAll();
    }
  },
  /**
   * 用于 models 层中更新 state
   * @param type reducers中的方法名
   * @returns
   */
  createAction:
    (type: string) =>
    (payload = {}) => ({ type, payload }),
};

export { Helper };
