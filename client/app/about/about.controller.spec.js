'use strict';

describe('about.controller.js:', function () {

  // load the controller's module
  beforeEach(module('dndApp'));

  var AboutCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should have hello as the initial message', function () {
    expect(scope.message).toEqual('Hello');
  });

  it('should increment by one', function () {
    //Given
    scope.counter = 5;

    //When
    scope.increment();

    //Assert
    expect(scope.counter).toEqual(6);
  });

  it('should decrement by two', function () {
    //Given
    scope.counter = 10;

    //When
    scope.decrement();

    //Assert
    expect(scope.counter).toEqual(8);
  });

  it('should be return odd', function () {
    expect(scope.isOdd(6)).toBeFalsy();
    expect(scope.isOdd(5)).toBeTruthy();
  });

  it('should add a dollar to my bank account', function () {
    expect(scope.message).toEqual('Hello');
    spyOn(scope, 'increment');

    scope.addOneDollar();

    expect(scope.message).toEqual('Got A dollar');
    expect(scope.increment).toHaveBeenCalled();
  });

});
