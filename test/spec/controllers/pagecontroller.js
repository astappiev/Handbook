'use strict';

describe('Controller: Page', function () {

  // load the controller's module
  beforeEach(module('handbook'));

  var PagecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagecontrollerCtrl = $controller('Page', {
      $scope: scope
    });
  }));

});
