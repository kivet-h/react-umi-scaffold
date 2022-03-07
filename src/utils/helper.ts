/*
 * @Description: 一些功能函数
 */

import { history } from 'umi';
import { sha256 } from 'js-sha256';
import type { Dispatch } from 'umi';
import type { IBiologicalLabel } from '@/typings';
import { DruidLocalStorage, DruidSessionStorage } from './storage';
import { EnumBiologicalAge, EnumBiologicalGender, EnumPersonGender, EnumSubCategory } from './enum';

const Helper = {
  /**
   * 移除传入值 data 中值为空、null, undefined 的参数
   * @param data
   */
  handleNullData: (data: IAnyObject | any[]) => {
    if (!data) return '';

    return JSON.parse(
      JSON.stringify(data, (k, v) => {
        if (v !== null && v !== undefined) {
          return v;
        }
      }),
    );
  },

  /**
   * 退出登录
   */
  handleSignOut: () => {
    if (window.location.pathname !== '/login') {
      DruidLocalStorage.removeAll();
      DruidSessionStorage.removeAll();
      history.replace('/login');
    }
  },

  /**
   * 密码加密
   * @param userName 账号（用户名）
   * @param password 密码
   */
  passwordEncryption: (userName: string, password: string) =>
    sha256(`${userName} + druid + ${password} + heifeng`),

  /**
   * 获取人的性别，用户
   * @param gender
   * @gender 1 男
   * @gender 2 女
   * @gender 3 不透露
   * @gender 其它 -
   */
  getPersonGender: (gender?: number) => {
    if (gender === EnumPersonGender.man) return '男';
    if (gender === EnumPersonGender.woman) return '女';
    if (gender === EnumPersonGender.notDisclose) return '不透露';
    return '-';
  },

  /**
   * 获取生物性别
   * @param gender
   * @gender 0 雌性
   * @gender 1 雄性
   * @gender 2 未知
   * @gender 其它 -
   */
  getBiologicalGender: (gender: number) => {
    if (gender === EnumBiologicalGender.female) return '雌性';
    if (gender === EnumBiologicalGender.male) return '雄性';
    if (gender === EnumBiologicalGender.unknown) return '未知';
    return '-';
  },

  /**
   * 获取生物年龄
   * @param age
   * @age 0 成年
   * @age 1 幼年
   * @age 其它 -
   * @param {IBiologicalLabel} animalType 生物类别 鸟类，哺乳类等等...
   */
  getBiologicalAge: (age: number, label: IBiologicalLabel) => {
    // ? 不同类别的动物，展示的文案不一样
    // ? 目前只有鸟和哺乳动物，之后有新的种类需再添加
    const adultObj: any = { [EnumSubCategory.birds]: '成鸟', [EnumSubCategory.mammals]: '成年' };
    const childhoodObj: any = {
      [EnumSubCategory.birds]: '成鸟',
      [EnumSubCategory.mammals]: '成年',
    };

    if (age === EnumBiologicalAge.adult) return adultObj[label];
    if (age === EnumBiologicalAge.childhood) return childhoodObj[label];
    return '-';
  },

  /**
   * 取列表排序方式相反字段（逆序（-xx）正序（xx））
   * @param pageSort
   * @注意 默认只允许 pageSort 字段最前面带-，且只能是这么一个地方，字段内不存在
   */
  reversePageSort: (pageSort: string) => {
    const splitArr = pageSort.split('-');
    if (splitArr.length > 1) {
      // ? 当前传入 pageSort 最前面带有-
      return splitArr[1];
    }
    return `-${splitArr[0]}`;
  },

  /**
   * 用于 models 层中更新 state
   * @param type reducers中的方法名
   * @returns
   */
  createAction:
    (type: string) =>
    (payload = {}) => ({ type, payload }),

  /**
   * 保存数据到对应的 models 层
   * @param {Dispatch} dispatch
   * @param {string} models models 层的命名空间名称
   * @param {IAnyObject} data 需要保存的数据，对象形式传入
   */
  saveToModels: (dispatch: Dispatch, models: string, data: IAnyObject) => {
    dispatch({
      type: `${models}/updateState`,
      payload: {
        ...data,
      },
    });
  },
};

export { Helper };
