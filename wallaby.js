var babel = require('babel-core');

module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*@(.js|.jsx)',
      'test/test_helper.js'
    ],

    tests: [
      './test/**/*_spec@(.js|.jsx)'
    ],

    compilers: {
      '**/*@(js|.jsx)': wallaby.compilers.babel({
        babel: babel
      }),
    },

    env: {
      type: 'node'
    },

    testFramework: 'mocha',

    bootstrap: function() {
      require('./test/test_helper');
    }
  }
};
