/*
 * @Description: 用户管理模块路由配置文件
 * @Author: kivet
 * @Date: 2022-01-29 09:09:54
 * @LastEditTime: 2022-01-29 17:46:34
 */

const userManagerMenuRoute = {
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
};

module.exports = userManagerMenuRoute;
