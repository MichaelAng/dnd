'use strict';

describe('quantify.filter.spec.js: ', function () {

  beforeEach(module('dndApp'));

  var quantifyFilter;

  beforeEach(inject(function ($filter) {
    quantifyFilter = $filter('quantify');
  }));

  it('should print the number followed by a space, the word, and an S, upon a value greater than 1', function () {
    expect(quantifyFilter(2, 'post')).toBe('2 posts');
    expect(quantifyFilter(3, 'mike')).toBe('3 mikes');
    expect(quantifyFilter(4, 'point')).toBe('4 points');
  });

  it('should print 0 followed by a space, the word, and an S, upon NaN or 0', function () {
    expect(quantifyFilter('test', 'post')).toBe('0 posts');
    expect(quantifyFilter(undefined, 'mike')).toBe('0 mikes');
    expect(quantifyFilter(null, 'point')).toBe('0 points');
    expect(quantifyFilter(0, 'point')).toBe('0 points');
  });

  it('should print 0 followed by a space and the word upon 1', function () {
    expect(quantifyFilter(1, 'point')).toBe('1 point');
  });
});
