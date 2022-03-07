/*
 * @Description: 公共模块 mock
 */

import Mock from 'mockjs';

const { Random } = Mock;

/**
 * mock 登录
 * @param req
 * @param res
 */
const mockLogin = (req: any, res: any) => {
  const response = Mock.mock({
    data: {
      id: () => Random.id(),
      username: () => Random.cname(),
      created_at: () => Random.datetime(),
      updated_at: () => Random.datetime(),
      token: () => Random.string(),
    },
  });
  // ? 模拟请求延迟
  setTimeout(() => {
    return res.status(200).send(response);
  }, 500);
};

export default {
  'POST /login': mockLogin,
};
