'use strict';

angular.module('dndApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createCharacter', {
        url: '/create-character',
        templateUrl: 'app/createCharacter/createCharacter.view.html',
        controller: 'CreateCharacterCtrl',
        abstract: true
      })
      .state('createCharacter.race', {
        url: '/race-class-picker',
        views: {
          '': {
            templateUrl: 'app/createCharacter/raceClassPicker/raceClassPicker.view.html'
          },
          'selection@createCharacter.race': {
            templateUrl: 'app/createCharacter/raceClassPicker/picker.view.html'
          },
          'description@createCharacter.race': {
            templateUrl: 'app/createCharacter/raceClassPicker/description.view.html'
          }
        }
      });
  });
