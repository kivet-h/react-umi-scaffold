/*
 * @Description: layout 页面顶部
 */

import type { FC } from 'react';
import styles from './index.less';

interface IProps {}

const LayoutHeader: FC<IProps> = () => {
  return <div className={styles.container}>顶部 header 部分内容</div>;
};

export default LayoutHeader;
