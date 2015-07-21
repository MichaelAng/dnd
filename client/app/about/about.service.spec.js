'use strict';

describe('about.controller.js:', function () {

  // load the controller's module
  beforeEach(module('dndApp'));

  var JoeCoolService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_JoeCoolService_) {
    JoeCoolService = _JoeCoolService_;
  }));

  it('should set JoeCool', function () {
    var name = 'Chris'
    JoeCoolService.setCoolGuy(name);
    expect(JoeCoolService.getCoolGuy()).toEqual(name);
  });

  it('should do things', function () {
    expect(JoeCoolService.isThisGuyCool('Chris')).toBeFalsy();
  });

});

