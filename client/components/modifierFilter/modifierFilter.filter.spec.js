'use strict';

describe('modifierFilter.filter.spec.js: ', function () {

  beforeEach(module('dndApp'));

  var modifierFilter;

  beforeEach(inject(function ($filter) {
    modifierFilter = $filter('modifierFilter');
  }));

  it('should convert the ability score to a modifier with plus sign; sign = true', function () {
    expect(modifierFilter(13, true)).toBe('+1');
    expect(modifierFilter(14, true)).toBe('+2');
    expect(modifierFilter(15, true)).toBe('+2');
  });

  it('should convert the ability score to a modifier with minus sign; sign = true', function () {
    expect(modifierFilter(5, true)).toBe('-3');
    expect(modifierFilter(6, true)).toBe('-2');
    expect(modifierFilter(7, true)).toBe('-2');
  });

  it('should convert the ability score to a modifier with no sign; sign = false', function () {
    expect(modifierFilter(17, false)).toBe(3);
  });

  it('should convert the ability score to a modifier with no sign; sign = undefined', function () {
    expect(modifierFilter(17)).toBe(3);
  });

  it('should return 0 when the input is NaN, null, or undefined', function () {
    expect(modifierFilter('snail')).toBe(0);
    expect(modifierFilter(null)).toBe(0);
    expect(modifierFilter()).toBe(0);
  });

});
