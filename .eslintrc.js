/*
 * @Description: eslint 配置
 * @ 规则依赖于 @umijs/fabric，在此基础上，可自行添加自己的规则进行配置
 * @Author: kivet
 * @Date: 2022-01-29 14:37:31
 * @LastEditTime: 2022-01-29 14:37:32
 */

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    // ? 强制使用单引号
    quotes: [2, 'single'],
    // ? 强制语句有分号结尾
    semi: [2, 'always'],
    // ? 操作符前后必须有空格 bad: 1||2  good: 1 || 2
    'space-infix-ops': 2,
    // ? 对象字面量中冒号前面禁止有空格，后面必须有空格 bad: {a :'a'} good:{a: 'a'}
    'key-spacing': 2,
    // ? 花括号首尾必须有空格
    'object-curly-spacing': [2, 'always'],
    // ? 语句块(if、function、class、try...catch等的大括号) 的前面必须要有空格
    'space-before-blocks': 2,
    // ? 箭头函数的箭头与后面的{}之间需要空格
    'arrow-spacing': 2,
    // ? 禁止多余的空格
    'no-multi-spaces': 2,
    // ? 禁止代码行结束后面有多余空格
    'no-trailing-spaces': 2,
    // ? 禁止多余空行
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1, maxEOF: 1 }],
    // ? 允许标识符中使用悬空下划线（标识符的开头或末尾的下划线）
    'no-underscore-dangle': 0,
    // ? 允许未使用的变量（这里允许，使用ts提供的@typescript-eslint/no-unused-vars来禁用，才能覆盖ts的一些规则，如只有ts才有的枚举，这里就会检验处理并报错）
    'no-unused-vars': 0,
    // ? 允许逻辑短路、三元运算符等表达式求值
    'no-unused-expressions': 0,
    // ? 禁止使用嵌套的三元表达式
    'no-nested-ternary': 2,
    // ? 禁止对函数参数再赋值(保证react函数式编程纯函数的概念)
    'no-param-reassign': 2,
    // ? 允许 console
    'no-console': 0,
    // ? 禁止使用 var 定义变量
    'no-var': 2,
    // ? 禁止修改const声明的变量
    'no-const-assign': 2,
    // ? 函数调用时 函数名与()之间不能有空格
    'no-spaced-func': 2,
    // ? 对象字面量项尾不能有逗号
    // 'comma-dangle': 2,

    // ? jsx 属性中强制使用双引号
    'jsx-quotes': [2, 'prefer-double'],
    // ? 禁止 jsx 属性对象的引用括号里 两边加空格
    'react/jsx-curly-spacing': [2, 'never'],
    // ? JSX 中前标签传有属性换行展示的话，其后面的 > 也需换行对齐展示
    'react/jsx-closing-bracket-location': 2,
    // ? 校验 jsx 中所有换行属性值缩进
    'react/jsx-indent-props': [2, 2],
    // ? jsx 中传入属性值是Boolean值且为true时，省略传入
    'react/jsx-boolean-value': 2,
    // ? 在 JSX 属性中禁止等号前后存在空格
    'react/jsx-equals-spacing': 2,

    // ? 关闭此规则，允许 useEffect 的依赖为空数组
    'react-hooks/exhaustive-deps': 0,

    // ? 允许逻辑短路、三元运算符等表达式求值
    '@typescript-eslint/no-unused-expressions': 0,
    // ? 禁止未使用的变量
    '@typescript-eslint/no-unused-vars': ['error'],
    // ? 禁用使用在前，保证 useEffct 使用在最前面，这时候里面如果使用了外部的函数就会报这错
    '@typescript-eslint/no-use-before-define': 0,
    // ? 允许空的 ts 接口定义  eg: interface IProps {}
    '@typescript-eslint/no-empty-interface': 0,
  },
};
