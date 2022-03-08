/*
 * @Description: 详情页 route 配置
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-03-08 09:49:38
 */

const postManagerMenuRoute = {
  path: '/postDetail',
  component: '@/layouts/postDetailLayout',
  routes: [
    {
      name: '帖子详情',
      path: '/postDetail/detail',
      component: '@/pages/PostManager/PostDetail',
    },
    {
      name: '帖子评论',
      path: '/postDetail/comment',
      component: '@/pages/PostManager/DetailPostComment',
    },
    {
      redirect: '/404',
    },
  ],
};

module.exports = postManagerMenuRoute;
