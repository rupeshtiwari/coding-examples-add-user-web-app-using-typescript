const webpackConfig = require('./webpack-test.config.js');
webpackConfig.mode = 'development';

module.exports = function(config) {
  config.set({
    singleRun: false,

    browsers: ['Chrome'],

    /** * maximum number of tries a browser will attempt in the case of a disconnection */ browserDisconnectTolerance: 2,

    /** * How long will Karma wait for a message from a browser before disconnecting from it (in ms). */ browserNoActivityTimeout: 50000,

    frameworks: ['jasmine'],

    files: ['spec.bundle.js'],

    reporters: ['progress', 'kjhtml'],

    preprocessors: {
      'spec.bundle.js': ['webpack'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only',
    },

    client: {
      jasmine: {
        random: false,
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-webpack'),
    ],
  });
};
