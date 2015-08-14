'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/races', function() {

  var auth = {};
  before(createUserAndLogin(auth));

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

function createUserAndLogin(auth) {
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
            auth.token = res.body.token;
            console.log('========================================');
            console.log(auth.token);
            console.log('========================================');
            return done();
        }
    };
}
