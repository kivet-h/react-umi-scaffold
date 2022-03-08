/*
 * @Description: 最外层 layout 配置
 * @Author: kivet
 * @Date: 2022-03-07 17:59:01
 * @LastEditTime: 2022-03-08 10:43:29
 */

import type { BasicLayoutProps } from '@ant-design/pro-layout';
import DefaultLayout from '@/layouts/DefaultLayout';

interface IProps extends BasicLayoutProps {}

const mainLayout: React.FC<IProps> = (props) => {
  console.log('main', props.route);

  return <DefaultLayout {...props} />;
};

export default mainLayout;
