/*
 * @Description: 默认 Layout 配置
 * @Author: kivet
 * @Date: 2022-03-08 10:27:05
 * @LastEditTime: 2022-03-08 10:39:06
 */

import type { BasicLayoutProps, MenuDataItem } from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import { Link, history } from 'umi';
import { Image } from 'antd';
import { menu_img } from '@/assets/images';
import { LayoutHeader } from './BasicLayout';

interface IProps extends BasicLayoutProps {}

const DefaultLayout: React.FC<IProps> = (props) => {
  // 菜单 loop
  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ routes, ...item }) => ({
      ...item,
      routes: routes && loopMenuItem(routes),
    }));

  const config = {
    logo: () => (
      <Image
        src={menu_img}
        preview={false}
        onClick={() => {
          history.replace('/postManager');
        }}
      />
    ),
    // location,
    menuDataRender: () => loopMenuItem(props.route?.routes || []),
    menuItemRender: (item: any, dom: any) => <Link to={item.path ?? '/'}>{dom}</Link>,
    title: '',
    fixSiderbar: true,
    // breakpoint: false,
    defaultCollapsed: false,
    headerRender: () => <LayoutHeader />,
    ...props,
  };

  return <ProLayout {...config}>{props.children}</ProLayout>;
};

export default DefaultLayout;
