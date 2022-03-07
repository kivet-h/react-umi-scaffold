declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

/**
 * 全局变量
 */

// ? 全局环境变量
declare const APP_ENV: string;
// ? 全局基础 API 地址
declare const API_BASE: string;

/**
 * 一些 npm 包
 */

declare module 'mockjs';

type IAnyObject = Record<string, any>;
