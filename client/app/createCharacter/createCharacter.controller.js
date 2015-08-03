'use strict';

angular.module('dndApp')
  .controller('CreateCharacterCtrl', ['CreateCharacter', function (CreateCharacter) {
    var vm = this;

    vm.characterClasses = CreateCharacter.characterClasses;
    vm.characterName = '';
    vm.races = CreateCharacter.races;
    vm.selectedCharacterClass = null;
    vm.selectedRace = null;

    CreateCharacter.getRaces().then(function () {
      vm.races = CreateCharacter.races;
    });

    CreateCharacter.getCharacterClasses().then(function () {
      vm.characterClasses = CreateCharacter.characterClasses;
    });
  }]);
