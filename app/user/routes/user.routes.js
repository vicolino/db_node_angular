'use strict';

/**
 * Module dependencies.
 */
var user = require('../controllers/user.controller');

module.exports = function (app) {
  // users collection routes
  app.route('/api/user').all()
    .post(user.find);
};
