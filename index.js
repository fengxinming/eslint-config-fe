'use strict';

module.exports = {
  extends: require.resolve('./less'),
  rules: {
    /**
     * 警告使用了 Unicode 字节顺序标记 (BOM)
     *
     * https://eslint.org/docs/rules/unicode-bom
     */
    'unicode-bom': 'warn',

    /**
     * 限制使用剩余参数代替 arguments
     *
     * https://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': 'error',

    /**
     * 限制函数最多定义6个参数
     *
     * https://eslint.org/docs/rules/max-params
     */
    'max-params': ['warn', 6],

    /**
     * 限制块语句最大可嵌套6层
     *
     * https://eslint.org/docs/rules/max-depth
     */
    'max-depth': ['warn', 6],

    /**
     * 限制回调函数最大可嵌套3层
     *
     * https://eslint.org/docs/rules/max-nested-callbacks
     */
    'max-nested-callbacks': ['warn', 3],

    /**
     * 限制在条件语句中出现赋值操作符被括号括起来
     *
     * https://eslint.org/docs/rules/no-cond-assign
     */
    'no-cond-assign': ['error', 'except-parens'],

    /**
     * 避免在 Promise executor 返回值
     *
     * https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': 'error',

    /**
     * 避免在 setter 中返回值
     *
     * https://eslint.org/docs/rules/no-setter-return
     */
    'no-setter-return': 'error',

    /**
     * 避免在常规字符串中出现模板字面量占位符语法
     *
     * https://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': 'error',

    /**
     * 避免不安全的使用可选链
     *
     * https://eslint.org/docs/rules/no-unsafe-optional-chaining
     */
    'no-unsafe-optional-chaining': 'error',

    /**
     * 避免不必要的 catch 子句
     *
     * https://eslint.org/docs/rules/no-useless-catch
     */
    'no-useless-catch': 'error',

    /**
     * 限制在点号之前换行
     *
     * https://eslint.org/docs/rules/dot-location
     */
    'dot-location': ['error', 'property'],

    /**
     * 限制数组方法的回调函数中有 return 语句
     *
     * https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': [
      'error',
      { allowImplicit: true },
    ],

    /**
     * 限制在 JSX 属性中使用一致的双引号
     * 默认选项 'prefer-double'
     *
     * https://eslint.org/docs/rules/jsx-quotes
     */
    'jsx-quotes': 'error',

    /**
     * 限制使用一致的换行符风格
     * 默认选项 'unix'
     *
     * https://eslint.org/docs/rules/jsx-quotes
     */
    'linebreak-style': 'error',

    /**
     * 警告使用 alert()
     *
     * https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'warn',

    /**
     * 警告使用 Buffer() 构造函数
     *
     * https://eslint.org/docs/rules/no-buffer-constructor
     */
    'no-buffer-constructor': 'warn',

    /**
     * 避免使用 caller 或 callee
     *
     * https://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'error',

    /**
     * 避免与 -0 进行比较
     *
     * https://eslint.org/docs/rules/no-compare-neg-zero
     */
    'no-compare-neg-zero': 'error',

    /**
     * 避免在正则表达式中使用在 ASCII 中 0-31 范围内的特殊和不可见的字符
     *
     * https://eslint.org/docs/rules/no-control-regex
     */
    'no-control-regex': 'error',

    /**
     * 避免对关系运算符的左操作数使用否定操作符
     *
     * https://eslint.org/docs/rules/no-unsafe-negation
     */
    'no-unsafe-negation': 'error',

    /**
     * 避免出现空块语句，catch 语句除外
     *
     * https://eslint.org/docs/rules/no-empty
     */
    'no-empty': [
      'error',
      { 'allowEmptyCatch': true },
    ],

    /**
     * 避免出现空函数
     *
     * https://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': 'error',

    /**
     * 避免使用不必要的标签
     *
     * https://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'error',

    /**
     * 避免使用不必要的分号
     *
     * https://eslint.org/docs/rules/no-extra-semi
     */
    'no-extra-semi': 'error',

    /**
     * 避免使用浮点小数
     *
     * https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': 'error',

    /**
     * 避免 if 语句作为唯一语句出现在 else 语句块中
     *
     * https://eslint.org/docs/rules/no-lonely-if
     */
    'no-lonely-if': 'error',

    /**
     * 警告连续赋值
     *
     * https://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': 'warn',

    /**
     * 警告出现多个空行
     *
     * https://eslint.org/docs/rules/no-multiple-empty-lines
     */
    'no-multiple-empty-lines': 'warn',

    /**
     * 避免使用 new require
     *
     * https://eslint.org/docs/rules/no-new-require
     */
    'no-new-require': 'error',

    /**
     * 避免在返回语句中赋值
     * 默认选项 'except-parens'
     *
     * https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'error',

    /**
     * 避免 Script URL
     *
     * https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'warn',

    /**
     * 限制 Error 对象可以被抛出
     *
     * https://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'warn',

    /**
     * 避免出现未使用过的表达式
     *
     * https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': ['warn', { allowShortCircuit: true }],

    /**
     * 避免出现未使用过的标签
     *
     * https://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': 'error',

    /**
     * 避免出现解构重命名后的变量名跟原来一样
     *
     * https://eslint.org/docs/rules/no-unused-labels
     */
    'no-useless-rename': 'error',

    /**
     * 避免出现多余的 return 语句
     *
     * https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'error',

    /**
     * 限制在花括号内使用一致的换行符
     *
     * https://eslint.org/docs/rules/object-curly-newline
     */
    'object-curly-newline': ['error', { consistent: true, multiline: true }],

    /**
     * 限制对象字面量的简写或非简写一致性，但尽可能的全部使用简写
     *
     * https://eslint.org/docs/rules/object-shorthand
     */
    'object-shorthand': ['off', 'consistent-as-needed'],

    /**
     * 限制每个变量初始化语句换行
     * 默认选项 'initializations'
     *
     * https://eslint.org/docs/rules/one-var-declaration-per-line
     */
    'one-var-declaration-per-line': 'error',

    /**
     * 限制使用箭头函数作为回调函数
     *
     * https://eslint.org/docs/rules/prefer-arrow-callback
     */
    'prefer-arrow-callback': 'warn',

    /**
     * 限制一个变量不会被重新赋值，使用const
     *
     * https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': 'error',

    /**
     * 限制使用 Error 对象作为 Promise 拒绝的原因
     *
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': 'warn',

    /**
     * 警告使用扩展语法而非.apply()
     *
     * https://eslint.org/docs/rules/prefer-spread
     */
    'prefer-spread': 'warn',

    /**
     * 避免剩余和扩展运算符及其表达式之间有空格
     *
     * https://eslint.org/docs/rules/rest-spread-spacing
     */
    'rest-spread-spacing': ['error', 'never'],

    /**
     * 限制分号出现在句子末尾
     *
     * https://eslint.org/docs/rules/semi-style
     */
    'semi-style': ['error', 'last'],

    /**
     * 限制创建 Symbol 实例需要一个参数
     *
     * https://eslint.org/docs/rules/symbol-description
     */
    'symbol-description': 'warn',

    /**
     * 避免模板字符串中花括号内出现空格
     *
     * https://eslint.org/docs/rules/template-curly-spacing
     */
    'template-curly-spacing': ['error', 'never'],

    /**
     * 避免在模板标记和它们的字面量之间出现空格
     *
     * https://eslint.org/docs/rules/template-tag-spacing
     */
    'template-tag-spacing': ['error', 'never'],

    /**
     * 限制条件比较时，变量在左边，常量在右边
     *
     * https://eslint.org/docs/rules/yoda
     */
    'yoda': 'warn',
  },
};
