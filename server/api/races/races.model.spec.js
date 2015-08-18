'use strict';

var _ = require('lodash');
var should = require('should');
var app = require('../../app');
var Race = require('./races.model');

var race = new Race({
  race : 'Dwarf',
  info : 'strong and short'
});

var raceDefaults = {
  abilityScoreIncrease: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  },
  size: 'medium',
  walkSpeed: 30,
  flightSpeed: 0,
  swimSpeed: 0,
  darkvision: false
};

describe('Race Model', function() {
  before(function (done){
    //Clear races before testing
    Race.remove().exec().then(function() {
      done();
    });
  });


  // afterEach(function (done) {
  //   Race.remove().exec().then(function() {
  //     done();
  //   });
  // });

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

  it('should save with race defaults.', function (done) {
    race.save(function (err) {
      Race.findOne({}, function (err, returnedRace) {
        var _race = _.omit(returnedRace, ['race', 'info', 'languages']);
        _.matches(raceDefaults)(_race).should.be.true;
        done();
      });
    });
  });
});
