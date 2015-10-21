var path = require('path');
var config = require('../config');

module.exports.initModulesServerRoutes = function (app) {
  config.files.server.routes.forEach(function (routePath) {
    require(path.resolve(routePath))(app);
  });
};

module.exports.init = function (app) {
  this.initModulesServerRoutes(app);
};
