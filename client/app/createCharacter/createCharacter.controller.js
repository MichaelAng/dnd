'use strict';

angular.module('dndApp')
  .controller('CreateCharacterCtrl', function () {
    var vm = this;

    vm.characterName = '';

    vm.races = [
      {id: 1, race: 'Human',  description: 'a normal guy'},
      {id: 2, race: 'Elf',  description: 'pointy ears'},
      {id: 3, race: 'Dwarf',  description: 'Roughy and tough'}
    ];

    vm.characterClasses = [
      {id: 1, characterClass: 'Cleric',  description: 'a normal guy'},
      {id: 2, characterClass: 'Rogue',  description: 'pointy ears'},
      {id: 3, characterClass: 'Wizard',  description: 'Roughy and tough'}
    ];

  });
