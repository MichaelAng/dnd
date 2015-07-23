'use strict';

angular.module('dndApp')
  .filter('quantify', function () {
    return function (count, noun) {

      var value = (parseInt(count));

      if (isNaN(value)){
        return '0 ' + noun + 's';
      }

      if (value === 1) {
        return String(value) + ' ' + noun;
      } else {
        return String(value) + ' ' + noun + 's';
      }
    };
  });
