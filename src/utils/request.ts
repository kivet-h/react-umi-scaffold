/*
 * @Description: 公共 request 拦截器
 */

import { extend } from 'umi-request';
import { message } from 'antd';
import { DruidLocalStorage, DruidSessionStorage } from '@/utils/storage';
import { EnumStorage } from '@/utils/enum';
import { Helper } from '@/utils/helper';

interface ResponseError<D = any> extends Error {
  name: string;
  data: D;
  response: Response;
}

interface RequestParams {
  /** 请求方式: get、post、put、delete */
  method?: string;
  data?: {
    headers?: any;
    [index: string]: any;
  };
  // backOriginData?: boolean; // ? 是否返回原始响应数据
  // skipError?: boolean; // ? 是否不显示任何错误信息
}

// /** 是否返回原始响应数据 */
// let isBackOriginResponse = false;
// /** 是否不显示任何错误信息 */
// let isSkipError = false;

/**
 * 默认请求参数，适用于通用的请求参数
 */
const defaultParams = {};

/**
 * 网络异常处理，未得到服务器响应或请求超时
 * @param error
 */
const errorHandler = (error: ResponseError) => {
  const { response = {} as Response } = error;
  const { status, url } = response || {};
  console.error(`请求错误 ${status}: ${url}`);
};

/**
 * request原始对象
 */
const request = extend({
  timeout: 60000,
  errorHandler,
});

/**
 * 全局请求拦截器
 */
request.interceptors.request.use((tempUrl: string, tempOptions: RequestParams) => {
  const href = window.location.href;

  const token =
    DruidLocalStorage.get(EnumStorage.TOKEN) || DruidSessionStorage.get(EnumStorage.TOKEN) || '';

  if (!href.includes('login') && !token) {
    DruidLocalStorage.removeAll();
    DruidSessionStorage.removeAll();
    message.info('登录失效，请重新登录！');
    Helper.handleSignOut();
    return {};
  }

  const { method = 'post', data = {} } = tempOptions;

  const { headers = {}, ...bodyData } = data;

  // ? 处理请求地址，如果请求地址带协议则不拼接API_BASE参数
  let url = `${API_BASE}${tempUrl}`;

  if (tempUrl.includes('http')) {
    url = tempUrl;
  }

  // 组装请求参数，移除空值
  const assignData = {
    ...Helper.handleNullData(defaultParams),
    ...Helper.handleNullData(bodyData),
  };

  // 组装请求配置
  const options = {
    data: assignData,
    method,
    headers: {
      'x-druid-authentication': token || null,
      ...headers,
    },
  };

  return { url, options };
});

// 全局响应拦截器，克隆响应对象做解析处理
request.interceptors.response.use(async (response) => {
  const href = window.location.href;

  const resToken = response.headers.get('X-Druid-Authentication');
  const resStatus = response.status;

  if (!href.includes('login') && resStatus === 401) {
    DruidLocalStorage.removeAll();
    DruidSessionStorage.removeAll();
    message.info('请重新登录');
    Helper.handleSignOut();
    return;
  }

  // ? 获取 data 数据。后端目前是：response 对象直接返回的就是 data 的数据
  // const data = await response.clone().json();

  return href.includes('login')
    ? { ...(await response.clone().json()), token: resToken }
    : response;
});

export default request;
