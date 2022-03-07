/*
 * @Description: 运行时配置
 */

import { LayoutHeader } from '@/layouts/BasicLayout';
import { menu_img } from '@/assets/images';

/**
 * 详细见：https://umijs.org/zh-CN/plugins/plugin-layout#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
 */
export const layout = (config: any) => {
  return {
    ...config,
    headerRender: () => <LayoutHeader />,
    logo: menu_img,
  };
};

/**
 * 详细见：https://umijs.org/zh-CN/plugins/plugin-dva#dva-%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE
 */
export const dva = {
  config: {
    onError() {
      /**
       * ! 注意：这里 onError 勿删！！
       * 项目使用的是 umi 内置的 @umijs/plugin-dva 来进行数据管理，
       * 而由于有的页面中使用到了 @umijs/plugin-dva 内置的 dva-loading 来做一些 loading 的操作
       * 注意必须要在这里设置 onError 来做全局请求响应处理
       * 不然，如果某个 API 请求出错，就会导致返回的 loading 一直是 true，页面中就会一直 loading
       * 这里 onError 里面可以什么都没有，但是必须要有 onError 这个配置
       */
    },
  },
};
