'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  chalk = require('chalk'),
  glob = require('glob'),
  fs = require('fs'),
  path = require('path');

var getGlobbedPaths = function (globPatterns, excludes) {
  var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');
  var output = [];

  if (_.isArray(globPatterns)) {
    globPatterns.forEach(function (globPattern) {
      output = _.union(output, getGlobbedPaths(globPattern, excludes));
    });
  } else if (_.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      output.push(globPatterns);
    } else {
      var files = glob.sync(globPatterns);
      if (excludes) {
        files = files.map(function (file) {
          if (_.isArray(excludes)) {
            for (var i in excludes) {
              file = file.replace(excludes[i], '');
            }
          } else {
            file = file.replace(excludes, '');
          }
          return file;
        });
      }
      output = _.union(output, files);
    }
  }

  return output;
};

var initGlobalConfigFolders = function (config, assets) {
  config.folders = {
    server: {},
    client: {}
  };
  config.folders.client = getGlobbedPaths(path.join(process.cwd(), 'modules/*/client/'), process.cwd().replace(new RegExp(/\\/g), '/'));
};

var initGlobalConfigFiles = function (config, assets) {
  config.files = {
    server: {},
    client: {}
  };
  config.files.server.models = getGlobbedPaths(assets.server.models);
  config.files.server.routes = getGlobbedPaths(assets.server.routes);
};

var initGlobalConfig = function () {
  var defaultAssets = require(path.join(process.cwd(), './app/assets/default'));
  var assets = _.merge(defaultAssets, '');
  var config = {};

  initGlobalConfigFiles(config, assets);
  initGlobalConfigFolders(config, assets);
  config.utils = {
    getGlobbedPaths: getGlobbedPaths
  };

  return config;
};

module.exports = initGlobalConfig();
