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

  it('should return 0 when ability points value is 8', function () {
    var abilityPointValue = 8;
    var result = scope.getCost(abilityPointValue);
    expect(result).toEqual(0);
  });
  it('should return 1 when ability points value is 9', function () {
    var abilityPointValue = 9;
    var result = scope.getCost(abilityPointValue);
    expect(result).toEqual(1);
  });
  it('should return 2 when ability points value is 10', function () {
    var abilityPointValue = 10;
    var result = scope.getCost(abilityPointValue);
    expect(result).toEqual(2);
  });
  it('should return 3 when ability points value is 11', function () {
    var abilityPointValue = 11;
    var result = scope.getCost(abilityPointValue);
    expect(result).toEqual(3);
  });
  it('should return 4 when ability points value is 12', function () {
    var abilityPointValue = 12;
    var result = scope.getCost(abilityPointValue);
    expect(result).toEqual(4);
  });
      it('should return 5 when ability points value is 13', function () {
    var abilityPointValue = 13;
    var result = scope.getCost(abilityPointValue);
    expect(result).toEqual(5);
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
