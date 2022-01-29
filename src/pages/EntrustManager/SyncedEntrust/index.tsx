/*
 * @Description: 已同步委托
 * @Author: kivet
 * @Date: 2022-01-28 18:24:43
 * @LastEditTime: 2022-01-29 10:03:00
 */

import type { FC } from 'react';
import { Button } from 'antd';
import { history } from 'umi';

interface IProps {}

const SyncedEntrust: FC<IProps> = () => {
  return (
    <div>
      SyncedEntrust
      <Button
        onClick={() => {
          history.push('/entrustManager/synced/detail?id=333');
        }}
      >
        跳转至委托详情
      </Button>
    </div>
  );
};

export default SyncedEntrust;
