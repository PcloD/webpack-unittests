var base = require('./parts/base');

base.entry = './src/app.js';

base.output = {
  libraryTarget: 'var',
  library: 'foo',
  path: 'build',
  filename: 'app.js'
};

module.exports = base;
