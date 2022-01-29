/*
 * @Description: 用户管理列表
 * @Author: kivet
 * @Date: 2022-01-28 18:22:30
 * @LastEditTime: 2022-01-29 17:01:22
 */

import type { FC } from 'react';
import { Button } from 'antd';
import { history } from 'umi';

interface IProps {}

const UserManagerList: FC<IProps> = () => {
  return (
    <div>
      UserManagerList
      <Button
        onClick={() => {
          history.push('/userManager/detail?id=userId');
        }}
      >
        跳转至用户详情
      </Button>
    </div>
  );
};

export default UserManagerList;
