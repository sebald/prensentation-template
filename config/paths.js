const path = require('path');
const fs = require('fs');

// Find the correct path.
const project_directory = fs.realpathSync(process.cwd());
function resolvePath(realtive_path) {
  return path.resolve(project_directory, realtive_path);
}


module.exports = {
  package: resolvePath('package.json'),
  build: resolvePath('build'),
  entry: {
    html: resolvePath('example/index.html'),
    js: resolvePath('example/index.js')
  },
  theme: {
    favicon: resolvePath('src/theme/imgs/favicon.png')
  }
};