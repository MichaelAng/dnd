'use strict';

angular.module('dndApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createCharacter', {
        url: '/create-character',
        templateUrl: 'app/createCharacter/createCharacter.view.html',
        abstract: true
      })
      .state('createCharacter.raceClassPicker', {
        url: '/race-class-picker',
        controller: 'CreateCharacterCtrl',
        controllerAs: 'CreateCharacterCtrl',
        templateUrl: 'app/createCharacter/raceClassPicker/raceClassPicker.view.html'
      });
  });
