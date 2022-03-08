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
