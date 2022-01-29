/*
 * @Description: 正式环境项目配置
 * @Author: kivet
 * @Date: 2022-01-29 13:51:57
 * @LastEditTime: 2022-01-29 13:57:19
 */

import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    APP_ENV: 'prod',
    API_BASE: 'http://bird.coolhei.com/manager/api/v2',
  },
});
