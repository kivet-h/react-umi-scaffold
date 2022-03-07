/*
 * @Description: 全部委托
 */

import type { FC } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import styles from './index.less';

interface IProps {}

const AllEntrustList: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      全部委托列表
      <Button
        onClick={() => {
          history.push('/entrustManager/all/detail?id=all_entrust_id');
        }}
      >
        跳转到详情
      </Button>
    </div>
  );
};

export default AllEntrustList;
