module.exports = {
  extends: [
    './rules/react'
  ].map(require.resolve),
  plugins: [
    'react',
    'react-hooks'
  ],
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
