/*
 * @Description: 路由配置文件
 * @Author: kivet
 * @Date: 2022-01-29 13:52:34
 * @LastEditTime: 2022-01-29 15:49:27
 */

const route = [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/Login',
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
  {
    name: '帖子管理',
    path: '/postManager',
    component: '@/pages/PostManager/List',
    icon: 'home',
  },
];

export default route;
