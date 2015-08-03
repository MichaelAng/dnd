'use strict';

angular.module('dndApp')
  .controller('CreateCharacterCtrl', ['CreateCharacter', function (CreateCharacter) {
    var vm = this;

    vm.characterName = '';
    vm.races = CreateCharacter.races;
    vm.selectedCharacterClass = null;
    vm.selectedRace = null;

    vm.characterClasses = [
      {id: 1, characterClass: 'Cleric',  description: 'a normal guy'},
      {id: 2, characterClass: 'Rogue',  description: 'pointy ears'},
      {id: 3, characterClass: 'Wizard',  description: 'Roughy and tough'}
    ];

    CreateCharacter.getRaces().then(function () {
      vm.races = CreateCharacter.races;
    });

    CreateCharacter.getCharacterClasses().then(function () {
      vm.characterClasses = CreateCharacter.characterClasses;
    });
  }]);
