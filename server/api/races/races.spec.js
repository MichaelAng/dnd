'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var log = require('../../components/testingTools/logInOut');

describe('GET /api/races', function() {
  var auth = {};

  // Setup
  before(log.clearUsersCollection());
  before(log.createUserAndlogin(auth));

  // Teardown
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
