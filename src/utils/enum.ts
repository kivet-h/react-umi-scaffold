/*
 * @Description: 项目中所有公共使用的枚举都放这里
 * @注意：命名格式：以 Enum 开头，大驼峰方式命名，如：EnumXxx
 */

/**
 * 缓存枚举
 * 将存缓存的缓存名称都配置在这里，通过 EnumStorage 来进行实验，目的是整合项目所有缓存名称在一起，方便修改
 */
enum EnumStorage {
  /** 用户 token */
  TOKEN = 'token',
  /** 用户信息 */
  USER_INFO = 'userInfo',
}

export { EnumStorage };
