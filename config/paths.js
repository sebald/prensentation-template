'use strict';

const resolvePath = require('../scripts/utils').resolvePath;

module.exports = {
  default_entry: 'src/index.js',

  package: resolvePath('package.json'),
  build: resolvePath('build'),
  src: resolvePath('src'),
  theme: {
    html: resolvePath('src/theme/index.html'),
    favicon: resolvePath('src/theme/favicon.png')
  }
};