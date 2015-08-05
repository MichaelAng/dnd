'use strict';

angular.module('dndApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createCharacter', {
        url: '/create-character',
        controller: 'CreateCharacterCtrl',
        templateUrl: 'app/createCharacter/createCharacter.view.html',
        abstract: true
      })
      .state('createCharacter.raceClassPicker', {
        url: '/race-class-picker',
        controller: 'RaceClassPickerCtrl',
        controllerAs: 'rcPickerCtrl',
        templateUrl: 'app/createCharacter/raceClassPicker/raceClassPicker.view.html'
      });
  });
