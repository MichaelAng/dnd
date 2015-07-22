'use strict';

angular.module('dndApp')
  .controller('CharacterCreationCtrl', function ($scope) {
    $scope.pointsRemaining = 27;
    $scope.abilities = [
      {name: 'Strength', nameAbbr: 'Str', points: 8},
      {name: 'Dexterity', nameAbbr: 'Dex', points: 8},
      {name: 'Constitution', nameAbbr: 'Con', points: 8},
      {name: 'Intelligence', nameAbbr: 'Int', points: 8},
      {name: 'Wisdom', nameAbbr: 'Wis', points: 8},
      {name: 'Charisma', nameAbbr: 'Cha', points: 8},
    ];
    $scope.standardPoints = [
      {points: 8, cost:0},
      {points: 9, cost:1},
      {points: 10, cost:2},
      {points: 11, cost:3},
      {points: 12, cost:4},
      {points: 13, cost:5},
      {points: 14, cost:7},
      {points: 15, cost:9}
    ];

    $scope.constructSelects = function () {
      if ($scope.pointsRemaining >= 9) {
        angular.forEach($scope.abilities, function (ability) {
          ability.selectable = _.range(8, 16)
        });
      }
    };
    $scope.constructSelects();
});
