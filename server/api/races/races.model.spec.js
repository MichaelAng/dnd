'use strict';

var should = require('should');
var app = require('../../app');
var Race = require('./races.model');

var race = new Race({
  race : 'Dwarf',
  info : 'strong and short'
});

describe('Race Model', function() {
  before(function (done){
    //Clear races before testing
    Race.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function (done) {
    Race.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no races', function (done) {
    Race.find({}, function (err, races) {
      races.should.have.length(0);
      done();
    });
  });

  it('should save with race and info.', function (done) {
    race.save(function (err) {
      Race.findOne({}, function (err, race) {
        race.should.have.property('race', 'Dwarf');
        race.should.have.property('info', 'strong and short');
        done();
      });
    });
  });
});
