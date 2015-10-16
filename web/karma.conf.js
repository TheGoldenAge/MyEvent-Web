module.exports = function(config){
  config.set({

    basePath : './',

    files : [
        'client/bower_components/angular/angular.js',
        'client/bower_components/angular-bootstrap/ui-bootstrap.js',
        'client/bower_components/angular-cookies/angular-cookies.js',
        'client/bower_components/angular-loader/angular-loader.js',
        'client/bower_components/angular-route/angular-route.js',
        'client/bower_components/angular-mocks/angular-mocks.js',
        'client/bower_components/angular-resource/angular-resource.js',
        'client/bower_components/angular-sanitize/angular-sanitize.js',
        'client/bower_components/angular-translate/angular-translate.js',
        'client/bower_components/angular-ui-router/release/angular-ui-router.js',
        'client/components/**/*.js',
        'client/test/**/*.js',
        'client/test/*.js',
        'client/js/**/*.js',
        'client/js/app.js'
    ],

    autoWatch : true,
    frameworks: ['jasmine'],//, 'requirejs'

    browsers: ['Chrome'/*, 'Firefox', 'IE'*/],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-jasmine',
            'karma-requirejs',
            'karma-junit-reporter',
            'karma-coverage'
            ],

    // list of files to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'client/js/**/*.js': ['coverage']
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

      coverageReporter: {
          type: 'html',
          dir: 'tests/coverage/'
      },

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
