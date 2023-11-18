module.exports = {
  extends: [
    './rules/base',
    './rules/base-babel'
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env']
    }
  },
  plugins: [
    '@babel'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        es6: true,
        jest: true
      }
    }
  ]
};
