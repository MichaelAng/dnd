'use strict';

describe('abilityScorePicker.controller.js: ', function () {

  // load the controller's module
  beforeEach(module('dndApp'));

  var CharacterCreationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('abilityScorePickerCtrl as asPickerCtrl', {
      $scope: scope
    });
  }));

  it('should return APV-8 when ability points value is less than 14', function () {
    expect(scope.asPickerCtrl.getCost(8)).toEqual(0);
    expect(scope.asPickerCtrl.getCost(9)).toEqual(1);
    expect(scope.asPickerCtrl.getCost(10)).toEqual(2);
    expect(scope.asPickerCtrl.getCost(11)).toEqual(3);
    expect(scope.asPickerCtrl.getCost(12)).toEqual(4);
    expect(scope.asPickerCtrl.getCost(13)).toEqual(5);
  });

  it('should return 7 when ability points value is 14', function () {
    var abilityPointValue = 14;
    var result = scope.asPickerCtrl.getCost(abilityPointValue);
    expect(result).toEqual(7);
  });

  it('should return 9 when ability points value is 15', function () {
    var abilityPointValue = 15;
    var result = scope.asPickerCtrl.getCost(abilityPointValue);
    expect(result).toEqual(9);
  });

  it('should return possible selectable points based on remaining cost', function() {
    expect(scope.asPickerCtrl.getPossiblePoints(0)).toEqual(8);
    expect(scope.asPickerCtrl.getPossiblePoints(1)).toEqual(9);
    expect(scope.asPickerCtrl.getPossiblePoints(2)).toEqual(10);
    expect(scope.asPickerCtrl.getPossiblePoints(3)).toEqual(11);
    expect(scope.asPickerCtrl.getPossiblePoints(4)).toEqual(12);
    expect(scope.asPickerCtrl.getPossiblePoints(5)).toEqual(13);
    expect(scope.asPickerCtrl.getPossiblePoints(6)).toEqual(13);
    expect(scope.asPickerCtrl.getPossiblePoints(7)).toEqual(14);
    expect(scope.asPickerCtrl.getPossiblePoints(8)).toEqual(14);
    expect(scope.asPickerCtrl.getPossiblePoints(9)).toEqual(15);
  });

  it('should reset all ability bases to 8 on reset', function () {
    scope.asPickerCtrl.abilities.forEach(function (element) {
      element.points = 12;
    });

    scope.asPickerCtrl.resetForm();

    scope.asPickerCtrl.abilities.forEach(function (element) {
      expect(element.points).toEqual(8);
    });
  });

  it('should reset points remaining to 27 on reset', function () {
    scope.asPickerCtrl.pointsRemaining = 3;

    scope.asPickerCtrl.resetForm();

    expect(scope.asPickerCtrl.pointsRemaining).toEqual(27);
  });

  it('should set selectables to default of [8 ~ 15]', function () {
    scope.asPickerCtrl.abilities.forEach(function (element) {
      element.selectable = [8, 9, 10, 11, 12];
    });

    scope.asPickerCtrl.resetForm();

    scope.asPickerCtrl.abilities.forEach(function (element) {
      expect(element.selectable).toEqual([8, 9, 10, 11, 12, 13, 14, 15]);
    });
  });
});
