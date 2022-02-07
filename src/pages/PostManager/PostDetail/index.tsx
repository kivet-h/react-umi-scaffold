/*
 * @Description: 帖子详情
 * @Author: kivet
 * @Date: 2022-01-28 18:24:43
 * @LastEditTime: 2022-02-07 17:12:20
 */

import { useGetUrlParams } from '@/hooks';
import type { FC } from 'react';

interface IProps {}

const PostDetail: FC<IProps> = () => {
  const { id = '' } = useGetUrlParams();

  return (
    <div>
      PostDetail
      <div>id: {id}</div>
    </div>
  );
};

export default PostDetail;
