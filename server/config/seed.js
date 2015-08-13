/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Races = require('../api/races/races.model');
var CharacterClasses = require('../api/characterClasses/characterClasses.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Races.find({}).remove(function() {
  Races.create({
    race: 'Human',
    info: 'I am puny',
    abilityScoreIncrease: {
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 0,
      Wisdom:  0,
      Charisma: 0
    },
    size: 'medium',
    walkSpeed: 30,
    flightSpeed: 0,
    swimSpeed: 0,
    darkvision: false,
    languages: ['Common']
  }, {
    race: 'Halfling',
    info: 'I am small',
    abilityScoreIncrease: {
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 0,
      Wisdom:  0,
      Charisma: 0
    },
    size: 'small',
    walkSpeed: 25,
    flightSpeed: 0,
    swimSpeed: 0,
    darkvision: false,
    languages: ['Common', 'Halfling']
  }, {
    race: 'Dwarf',
    info: 'I am stocky',
    abilityScoreIncrease: {
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 0,
      Wisdom:  0,
      Charisma: 0
    },
    size: 'medium',
    walkSpeed: 25,
    flightSpeed: 0,
    swimSpeed: 0,
    darkvision: false,
    languages: ['Common', 'Dwarvish']
  }, {
    race: 'Elf',
    info: 'I am skinny',
    abilityScoreIncrease: {
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 0,
      Wisdom:  0,
      Charisma: 0
    },
    size: 'medium',
    walkSpeed: 30,
    flightSpeed: 0,
    swimSpeed: 0,
    darkvision: false,
    languages: ['Common', 'Elvish']
  }, function() {
      console.log('finished populating races');
    }
  );
});

CharacterClasses.find({}).remove(function() {
  CharacterClasses.create({
    characterClass: 'Cleric',
    info: 'I heal things'
  }, {
    characterClass: 'Fighter',
    info: 'I bash things'
  }, {
    characterClass: 'Rogue',
    info: 'I stab things'
  }, {
    characterClass: 'Wizard',
    info: 'I blow things...up'
  }, function() {
      console.log('finished populating characterclasses');
    }
  );
});
