module.exports = {
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
          readonly: 'array-simple'
        }
      ],
      '@typescript-eslint/await-thenable': 'warn',
      '@typescript-eslint/ban-types': 'error',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
      'func-call-spacing': 'off',
      '@typescript-eslint/func-call-spacing': 'error',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false
          }
        }
      ],
      '@typescript-eslint/member-ordering': 'warn',
      '@typescript-eslint/no-array-constructor': 'error',
      'no-empty-function': 'off',
      // 编辑器可以检查出空函数
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-extra-parens': 'off',
      '@typescript-eslint/no-extra-parens': 'off',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-type-alias': 'off',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
      ],
      'init-declarations': 'off',
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-dupe-class-members': 'error',
      // '@typescript-eslint/no-duplicate-imports': 'error', 兼容 @typescript-eslint/eslint-plugin@6
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      // '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-regexp-exec': 'warn',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/require-array-sort-compare': 'off',
      '@typescript-eslint/restrict-plus-operands': 'warn',
      '@typescript-eslint/dot-notation': ['error', {
        allowIndexSignaturePropertyAccess: true
      }],
      semi: 'off',
      '@typescript-eslint/semi': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/triple-slash-reference': 'error',
      '@typescript-eslint/type-annotation-spacing': 'error',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/unified-signatures': 'warn',
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
          'ts-check': 'allow-with-description'
        }
      ],
      '@typescript-eslint/quotes': [
        'error',
        'single',
        { avoidEscape: true }
      ],
      quotes: 'off',
  
      // 和TS的规则冲突
      'no-undef': 'off',
      'require-await': 'off',
      'no-use-before-define': 'off',
      'no-dupe-class-members': 'off',
      'no-duplicate-imports': 'off',
      'no-useless-constructor': 'off',
      'no-redeclare': 'off',
      'dot-notation': 'off'
    }
};
  