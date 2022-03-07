/*
 * @Description: 帖子管理列表
 */

import type { FC } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import styles from './index.less';

interface IProps {}

const PostManagerList: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      帖子列表
      <Button
        onClick={() => {
          history.push('/postManager/detail?id=post_id');
        }}
      >
        跳转到详情
      </Button>
    </div>
  );
};

export default PostManagerList;
