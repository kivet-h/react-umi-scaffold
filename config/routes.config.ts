/*
 * @Description: 路由配置文件
 * @Author: kivet
 * @Date: 2022-01-29 13:52:34
 * @LastEditTime: 2022-02-07 14:56:31
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

// ? 由于是自动去获取所有模块下的 route 配置，顺序肯定是按目录循序拿到的，可能不能达到设计稿的顺序效果，所以需要进行排序处理，根据 sort 字段对菜单栏进行排序，如果没有配置sort，默认为0，即展示在菜单栏最前面
const sortRoutes = routes.sort(
  (objA: { sort: number }, objB: { sort: number }) => (objA.sort || 0) - (objB.sort || 0),
);

export default [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/Login',
    hideInMenu: true,
    layout: false,
  },
  {
    name: '个人中心',
    path: '/personalCenter',
    component: '@/pages/PersonalCenter',
    hideInMenu: true,
  },
  {
    path: '/404',
    component: '@/pages/404Page',
  },
  {
    path: '/',
    redirect: '/postManager',
  },
  ...sortRoutes,
  {
    redirect: '/404',
  },
];
