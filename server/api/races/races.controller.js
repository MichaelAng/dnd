'use strict';

var _ = require('lodash');
var Races = require('./races.model');

// Get list of racess
exports.index = function(req, res) {
  Races.find(function (err, racess) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(racess);
  });
};

// Get a single races
exports.show = function(req, res) {
  Races.findById(req.params.id, function (err, races) {
    if(err) { return handleError(res, err); }
    if(!races) { return res.status(404).send('Not Found'); }
    return res.json(races);
  });
};

// Creates a new races in the DB.
exports.create = function(req, res) {
  Races.create(req.body, function(err, races) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(races);
  });
};

// Updates an existing races in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Races.findById(req.params.id, function (err, races) {
    if (err) { return handleError(res, err); }
    if(!races) { return res.status(404).send('Not Found'); }
    var updated = _.merge(races, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(races);
    });
  });
};

// Deletes a races from the DB.
exports.destroy = function(req, res) {
  Races.findById(req.params.id, function (err, races) {
    if(err) { return handleError(res, err); }
    if(!races) { return res.status(404).send('Not Found'); }
    races.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}