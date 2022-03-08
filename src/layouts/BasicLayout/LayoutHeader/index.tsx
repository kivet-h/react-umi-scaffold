/*
 * @Description: layout 页面顶部
 */

import type { FC } from 'react';
import { history } from 'umi';
import _ from 'lodash';
import styles from './index.less';

interface IProps {}

type IBreadMenuItem = { title: string; url?: string };

const page_bread_menu: Record<string, IBreadMenuItem[]> = {
  '/postManager': [{ title: '帖子管理' }],
  '/postDetail/detail': [{ title: '帖子管理', url: '/postManager' }, { title: '帖子详情' }],
  '/entrustManager/all': [{ title: '全部委托' }],
  '/entrustDetail/detail': [
    { title: '委托管理', url: '/entrustManager/all' },
    { title: '委托详情' },
  ],
  '/entrustManager/synced': [{ title: '已同步委托' }],
};

const LayoutHeader: FC<IProps> = () => {
  const pathName = window.location.pathname.includes('/console')
    ? window.location.pathname.split('/console')[1]
    : window.location.pathname;

  const onBreadJump = (item: IBreadMenuItem) => {
    if (item?.url) {
      if (item?.url === 'back') {
        history.goBack();
      } else {
        history.replace(item?.url);
      }
    }
  };

  /**
   * 检查获取到的 pathName 最后是否有 /，有的话，就截取返回/之前的内容
   * @param url 上面获取到的 pathName
   * @原因 Nginx配置后，访问线上环境，页面跳转或刷新时，它会自动在url最后添加一个/，这里不处理一下的话，有/的时候获取不到对应的面包屑信息
   */
  const _delUrlLastObliqueLine = (url: string) => (url.slice(-1) === '/' ? url.slice(0, -1) : url);

  return (
    <div className={styles.container}>
      <div className={styles.bread_box}>
        {_.map(
          page_bread_menu[_delUrlLastObliqueLine(pathName)],
          (item: IBreadMenuItem, index: number) => (
            <div
              key={item?.title}
              className={styles.item}
              data-click={!!item?.url}
              onClick={() => onBreadJump(item)}
            >
              {item.title}
              {index + 1 < page_bread_menu[_delUrlLastObliqueLine(pathName)].length && (
                <span>/</span>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default LayoutHeader;
