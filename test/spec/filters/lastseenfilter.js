'use strict';

describe('Filter: lastseen', function () {

  // load the filter's module
  beforeEach(module('handbook'));

  // initialize a new instance of the filter before each test
  var lastseenFilter;
  beforeEach(inject(function ($filter) {
    lastseenFilter = $filter('lastseen');
  }));

});
