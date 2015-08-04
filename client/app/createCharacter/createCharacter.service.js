'use strict';

angular.module('dndApp')
  .factory('CreateCharacter', ['$http', function ($http) {
    var CreateCharacter = {};
    CreateCharacter.characterClasses = [];
    CreateCharacter.races = [];

    CreateCharacter.getCharacterClasses = function () {
      return $http.get('/api/characterClasses')
        .success(function(data) {
          CreateCharacter.characterClasses = data;
        })
        .error(function() {
          console.log('error');
        });
    };

    CreateCharacter.getRaces = function () {
      return $http.get('/api/races')
        .success(function(data) {
          CreateCharacter.races = data;
        })
        .error(function() {
          console.log('error');
        });
    };

    CreateCharacter.saveCharacter = function(payload) {
      return $http.post('/api/characters', payload)
        .success(function(data) {
          console.log('success', data);
        })
        .error(function() {
          console.log('error');
        });
    };

    return CreateCharacter;

  }]);
