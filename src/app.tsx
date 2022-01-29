/*
 * @Description: 运行时配置
 * @Author: kivet
 * @Date: 2022-01-29 15:18:52
 * @LastEditTime: 2022-01-29 15:56:01
 */

import { LayoutHeader } from '@/layouts/BasicLayout';
import { img_logo } from '@/assets/images';

export const layout = (config: any) => {
  return {
    ...config,
    headerRender: () => <LayoutHeader />,
    iconfontUrl: '//at.alicdn.com/t/font_2724271_ywgl62i7sen.js',
    logo: img_logo,
    title: false,
    fixSiderbar: true,
    breakpoint: false,
    defaultCollapsed: false,
    fixedHeader: true,
    siderWidth: 200,
  };
};
