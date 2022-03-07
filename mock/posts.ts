/*
 * @Description: 帖子管理模块 mock 数据
 */

import Mock from 'mockjs';

const { Random } = Mock;

/**
 * mock 帖子列表数据
 * @param req
 * @param res
 */
const getPostsList = (req: any, res: any) => {
  const response = Mock.mock({
    'data|5-20': [
      {
        id: () => Random.id(),
        mainText: () => Random.cparagraph(),
        imgOrCard: () => [Random.image(), Random.image(), Random.image()],
        'type|+1': ['静态轨迹', '鸟类', '委托', '哺乳类', '普通'],
        userName: () => Random.cname(),
        email: () => Random.email(),
        date: () => Random.datetime(),
      },
    ],
  });
  // ? 模拟请求延迟
  setTimeout(() => {
    return res.status(200).send(response);
  }, 500);
};

export default {
  'GET /posts/page/': getPostsList,
};
