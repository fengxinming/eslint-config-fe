const merge = require('lodash/merge');
const tsConfig = require('./rules/ts');

module.exports = {
  overrides: [
    merge({
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: './**/tsconfig.json'
      },
      plugins: ['@typescript-eslint']
    }, tsConfig)
  ]
};
