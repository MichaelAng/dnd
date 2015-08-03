'use strict';

var _ = require('lodash');
var CharacterClasses = require('./characterClasses.model');

// Get list of characterClassess
exports.index = function(req, res) {
  CharacterClasses.find(function (err, characterClassess) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(characterClassess);
  });
};

// Get a single characterClasses
exports.show = function(req, res) {
  CharacterClasses.findById(req.params.id, function (err, characterClasses) {
    if(err) { return handleError(res, err); }
    if(!characterClasses) { return res.status(404).send('Not Found'); }
    return res.json(characterClasses);
  });
};

// Creates a new characterClasses in the DB.
exports.create = function(req, res) {
  CharacterClasses.create(req.body, function(err, characterClasses) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(characterClasses);
  });
};

// Updates an existing characterClasses in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  CharacterClasses.findById(req.params.id, function (err, characterClasses) {
    if (err) { return handleError(res, err); }
    if(!characterClasses) { return res.status(404).send('Not Found'); }
    var updated = _.merge(characterClasses, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(characterClasses);
    });
  });
};

// Deletes a characterClasses from the DB.
exports.destroy = function(req, res) {
  CharacterClasses.findById(req.params.id, function (err, characterClasses) {
    if(err) { return handleError(res, err); }
    if(!characterClasses) { return res.status(404).send('Not Found'); }
    characterClasses.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}