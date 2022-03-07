/*
 * @Description: 委托模块
 */

import Mock from 'mockjs';

const { Random } = Mock;

/**
 * mock 全部委托列表数据
 * @param req
 * @param res
 */
const mockAllEntrustList = (req: any, res: any) => {
  const response = Mock.mock({
    'data|5-20': [
      {
        id: () => Random.id(),
        uuid: () => Random.id(),
        name: () => Random.cname(),
        'dataStatus|+1': [0, 1],
        'entrustStatus|+1': [0, 1],
        entrustName: () => Random.cname(),
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

/**
 * mock 已同步委托列表数据
 * @param req
 * @param res
 */
const mockSyncedEntrustList = (req: any, res: any) => {
  const response = Mock.mock({
    'data|5-20': [
      {
        id: () => Random.id(),
        uuid: () => Random.id(),
        name: () => Random.cname(),
        'dataStatus|+1': [0, 1],
        'entrustStatus|+1': [0, 1],
        entrustName: () => Random.cname(),
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
  'GET /allEntrust/page/': mockAllEntrustList,
  'GET /syncedEntrust/page/': mockSyncedEntrustList,
};
