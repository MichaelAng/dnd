'use strict';

angular.module('dndApp')
  .controller('CharacterCreationCtrl', ['$scope', '$http', function ($scope, $http) {
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
      var ceiling = 16;
      if ($scope.pointsRemaining >= 9) {
        angular.forEach($scope.abilities, function (ability) {
          ability.selectable = _.range(8, ceiling);
        });
      } else {
        if ($scope.pointsRemaining <= 5) {
          ceiling = $scope.pointsRemaining + 8;
        } else if ($scope.pointsRemaining === 7) {
          ceiling = 14;
        } else {
          ceiling = 15;
        }
        ceiling++;
        angular.forEach($scope.abilities, function (ability) {
          if ($scope.getCost(ability.points) > $scope.pointsRemaining) {
            ability.selectable = _.range(8, ability.points+1);
          } else {
            ability.selectable = _.range(8, ceiling);
          }
        });
      }
    };
    $scope.constructSelects();

    $scope.getCost = function (abilityPointValue) {
      return $scope.standardPoints[abilityPointValue - 8];
    };
    $scope.getPossiblePoints = function () {

    };
    $scope.recalculatePoints = function () {
      var subtrahend = 0;
      angular.forEach($scope.abilities, function (ability) {
        subtrahend += $scope.getCost(ability.points);
      });
      $scope.pointsRemaining = 27 - subtrahend;
      $scope.constructSelects();
    };

    $scope.createChar = function () {
      var payload = {
        characterClass: 'cleric',
        name: 'Lord Orc',
        race: 'Orc'
      };

      $http.post('/api/characters', payload)
        .success(function(data) {
          console.log('success', data);
        })
        .error(function() {
          console.log('error');
        });
    };

  }
]);
