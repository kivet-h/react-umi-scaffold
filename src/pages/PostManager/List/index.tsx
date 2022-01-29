/*
 * @Description: 帖子管理列表
 * @Author: kivet
 * @Date: 2022-01-28 18:22:30
 * @LastEditTime: 2022-01-29 14:49:08
 */

import type { FC } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import styles from './index.less';

interface IProps {}

const PostManagerList: FC<IProps> = () => {
  return (
    <div className={styles.container}>
      PostManagerList
      <div>当前环境: {APP_ENV}</div>
      <Button
        onClick={() => {
          history.push('/postManager/detail?id=111');
        }}
      >
        跳转至帖子详情
      </Button>
    </div>
  );
};

export default PostManagerList;
