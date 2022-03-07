/*
 * @Description: 在此目录下定义一些全局的公共 TS 类型
 * @注意：最好写上注释，方便使用时提示，知道每个类型以及类型的每个属性都代表的是啥
 */

/** 一些选项绑定值类型，如 Tab，Select 等组件 */
export type IOption<T = string, S = string> = {
  /** 值 */
  value: T;
  /** 对应文案 */
  label: S;
};

/**
 * 图片列表 item 类型
 */
export type IImgListItem = {
  /** 图片文件id */
  id?: string;
  /** 原始画质 */
  url_origin?: string;
  /** 常规画质 */
  url_normal?: string;
  /** 缩略画质 */
  url_thumb?: string;
};

/**
 * 生物类别
 * @Birds 鸟类
 * @Mammals 哺乳类
 * @Fishes 鱼类
 * @Reptiles 爬行类
 * @Amphibian 两栖类
 */
export type IBiologicalLabel = 'Birds' | 'Mammals' | 'Fishes' | 'Reptiles' | 'Amphibian';
