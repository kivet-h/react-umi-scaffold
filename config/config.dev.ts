/*
 * @Description: 测试环境项目配置
 * @Author: kivet
 * @Date: 2022-01-29 13:51:49
 * @LastEditTime: 2022-01-29 13:56:47
 */

import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    APP_ENV: 'dev',
    API_BASE: 'http://bird.coolhei.com/manager/api/v2',
  },
});
