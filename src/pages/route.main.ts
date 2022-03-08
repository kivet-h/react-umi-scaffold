/*
 * @Description: 最外层路由菜单
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-03-08 09:55:55
 */

const mainRoute = {
  path: '/',
  component: '@/layouts/mainLayout',
  routes: [
    {
      path: '/',
      redirect: '/postManager',
    },
    {
      name: '帖子管理',
      path: '/postManager',
      component: '@/pages/PostManager/List',
      icon: 'icon-tieziguanli',
    },
    {
      name: '委托管理',
      path: '/entrustManager',
      icon: 'icon-weituoguanli',
      routes: [
        {
          name: '全部委托',
          path: '/entrustManager/all',
          component: '@/pages/EntrustManager/AllEntrust',
        },
        {
          name: '已同步委托',
          path: '/entrustManager/synced',
          component: '@/pages/EntrustManager/SyncedEntrust',
        },
      ],
    },
    // {
    //   redirect: '/404',
    // },
  ],
};

module.exports = mainRoute;
