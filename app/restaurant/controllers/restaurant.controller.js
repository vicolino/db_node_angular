'use strict';

var HTTPStatus = require('http-status');
var path = require('path');
var mongoose = require('mongoose');

// work around to manipulate restaurants in execution time.
var restaurants = [{"name":"Eat Clean", "address": "Loren Ipslun" ,"votes" : 1},{"name":"McDonalds", "address": "Loren Ipslun", "votes" : 2},{"name":"Vicolino FastFood", "address": "Loren Ipslun", "votes" : 0}];

exports.create = function (req, res) {
  var restaurant = new Restaurant(req.body);

  //Because mongo isn't configured.
  restaurants.push(restaurant);
  res.json(restaurant);

  //TODO SAVE IN MONGO
};

exports.topVote = function (req, res) {
  var sorted = restaurants.sort(function(a, b) {
    return parseFloat(b.votes) - parseFloat(a.votes);
  });
  var json = {body : sorted[0]};
  res.json(json);
};

exports.update = function (req, res) {
  var data = req.body;

  var user = req.body.user;
  var restaurant = req.body.restaurant;

  //Work Around because mongo isn't ready.
  restaurants.forEach(function (rest) {
    if(rest.name == restaurant.name) {
      rest.votes++;
    }
  });
  res.sendStatus(HTTPStatus.OK);
};

exports.list = function (req, res) {
  var json = {body : restaurants};
  res.json(json);
};
