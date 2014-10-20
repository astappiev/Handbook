'use strict';

/**
 * @ngdoc function
 * @name handbook.controller:Page
 * @description
 * # Pagecontroller
 * Controller of the handbookApp
 */
angular.module('handbook')
    .controller('Page', function ($scope, $http) {
        $scope.$parent.query = '';

        $scope.getTop = function() {
            $http.get('http://ga.gctrade.ru/handbook.php')
                .success(function (data) {
                    $scope.results = data;
                })
                .error(function(data, status) {
                    console.log(data, status);
                });
        };
    });
