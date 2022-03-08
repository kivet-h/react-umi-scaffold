/*
 * @Description: 最外层 layout 配置
 * @Author: kivet
 * @Date: 2022-03-07 17:59:01
 * @LastEditTime: 2022-03-08 10:21:20
 */

import type { MenuDataItem } from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
// import { IconMap } from '@/utils/iconsMap';
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

const BasicLayout: React.FC<IProps> = (props) => {
  const { route, location } = props;

  console.log('mainnnnn', route);

  // 菜单 loop
  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ icon, routes, ...item }) => ({
      ...item,
      // icon: icon && IconMap[icon as string],
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

export default BasicLayout;
