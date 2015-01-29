'use strict';

describe('Controller: Result', function () {

  beforeEach(module('handbook'));

  var ResultcontrollerCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultcontrollerCtrl = $controller('Result', {
      $scope: scope
    });
  }));

});
