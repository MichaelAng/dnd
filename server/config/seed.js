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
    firstName: 'Chris',
    lastName: 'Sakai',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    firstName: 'Michael',
    lastName: 'Ang',
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
    info: 'I am puny'
  }, {
    race: 'Halfling',
    info: 'I am small'
  }, {
    race: 'Dwarf',
    info: 'I am stocky'
  }, {
    race: 'Elf',
    info: 'I am skinny'
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
