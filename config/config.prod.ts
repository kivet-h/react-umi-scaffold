/*
 * @Description: 正式环境项目配置
 */

import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    APP_ENV: 'prod',
    API_BASE: 'https://intelinkgo.com/manager/api/v1',
  },
});
