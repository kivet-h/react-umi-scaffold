/*
 * @Description: 帖子详情
 */

import type { FC } from 'react';
import { urlHelper } from '@/utils/urlHelper';
import styles from './index.less';

interface IProps {}

const PostDetail: FC<IProps> = () => {
  const { id = '' } = urlHelper.getUrlParams();

  return <div className={styles.container}>帖子详情（id: {id}）</div>;
};

export default PostDetail;
