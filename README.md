# eslint-config-fe

[![npm package](https://nodei.co/npm/eslint-config-fe.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/eslint-config-fe)

> Note:  ESLint config for Front End.

[![NPM version](https://img.shields.io/npm/v/eslint-config-fe.svg?style=flat)](https://npmjs.org/package/eslint-config-fe)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-fe.svg?style=flat)](https://npmjs.org/package/eslint-config-fe)

## Installation

```bash
npm install --save-dev eslint eslint-config-fe
```

## Usage

### Basic JS eslint config

#### All rules .eslintrc

```js
{
  "extends": ["fe"]
}
```

[learn more](https://github.com/fengxinming/eslint-config-fe/blob/main/index.js)

### React eslint config

```bash
npm install --save-dev @babel/preset-react eslint-plugin-react eslint-plugin-react-hooks
```

#### .eslintrc

```js
{
  "extends": [
    "fe",
    "fe/react"
  ]
}
```

[learn more](https://github.com/fengxinming/eslint-config-fe/blob/main/react.js)

### TS eslint config

#### .eslintrc

```js
{
  "extends": [
    "fe",
    "fe/ts"
  ]
}
```

[learn more](https://github.com/fengxinming/eslint-config-fe/blob/main/ts.js)