'use strict';

describe('Controller: Search', function () {

  // load the controller's module
  beforeEach(module('handbook'));

  var SearchcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchcontrollerCtrl = $controller('Search', {
      $scope: scope
    });
  }));
});
