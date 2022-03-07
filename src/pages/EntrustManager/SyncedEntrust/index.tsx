/*
 * @Description: 已同步委托
 */

import type { FC } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import styles from './index.less';

interface IProps {}

const SyncedEntrust: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      已同步委托列表
      <Button
        onClick={() => {
          history.push('/entrustManager/synced/detail?id=synced_entrust_id');
        }}
      >
        跳转到详情
      </Button>
    </div>
  );
};

export default SyncedEntrust;
