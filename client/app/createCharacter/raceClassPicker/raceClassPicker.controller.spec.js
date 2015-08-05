'use strict';

describe('raceClassPicker.controller.js: ', function () {

  // load the controller's module
  beforeEach(module('dndApp'));

  var RaceClassPickerCtrl;
  var scope;
  var CreateCharacter;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _CreateCharacter_) {
    scope = $rootScope.$new();
    CreateCharacter = _CreateCharacter_;
    RaceClassPickerCtrl = $controller('RaceClassPickerCtrl as rcpCtrl', {
      $scope: scope
    });
  }));

  it('should have an empty name on init', function () {
    expect(scope.rcpCtrl.name).toEqual('');
  });

  describe('createCharacter(): ', function() {
    beforeEach(function() {
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
});
