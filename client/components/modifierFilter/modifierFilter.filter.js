'use strict';

angular.module('dndApp')
  .filter('asModifier', function () {
    return function (input, includeSign) {

      // filters out intergers only
      var value = (parseInt(input));
      if (isNaN(value)){
        return 0;
      }

      // Converts the ability score to modifier
      value = Math.floor((value - 10)/2);
      value = (value < -5) ? -5 : value;

      // Applies +/- sign
      if (includeSign) {
        value = (value > 0) ? ('+' + value) : value.toString();
      }

      return value;
    };
  });
