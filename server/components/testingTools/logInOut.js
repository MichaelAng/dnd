'use strict';

var app = require('../../app');
var request = require('supertest');
var User = require('../../api/user/user.model');

exports.clearUsersCollection = function () {
  return function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  };
};

exports.createUserAndlogin = function (auth) {
  return function(done) {
    request(app)
      .post('/api/users')
      .send({
        email: 'test@test.com',
        password: 'test'
      })
      .expect(200)
      .end(onResponse);

    function onResponse(err, res) {
      auth.token = res.body.token;]
      return done();
    }
  };
};
