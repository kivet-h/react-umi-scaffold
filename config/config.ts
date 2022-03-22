/*
 * @Description: 公共配置
 */

import { defineConfig } from 'umi';
import theme from './theme.config';
import routes from './routes.config';

const ICONFONT_URL = '//at.alicdn.com/t/font_3173501_a08wvro2px.js';

const { NODE_ENV } = process.env;

export default defineConfig({
  // base: '/console/',
  routes,
  theme,
  define: {},
  dva: {
    hmr: true,
  },
  outputPath: 'build',
  exportStatic: {},
  publicPath: '/',
  hash: true,
  fastRefresh: {}, // ? 快速刷新
  headScripts: [ICONFONT_URL],
  // layout: {
  //   headerHeight: 40, // ? 顶部 Header 高度
  //   fixSiderbar: true,
  //   title: false,
  //   siderWidth: 200, // ? 左侧菜单栏宽度
  //   collapsedButtonRender: false, // ? 隐藏 collapsed 按钮
  //   iconfontUrl: ICONFONT_URL,
  // },
});
