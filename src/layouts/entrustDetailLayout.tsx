/*
 * @Description: 委托详情页 Layout
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-03-08 10:17:40
 */

import type { MenuDataItem } from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import { Link, history } from 'umi';
import { Image } from 'antd';
import { menu_img } from '@/assets/images';
import { LayoutHeader } from './BasicLayout';

interface IProps {
  route: {
    routes: MenuDataItem[];
    [index: string]: any;
  };
  location: any;
}

const entrustDetailLayout: React.FC<IProps> = (props) => {
  const { route, location } = props;

  console.log('entrust-detail', route);

  // 菜单 loop
  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ routes, ...item }) => ({
      ...item,
      routes: routes && loopMenuItem(routes),
    }));

  return (
    <ProLayout
      logo={() => (
        <Image
          src={menu_img}
          preview={false}
          onClick={() => {
            history.replace('/postManager');
          }}
        />
      )}
      location={location}
      menuDataRender={() => loopMenuItem(route.routes)}
      menuItemRender={(item, dom) => <Link to={item.path ?? '/'}>{dom}</Link>}
      title={false}
      fixSiderbar
      // menu={{ request: async () => loopMenuItem(route.routes) }}
      breakpoint={false}
      defaultCollapsed={false}
      headerRender={() => <LayoutHeader />}
    >
      {props.children}
    </ProLayout>
  );
};

export default entrustDetailLayout;
