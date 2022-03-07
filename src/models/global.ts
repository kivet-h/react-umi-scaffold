/*
 * @Description: global 模块 models 层
 */

import type { Effect, ImmerReducer, Subscription } from 'umi';
import { fetchLogin } from '@/services/global';
import { DruidLocalStorage } from '@/utils/storage';
import { EnumStorage } from '@/utils/enum';

export interface IGlobalModelState {
  pageSize: number;
  pageNum: number;
  pageId: string;
  currentListData: any[];
  /**
   * 翻页方向
   * null-首次进入还没翻页时、向前翻页返回第一页时
   * left-向前翻页
   * right-向后翻页
   */
  direction: null | 'left' | 'right';
}

export interface IGlobalModelType {
  namespace: 'global';
  state: IGlobalModelState;
  effects: {
    fetchLogin: Effect;
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
    pageSize: 20,
    pageNum: 1,
    currentListData: [],
    pageId: '',
    direction: null,
  },
  effects: {
    *fetchLogin({ payload, callback }, { call }) {
      const data = yield call(fetchLogin, payload) || {};
      callback && callback(data);
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
        if (pathname !== '/login' && !DruidLocalStorage.get(EnumStorage.TOKEN)) {
          // Helper.handleSignOut(); // ? 没有登录功能，暂时屏蔽不重定向
        }
      });
    },
  },
};

export default GlobalModel;
