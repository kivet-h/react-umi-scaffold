/*
 * @Description: 全局公共数据在这存放
 * @注意：命名格式：以 global_data_ 开头，如：global_data_xxx
 */

import { EnumPlatform, EnumShareMainCategory } from './enum';

/**
 * 根据当前排序方式（pageSort）和 翻页方向（）获取列表 API x-result-sort 的值
 * @使用方式 direction ? global_data_list_sort[pageSort][direction] : pageSort
 * @提示 direction 为null，表示首次进入或向前翻页至第一页，此时直接使用地址栏的 pageSort
 */
export const global_data_list_sort: Record<string, Record<string, string>> = {
  '-_id': {
    right: '-_id',
    left: '_id',
  },
  _id: {
    right: '_id',
    left: '-_id',
  },
};

/**
 * 用户管理模块-禁用理由
 * @特殊的 '4'表示的是自定义
 */
export const global_data_disabled_reason: Record<string, string> = {
  '1': '该账户涉嫌非法内容',
  '2': '该账户涉嫌非法操作',
  '3': '该账户传播非法信息',
};

/**
 * 全局错误码提示语映射
 */
export const global_data_error_code_text: Record<number, string> = {
  10001: '参数错误',
  30001: '用户名无效',
  30002: '密码错误',
  30003: '验证码错误',
  30004: '账号已被注册',
  30005: '账号禁用',
  40001: '主题已被删除',
  40002: '评论已被删除',
};

/**
 * 生物分享时，地图展示方式，传给 MapRender 组件，来判断获取对应的地图url地址
 */
export const global_data_map_type: Record<
  number,
  'biological_location' | 'biological_2d' | 'biological_3d'
> = {
  [EnumShareMainCategory.location]: 'biological_location',
  [EnumShareMainCategory.dd_track]: 'biological_2d',
  [EnumShareMainCategory.ddd_track]: 'biological_3d',
};

/**
 * 平台标识对应的平台 host
 * 正式服用这个，测试服直接默认都是 bird.coolhei.com 即可（目前是这样，2022.02.28）
 */
export const global_data_platform: Record<number, string> = {
  [EnumPlatform.PlatformDruidBird]: 'bird.druidtech.cn',
  [EnumPlatform.PlatformCasBird]: 'cas.bird.druidtech.cn',
};
