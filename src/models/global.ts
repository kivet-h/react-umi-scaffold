/*
 * @Description: global 模块 models 层
 * @Author: kivet
 * @Date: 2022-02-07 10:51:31
 * @LastEditTime: 2022-02-07 11:12:47
 */

import type { Effect, ImmerReducer, Subscription } from 'umi';
import { getDeviceList } from '@/services/global';
import { DruidLocalStorage } from '@/utils/storage';
import { StorageEnum } from '@/utils/enum';
import { Helper } from '@/utils/helper';

export interface IGlobalModelState {
  /** 设备列表数据 */
  deviceList: any[];
}

export interface IGlobalModelType {
  namespace: 'global';
  state: IGlobalModelState;
  effects: {
    /** 获取设备列表数据 */
    getDeviceList: Effect;
  };
  reducers: {
    updateState: ImmerReducer<IGlobalModelType>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const GlobalModel: IGlobalModelType = {
  namespace: 'global',

  state: {
    deviceList: [],
  },
  effects: {
    *getDeviceList({ payload, callback }, { call, put }) {
      const data = yield call(getDeviceList, payload);
      yield put(Helper.createAction('updateState')({ deviceList: data || [] }));
      callback && data.length && callback(data);
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ history }) {
      history.listen(({ pathname }) => {
        if (pathname !== '/login' && !DruidLocalStorage.get(StorageEnum.TOKEN)) {
          // Helper.handleRedirect(); // ? 没有登录功能，暂时屏蔽不重定向
        }
      });
    },
  },
};

export default GlobalModel;
