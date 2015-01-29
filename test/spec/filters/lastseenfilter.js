'use strict';

describe('Filter: lastseen', function () {

  // load the filter's module
  beforeEach(module('handbook'));

  // initialize a new instance of the filter before each test
  var lastseenFilter;
  beforeEach(inject(function ($filter) {
    lastseenFilter = $filter('lastseen');
  }));

  it('should return the correct time', function () {
    var date = 1422114055;
    expect(lastseenFilter(date, false)).toBe('отсутствует 5 дней');
    expect(lastseenFilter(date * 1000, false)).toBe('отсутствует 5 дней');
  });

});
