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

  it('should return APV-8 when ability points value is less than 14', function () {
    expect(scope.getCost(8)).toEqual(0);
    expect(scope.getCost(9)).toEqual(1);
    expect(scope.getCost(10)).toEqual(2);
    expect(scope.getCost(11)).toEqual(3);
    expect(scope.getCost(12)).toEqual(4);
    expect(scope.getCost(13)).toEqual(5);
  });
  it('should return 7 when ability points value is 14', function () {
    var abilityPointValue = 14;
    var result = scope.getCost(abilityPointValue);
    expect(result).toEqual(7);
  });
  it('should return 9 when ability points value is 15', function () {
    var abilityPointValue = 15;
    var result = scope.getCost(abilityPointValue);
    expect(result).toEqual(9);
  });
});
