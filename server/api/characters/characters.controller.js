'use strict';

var _ = require('lodash');
var Characters = require('./characters.model');

// Get list of characterss
exports.index = function(req, res) {
  Characters.find(function (err, characterss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(characterss);
  });
};

// Get a single characters
exports.show = function(req, res) {
  Characters.findById(req.params.id, function (err, characters) {
    if(err) { return handleError(res, err); }
    if(!characters) { return res.status(404).send('Not Found'); }
    return res.json(characters);
  });
};

// Creates a new characters in the DB.
exports.create = function(req, res) {
  req.body.userId = req.user._id;
  req.body.createdDate = new Date();
  req.body.updatedDate = new Date();

  Characters.create(req.body, function(err, characters) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(characters);
  });
};

// Updates an existing characters in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Characters.findById(req.params.id, function (err, characters) {
    if (err) { return handleError(res, err); }
    if(!characters) { return res.status(404).send('Not Found'); }
    var updated = _.merge(characters, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(characters);
    });
  });
};

// Deletes a characters from the DB.
exports.destroy = function(req, res) {
  Characters.findById(req.params.id, function (err, characters) {
    if(err) { return handleError(res, err); }
    if(!characters) { return res.status(404).send('Not Found'); }
    characters.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
