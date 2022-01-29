/*
 * @Description: 用户管理模块路由配置文件
 * @Author: kivet
 * @Date: 2022-01-29 09:09:54
 * @LastEditTime: 2022-01-29 13:17:33
 */

import { MenuDataItem } from 'config/routes';

const BASE_URL = 'userManager';

const userManagerMenuRoute: MenuDataItem = {
  // path: '/',
  // component: '@/layouts',
  // routes: [
  //   {
  name: '用户管理',
  path: `/${BASE_URL}`,
  icon: 'home',
  hideChildrenInMenu: true,
  routes: [
    {
      name: '用户管理',
      path: `/${BASE_URL}`,
      component: '@/pages/UserManager/List',
    },
    {
      name: '用户详情',
      path: `/${BASE_URL}/detail`,
      component: '@/pages/UserManager/UserDetail',
    },
  ],
  //   },
  //   {
  //     redirect: '/404',
  //   },
  // ],
};

module.exports = userManagerMenuRoute;
