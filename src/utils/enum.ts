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
  /**
   * 进入帖子详情页时的排序方式
   * 帖子详情页，上下翻页时调 API 需要用到
   */
  ENTER_POST_DETAIL_LIST_SORT = 'enterPostDetailListSort',
}

/**
 * 帖子详情，顶部 tab 选项对应值
 */
enum EnumPostDetailTabOpts {
  /** 帖子详情 tab */
  detail = 'detail',
  /** 帖子评论 tab */
  comment = 'comment',
}

/**
 * 委托详情，顶部 tab 选项对应值
 */
enum EnumEntrustDetailTabOpts {
  /** 委托详情 tab */
  detail = 'detail',
  /** 回传记录 tab */
  upload = 'upload',
  /** 收取记录 tab */
  collect = 'collect',
}

/**
 * 帖子类型
 */
enum EnumPostType {
  /** 普通图文帖子 */
  normal = 'Normal',
  /** 生物卡片 */
  biologicalCard = 'BiologicalCard',
  /** 委托卡片 */
  entrust = 'Entrust',
}

/** 主类别-分享（生物）主类别 */
enum EnumShareMainCategory {
  /** 最新位置 */
  location = 0,
  /** 2d track 静态轨迹 */
  dd_track = 10,
  /** 3d track 动态轨迹 */
  ddd_track = 11,
}

/** 次类别 */
enum EnumSubCategory {
  /** 鸟类 */
  birds = 'Birds',
  /** 哺乳类 */
  mammals = 'Mammals',
  /** 两栖类 */
  amphibian = 'Amphibian',
  /** 爬行类 */
  reptiles = 'Reptiles',
  /** 鱼类 */
  fishes = 'Fishes',
}

/** 人类性别，1-男 2-女 3-不透露 */
enum EnumPersonGender {
  /** 男 */
  man = 1,
  /** 女 */
  woman,
  /** 不透露 */
  notDisclose,
}

/** 生物性别 雌性-0 雄性-1 未知-2 */
enum EnumBiologicalGender {
  /** 雌性 */
  female,
  /** 雄性 */
  male,
  /** 未知 */
  unknown,
}

/**
 * 生物年龄 成年-0 幼年-1
 * 不同种类展示文案不一样
 * Birds：成鸟，幼鸟
 * Mammals： 成年，幼年
 */
enum EnumBiologicalAge {
  /** 成年 */
  adult,
  /** 幼年 */
  childhood,
}

/**
 * 平台标识
 * 地图渲染的时候需要
 */
enum EnumPlatform {
  PlatformDruidBird = 1,
  PlatformDruidCattle = 2,
  PlatformDruidBasic = 3,
  PlatformDruidFactory = 4,
  PlatformCasBird = 10,
  PlatformKoecoBird = 11,
}

export {
  EnumStorage,
  EnumPostDetailTabOpts,
  EnumPostType,
  EnumShareMainCategory,
  EnumSubCategory,
  EnumBiologicalGender,
  EnumBiologicalAge,
  EnumPersonGender,
  EnumEntrustDetailTabOpts,
  EnumPlatform,
};
