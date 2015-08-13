'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RacesSchema = new Schema({
  race: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  abilityScoreIncrease: {
    Strength: {
      type: Number,
      default: 0,
      required: true
    },
    Dexterity: {
      type: Number,
      default: 0,
      required: true
    },
    Constitution: {
      type: Number,
      default: 0,
      required: true
    },
    Intelligence: {
      type: Number,
      default: 0,
      required: true
    },
    Wisdom: {
      type: Number,
      default: 0,
      required: true
    },
    Charisma: {
      type: Number,
      default: 0,
      required: true
    }
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    required: true,
    lowercase: true,
    default: 'medium'
  },
  walkSpeed: {
    type: Number,
    required: true,
    min: 0,
    default: 30
  },
  flightSpeed: {
    type: Number,
    min: 0,
    default: 0
  },
  swimSpeed: {
    type: Number,
    min: 0,
    default: 0
  },
  darkvision: {
    type: Boolean,
    default: false,
    required: true
  },
  languages: [{
    type: String
  }]
});

RacesSchema.pre('save', function (next) {

  function hasCommonLanguage(element) {
    return element === 'Common';
  }

  if ( !this.languages.some(hasCommonLanguage) ) {
    this.languages.push('Common');
  };
  next();
});

module.exports = mongoose.model('Races', RacesSchema);
