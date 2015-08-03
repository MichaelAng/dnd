'use strict';

describe('Service: createCharacter', function () {

  // load the service's module
  beforeEach(module('dndApp'));

  // instantiate service
  var createCharacter;
  beforeEach(inject(function (_createCharacter_) {
    createCharacter = _createCharacter_;
  }));

  it('should do something', function () {
    expect(!!createCharacter).toBe(true);
  });

});
