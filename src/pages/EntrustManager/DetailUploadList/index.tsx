/*
 * @Description: 回传列表
 */

import type { FC } from 'react';
import { urlHelper } from '@/utils/urlHelper';
import styles from './index.less';

interface IProps {}

const DetailUploadList: FC<IProps> = () => {
  const { id = '' } = urlHelper.getUrlParams();

  return <div className={styles.container}>回传列表（id: {id}）</div>;
};

export default DetailUploadList;
