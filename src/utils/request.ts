/*
 * @Description: 公共 request 拦截器
 * @Author: kivet
 * @Date: 2022-02-07 10:54:02
 * @LastEditTime: 2022-02-07 10:57:03
 */

import { extend } from 'umi-request';
import { message } from 'antd';
import { DruidLocalStorage } from '@/utils/storage';
import { StorageEnum } from '@/utils/enum';
import { Helper } from '@/utils/helper';

const queryString = require('querystring');

interface ResponseError<D = any> extends Error {
  name: string;
  data: D;
  response: Response;
}

interface RequestParams {
  /** 请求方式: get、post、put、delete */
  method?: string;
  data?: {
    showOriginData?: boolean; // ? 是否返回原始响应数据
    skipError?: boolean; // ? 是否不显示任何错误信息
    [index: string]: any;
  };
  headers?: any;
}

/** 是否返回原始响应数据 */
let isShowOriginResponse = false;
/** 是否不显示任何错误信息 */
let isSkipError = false;

/**
 * 默认请求参数，适用于通用的请求参数
 */
// const defaultParams = {};

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
  const { method = 'post', data: params = {}, headers = {} } = tempOptions;

  const { showOriginData = false, skipError = false, ...realData } = params;
  isShowOriginResponse = showOriginData;
  isSkipError = skipError;

  // ? 处理请求地址，如果请求地址带协议则不拼接API_BASE参数
  let url = `${API_BASE}${tempUrl}`;

  if (tempUrl.includes('http')) {
    url = tempUrl;
  }

  // ? git 请求时，可能会有额外的参数拼接到 URL 地址后面
  if (method === 'get') {
    const stringified = params ? `?${queryString.stringify(params)}` : '';
    url += `${stringified}`;
  }

  // 移除没必要传递给服务器的参数
  // const { showOriginData = false, skipError = false, ...realData } =
  //   (method === 'get' ? tempOptions.params : tempOptions.data) || {};

  // 组装请求参数，移除空值
  const data = {
    // ...Helper.handleNullData(defaultParams),
    ...Helper.handleNullData(realData),
  };

  // 组装请求配置
  const options = {
    // ...tempOptions,
    data,
    headers: {
      'x-druid-authentication': DruidLocalStorage.get(StorageEnum.TOKEN) || '',
      ...headers,
    },
  };

  return { url, options };
});

// 全局响应拦截器，克隆响应对象做解析处理
request.interceptors.response.use(async (originResponse, options) => {
  const response = await originResponse.clone().json();
  const { data = '', code = '', errCode = '', msg = '', message: msgTwo = '' } = response;

  if (errCode === '401') {
    Helper.handleRedirect();
    return;
  }
  // console.log('response', response);
  console.log('options', options);
  if (!isSkipError) {
    if (code === '0' || code === '-1') {
      console.warn(`===接口响应失败===\nerrCode: ${errCode}\nmsg: ${msg}`);
      // 请求返回数据有误
      message.error(msg || msgTwo, 1);
    }
  }
  // 返回原始数据
  if (isShowOriginResponse) {
    return originResponse;
  }

  // 如果服务器返回的data字段为null，则返回空字符串，避免解构赋值默认值无法生效
  if (data == null) {
    return '';
  }

  // 仅返回处理后的data数据（无code，msg，errCode字段）
  return data ? Helper.handleNullData(data) : '';
});

export default request;
