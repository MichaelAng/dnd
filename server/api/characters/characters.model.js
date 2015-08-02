'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CharactersSchema = new Schema({
  characterClass: String,
  createdDate: Date,
  name: String,
  race: String,
  updatedDate: Date,
  userId: {type: String, index: true}
}, {autoIndex: true});

module.exports = mongoose.model('Characters', CharactersSchema);
