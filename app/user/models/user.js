'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    default: '',
    trim: true
  },
  pass: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('User', UserSchema);
