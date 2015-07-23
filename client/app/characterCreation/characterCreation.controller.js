'use strict';

angular.module('dndApp')
  .controller('CharacterCreationCtrl', ['$scope', function ($scope) {
    $scope.pointsRemaining = 27;
    $scope.abilities = [
      {name: 'Strength', nameAbbr: 'Str', points: 8},
      {name: 'Dexterity', nameAbbr: 'Dex', points: 8},
      {name: 'Constitution', nameAbbr: 'Con', points: 8},
      {name: 'Intelligence', nameAbbr: 'Int', points: 8},
      {name: 'Wisdom', nameAbbr: 'Wis', points: 8},
      {name: 'Charisma', nameAbbr: 'Cha', points: 8},
    ];
    //Cost to get points based on abilityPointValue - 8
    $scope.standardPoints = [0,1,2,3,4,5,7,9];

    $scope.constructSelects = function () {
      if ($scope.pointsRemaining >= 9) {
        angular.forEach($scope.abilities, function (ability) {
          ability.selectable = _.range(8, 16);
        });
      }
    };
    $scope.constructSelects();

    $scope.getCost = function (abilityPointValue) {
      return $scope.standardPoints[abilityPointValue - 8];
    };

    $scope.recalculatePoints = function () {
      var subtrahend = 0;
      angular.forEach($scope.abilities, function (ability) {
        subtrahend += $scope.getCost(ability.points);
      });
      $scope.pointsRemaining = 27 - subtrahend;
    };
  }
]);
