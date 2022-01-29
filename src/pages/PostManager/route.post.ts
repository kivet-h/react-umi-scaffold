/*
 * @Description: 帖子管理模块路由配置文件
 * @Author: kivet
 * @Date: 2022-01-29 09:09:54
 * @LastEditTime: 2022-01-29 13:17:23
 */

import { MenuDataItem } from 'config/routes';

const BASE_URL = 'postManager';

const postManagerMenuRoute: MenuDataItem = {
  // path: '/',
  // component: '@/layouts',
  // routes: [
  //   {
  name: '帖子管理',
  path: `/${BASE_URL}`,
  icon: 'home',
  hideChildrenInMenu: true,
  routes: [
    {
      name: '帖子管理',
      path: `/${BASE_URL}`,
      component: '@/pages/PostManager/List',
    },
    {
      name: '帖子详情',
      path: `/${BASE_URL}/detail`,
      component: '@/pages/PostManager/PostDetail',
    },
  ],
  // },
  //   {
  //     redirect: '/404',
  //   },
  // ],
};

module.exports = postManagerMenuRoute;
