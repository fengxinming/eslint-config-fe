const fs = require('node:fs');
const path = require('node:path');
const { FlatCompat } = require('@eslint/eslintrc');
const { defineConfig, includeIgnoreFile } = require('@eslint/config-helpers');

// flat 模式不会自动读 .eslintignore，而消费方的忽略文件在消费方项目根，不在本包目录
const loadEslintIgnore = () => {
  const ignoreFile = path.join(process.cwd(), '.eslintignore');
  if (!fs.existsSync(ignoreFile)) {
    return [];
  }
  return [includeIgnoreFile(ignoreFile, { name: 'eslint-config-fe/.eslintignore' })];
};

// 规则真源仍是各 eslintrc 入口，本文件只做形态翻译
const toFlatConfig = (name, eslintrcEntry) => [
  ...loadEslintIgnore(),
  ...defineConfig({
    name,
    extends: [new FlatCompat({
      // 插件和 parser 都是 peerDependencies，必须从消费方项目解析而非本包目录
      baseDirectory: process.cwd()
    }).config({ extends: eslintrcEntry })]
  })
];

module.exports = {
  base: () => toFlatConfig('eslint-config-fe/base', require.resolve('./base')),
  index: () => toFlatConfig('eslint-config-fe', require.resolve('./index')),
  react: () => toFlatConfig('eslint-config-fe/react', require.resolve('./react')),
  ts: () => toFlatConfig('eslint-config-fe/ts', require.resolve('./ts'))
};
