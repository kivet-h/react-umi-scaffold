/*
 * @Description: 路由配置文件
 * @Author: kivet
 * @Date: 2022-01-29 13:52:34
 * @LastEditTime: 2022-01-29 17:56:43
 */

const path = require('path');
const fs = require('fs');

/**
 * 读取 pages 目录下所有页面模块的路由配置，注：路由配置文件名，必须以 route[.***].(ts|js) 的格式命名
 * @param dir 目录
 * @param useSubDir 是否读取子目录
 */
const generateRoutes = (pagesDir: string, useSubDir: boolean) => {
  const routeFileList: any = [];

  const readRouteFileList = (_dir: string, _useSubDir: boolean) => {
    const files = fs.readdirSync(_dir);
    files.forEach((item: any) => {
      // 生成
      const filePath = path.join(_dir, item);
      const stat = fs.statSync(filePath);
      // 判断是否为目录
      if (stat.isDirectory() && _useSubDir) {
        readRouteFileList(path.join(_dir, item), _useSubDir);
      } else {
        const reg = RegExp(/route(.*).ts|js/);
        if (reg.test(filePath)) {
          routeFileList.push(filePath);
        }
      }
    });
  };

  // 递归读取路由配置文件
  readRouteFileList(pagesDir, useSubDir);
  const routes = routeFileList.map((item: string) => require(item));
  return routes;
};

/**
 * 读取pages目录下路由文件，自动生成路由表
 */
const routes = generateRoutes(path.join(__dirname, '../src/pages'), true);

export default [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/Login',
    hideInMenu: true,
    layout: false,
  },
  {
    path: '/404',
    component: '@/pages/404Page',
  },
  {
    path: '/',
    redirect: '/postManager',
  },
  ...routes,
  {
    redirect: '/404',
  },
];
