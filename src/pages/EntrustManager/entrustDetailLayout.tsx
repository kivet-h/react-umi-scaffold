/*
 * @Description: 委托详情页 Layout
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-03-08 10:46:06
 */

import type { BasicLayoutProps } from '@ant-design/pro-layout';
import DefaultLayout from '@/layouts/DefaultLayout';

interface IProps extends BasicLayoutProps {}

const entrustDetailLayout: React.FC<IProps> = (props) => {
  console.log('entrust-detail', props.route);

  return <DefaultLayout {...props} />;
};

export default entrustDetailLayout;
