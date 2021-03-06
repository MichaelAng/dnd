'use strict';

angular.module('dndApp')
  .factory('CreateCharacter', ['$http', '$state', function ($http, $state) {
    var factory = {};
    factory.characterClasses = [];
    factory.races = [];
    factory.character = {};

    factory.getCharacterClasses = function () {
      return $http.get('/api/characterClasses')
        .success(function(data) {
          factory.characterClasses = data;
        })
        .error(function() {
          console.log('error');
        });
    };

    factory.getRaces = function () {
      return $http.get('/api/races')
        .success(function(data) {
          factory.races = data;
        })
        .error(function() {
          console.log('error');
        });
    };

    factory.saveCharacter = function(payload) {
      return $http.post('/api/characters', payload)
        .success(function(data) {
          factory.character = data;
          $state.go('createCharacter.abilityScorePicker');
        })
        .error(function() {
          console.log('error');
        });
    };

    return factory;

  }]);
