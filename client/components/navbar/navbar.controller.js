'use strict';

angular.module('dndApp')
  .controller('NavbarCtrl',
    [        '$location', 'Auth', '$state',
    function ($location,   Auth,   $state) {
    var vm = this;

    vm.menu = [{
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

    vm.isCollapsed = true;
    vm.isLoggedIn = Auth.isLoggedIn;
    vm.isAdmin = Auth.isAdmin;
    vm.getCurrentUser = Auth.getCurrentUser;

    vm.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    vm.isActive = function(route) {
      return $state.includes(route);
    };
  }]);
