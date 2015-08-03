'use strict';

describe('createCharacter.service.js: ', function () {
  beforeEach(module('dndApp'));

  var $httpBackend;
  var CreateCharacter;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_CreateCharacter_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    CreateCharacter = _CreateCharacter_;

  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('getCharacterClasses(): ', function () {
    var httpBackendResponse;
    beforeEach(function () {
      httpBackendResponse =
        $httpBackend.expectGET('/api/characterClasses').respond(200, 'hello');
      CreateCharacter.getCharacterClasses();
    });

    it('should get characterClasses with a successful response', function () {
      $httpBackend.flush();
      expect(CreateCharacter.characterClasses).toEqual('hello');
    });

    it('should get characterClasses with a unsuccessful response', function () {
      httpBackendResponse.respond(300, 'no');
      $httpBackend.flush();
      expect(CreateCharacter.characterClasses).toEqual([]);
    });
  });

  describe('getRaces(): ', function () {
    var httpBackendResponse;
    beforeEach(function () {
      httpBackendResponse =
        $httpBackend.expectGET('/api/races').respond(200, 'hello');
      CreateCharacter.getRaces();
    });

    it('should get characterClasses with a successful response', function () {
      $httpBackend.flush();
      expect(CreateCharacter.races).toEqual('hello');
    });

    it('should get characterClasses with a unsuccessful response', function () {
      httpBackendResponse.respond(300, 'no');
      $httpBackend.flush();
      expect(CreateCharacter.races).toEqual([]);
    });
  });

});
