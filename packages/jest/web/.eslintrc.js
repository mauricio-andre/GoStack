const path = require('path');
const eslintConfig = require('@go-stack-10/eslint-config');

eslintConfig.settings['import/resolver'] = {
  "babel-plugin-root-import": {
    rootPathSuffix: path.join('packages', 'jest', 'web', 'src')
  }
};

module.exports = eslintConfig;
