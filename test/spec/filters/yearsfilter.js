'use strict';

describe('Filter: years', function () {

  // load the filter's module
  beforeEach(module('handbook'));

  // initialize a new instance of the filter before each test
  var yearsFilter;
  beforeEach(inject(function ($filter) {
    yearsFilter = $filter('years');
  }));

  it('should return the input prefixed with "years filter:"', function () {
    var text = 'angularjs';
    expect(yearsFilter(text)).toBe('years filter: ' + text);
  });

});
