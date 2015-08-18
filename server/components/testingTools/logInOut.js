'use strict';

var app = require('../../app');
var request = require('supertest');
var User = require('../../api/user/user.model');

exports.clearUsersCollection = clearUsersCollection;
exports.createUser = createUser;
exports.createUserAndLogin = createUserAndLogin;
exports.deleteUser = deleteUser;
exports.login = login;

function clearUsersCollection () {
  return function (done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  };
};

function createUser (email, password, role) {
  return function (done) {
    var user = new User({
      provider: 'local',
      name: 'Fake User',
      email: email,
      password: password,
      role: role
    });

    user.save(function() {
      done();
    });
  };
};

function createUserAndLogin (auth, email, password, role) {
  return function (done) {
    createUser(email, password, role)(function () {
      login(auth, email, password)(done);
    });
  };
};

function deleteUser (email) {
  return function (done) {
    User.remove({ email: email }).exec().then(function() {
      done();
    });
  };
};

function login (auth, email, password) {
  return function (done) {
    request(app)
      .post('/auth/local')
      .send({
        email: email,
        password: password
      })
      .expect(200)
      .end(onResponse);

    function onResponse(err, res) {
      auth.token = res.body.token;
      return done();
    }
  };
};
