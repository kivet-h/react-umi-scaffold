/*
 * @Description: 委托详情页 Layout
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-03-08 11:30:39
 */

import { Link } from 'umi';
import type { BasicLayoutProps } from '@ant-design/pro-layout';
import DefaultLayout from '@/layouts/DefaultLayout';
import { urlHelper } from '@/utils/urlHelper';

const queryString = require('query-string');

interface IProps extends BasicLayoutProps {}

const entrustDetailLayout: React.FC<IProps> = (props) => {
  console.log('entrust-detail', props.route);

  return (
    <DefaultLayout
      {...props}
      menuItemRender={(item: any, dom: any) => {
        // ? 详情页菜单切换，需保留地址栏部分参数，如id
        const urlParams = queryString.stringify(urlHelper.getUrlParams('id'));
        return <Link to={urlParams ? `${item.path}?${urlParams}` : item.path}>{dom}</Link>;
      }}
    />
  );
};

export default entrustDetailLayout;
