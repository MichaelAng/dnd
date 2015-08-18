'use strict';

angular.module('dndApp')
  .controller('abilityScorePickerCtrl', [function () {
    var vm = this;

    vm.pointsRemaining = 27;

    vm.abilities = [
      {name: 'Strength', nameAbbr: 'Str', points: 8},
      {name: 'Dexterity', nameAbbr: 'Dex', points: 8},
      {name: 'Constitution', nameAbbr: 'Con', points: 8},
      {name: 'Intelligence', nameAbbr: 'Int', points: 8},
      {name: 'Wisdom', nameAbbr: 'Wis', points: 8},
      {name: 'Charisma', nameAbbr: 'Cha', points: 8},
    ];

    //Cost to get points based on abilityPointValue - 8
    vm.standardPoints = [0,1,2,3,4,5,7,9];

    vm.constructSelects = function () {
      var ceiling = 16;
      if (vm.pointsRemaining >= 9) {
        angular.forEach(vm.abilities, function (ability) {
          ability.selectable = _.range(8, ceiling);
        });
      } else {
        if (vm.pointsRemaining <= 5) {
          ceiling = vm.pointsRemaining + 8;
        } else if (vm.pointsRemaining === 7) {
          ceiling = 14;
        } else {
          ceiling = 15;
        }
        ceiling++;
        angular.forEach(vm.abilities, function (ability) {
          if (vm.getCost(ability.points) > vm.pointsRemaining) {
            ability.selectable = _.range(8, ability.points+1);
          } else {
            ability.selectable = _.range(8, ceiling);
          }
        });
      }
    };

    vm.constructSelects();

    vm.getCost = function (abilityPointValue) {
      return vm.standardPoints[abilityPointValue - 8];
    };

    vm.getPossiblePoints = function () {

    };

    vm.recalculatePoints = function () {
      var subtrahend = 0;
      angular.forEach(vm.abilities, function (ability) {
        subtrahend += vm.getCost(ability.points);
      });
      vm.pointsRemaining = 27 - subtrahend;
      vm.constructSelects();
    };

  }]);
