'use strict';

angular.module('dndApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.view.html',
        controller: 'MainCtrl'
      });
  });
