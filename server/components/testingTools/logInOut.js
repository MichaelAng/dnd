'use strict';

var app = require('../../app');
var request = require('supertest');
var User = require('../../api/user/user.model');

exports.clearUsersCollection = clearUsersCollection;
exports.createUser = createUser;
exports.createUserAndLogin = createUserAndLogin;
exports.deleteUser = deleteUser;
exports.login = login;
exports.changeRole = changeRole;

function clearUsersCollection () {
  return function (done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  };
};

function createUser (_email, _password, _role) {
  return function (done) {
    var user = new User({
      provider: 'local',
      name: 'Fake User',
      email: _email,
      password: _password,
      role: _role
    });

    user.save(function() {
      done();
    });
  };
};

function createUserAndLogin (auth, _email, _password, _role) {
  return function (done) {
    createUser(_email, _password, _role)(function () {
      login(auth, _email, _password)(done);
    });
  };
};

function deleteUser (_email) {
  return function (done) {
    User.remove({ email: _email }).exec()
      .then(function() {
        done();
    });
  };
};

function login (auth, _email, _password) {
  return function (done) {
    request(app)
      .post('/auth/local')
      .send({
        email: _email,
        password: _password
      })
      .expect(200)
      .end(onResponse);

    function onResponse(err, res) {
      auth.token = res.body.token;
      return done();
    }
  };
};

function changeRole (_email, _role) {
  return function (done) {
    User.findOneAndUpdate({
      email: _email
    }, {
      $set: {
        role: _role
      }
    }, function (err, user) {
      if (err) {
        throw err;
      } else if (!user) {
        throw 'No User with this Email';
      } else {
        done();
      }
    });
  };
};
