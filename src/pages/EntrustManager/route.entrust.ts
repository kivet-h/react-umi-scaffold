/*
 * @Description: 详情页 route 配置
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-03-08 09:59:51
 */

const entrustManagerMenuRoute = {
  path: '/entrustDetail',
  component: '@/layouts/entrustDetailLayout',
  routes: [
    {
      name: '委托详情',
      path: '/entrustDetail/detail',
      component: '@/pages/EntrustManager/EntrustDetail',
    },
    {
      name: '回传记录',
      path: '/entrustDetail/upload',
      component: '@/pages/EntrustManager/DetailUploadList',
    },
    {
      name: '收取记录',
      path: '/entrustDetail/collect',
      component: '@/pages/EntrustManager/DetailCollectList',
    },
    {
      redirect: '/404',
    },
  ],
};

module.exports = entrustManagerMenuRoute;
