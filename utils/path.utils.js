'use strict';

const path = require('path');
const fs = require('fs');
const project_directory = fs.realpathSync(process.cwd());

// Safely get path.
module.exports.resolvePath = function resolvePath(realtive_path) {
  return path.resolve(project_directory, realtive_path);
}