'use strict';

describe('Filter: years', function () {

  beforeEach(module('handbook'));

  var yearsFilter;
  beforeEach(inject(function ($filter) {
    yearsFilter = $filter('years');
  }));

  it('should return the integer value', function () {
    var regDate = '1346313413';
    expect(yearsFilter(regDate)).toInteger;
  });

});

/*describe('filter', function() {

  // load the filter's module
  beforeEach(module('handbook'));

  describe('years', function() {

    it('should convert boolean values to unicode years or cross',
        inject(function(yearsFilter) {
          expect(yearsFilter(true)).toBe('\u2713');
          expect(yearsFilter(false)).toBe('\u2718');
        }));
  });
});*/