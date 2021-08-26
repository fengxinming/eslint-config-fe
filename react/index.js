'use strict';

module.exports = {
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    /**
     * 检查hooks规则
     *
     * https://reactjs.org/docs/hooks-rules.html
     */
    'react-hooks/rules-of-hooks': 'error',

    /**
     * 检查副作用的依赖
     *
     * https://reactjs.org/docs/hooks-rules.html
     */
    'react-hooks/exhaustive-deps': 'error',

    /**
     * 关闭默认属性类型定义
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
     */
    'react/default-props-match-prop-types': 'off',

    /**
     * 关闭组件的displayName定义
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    'react/display-name': 'off',

    /**
     * 关闭限制自定义组件的 className、style 属性
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     */
    // 'react/forbid-component-props': 'off',

    /**
     * 关闭禁止原生组件使用
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     */
    'react/forbid-elements': 'off',

    /**
     * 检查所有的对象确保 propTypes 属性没有被使用
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
     */
    'react/forbid-foreign-prop-types': 'warn',

    /**
     * 关闭检查 propTypes 未被使用
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': 'off',

    /**
     * 避免使用 true 作为属性值
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    'react/jsx-boolean-value': ['error', 'never'],

    /**
     * 闭合标签和开标签对齐
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     */
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    /**
     * 避免jsx模板大括号里面出现空格
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     */
    'react/jsx-curly-spacing': ['error', 'never'],

    /**
     * 避免jsx模板等号周围出现空格
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     */
    'react/jsx-equals-spacing': ['error', 'never'],

    /**
     * 限制哪些文件支持jsx语法
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.es', '.tsx']
      }
    ],

    /**
     * 限制多行属性换行
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     */
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    /**
     * 关闭组件中的事件属性前加上on
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    'react/jsx-handler-names': 'off',

    /**
     * 限制jsx中的属性换行缩进为2
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     */
    'react/jsx-indent-props': ['error', 2],

    /**
     * 限制jsx中的属性换行缩进为2
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     */
    'react/jsx-indent': ['error', 2],

    /**
     * 避免缺少 key 属性
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     *
     */
    'react/jsx-key': 'error',

    /**
     * 限制超过一个属性就换行
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     */
    'react/jsx-max-props-per-line': [
      'error',
      {
        when: 'multiline'
      }
    ],

    /**
     * 限制使用 bind 方法
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     */
    'react/jsx-no-bind': [
      'warn',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false,
        ignoreDOMComponents: true
      }
    ],

    /**
     * 限制文本节点使用注释
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
     */
    'react/jsx-no-comment-textnodes': 'warn',

    /**
     * 避免出现重复的 prop
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     */
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true
      }
    ],

    /**
     * 关闭文本字符串转成模板字面量
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     */
    'react/jsx-no-literals': 'off',

    /**
     * 限制需要rel='noreferrer'
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    'react/jsx-no-target-blank': 'error',

    /**
     * 不允许jsx中出现未声明的变量
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     */
    'react/jsx-no-undef': 'error',

    /**
     * 限制驼峰jsx标签名，忽略全大写加下划线
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     */
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true
      }
    ],

    /**
     * 关闭检查属性顺序
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': 'off',

    /**
     * 限制开标签结束前有空格
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     */
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        beforeClosing: 'never',
        afterOpening: 'never'
      }
    ],

    /**
     * 限制定义 React 全局变量
     */
    'react/jsx-uses-react': 'error',

    /**
     * 避免jsx中变量未被使用
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     */
    'react/jsx-uses-vars': 'error',

    /**
     * 限制用括号包裹jsx，并且jsx需要换行
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     */
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line'
      }
    ],

    /**
     * 限制结束标签和开始标签对齐
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     */
    'react/jsx-closing-tag-location': 'error',

    /**
     * 避免属性间出现多空格
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
     */
    'react/jsx-props-no-multi-spaces': 'error',

    /**
     * 避免使用 index 作为 key
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'error',

    /**
     * 避免出现 children 作为 prop
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     */
    'react/no-children-prop': 'error',

    /**
     * 避免 dangerouslySetInnerHTML 属性和 children 共存
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     */
    'react/no-danger-with-children': 'error',

    /**
     * 避免使用过时的方法
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    'react/no-deprecated': 'warn',

    /**
     * 关闭不允许 componentDidMount 中使用 setState
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     */
    'react/no-did-mount-set-state': 'off',

    /**
     * 关闭不允许 componentDidUpdate 中使用 setState
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     */
    'react/no-did-update-set-state': 'off',

    /**
     * 避免在 componentWillUpdate 使用 setState
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     */
    'react/no-will-update-set-state': 'error',

    /**
     * 避免直接对 this.state 赋值
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    'react/no-direct-mutation-state': 'error',

    /**
     * 警告使用 findDOMNode
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     */
    'react/no-find-dom-node': 'warn',

    /**
     * 避免使用 isMounted
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     */
    'react/no-is-mounted': 'error',

    /**
     * 限制一个文件里面定义一个class组件
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     */
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true
      }
    ],

    /**
     * 避免使用 ReactDOM.render 返回值
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     */
    'react/no-render-return-value': 'error',

    /**
     * 关闭使用不必要的 setState
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     */
    'react/no-set-state': 'off',

    /**
     * 避免 ref 绑定一个字符串
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     */
    'react/no-string-refs': 'error',

    /**
     * 避免标签中出现没有转义的符号
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     */
    'react/no-unescaped-entities': 'error',

    /**
     * 避免DOM标签出现未知属性
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     */
    'react/no-unknown-property': 'error',

    /**
     * 关闭检查proptypes定义
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    'react/no-unused-prop-types': 'off',

    /**
     * 限制使用 class 语法定义类组件
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     */
    'react/prefer-es6-class': ['error', 'always'],

    /**
     * 限制没有state的情况下使用函数组件代替类组件
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    'react/prefer-stateless-function': 'error',
    /**
     * 关闭声明 propTypes
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    'react/prop-types': 'off',

    /**
     * 关闭使用jsx语法时需要导入React
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    'react/react-in-jsx-scope': 'off',

    /**
     * 关闭强制定义defaultProps
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    'react/require-default-props': 'off',

    /**
     * 关闭强制类组件需要有 shouldComponentUpdate 方法
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
     */
    'react/require-optimization': 'off',

    /**
     * 限制 render 方法中需要返回值
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     */
    'react/require-render-return': 'error',

    /**
     * 限制没有 children 的组件存在关闭标签
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false
      }
    ],

    /**
     * 关闭 propTypes 排序
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     */
    'react/sort-prop-types': 'off',

    /**
     * 限制 style 属性绑定一个对象
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     */
    'react/style-prop-object': 'error',

    /**
     * 避免部分DOM节点包含 children
     */
    'react/void-dom-elements-no-children': 'error',

    /**
     * 关闭组件方法排序
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     */
    'react/sort-comp': [
      'off',
      {
        order: [
          'static-properties',
          'static-methods',
          'state',
          'properties',
          'lifecycle',
          'everything-else',
          'render'
        ],
        groups: {
          'static-properties': [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics'
          ],
          lifecycle: [
            'getDefaultProps',
            'getInitialState',
            'constructor',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        }
      }
    ]
  }
};
