/*
 * @Description: 封装私有的本地缓存
 * @Author: kivet
 * @Date: 2022-02-07 10:56:13
 * @LastEditTime: 2022-02-11 17:38:10
 */
/* eslint-disable @typescript-eslint/no-for-in-array */
/* eslint-disable no-param-reassign */

interface IOptions {
  /** 存储仓库名称 */
  bucket?: string;
  /** 存储类型 */
  driver?: string;
  /** 前缀名称 */
  prefix?: string;
}

/**
 * 默认配置
 */
const defaultOptions = {
  bucket: 'storage',
  deiver: 'localStorage',
  prefix: 'intelink_console_',
};

/**
 * 存储类型
 */
const drivers = {
  LOCALSTORAGE: window.localStorage,
  SESSIONSTORAGE: window.sessionStorage,
};

/**
 * 获取数据类型
 * @param value
 */
const getType = (value: any) => Object.prototype.toString.call(value).slice(8, -1);

class Druid_Storage {
  private defaults: {
    bucket: string;
    driver: string;
    prefix: string;
  };

  constructor({ ...options }: object) {
    this.defaults = {
      bucket: defaultOptions.bucket,
      driver: defaultOptions.deiver,
      prefix: defaultOptions.prefix,
      ...options,
    };
  }

  /**
   * 写入数据
   * @param key
   * @param value
   * @param options
   */
  set = (key: string, value: any, options?: IOptions) => {
    if (Array.isArray(key)) {
      options = this._getOptions(value);
      for (const i in key) {
        this._set(key[i].key, key[i].value, options);
      }
    } else {
      options = this._getOptions(options);
      this._set(key, value, options);
    }
  };

  /**
   * 读取数据
   * @param key
   * @param options
   */
  get = (key: string, options?: IOptions) => {
    key = this._getKey(key, options);
    options = this._getOptions(options);
    const bucket = this._getBucket(key, options);
    const value = this._getDriver(options).getItem(key);
    if (bucket) {
      // ? 需兼容数字0的情况，不能直接 if(value){}
      if (value != null) {
        return bucket.type === 'String' ? value : JSON.parse(value); // ? 注意: 除了对象，JSON.parse('111') ==> 111
      }

      // ? 如果 value 为 null，移除此 key 对应数据
      this._remove(key, options);

      // ? 特殊情况，如果是数组，则返回空数组
      if (bucket.type === 'Array') {
        return [];
      }
      return null;
    }

    // ? 如果此 key 对应的 bucket 没有值，直接移除此 key 对应数据，并直接返回 null
    this._remove(key, options);
    return null;
  };

  /**
   * 删除数据
   * @param {string | string[]} key 可以是单个 key 值，也可以是 key 的数组
   * @param options
   */
  remove = (key: string | string[], options?: IOptions) => {
    options = this._getOptions(options);
    if (Array.isArray(key)) {
      for (const i in key) {
        this._remove(key[i], options);
      }
    } else {
      this._remove(key, options);
    }
  };

  /**
   * 移除缓存数据，默认移除所有缓存，包括 local 和 session，也可通过传入 options.driver 来设置移除哪一类
   * @param options
   */
  removeAll = (options?: IOptions) => {
    if (options) {
      if (options.driver) {
        this._getDriver(options).clear();
      } else {
        this._clear();
      }
    } else {
      this._clear();
    }
  };

  /** 设置缓存 */
  private _set = (key: string, value: string, options?: IOptions) => {
    key = this._getKey(key, options);
    const driver = this._getDriver(options);
    const dataType = getType(value);
    this._setBucket(key, dataType, options);
    if (dataType === 'String' || dataType === 'Number') {
      driver.setItem(key, value);
    } else {
      driver.setItem(key, JSON.stringify(value));
    }
  };

  /**
   * 获取传入时配置信息
   * @param options
   * @returns 若传入时有配置过，配置信息与默认配置合并，返回合并后的配置
   */
  private _getOptions = (options?: IOptions) =>
    options ? (Object as any).assign({}, this.defaults, options) : this.defaults;

  /**
   * 从配置中获取当前缓存类型
   * @param options
   * @returns 如果使用时传入了存储类型，则使用传入的类型配置（options.driver），否则使用默认配置
   */
  private _getDriver = (options?: IOptions) => {
    const driver = options ? options.driver : this.defaults.driver;
    if (
      /^(ls|local|localStorage)$/.test(String(driver)) ||
      /^(ss|session|sessionStorage)$/.test(String(driver))
    ) {
      return /^(ls|local|localStorage)$/.test(String(driver))
        ? drivers.LOCALSTORAGE
        : drivers.SESSIONSTORAGE;
    }
    throw new Error('storeType only support [ls/local/localStorage/ss/session/sessionStorage]!');
  };

  /**
   * 获取key名称，拼接前缀名称+传入key名称
   * @param key
   * @param options
   * @returns 传入了 options 的配置，且 options.prefix 设置了的，使用 options.prefix 进行拼接，否则使用默认前缀名称进行拼接
   */
  private _getKey = (key: string, options?: IOptions) => {
    return options && options.prefix ? `${options.prefix}${key}` : `${this.defaults.prefix}${key}`;
  };

  /**
   * 移除指定 key 值缓存数据
   * @param key
   * @param options
   */
  private _remove = (key: string, options: any) => {
    key = this._getKey(key, options);
    this._removeBucket(key, options);
    this._getDriver(options).removeItem(key);
  };

  /**
   * 移除所有缓存数据
   */
  private _clear = () => {
    drivers.LOCALSTORAGE.clear();
    drivers.SESSIONSTORAGE.clear();
  };

  /**
   * 以下是对所有保存的缓存数据进行一个数据类型的汇总储存，用于对当前不同类型的缓存数据进行处理
   */
  private _bucket = (options?: any) => {
    const bucket = this._getDriver(options).getItem(options.bucket);
    return bucket ? JSON.parse(bucket) : {};
  };

  private _setBucket = (key: string, type: string, options: any) => {
    const bucket = this._bucket(options);
    bucket[key] = {
      type,
    };
    this._getDriver(options).setItem(options.bucket, JSON.stringify(bucket));
  };

  private _getBucket = (key: string, options: any) => {
    const bucket = this._bucket(options);
    if (bucket[key]) {
      return bucket[key];
    }
    return null;
  };

  private _removeBucket = (key: string, options: any) => {
    const bucket = this._bucket(options);
    delete bucket[key];
    this._getDriver(options).setItem(options.bucket, JSON.stringify(bucket));
  };
}

const DruidLocalStorage = new Druid_Storage({ bucket: 'Storage_intelink_console' });
const DruidSessionStorage = new Druid_Storage({
  bucket: 'Storage_intelink_console',
  driver: 'sessionStorage',
});

export { Druid_Storage, DruidLocalStorage, DruidSessionStorage };
