/*
 * @Description: 路由配置文件
 * @Author: kivet
 * @Date: 2022-01-29 13:52:34
 * @LastEditTime: 2022-01-29 17:23:23
 */

const route = [
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
  {
    name: '帖子管理',
    path: '/postManager',
    component: '@/layouts',
    icon: 'home',
    hideChildrenInMenu: true,
    routes: [
      {
        name: '帖子管理',
        path: '/postManager',
        component: '@/pages/PostManager/List',
      },
      {
        name: '帖子详情',
        path: '/postManager/detail',
        component: '@/pages/PostManager/PostDetail',
      },
      {
        redirect: '/404',
      },
    ],
  },
  {
    name: '委托管理',
    icon: 'home',
    path: '/entrustManager',
    component: '@/layouts',
    routes: [
      {
        name: '全部委托',
        path: '/entrustManager/all',
        component: '@/pages/EntrustManager/AllEntrust',
      },
      {
        name: '全部委托详情',
        path: '/entrustManager/all/detail',
        component: '@/pages/EntrustManager/EntrustDetail',
        hideInMenu: true,
      },
      {
        name: '已同步委托',
        path: '/entrustManager/synced',
        component: '@/pages/EntrustManager/SyncedEntrust',
      },
      {
        name: '已同步委托详情',
        path: '/entrustManager/synced/detail',
        component: '@/pages/EntrustManager/EntrustDetail',
        hideInMenu: true,
      },
      {
        redirect: '/404',
      },
    ],
  },
  {
    name: '用户管理',
    path: '/userManager',
    component: '@/layouts',
    icon: 'home',
    hideChildrenInMenu: true,
    routes: [
      {
        name: '用户管理',
        path: '/userManager',
        component: '@/pages/UserManager/List',
      },
      {
        name: '帖子详情',
        path: '/userManager/detail',
        component: '@/pages/UserManager/UserDetail',
      },
      {
        redirect: '/404',
      },
    ],
  },
  {
    redirect: '/404',
  },
];

export default route;
