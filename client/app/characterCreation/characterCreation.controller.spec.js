'use strict';

describe('Controller: CharacterCreationCtrl', function () {

  // load the controller's module
  beforeEach(module('dndApp'));

  var CharacterCreationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharacterCreationCtrl = $controller('CharacterCreationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
