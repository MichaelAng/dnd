'use strict';

angular.module('dndApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.counter = 0;

    $scope.increment = function () {
        $scope.counter++;
    };

    $scope.decrement = function () {
        $scope.counter-=2;
    };

    $scope.isOdd = function (num) {
        return num % 2 === 1;
    };

    $scope.addOneDollar = function () {
        $scope.message = 'Got A dollar';
        $scope.increment();
    };

  });
