'use strict';

describe('Directive: prefix', function () {

  // load the directive's module
  beforeEach(module('handbook'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<prefix></prefix>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the prefix directive');
  }));
});
