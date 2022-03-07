/*
 * @Description: 委托管理模块路由配置文件
 */

const entrustManagerMenuRoute = {
  name: '委托管理',
  icon: 'icon-weituoguanli',
  path: '/entrustManager',
  component: '@/layouts',
  sort: 2,
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
};

module.exports = entrustManagerMenuRoute;
