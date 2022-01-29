/*
 * @Description: layout 布局页面
 * @Author: kivet
 * @Date: 2022-01-29 15:20:27
 * @LastEditTime: 2022-01-29 16:24:20
 */

interface IProps {
  route: any;
}

const BasicLayout: React.FC<IProps> = (props) => {
  return <div>{props.children}</div>;
};

export default BasicLayout;
