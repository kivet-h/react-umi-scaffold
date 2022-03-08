/*
 * @Description: 帖子详情页 Layout
 * @Author: kivet
 * @Date: 2022-01-25 15:55:00
 * @LastEditTime: 2022-03-08 10:45:09
 */

import type { BasicLayoutProps } from '@ant-design/pro-layout';
import DefaultLayout from '@/layouts/DefaultLayout';

interface IProps extends BasicLayoutProps {}

const postDetailLayout: React.FC<IProps> = (props) => {
  console.log('postttt', props.route);

  return <DefaultLayout {...props} />;
};

export default postDetailLayout;
