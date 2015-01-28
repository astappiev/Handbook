'use strict';

/**
 * @ngdoc service
 * @name handbook.yqlService
 * @description
 * # yqlService
 * Factory in the handbook
 */
angular.module('handbook')
    .factory('yqlService', function ($http) {
        return {
            getTwitterGC: function() {
                return $http.get('https://query.yahooapis.com/v1/public/yql/astappev/handbook-gc_media?format=json&callback=');
            },
            getAnalytics: function() {
                return $http.get('http://ga.gctrade.ru/handbook.php');
            }
        };
    });
