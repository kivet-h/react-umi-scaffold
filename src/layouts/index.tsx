/*
 * @Description: layout 布局页面
 * @Author: kivet
 * @Date: 2022-01-29 15:20:27
 * @LastEditTime: 2022-01-29 15:39:40
 */

interface IProps {
  route: any;
}

const BasicLayout: React.FC<IProps> = (props) => {
  return <div style={{ height: '2000px' }}>{props.children}</div>;
};

export default BasicLayout;
