'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var User = require('../user/user.model');
var log = require('../../components/testingTools/logInOut');

describe('GET /api/races', function() {
  var auth = {};

  // Setup Authorized User
  before(log.clearUsersCollection());
  before(log.createUserAndLogin(auth, 'test@test.com', 'test', 'admin'));

  // Teardown User
  after(log.clearUsersCollection());

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
