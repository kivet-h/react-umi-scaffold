/*
 * @Description: global 模块 services 层
 * @Author: kivet
 * @Date: 2022-02-07 10:52:40
 * @LastEditTime: 2022-02-07 10:52:40
 */

import request from '@/utils/request';

/** 获取设备列表数据 */
export const getDeviceList = async () =>
  request('/device/page/', {
    method: 'GET',
    data: {},
    headers: {
      'x-result-limit': '50',
      'x-result-sort': '-_id',
    },
  });
