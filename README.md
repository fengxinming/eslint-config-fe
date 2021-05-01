# eslint-config-fe

[![npm package](https://nodei.co/npm/eslint-config-fe.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/eslint-config-fe)

> Note:  ESLint config for Front End.

[![NPM version](https://img.shields.io/npm/v/eslint-config-fe.svg?style=flat)](https://npmjs.org/package/eslint-config-fe)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-fe.svg?style=flat)](https://npmjs.org/package/eslint-config-fe)

## Installation

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser @babel/eslint-plugin eslint-config-fe
```

## Usage

### For base JS

#### All rules .eslintrc

```js
{
  extends: ["fe"]
}
```

[learn more](https://github.com/fengxinming/eslint-config-fe/blob/main/index.js)

#### Less rules .eslintrc

```js
{
  extends: ["fe/less"]
}
```

[learn more](https://github.com/fengxinming/eslint-config-fe/blob/main/less.js)

### For React

```bash
npm install --save-dev @babel/preset-react eslint-plugin-react eslint-plugin-react-hooks
```

#### babel.config.js

```js
module.exports = {
  presets: ['@babel/preset-react']
};
```

#### .eslintrc

```js
{
  extends: [
    "fe",
    "fe/react"
  ]
}
```

[learn more](https://github.com/fengxinming/eslint-config-fe/blob/main/react/index.js)
