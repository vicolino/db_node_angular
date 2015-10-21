'use strict';

module.exports = {
  client: {
  
  },
  server: {
    models: 'app/*/models/**/*.js',
    routes: ['app/!(core)/routes/**/*.js'],
  }
};
