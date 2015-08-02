'use strict';

describe('Controller: CreateCharacterCtrl', function () {

  // load the controller's module
  beforeEach(module('dndApp'));

  var CreateCharacterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateCharacterCtrl = $controller('CreateCharacterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
