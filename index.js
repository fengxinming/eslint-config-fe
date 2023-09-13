const base = require('./base');

base.extends = [
  './rules/base',
  './rules/base-babel',
  './rules/index'
].map(require.resolve);

module.exports = base;
