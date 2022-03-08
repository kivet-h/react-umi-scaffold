/*
 * @Description: 整合项目中所有路由配置
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-03-08 09:30:17
 */

const path = require('path');
const fs = require('fs');

// ? 一些不需要使用 layout 页面包裹的页面，即左侧菜单栏不需要展示的页面
const outLayoutRoute = [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/Login',
  },
  {
    path: '/404',
    component: '@/pages/404Page',
  },
];

/**
 * 读取 pages 目录下所有页面模块的路由配置，注：路由配置文件名，必须以 route[.***].(ts|js) 的格式命名
 * @param dir 目录
 * @param useSubDir 是否读取子目录
 */
const generateRoutes = (pagesDir: string, useSubDir: boolean) => {
  const routeFileList: any = [];
  // 递归读取路由配置文件
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
  readRouteFileList(pagesDir, useSubDir);
  const routes = routeFileList.map((item: string) => require(item));
  return routes;
};

/**
 * 读取pages目录下路由文件，自动生成路由表
 */
const routes = generateRoutes(path.join(__dirname, '../src/pages'), true);

export default [...outLayoutRoute, ...routes];
