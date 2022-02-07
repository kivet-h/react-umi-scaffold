/*
 * @Description: 样式校验配置文件
 * @Author: kivet
 * @Date: 2022-01-29 14:39:31
 * @LastEditTime: 2022-02-07 13:20:23
 */

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/stylelint')],
  rules: {
    // ? 禁止无效的16进制颜色
    'color-no-invalid-hex': true,
    // ? 禁止在 calc 函数中使用无效表达式。
    'function-calc-no-invalid': true,
    // ? 禁止在 calc 函数中使用没有间隔的运算符。
    'function-calc-no-unspaced-operator': true,
    // ? 禁止未知的单位
    'unit-no-unknown': true,
    // ? 禁止未知的属性
    'property-no-unknown': true,
    // ? 禁止声明块中属性重复声明。
    'declaration-block-no-duplicate-properties': true,
    // ? 禁止空块
    'block-no-empty': true,
    // ? 禁止空注释
    'comment-no-empty': true,
    // ? 禁止在样式表中使用重复的 @import 规则
    'no-duplicate-at-import-rules': true,
    // ? 禁止样式表中的重复选择器。
    'no-duplicate-selectors': true,
    // ? 禁止空源码。
    'no-empty-source': true,
    // ? 禁止额外的分号
    'no-extra-semicolons': true,
    // ? 限制数字中允许的小数位数
    'number-max-precision': 2,
    // ? 指定允许的单位的白名单
    'unit-allowed-list': ['px', '%', 'vw', 'vh'],
    // ? 限制选择器中相邻空行的数量
    'selector-max-empty-lines': 0,
    // ? 16 进制的颜色使用扩写
    'color-hex-length': 'long',
    // ? 在单行函数的逗号之后必须有一个空白符
    'function-comma-space-after': 'always-single-line',
    // ? 在单行函数的逗号之前不能有空白符
    'function-comma-space-before': 'never-single-line',
    // ? 函数中相邻空行的数量规定为0
    'function-max-empty-lines': 0,
    // ? 在单行函数的括号内侧不能有空白符。
    'function-parentheses-space-inside': 'never-single-line',
    // ? 在函数之后必须有空白符
    'function-whitespace-after': 'always',
    // ? 禁止数量的尾随零。
    'number-no-trailing-zeros': true,
    // ? 规定字符串使用双引号
    'string-quotes': 'single',
    // ? 禁止0后面的长度单位
    'length-zero-no-unit': true,
    // ? 规定单位使用小写
    'unit-case': 'lower',
    // ? 规定关键字值小写
    'value-keyword-case': 'lower',
    // ? 规定值列表的逗号之后必须有一个空白符
    'value-list-comma-space-after': 'always-single-line',
    // ? 规定值列表的逗号之前不能有空白符
    'value-list-comma-space-before': 'never-single-line',
    // ? 规定值列表中相邻空行的数量为0
    'value-list-max-empty-lines': 0,
    // ? 规定属性名必须小写
    'property-case': 'lower',
    // ? 规定在叹号之后不能有空白符
    'declaration-bang-space-after': 'never',
    // ? 规定在叹号之前必须有一个空格
    'declaration-bang-space-before': 'always',
    // ? 声明属性为单行时，冒号后面必须有一个空格
    'declaration-colon-space-after': 'always-single-line',
    // ? 声明属性时，冒号之前不能有空格
    'declaration-colon-space-before': 'never',
    // ? 声明属性上面不能存在空行
    'declaration-empty-line-before': 'never',
    // ? 规定尾随分号存在（尾随分号是声明块中的最后一个分号）
    'declaration-block-trailing-semicolon': 'always',
    // ? 规定块的闭大括号之前不能有空行
    'block-closing-brace-empty-line-before': 'never',
    // ? 规定块的闭大括号之后需要有换行符
    'block-closing-brace-newline-after': 'always',
    // ? 在单行块的闭大括号之后必须有一个空格
    'block-closing-brace-space-after': 'always-single-line',
    // ? 在单行块的闭大括号之前必须有一个空格
    'block-closing-brace-space-before': 'always-single-line',
    // ? 在单行块的开大括号之后必须有一个空格
    'block-opening-brace-space-after': 'always-single-line',
    // ? 在单行块的开大括号之前必须有一个空格
    'block-opening-brace-space-before': 'always-single-line',
    // ? 规定在属性选择器的中括号两侧不能有空格
    'selector-attribute-brackets-space-inside': 'never',
    // ? 规定属性选择器中的运算符之后不能有空格
    'selector-attribute-operator-space-after': 'never',
    // ? 规定属性选择器中的运算符之前不能有空格
    'selector-attribute-operator-space-before': 'never',
    // ? 规定在属性选择器的中属性值不使用引号
    'selector-attribute-quotes': 'never',
    // ? 规定在组合选择器之后必须有一个空格
    'selector-combinator-space-after': 'always',
    // ? 规定在组合选择器之前必须有一个空格
    'selector-combinator-space-before': 'always',
    // ? 禁止后代选择器使用非空格字符
    'selector-descendant-combinator-no-non-space': true,
    // ? 规定伪类选择器必须为小写
    'selector-pseudo-class-case': 'lower',
    // ? 规定伪类选择器的括号内侧不能有空格
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // ? 规定伪元素选择器为小写
    'selector-pseudo-element-case': 'lower',
    // ? 规定类型选择器为小写
    'selector-type-case': 'lower',
    // ? 规定在多行选择器列表的逗号之后必须有一个换行符
    'selector-list-comma-newline-after': 'always-multi-line',
    // ? 规定在多行选择器列表的逗号之前不能有空白符
    'selector-list-comma-newline-before': 'never-multi-line',
    // ? 规定在单行选择器列表的逗号之后必须有一个空格
    'selector-list-comma-space-after': 'always-single-line',
    // ? 规定在选择器列表的逗号之前不能有空格
    'selector-list-comma-space-before': 'never',
    // ? 规定在所有声明块之前需要有空行，如果前面有注释，则忽略
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment'],
      },
    ],
    // ? 规定注释之前必须存在一空行
    'comment-empty-line-before': 'always',
    // ? 规定相邻空行数为1
    'max-empty-lines': 1,
    // ? 禁止行尾存在空白符
    'no-eol-whitespace': true,
    // ? 禁止空第一行
    'no-empty-first-line': true,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
