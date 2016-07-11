var base = require('./parts/base');

// Disabale eslint for mocha
base.module.preLoaders = [];
delete base.externals['jquery'];

module.exports = base;
