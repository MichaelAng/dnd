'use strict';

angular.module('dndApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createCharacter', {
        url: '/createCharacter',
        templateUrl: 'app/createCharacter/createCharacter.html',
        controller: 'CreateCharacterCtrl'
      });
  });