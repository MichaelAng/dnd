'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var UserCtrl = require('../user/user.controller');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password',
  role: 'admin'
});

describe('GET /api/races', function() {
  var auth = {};

  // Setup
  before(function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });

    var req = {
      body: {
        provider: 'local',
        name: 'Fake User',
        email: 'test@test.com',
        password: 'password',
        role: 'admin'
      }
    };

    var res = {
      json: function (obj) {
        auth.token = obj.token;
      }
    };

    UserCtrl.create(req, res);
  });


  // before(createUserAndlogin(auth));

  // Teardown
  after(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  it('should respond with JSON array', function(done) {

    request(app)
      .get('/api/races')
      .set('Authorization', 'bearer ' + auth.token)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

});

function createUserAndlogin(auth) {
    return function(done) {
        request(app)
            .post('/api/users')
            // .post('/auth/local')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(200)
            .end(onResponse);

        function onResponse(err, res) {
            auth.token = res.body.token;
            console.log('========================================');
            console.log(res.body);
            console.log(auth.token);
            console.log('========================================');
            return done();
        }
    };
}
