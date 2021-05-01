

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  plugins: [
    '@babel',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    /**
     * 限制数组的括号使用一致的换行符
     *
     * https://eslint.org/docs/rules/array-bracket-newline
     */
    'array-bracket-newline': ['warn', 'consistent'],

    /**
     * 限制在代码块中开括号后和闭括号前有空格
     *
     * https://eslint.org/docs/rules/block-spacing
     */
    'block-spacing': ['warn', 'always'],

    /**
     * 避免在 case 或 default 子句中出现声明语句
     *
     * https://eslint.org/docs/rules/no-case-declarations
     */
    'no-case-declarations': 'error',

    /**
     * 避免 case 语句缺失 break
     *
     * https://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': [
      'error',
      { 'commentPattern': 'break[\\s\\w]*omitted' },
    ],

    /**
     * 避免使用空解构模式
     *
     * https://eslint.org/docs/rules/no-empty-pattern
     */
    'no-empty-pattern': 'error',

    /**
     * 避免对原生对象或只读的全局对象进行赋值
     *
     * https://eslint.org/docs/rules/no-global-assign
     */
    'no-global-assign': 'error',

    /**
     * 避免 Symbolnew 操作符和 new 一起使用
     *
     * https://eslint.org/docs/rules/no-new-symbol
     */
    'no-new-symbol': 'error',

    /**
     * 避免正则表达式字面量中出现多个空格
     *
     * https://eslint.org/docs/rules/no-regex-spaces
     */
    'no-regex-spaces': 'error',

    /**
     * 避免不必要的 return await
     *
     * https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'error',

    /**
     * 避免给自身赋值
     *
     * https://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': 'error',

    /**
     * 避免使用逗号操作符
     *
     * https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',

    /**
     * 避免使用令人困惑的多行表达式
     *
     * https://eslint.org/docs/rules/no-unexpected-multiline
     */
    'no-unexpected-multiline': 'error',

    /**
     * 避免使用一成不变的循环条件
     *
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'warn',

    /**
     * 避免在 finally 语句块中出现控制流语句
     *
     * https://eslint.org/docs/rules/no-unsafe-finally
     */
    'no-unsafe-finally': 'error',

    /**
     * 避免在对象中使用不必要的计算属性
     *
     * https://eslint.org/docs/rules/no-useless-computed-key
     */
    'no-useless-computed-key': 'error',

    /**
     * 警告没有必要的字符拼接
     *
     * https://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'warn',

    /**
     * 避免不必要的转义
     *
     * https://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'error',

    /**
     * 避免属性前有空白
     *
     * https://eslint.org/docs/rules/no-whitespace-before-property
     */
    'no-whitespace-before-property': 'error',

    /**
     * 避免使用不带 await 表达式的 async 函数
     *
     * https://eslint.org/docs/rules/require-await
     */
    'require-await': 'warn',

    /**
     * 避免函数内没有yield的 generator 函数
     *
     * https://eslint.org/docs/rules/require-yield
     */
    'require-yield': 'error',

    /**
     * 限制 case 语句的冒号右边有空格
     *
     * https://eslint.org/docs/rules/switch-colon-spacing
     */
    'switch-colon-spacing': ['error', { before: false, after: true }],

    /**
     * 避免使用异步函数作为 Promise executor
     *
     * https://eslint.org/docs/rules/no-async-promise-executor
     */
    'no-async-promise-executor': 'error',

    /**
     * 限制在 getter 属性中出现一个 return 语句
     *
     * https://eslint.org/docs/rules/getter-return
     */
    'getter-return': 'error',

    /**
     * 避免在构造函数中返回值
     *
     * https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': 'error',

    /**
     * 避免重复的 if-else-if 条件
     *
     * https://eslint.org/docs/rules/no-dupe-else-if
     */
    'no-dupe-else-if': 'error',

    /**
     * 避免对 import 声明重新赋值
     *
     * https://eslint.org/docs/rules/no-import-assign
     */
    'no-import-assign': 'error',

    /**
     * 避免在正则表达式中使用多余的反斜杠
     *
     * https://eslint.org/docs/rules/no-useless-backreference
     */
    'no-useless-backreference': 'error',

    /**
     * 警告在非空文件末尾至少存在一行空行
     *
     * https://eslint.org/docs/rules/eol-last
     */
    'eol-last': ['warn', 'always'],

    /**
     * 避免使用非字符串连接而使用模板字面量
     *
     * https://eslint.org/docs/rules/prefer-template
     */
    'prefer-template': 'error',

    /**
     * 限制2个缩进
     *
     * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],

    /**
     * 限制 generator 函数星号后面有空格
     *
     * https://eslint.org/docs/rules/generator-star-spacing
     */
    'generator-star-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],

    /**
     * 避免在括号内使用空格
     *
     * https://eslint.org/docs/rules/array-bracket-spacing
     */
    'array-bracket-spacing': ['error', 'never'],

    /**
     * 限制箭头函数的参数被圆括号包围
     *
     * https://eslint.org/docs/rules/arrow-parens
     */
    'arrow-parens': ['error', 'always'],

    /**
     * 限制使用 console.error、console.warn、console.info
     *
     * https://eslint.org/docs/rules/no-console
     */
    'no-console': [
      'warn',
      {
        allow: ['error', 'warn', 'info'],
      },
    ],

    /**
     * 警告在条件中使用常量表达式
     *
     * https://eslint.org/docs/rules/no-constant-condition
     */
    'no-constant-condition': 'warn',

    /**
     * 限制尾部有逗号
     *
     * https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      },
    ],

    /**
     * 避免使用 debugger
     *
     * https://eslint.org/docs/rules/no-debugger
     */
    'no-debugger': 'error',

    /**
     * 警告在对象字面量中出现重复的键
     *
     * https://eslint.org/docs/rules/no-dupe-keys
     */
    'no-dupe-keys': 'warn',

    /**
     * 避免正则表达式中出现空字符集
     *
     * https://eslint.org/docs/rules/no-empty-character-class
     */
    'no-empty-character-class': 'error',

    /**
     * 避免对 catch 子句中的异常重新赋值
     *
     * https://eslint.org/docs/rules/no-ex-assign
     */
    'no-ex-assign': 'error',

    /**
     * 警告出现不必要的布尔类型转换
     *
     * https://eslint.org/docs/rules/no-extra-boolean-cast
     */
    'no-extra-boolean-cast': 'warn',

    /**
     * 警告对 function 声明重新赋值
     *
     * https://eslint.org/docs/rules/no-func-assign
     */
    'no-func-assign': 'warn',

    /**
     * 警告在嵌套的语句块中出现变量或 function 声明
     *
     * https://eslint.org/docs/rules/no-inner-declarations
     */
    'no-inner-declarations': 'warn',

    /**
     * 避免使用无效的正则表达式在 RegExp 构造函数中
     *
     * https://eslint.org/docs/rules/no-invalid-regexp
     */
    'no-invalid-regexp': 'error',

    /**
     * 避免全局对象被当作函数调用
     *
     * https://eslint.org/docs/rules/no-obj-calls
     */
    'no-obj-calls': 'error',

    /**
     * 避免使用稀疏数组
     *
     * https://eslint.org/docs/rules/no-sparse-arrays
     */
    'no-sparse-arrays': 'error',

    /**
     * 避免在 return、throw、continue 和 break 语句后出现不被执行的代码
     *
     * https://eslint.org/docs/rules/no-unreachable
     */
    'no-unreachable': 'error',

    /**
     * 避免循环中只有一次迭代
     *
     * https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': 'error',

    /**
     * 限制使用 isNaN()检查 NaN
     *
     * https://eslint.org/docs/rules/use-isnan
     */
    'use-isnan': 'error',

    /**
     * 限制使用 typeof 表达式与有效的字符串进行比较
     *
     * https://eslint.org/docs/rules/valid-typeof
     */
    'valid-typeof': 'error',

    /**
     * 避免省略花括号当一个块只包含一条语句时
     *
     * https://eslint.org/docs/rules/curly
     */
    'curly': ['error', 'all'],

    /**
     * 限制使用 === 和 !==
     *
     * https://eslint.org/docs/rules/eqeqeq
     */
    'eqeqeq': ['error', 'allow-null'],

    /**
     * 警告 for-in 中没有判断是否是自身属性
     *
     * https://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'warn',

    /**
     * 警告在 else 前有 return
     *
     * https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'warn',

    /**
     * 警告使用了非循环使用标签
     *
     * https://eslint.org/docs/rules/no-labels
     */
    'no-labels': [
      'warn',
      {
        'allowLoop': true,
      },
    ],

    /**
     * 警告使用了 eval()
     *
     * https://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'warn',

    /**
     * 避免扩展原生对象
     *
     * https://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': 'error',

    /**
     * 警告使用了不必要的函数绑定
     *
     * https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': 'warn',

    /**
     * 警告使用了隐式的 eval()
     *
     * https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'warn',

    /**
     * 避免使用废弃的迭代器属性 __iterator__
     *
     * https://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'error',

    /**
     * 警告使用了不规则的空白
     *
     * https://eslint.org/docs/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': 'warn',

    /**
     * 警告使用了不必要的嵌套块
     *
     * https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'warn',

    /**
     * 警告循环中存在函数
     *
     * https://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': 'warn',

    /**
     * 警告多行字符串 \
     *
     * https://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'warn',

    /**
     * 避免重新赋值原生对象
     *
     * https://eslint.org/docs/rules/no-native-reassign
     */
    'no-native-reassign': 'error',

    /**
     * 避免使用原始包装实例
     *
     * https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',

    /**
     * 警告使用了八进制字面量
     *
     * https://eslint.org/docs/rules/no-octal
     */
    'no-octal': 'warn',

    /**
     * 警告在字符串字面量中使用八进制转义序列
     *
     * https://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'warn',

    /**
     * 避免使用 __proto__
     *
     * https://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'error',

    /**
     * 警告 var 重新声明变量
     *
     * https://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': 'warn',

    /**
     * 避免比较自身
     *
     * https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'error',

    /**
     * 限制使用更简单结构的三元操作符
     *
     * https://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',

    /**
     * 警告使用了 with 语句
     *
     * https://eslint.org/docs/rules/no-with
     */
    'no-with': 'warn',

    /**
     * 限制调用 parseInt() 函数时传入第二个参数
     *
     * https://eslint.org/docs/rules/no-with
     */
    'radix': 'error',

    /**
     * 限制把立即执行的函数包裹起来再执行
     *
     * https://eslint.org/docs/rules/wrap-iife
     */
    'wrap-iife': ['error', 'any'],

    /**
     * 避免使用 delete 删除变量
     *
     * https://eslint.org/docs/rules/no-delete-var
     */
    'no-delete-var': 'warn',

    /**
     * 避免 function 定义中出现重复的参数名
     *
     * https://eslint.org/docs/rules/no-dupe-args
     */
    'no-dupe-args': 'error',

    /**
     * 避免出现重复的 case 条件
     *
     * https://eslint.org/docs/rules/no-duplicate-case
     */
    'no-duplicate-case': 'error',

    /**
     * 警告标签与变量同名
     *
     * https://eslint.org/docs/rules/no-label-var
     */
    'no-label-var': 'warn',

    /**
     * 避免变量名或者函数名与全局对象属性、关键字相同
     *
     * https://eslint.org/docs/rules/no-shadow-restricted-names
     */
    'no-shadow-restricted-names': 'error',

    /**
     * 避免使用未声明的变量
     *
     * https://eslint.org/docs/rules/no-undef
     */
    'no-undef': 'error',

    /**
     * 警告定义变量的初始值为 undefined
     *
     * https://eslint.org/docs/rules/no-undef-init
     */
    'no-undef-init': 'warn',

    /**
     * 警告当前作用域中声明的变量未使用，不检查传递的参数是否被使用
     *
     * https://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': [
      'warn',
      {
        'vars': 'local',
        'args': 'none',
      },
    ],

    /**
     * 避免非函数在定义前使用
     *
     * https://eslint.org/docs/rules/no-use-before-define
     */
    'no-use-before-define': ['error', 'nofunc'],

    /**
     * 限制大括号风格，if-else中的else语句，连同catch 和 finally，都必须在右括号后另起一行
     *
     * https://eslint.org/docs/rules/brace-style
     */
    'brace-style': ['warn', 'stroustrup'],

    /**
     * 限制在逗号后加空格
     * 默认选项 { "before": false, "after": true }
     *
     * https://eslint.org/docs/rules/comma-spacing
     */
    'comma-spacing': 'error',

    /**
     * 限制逗号风格，要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
     *
     * https://eslint.org/docs/rules/comma-style
     */
    'comma-style': ['error', 'last'],

    /**
     * 警告使用了无参构造函数时未带括号
     *
     * https://eslint.org/docs/rules/new-parens
     */
    'new-parens': 'warn',

    /**
     * 避免使用 Array 构造函数
     *
     * https://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': 'error',

    /**
     * 避免一行出现多个空格，除了对象属性定义、二元表达式、定义变量对齐
     *
     * https://eslint.org/docs/rules/no-multi-spaces
     */
    'no-multi-spaces': [
      'error',
      {
        'exceptions': {
          'Property': true,
          'BinaryExpression': true,
          'VariableDeclarator': true,
        },
      },
    ],

    /**
     * 避免使用 Object 构造函数
     *
     * https://eslint.org/docs/rules/no-new-object
     */
    'no-new-object': 'error',

    /**
     * 避免函数标识符和其调用之间出现空格
     *
     * https://eslint.org/docs/rules/func-call-spacing
     */
    'func-call-spacing': 'error',

    /**
     * 避免行尾出现空白
     *
     * https://eslint.org/docs/rules/no-trailing-spaces
     */
    'no-trailing-spaces': 'error',

    /**
     * 避免 空格 和 tab 混合缩进
     *
     * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    'no-mixed-spaces-and-tabs': 'error',

    /**
     * 限制函数中的变量分开声明
     *
     * https://eslint.org/docs/rules/one-var
     */
    'one-var': ['error', 'never'],

    /**
     * 限制换行符在操作符之前
     *
     * https://eslint.org/docs/rules/operator-linebreak
     */
    'operator-linebreak': ['error', 'before'],

    /**
     * 限制使用单引号除了字符串中包含了一个其它的引号
     *
     * https://eslint.org/docs/rules/quotes
     */
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true },
    ],

    /**
     * 限制分号后面有空格
     * 默认选项为 {"before": false, "after": true}
     *
     * https://eslint.org/docs/rules/semi-spacing
     */
    'semi-spacing': 'error',

    /**
     * 限制关键字前后出现空格
     *
     * https://eslint.org/docs/rules/keyword-spacing
     */
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true,
      },
    ],

    /**
     * 限制对象字面量的键后面无空格，值前面有空格
     * 默认选项 { "beforeColon": false, "afterColon": true, "mode": "strict" }
     *
     * https://eslint.org/docs/rules/keyword-spacing
     */
    'key-spacing': 'error',

    /**
     * 限制函数圆括号之前有一个空格除了具名函数
     *
     * https://eslint.org/docs/rules/space-before-function-paren
     */
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],

    /**
     * 限制语句块之前有空格
     *
     * https://eslint.org/docs/rules/space-before-blocks
     */
    'space-before-blocks': ['error', 'always'],

    /**
     * 限制计算属性中无空格
     *
     * https://eslint.org/docs/rules/computed-property-spacing
     */
    'computed-property-spacing': ['error', 'never'],

    /**
     * 限制圆括号内无空格
     *
     * https://eslint.org/docs/rules/space-in-parens
     */
    'space-in-parens': ['error', 'never'],

    /**
     * 限制单词类一元操作符之前或之后有空格，限制一元操作符之前或之后无空格
     * 默认选项 {"words": true, "nonwords": false}
     *
     * https://eslint.org/docs/rules/space-unary-ops
     */
    'space-unary-ops': 'warn',

    /**
     * 限制注释前至少要有一个空格，除了固定的几个字符
     *
     * https://eslint.org/docs/rules/spaced-comment
     */
    'spaced-comment': [
      'error',
      'always',
      {
        'exceptions': [
          '-',
          '+',
          '\'',
          '#',
        ],
        'block': {
          'balanced': true,
        },
      },
    ],

    /**
     * 限制行的最大长度
     *
     * https://eslint.org/docs/rules/max-len
     */
    'max-len': [
      'error',
      {
        'code': 120,
        'tabWidth': 4,
        'ignorePattern': 'data:image/',
        'ignoreUrls': true,
        'ignoreRegExpLiterals': true,
      },
    ],

    /**
     * 限制中缀操作符周围有空格
     *
     * https://eslint.org/docs/rules/space-infix-ops
     */
    'space-infix-ops': 'error',

    /**
     * 限制使用点号访问属性，关键字除外
     *
     * https://eslint.org/docs/rules/dot-notation
     */
    'dot-notation': [
      'error',
      {
        'allowKeywords': true,
      },
    ],

    /**
     * 限制箭头函数的箭头之前和之后有空格
     * 默认选项 { "before": true, "after": true }
     *
     * https://eslint.org/docs/rules/arrow-spacing
     */
    'arrow-spacing': 'error',

    /**
     * 限制派生类中的构造函数必须调用 super()
     *
     * https://eslint.org/docs/rules/constructor-super
     */
    'constructor-super': 'error',

    /**
     * 避免可能与比较操作符相混淆的地方使用箭头函数
     * 默认选项 { "allowParens": true }
     *
     * https://eslint.org/docs/rules/no-confusing-arrow
     */
    'no-confusing-arrow': 'error',

    /**
     * 警告修改类声明的变量
     *
     * https://eslint.org/docs/rules/no-class-assign
     */
    'no-class-assign': 'warn',

    /**
     * 避免修改 const 声明的变量
     *
     * https://eslint.org/docs/rules/no-const-assign
     */
    'no-const-assign': 'error',

    /**
     * 警告类成员中重复的名称
     *
     * https://eslint.org/docs/rules/no-dupe-class-members
     */
    'no-dupe-class-members': 'warn',

    /**
     * 警告在构造函数中调用super()之前使用this或super
     *
     * https://eslint.org/docs/rules/no-this-before-super
     */
    'no-this-before-super': 'warn',

    /**
     * 警告使用了 let 或 const 非 var
     *
     * https://eslint.org/docs/rules/no-var
     */
    'no-var': 'warn',

    /**
     * 警告重复导入
     *
     * https://eslint.org/docs/rules/no-duplicate-imports
     */
    'no-duplicate-imports': 'warn',

    /**
     * 限制一行只有一条语句
     * 默认选项 { "max": 1 }
     *
     * https://eslint.org/docs/rules/max-statements-per-line
     */
    'max-statements-per-line': 'error',

    /**
     * 警告使用了不必要的构造函数
     *
     * https://eslint.org/docs/rules/no-useless-constructor
     */
    'no-useless-constructor': 'warn',


    /**
     * 限制构造函数首字母大写
     *
     * https://eslint.org/docs/rules/new-cap
     */
    '@babel/new-cap': [
      'error',
      {
        'capIsNewExceptions': [
          'Vue',
          'React',
        ],
      },
    ],

    /**
     * 限制在花括号中使用一致的空格
     *
     * https://eslint.org/docs/rules/object-curly-spacing
     */
    '@babel/object-curly-spacing': ['error', 'always'],

    /**
     * 限制语句末尾使用分号
     * 默认选项为 'always'
     *
     * https://eslint.org/docs/rules/semi
     */
    '@babel/semi': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        es6: true,
        jest: true,
      },
    },
  ],
};
