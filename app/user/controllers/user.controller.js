'use strict';

var HTTPStatus = require('http-status');
var path = require('path');
var mongoose = require('mongoose');

// work around to manipulate users in execution time.
var users = [{"name":"User 1", "user" : "user1", "pass" : "pass1"},{"name":"User 2", "user" : "user2", "pass" : "pass2"},{"name":"User 3", "user" : "user3", "pass" : "pass3"}];

//find user
exports.find = function (req, res) {
  var user = req.body;
  var foundUser = null;

  //Because mongo isn't configured.
  for (let i =0; i < users.length; i++) {
    if (users[i].user == user.user && users[i].pass == user.pass) {
      foundUser = users[i];
      var json = {body : foundUser};
      return res.json(json);
    }
  }
  return res.end(res.writeHead(400, 'User not found'));
};

exports.read = function (req, res) {
  res.json(req.user);
};

exports.list = function (req, res) {
  var json = {body : users};
  res.sendStatus(HTTPStatus.OK).send(json);
};
