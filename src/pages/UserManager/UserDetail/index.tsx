/*
 * @Description: 用户详情
 * @Author: kivet
 * @Date: 2022-01-28 18:24:43
 * @LastEditTime: 2022-01-29 10:10:07
 */

import type { FC } from 'react';
import { useLocation } from 'umi';

interface IProps {}

const UserDetail: FC<IProps> = () => {
  const {
    query: { id = '' },
  }: any = useLocation();

  return (
    <div>
      UserDetail
      <div>id: {id}</div>
    </div>
  );
};

export default UserDetail;
