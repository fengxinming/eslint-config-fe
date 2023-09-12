module.exports = {
    rules: {
      /**
       * 限制构造函数首字母大写
       *
       * https://eslint.org/docs/rules/new-cap
       */
      'new-cap': [
        'error',
        {
          capIsNewExceptions: [
            'Vue',
            'React'
          ]
        }
      ],
  
      /**
       * 限制在花括号中使用一致的空格
       *
       * https://eslint.org/docs/rules/object-curly-spacing
       */
      'object-curly-spacing': ['error', 'always'],
  
      /**
       * 限制语句末尾使用分号
       * 默认选项为 'always'
       *
       * https://eslint.org/docs/rules/semi
       */
      semi: 'error'
    }
};
  