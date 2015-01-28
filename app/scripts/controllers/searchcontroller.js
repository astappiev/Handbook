'use strict';

/**
 * @ngdoc function
 * @name handbook.controller:Search
 * @description
 * # SearchСontroller
 * Controller of the handbook
 */
angular.module('handbook')
    .controller('Search', function ($scope, $location) {
        $scope.search = function() {
            $location.path('/' + $scope.query);
        };

        $scope.isEmpty = function (obj) {
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    return false;
                }
            }
            return true;
        };
    });
