'use strict';

angular.module('dndApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $state) {
    $scope.menu = [{
      'title': 'Home',
      'parentState': 'main',
      'state': 'main'
    }, {
      'title': 'Create Character',
      'parentState': 'createCharacter',
      'state': 'createCharacter.raceClassPicker'
    }, {
      'title': 'About',
      'parentState': 'about',
      'state': 'about'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return $state.includes(route);
    };
  });
