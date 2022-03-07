/*
 * @Description: 测试环境项目配置
 */

import { defineConfig } from 'umi';

const { MOCK } = process.env;

export default defineConfig({
  define: {
    APP_ENV: 'dev',
    API_BASE: MOCK === 'yes' ? '' : 'https://intelink.coolhei.com/manager/api/v1',
  },
});
