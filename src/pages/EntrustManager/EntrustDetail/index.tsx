/*
 * @Description: 委托详情
 */

import type { FC } from 'react';
import { urlHelper } from '@/utils/urlHelper';
import styles from './index.less';

interface IProps {}

const EntrustDetail: FC<IProps> = () => {
  const { id = '' } = urlHelper.getUrlParams();

  return <div className={styles.container}>委托详情（id: {id}）</div>;
};

export default EntrustDetail;
