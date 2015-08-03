'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RacesSchema = new Schema({
  race: String,
  info: String
});

module.exports = mongoose.model('Races', RacesSchema);
