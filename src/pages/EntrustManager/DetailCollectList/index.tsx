/*
 * @Description: 收取记录列表
 */

import type { FC } from 'react';
import { urlHelper } from '@/utils/urlHelper';
import styles from './index.less';

interface IProps {}

const DetailCollectList: FC<IProps> = () => {
  const { id = '' } = urlHelper.getUrlParams();

  return <div className={styles.container}>收取记录列表（id: {id}）</div>;
};

export default DetailCollectList;
