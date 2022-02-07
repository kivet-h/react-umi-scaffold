/*
 * @Description: 本地环境项目配置，优先级最高
 * @Author: kivet
 * @Date: 2022-01-29 13:51:39
 * @LastEditTime: 2022-02-07 11:16:16
 */

import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    APP_ENV: 'local',
    // API_BASE: 'http://bird.coolhei.com/manager/api/v2',
    API_BASE: '',
  },
});
