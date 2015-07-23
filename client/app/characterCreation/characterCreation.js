'use strict';

angular.module('dndApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('characterCreation', {
        url: '/create',
        templateUrl: 'app/characterCreation/characterCreation.html',
        controller: 'CharacterCreationCtrl'
      });
  });
