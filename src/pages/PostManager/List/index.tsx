/*
 * @Description: 帖子管理列表
 * @Author: kivet
 * @Date: 2022-01-28 18:22:30
 * @LastEditTime: 2022-02-07 11:11:58
 */

import type { FC } from 'react';
import { useEffect } from 'react';
import { Button } from 'antd';
import type { ConnectProps, Dispatch, IGlobalModelState, Loading } from 'umi';
import { connect, history } from 'umi';
import styles from './index.less';

interface IProps extends ConnectProps {
  dispatch: Dispatch;
  global: IGlobalModelState;
  loading: boolean;
}
const PostManagerList: FC<IProps> = (props) => {
  const { dispatch, global, loading = false } = props;

  console.log('loading', global, loading);

  useEffect(() => {
    dispatch({
      type: 'global/getDeviceList',
    });
  }, []);

  return (
    <div className={styles.container}>
      PostManagerList
      <div>当前环境: {APP_ENV}</div>
      <Button
        onClick={() => {
          history.push('/postManager/detail?id=postId');
        }}
      >
        跳转至帖子详情
      </Button>
      <div>
        {global.deviceList.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default connect(({ global, loading }: { global: IGlobalModelState; loading: Loading }) => ({
  global,
  loading: loading.models.global,
}))(PostManagerList);
