/*
 * @Description: layout 页面顶部
 * @Author: kivet
 * @Date: 2022-01-29 15:21:45
 * @LastEditTime: 2022-01-29 15:24:34
 */

import type { FC } from 'react';
import styles from './index.less';

interface IProps {}

const LayoutHeader: FC<IProps> = () => {
  return <div className={styles.container}>LayoutHeader，这里是Header的内容</div>;
};

export default LayoutHeader;
