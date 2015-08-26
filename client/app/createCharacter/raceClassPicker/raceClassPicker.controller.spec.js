'use strict';

describe('raceClassPicker.controller.js: ', function () {

  // load the controller's module
  beforeEach(module('dndApp'));

  var RaceClassPickerCtrl;
  var scope;
  var CreateCharacter;
  var $q;


  // Initialize the controller and a mock scope
  beforeEach(inject(function (
    $controller,
    $rootScope,
    _$q_,
    _CreateCharacter_
    ) {
    $q = _$q_;
    scope = $rootScope.$new();
    CreateCharacter = _CreateCharacter_;
    RaceClassPickerCtrl = function () {
      return $controller('RaceClassPickerCtrl as rcpCtrl', {
        $scope: scope
      });
    };
  }));

  it('should have an empty name on init', function () {
    RaceClassPickerCtrl();
    expect(scope.rcpCtrl.name).toEqual('');
  });

  describe('createCharacter(): ', function() {
    beforeEach(function() {
      RaceClassPickerCtrl();
      scope.rcpCtrl.form = {
        $error: {
            required: [{
              $name: 'name',
              $setTouched : function () {
              }
            }]
        },
        $valid: false
      };
    });

    it('should set all fields to touched on submit', function() {
      spyOn(scope.rcpCtrl.form.$error.required[0], '$setTouched');
      scope.rcpCtrl.createCharacter();
      expect(scope.rcpCtrl.form.$error.required[0].$setTouched)
        .toHaveBeenCalled();
    });

    it('should call CreateCharacter.saveCharacter if form is valid.', function() {
      spyOn(CreateCharacter, 'saveCharacter');
      scope.rcpCtrl.form.$valid = true;
      scope.rcpCtrl.createCharacter();
      expect(CreateCharacter.saveCharacter)
        .toHaveBeenCalled();
    });

    it('should not call CreateCharacter.saveCharacter if form is invalid.', function() {
      spyOn(CreateCharacter, 'saveCharacter');
      scope.rcpCtrl.createCharacter();
      expect(CreateCharacter.saveCharacter)
        .not.toHaveBeenCalled();
    })
  });

  it('should get Races', function() {
    CreateCharacter.races = [{
      name: 'dog',
      info: 'itchy'
    }];
    spyOn(CreateCharacter, 'getRaces').andReturn($q.defer().promise);
    RaceClassPickerCtrl();
    expect(scope.rcpCtrl.races).toEqual(CreateCharacter.races);
  });

  it('should get Classes', function() {
    CreateCharacter.characterClasses = [{
      name: 'knight',
      info: 'heavy'
    }];
    spyOn(CreateCharacter, 'getCharacterClasses').andReturn($q.defer().promise);
    RaceClassPickerCtrl();
    expect(scope.rcpCtrl.characterClasses).toEqual(CreateCharacter.characterClasses);
  });
});
