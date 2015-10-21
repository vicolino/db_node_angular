'use strict';

/**
 * Module dependencies.
 */
var restaurants = require('../controllers/restaurant.controller');

module.exports = function (app) {
  // restaurants collection routes
  app.route('/api/restaurants').all()
    .get(restaurants.list);

  app.route('/api/restaurants/vote').all()
      .post(restaurants.update);

  app.route('/api/restaurants/top').all()
      .get(restaurants.topVote);
};
