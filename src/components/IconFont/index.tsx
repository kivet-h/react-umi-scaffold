/*
 * @Description: iconfont 渲染组件
 */

import type { FC } from 'react';
import styles from './index.less';

interface IProps {
  /** 图标名称，值为 iconfont 文件定义值 */
  iconName?: string;
  /** 自定义类名，控制样式 */
  className?: string;
  /** 样式属性 */
  style?: React.CSSProperties;
  /** 点击事件 */
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const IconFont: FC<IProps> = (props: IProps) => {
  const { iconName, className, style, onClick } = props;
  return (
    <svg
      className={`${styles.container} ${className}`}
      style={{
        cursor: onClick ? 'pointer' : 'auto',
        ...style,
      }}
      onClick={onClick}
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-${iconName}`} />
    </svg>
  );
};

export default IconFont;
