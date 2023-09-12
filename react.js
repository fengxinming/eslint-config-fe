module.exports = {
    extends: [
      './rules/react'
    ].map(require.resolve),
    plugins: ['react', 'react-hooks'],
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  