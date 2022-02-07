/*
 * @Description: 项目中所有公共使用的枚举都放这里
 * @Author: kivet
 * @Date: 2022-02-07 10:55:03
 * @LastEditTime: 2022-02-07 10:55:04
 */

/**
 * 缓存枚举
 * 将存缓存的缓存名称都配置在这里，通过 StorageEnum 来进行实验，目的是整合项目所有缓存名称在一起，方便修改
 */
enum StorageEnum {
  /** 用户 token */
  TOKEN = 'token',
  /** 用户信息 */
  MYSELF = 'myself',
}

export { StorageEnum };
