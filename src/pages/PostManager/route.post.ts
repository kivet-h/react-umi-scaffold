/*
 * @Description: 帖子管理模块路由配置文件
 * @Author: kivet
 * @Date: 2022-01-29 09:09:54
 * @LastEditTime: 2022-01-29 17:47:36
 */

const postManagerMenuRoute = {
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
};

module.exports = postManagerMenuRoute;
