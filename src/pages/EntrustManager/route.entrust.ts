/*
 * @Description: 委托管理模块路由配置文件
 * @Author: kivet
 * @Date: 2022-01-29 09:09:54
 * @LastEditTime: 2022-01-29 13:17:43
 */

import { MenuDataItem } from 'config/routes';

const BASE_URL = 'entrustManager';

const entrustManagerMenuRoute: MenuDataItem = {
  // path: '/',
  // component: '@/layouts',
  // routes: [
  //   {
  name: '委托管理',
  path: `/${BASE_URL}`,
  icon: 'home',
  routes: [
    {
      name: '全部委托',
      path: `/${BASE_URL}/all`,
      component: '@/pages/EntrustManager/AllEntrust',
    },
    {
      name: '全部委托详情',
      path: `/${BASE_URL}/all/detail`,
      component: '@/pages/EntrustManager/EntrustDetail',
      hideInMenu: true,
    },
    {
      name: '已同步委托',
      path: `/${BASE_URL}/synced`,
      component: '@/pages/EntrustManager/SyncedEntrust',
    },
    {
      name: '已同步委托详情',
      path: `/${BASE_URL}/synced/detail`,
      component: '@/pages/EntrustManager/EntrustDetail',
      hideInMenu: true,
    },
  ],
  //   },
  //   {
  //     redirect: '/404',
  //   },
  // ],
};

module.exports = entrustManagerMenuRoute;
