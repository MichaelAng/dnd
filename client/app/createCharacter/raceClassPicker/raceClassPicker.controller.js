'use strict';

angular.module('dndApp')
  .controller('RaceClassPickerCtrl', ['CreateCharacter',
    function (CreateCharacter) {
    var vm = this;

    vm.characterClasses = CreateCharacter.characterClasses;
    vm.name = '';
    vm.races = CreateCharacter.races;
    vm.selectedCharacterClass = null;
    vm.selectedRace = null;
    vm.validName = /^[\sa-zA-Z\-\"\']+$/;

    vm.createCharacter = function () {
      angular.forEach(vm.form.$error, function (field) {
          angular.forEach(field, function(errorField){
              errorField.$setTouched();
          });
      });

      var payload = {
        characterClass: vm.selectedCharacterClass,
        name: vm.name,
        race: vm.selectedRace
      };

      if (vm.form.$valid) {
        CreateCharacter.saveCharacter(payload);

      }
    };

    // Fetches races
    CreateCharacter.getRaces().then(function () {
      vm.races = CreateCharacter.races;
    });

    CreateCharacter.getCharacterClasses().then(function () {
      vm.characterClasses = CreateCharacter.characterClasses;
    });
  }]);
