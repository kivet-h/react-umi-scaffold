/*
 * @Description: 全部委托
 * @Author: kivet
 * @Date: 2022-01-28 18:24:43
 * @LastEditTime: 2022-01-29 10:02:47
 */

import type { FC } from 'react';
import { Button } from 'antd';
import { history } from 'umi';

interface IProps {}

const AllEntrust: FC<IProps> = () => {
  return (
    <div>
      AllEntrust
      <Button
        onClick={() => {
          history.push('/entrustManager/all/detail?id=222');
        }}
      >
        跳转至委托详情
      </Button>
    </div>
  );
};

export default AllEntrust;
