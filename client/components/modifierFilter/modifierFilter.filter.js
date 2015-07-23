'use strict';

/*
  Ability Score Modifier:
  Takes in a ability score and converts it into a ability score modifier.

  To Use: $filter(asModifier)(input, true);

*/

angular.module('dndApp')
  .filter('asModifier', [function () {
    return function (input, includeSign) {

      // Converts to intergers if possible
      var value = (parseInt(input));
      if (isNaN(value)){
        return 0;
      }

      // Converts the ability score to modifier
      value = Math.floor((value - 10)/2);
      value = (value < -5) ? -5 : value;

      // Applies +/- sign
      if (includeSign) {
        value = (value >= 0) ? ('+' + value) : value.toString();
      }

      return value;
    };
  }]);
