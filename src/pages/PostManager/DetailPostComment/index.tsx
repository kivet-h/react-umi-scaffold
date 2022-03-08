/*
 * @Description: 帖子评论
 */

import type { FC } from 'react';
import { urlHelper } from '@/utils/urlHelper';
import styles from './index.less';

interface IProps {}

const DetailPostComment: FC<IProps> = () => {
  const { id = '' } = urlHelper.getUrlParams();

  return <div className={styles.container}>帖子评论（id: {id}）</div>;
};

export default DetailPostComment;
