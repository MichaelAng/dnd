'use strict';

angular.module('dndApp')
  .controller('CharacterCreationCtrl', function ($scope) {
    $scope.abilities = [
        {name: 'Strength', nameAbbr: 'Str', score: 10},
        {name: 'Dexterity', nameAbbr: 'Dex', score: 10},
        {name: 'Constitution', nameAbbr: 'Con', score: 10},
        {name: 'Intelligence', nameAbbr: 'Int', score: 10},
        {name: 'Wisdom', nameAbbr: 'Wis', score: 10},
        {name: 'Charisma', nameAbbr: 'Cha', score: 10},
    ];

  });
