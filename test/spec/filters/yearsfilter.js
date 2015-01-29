'use strict';

describe('Filter: years', function () {

  beforeEach(module('handbook'));

  var yearsFilter;
  beforeEach(inject(function ($filter) {
    yearsFilter = $filter('years');
  }));

});