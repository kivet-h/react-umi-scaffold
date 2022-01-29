/*
 * @Description: 帖子详情
 * @Author: kivet
 * @Date: 2022-01-28 18:24:43
 * @LastEditTime: 2022-01-29 09:22:33
 */

import type { FC } from 'react';
import { useLocation } from 'umi';

interface IProps {}

const PostDetail: FC<IProps> = () => {
  const {
    query: { id = '' },
  }: any = useLocation();

  return (
    <div>
      PostDetail
      <div>id: {id}</div>
    </div>
  );
};

export default PostDetail;
