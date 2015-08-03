'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CharacterClassesSchema = new Schema({
  characterClass: String,
  info: String
});

module.exports = mongoose.model('CharacterClasses', CharacterClassesSchema);
