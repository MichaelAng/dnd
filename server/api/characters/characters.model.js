'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CharactersSchema = new Schema({
  characterClass: String,
  createdDate: Date,
  name: String,
  race: String,
  updatedDate: Date,
  userId: String
});

module.exports = mongoose.model('Characters', CharactersSchema);
