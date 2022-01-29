/*
 * @Description: 用户管理列表
 * @Author: kivet
 * @Date: 2022-01-28 18:22:30
 * @LastEditTime: 2022-01-29 10:09:23
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
          history.push('/userManager/detail?id=444');
        }}
      >
        跳转至用户详情
      </Button>
    </div>
  );
};

export default UserManagerList;
