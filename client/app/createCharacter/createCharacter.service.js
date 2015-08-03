'use strict';

angular.module('dndApp')
  .factory('CreateCharacter', ['$http', function ($http) {
    var CreateCharacter = {};
    CreateCharacter.races = [];
    CreateCharacter.characterClasses = [];

    CreateCharacter.saveCharacter = function(payload) {
      return $http.post('/api/characters', payload)
        .success(function(data) { //200
          console.log('success', data);
        })
        .error(function() { //!200
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

    CreateCharacter.getCharacterClasses = function () {
      return $http.get('/api/characterClasses')
        .success(function(data) {
          CreateCharacter.characterClasses = data;
        })
        .error(function() {
          console.log('error');
        });
    };

    return CreateCharacter;

  }]);
