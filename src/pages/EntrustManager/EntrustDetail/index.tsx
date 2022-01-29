/*
 * @Description: 委托详情
 * @Author: kivet
 * @Date: 2022-01-28 18:24:43
 * @LastEditTime: 2022-01-29 10:00:55
 */

import type { FC } from 'react';
import { useLocation } from 'umi';

interface IProps {}

const EntrustDetail: FC<IProps> = () => {
  const {
    query: { id = '' },
  }: any = useLocation();

  return (
    <div>
      EntrustDetail
      <div>id: {id}</div>
    </div>
  );
};

export default EntrustDetail;
