/*
 * @Description: 一些功能函数
 */

import { history } from 'umi';
import { sha256 } from 'js-sha256';
import type { Dispatch } from 'umi';
import { DruidLocalStorage, DruidSessionStorage } from './storage';

const Helper = {
  /**
   * 移除传入值 data 中值为空、null, undefined 的参数
   * @param data
   */
  handleNullData: (data: IAnyObject | any[]) => {
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
   * 退出登录
   */
  handleSignOut: () => {
    if (window.location.pathname !== '/login') {
      DruidLocalStorage.removeAll();
      DruidSessionStorage.removeAll();
      history.replace('/login');
    }
  },

  /**
   * 密码加密
   * @param userName 账号（用户名）
   * @param password 密码
   */
  passwordEncryption: (userName: string, password: string) =>
    sha256(`${userName} + druid + ${password} + heifeng`),

  /**
   * 用于 models 层中更新 state
   * @param type reducers中的方法名
   * @returns
   */
  createAction:
    (type: string) =>
    (payload = {}) => ({ type, payload }),

  /**
   * 保存数据到对应的 models 层
   * @param {Dispatch} dispatch
   * @param {string} models models 层的命名空间名称
   * @param {IAnyObject} data 需要保存的数据，对象形式传入
   */
  saveToModels: (dispatch: Dispatch, models: string, data: IAnyObject) => {
    dispatch({
      type: `${models}/updateState`,
      payload: {
        ...data,
      },
    });
  },
};

export { Helper };
