# intelink-manager

一个基于 react + umi + typescript + dva + less + ... 的脚手架项目

## 环境要求

```bash
node >=16.0.0
```

## 项目仓库地址

[项目 GitHub 地址](https://github.com/kivet-h/react-umi-scaffold)

## 项目介绍

- 项目结构

后期可能会根据实际项目开发有所改动，不过大体结构不会发生变化。

```base
umi-demo-project
├─ config
│  ├─ config.dev.ts              # 测试环境项目配置
│  ├─ config.local.ts            # 本地环境项目配置
│  ├─ config.prod.ts             # 正式环境项目配置
│  ├─ config.ts                  # 项目的公共配置
│  ├─ routes.config.ts           # 整合项目中所有路由配置文件
│  └─ theme.config.ts            # 配置主题样式
├─ mock                          # mock 文件目录
├─ src                           # 项目源码目录
│  ├─ access.ts                  # 项目权限配置文件
│  ├─ app.tsx                    # 项目运行时配置文件
│  ├─ global.less                # 全局样式文件
│  ├─ assets                     # 项目静态文件目录，存放一些如图片，本地模板文件等
│  │  └─ images
│  │     ├─ index.ts             # 图片导出文件
│  │     └─ logo.png
│  ├─ components                 # 公共组件
│  │  └─ index.ts
│  ├─ layouts                    # layout 相关页面及组件     
│  ├─ models                     # models 层文件目录
│  │  └─ global.ts
│  ├─ pages                      # 所有页面的代码写在此 pages 目录下
│  ├─ services                   # services 层文件目录
│  │  └─ global.ts
│  ├─ typings                    # 全局 TS 类型定义
│  │  └─ global.d.ts
│  └─ utils                      # 功能目录
│     ├─ enum.ts                 # 全局枚举文件
│     ├─ helper.ts               # 全局功能函数
│     ├─ request.ts              # 全局请求/响应拦截器文件
│     └─ storage.ts              # 封装的一个私有的缓存存储库文件
├─ package.json
├─ README.md
├─ tsconfig.json                 # ts 配置文件
├─ typings.d.ts                  # 全局类型声明文件
├─ .cz-config.js                 # commit 提交配置文件
├─ .prettierrc.js                # prettierrc 配置文件
├─ .eslintrc.js                  # eslint 配置文件
├─ .stylelintrc.js               # stylelint 配置文件
├─ .editorconfig
├─ .gitignore
├─ .prettierignore
├─ yarn-error.log
└─ yarn.lock
```

- 自动格式化

为了统一代码规范，项目配置了一套自己的针对 js 和 css 代码的规范。详细可分别查看根目录下的 `.eslintrc.js` 和 `.stylelintrc.js` 两个配置文件，每个规则我都是写了注释的。后期也可以针对某个规则进行修改，但如果多人开发的话，需要商量后再做修改。

同时为了方便，也做了提交时自动修复的操作，但修复并不能全部修复，有些无法修复的地方控制台会提示报错，这个时候需要自己手动修改，然后重新提交。

另外，由于做了提交时自动修复，可能会因为修复过程而导致提交缓慢，如果嫌慢，可取消自动修复，但是取消后，代码提交时需保证代码满足项目的代码规范。可在提交代码前先执行下自动修复的命令查看下。

- 提交规范

项目代码提交要求需遵循代码提交规范，另为了代码提交便捷，项目配置了相关的提交命令。

> 使用 `yarn commit` 命令即可，无需 `git add .` && `git commit -m '[type]: xxx'`，但需要注意的是，提交后仍然需要自己手动 `git push`

- 代码规范

项目要求代码规范编写的目的：

> 目的其实很简单，每个人的代码编写风格都不一样，如果多个人共同开发同一项目，在项目中要求遵循的一套代码编写规范，这样就会使得每个人开发完提交的代码编写的风格保持一直，当其他开发者拉取你的代码下来看的时候，就感觉是自己写的代码一样。方便快速上手。当然还有其它好处，比如说能提升开发者的阅读体验等等等等，，，不再赘述。

本个项目的项目规范，请仔细阅读下面文档进行了解：
[项目代码规范](https://www.yuque.com/docs/share/df817445-8b1b-4a33-ba06-579b7aa68bec)

## 快速开始

安装依赖

```bash
yarn
```

运行项目

```bash
# 本地环境运行
yarn start

# 以测试环境运行
yarn start:dev

# 以生产环境运行
yarn start:prod
```

项目代码打包

```bash
# 打包测试环境代码
yarn build

# 打包正式环境代码
yarn build:prod
```

本地校验

```bash
# 先打包
yarn build
或
yarn build:prod

# 再本地运行打包文件
yarn serve
或直接
serve ./dist
```

代码提交

```bash
yarn commit

git push
```

代码校验

```bash
# 校验 js 代码
yarn lint:js

# 校验 js 代码并自动修复
yarn lint:fix:js

# 校验 css 代码
yarn lint:style

# 校验 css 代码并自动修复
yarn lint:fix:style

## 校验 js 和 css 代码，并自动修复
yarn lint:fix
```
