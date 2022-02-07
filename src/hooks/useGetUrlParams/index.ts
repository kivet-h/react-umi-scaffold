/*
 * @Description: 获取地址栏参数，如果传入了 key，则仅返回 key 字段参数值，否则返回全部参数
 * @Author: kivet
 * @Date: 2022-02-07 16:44:01
 * @LastEditTime: 2022-02-07 17:10:52
 */

import { useEffect, useState } from 'react';
import { useLocation } from 'umi';

const useGetUrlParams = (key?: string) => {
  const [params, setParams] = useState<any>(key ? '' : {});

  const { query = {} }: any = useLocation();

  useEffect(() => {
    setParams(key ? query[key] : query);
  }, [key]);

  return key ? { [key]: params } : params;
};

export default useGetUrlParams;
