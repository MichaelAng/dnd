'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CharactersSchema = new Schema({
  characterClass: String,
  createdDate: { type: Date, default: Date.now },
  name: String,
  race: String,
  updatedDate: { type: Date, default: Date.now },
  userId: {type: String, index: true}
}, {autoIndex: true});

module.exports = mongoose.model('Characters', CharactersSchema);
