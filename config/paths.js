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
  entry: resolvePath('example/index.js'),
  src: resolvePath('src'),
  theme: {
    html: resolvePath('src/theme/index.html'),
    favicon: resolvePath('src/theme/favicon.png')
  }
};