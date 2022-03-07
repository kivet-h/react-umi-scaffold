/*
 * @Description: global 模块 services 层
 */

import request from '@/utils/request';

/** 登录 */
export const fetchLogin = async (data: IAnyObject) =>
  request('/login', {
    method: 'POST',
    data,
  });
