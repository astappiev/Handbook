'use strict';

/**
 * @ngdoc function
 * @name handbook.controller:Page
 * @description
 * # Pagecontroller
 * Controller of the handbook
 */
angular.module('handbook')
    .controller('Page', function ($scope, $log, yqlService) {
        $scope.$parent.query = '';

        $scope.getTop = function() {
            yqlService.getAnalytics().then(
                function(top) {
                    $scope.results = top.data;
                },
                function() {
                    $log.error('Топ50 не загружен');
                }
            );
        };
    });
