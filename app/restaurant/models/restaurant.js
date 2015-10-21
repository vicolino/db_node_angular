'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Restaurant Schema
 */
var RestaurantSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  votes: {
    type: Integer,
  },
  name: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('Restaurant', RestaurantSchema);
