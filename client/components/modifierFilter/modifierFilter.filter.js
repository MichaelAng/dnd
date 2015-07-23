'use strict';

angular.module('dndApp')
  .filter('modifierFilter', function () {
    return function (input, includeSign) {

      var value = (parseInt(input));

      if (isNaN(value)){
        return 0;
      }

      value = Math.floor((value - 10)/2);

      if (includeSign) {
        if (value > 0) {
          value = '+' + value;
        } else {
          value = value.toString();
        }
      }

      return value;
    };
  });
