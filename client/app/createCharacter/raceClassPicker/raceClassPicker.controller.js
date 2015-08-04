'use strict';

angular.module('dndApp')
  .controller('RaceClassPickerCtrl', ['CreateCharacter',
    function (CreateCharacter) {
    var vm = this;

    vm.characterClasses = CreateCharacter.characterClasses;
    vm.name = '232';
    vm.races = CreateCharacter.races;
    vm.selectedCharacterClass = null;
    vm.selectedRace = null;
    vm.validName = /^[\sa-zA-Z\-\"\']+$/;

    vm.createCharacter = function () {
      angular.forEach(vm.form.$error, function (field) {
          angular.forEach(field, function(errorField){
              errorField.$setTouched();
          })
      });

      if (vm.form.$invalid) {
        console.log('nooooooooo!');
      } else {
        console.log('yaaaaaay');
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
