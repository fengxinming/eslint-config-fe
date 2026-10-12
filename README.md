# eslint-config-fe

[![npm package](https://nodei.co/npm/eslint-config-fe.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/eslint-config-fe)

> Note:  ESLint config for Front End. eslint >= `8.57.0`, node `^20.19.0 || ^22.13.0 || >=24`

[![NPM version](https://img.shields.io/npm/v/eslint-config-fe.svg?style=flat)](https://npmjs.org/package/eslint-config-fe)
[![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-fe.svg?style=flat)](https://npmjs.org/package/eslint-config-fe)

## Installation

```bash
npm install --save-dev eslint@8 eslint-config-fe @babel/core@7 @babel/eslint-parser@7 @babel/eslint-plugin@7 @babel/preset-env@7
```

## Usage

规则有两套入口，按你项目用的配置格式二选一：

| 配置格式 | 入口 |
| --- | --- |
| `.eslintrc*` | `extends: ["fe", "fe/react", "fe/ts"]` |
| `eslint.config.js`（flat） | `require("eslint-config-fe/flat")` 的 `base` / `index` / `react` / `ts` 四个方法 |

flat 入口做两件事：把对应的 eslintrc 入口翻译成 flat 配置；把项目根目录的 `.eslintignore` 读进来转成 flat 的全局忽略（flat 模式不会自动读这个文件，eslintrc 模式会）。四个方法都返回数组，直接展开；同一份配置里出现多个忽略条目不影响结果。

### Basic JS eslint config

#### All rules .eslintrc

```js
{
  "extends": ["fe"]
}
```

#### All rules eslint.config.js

```js
const { index } = require('eslint-config-fe/flat');

module.exports = [
  ...index()
];
```

只要基础规则（不含 `rules/base-babel`、`rules/index` 的追加项）时用 `base()`：

```js
const { base } = require('eslint-config-fe/flat');

module.exports = [
  ...base()
];
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

#### eslint.config.js

```js
const { index, react } = require('eslint-config-fe/flat');

module.exports = [
  ...index(),
  ...react()
];
```

[learn more](https://github.com/fengxinming/eslint-config-fe/blob/main/react.js)

### TS eslint config

```bash
npm install --save-dev typescript@6 @typescript-eslint/eslint-plugin@8 @typescript-eslint/parser@8 @stylistic/eslint-plugin-ts@3
```

#### .eslintrc

```js
{
  "extends": [
    "fe",
    "fe/ts"
  ]
}
```

#### eslint.config.js

```js
const { index, ts } = require('eslint-config-fe/flat');

module.exports = [
  ...index(),
  ...ts()
];
```

[learn more](https://github.com/fengxinming/eslint-config-fe/blob/main/ts.js)
