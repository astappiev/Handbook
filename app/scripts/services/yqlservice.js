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
                return $http.get('https://query.yahooapis.com/v1/public/yql/astappev/handbook-gc_media?format=json');
            },
            getAnalytics: function() {

                function getDay(date) {
                    var day = date.getDate();
                    return day < 10 ? '0' + day : day;
                }
                function getMonth(date) {
                    var month = date.getMonth() + 1;
                    return month < 10 ? '0' + month : month;
                }

                var start = new Date();
                var end = new Date();
                start.setMonth(start.getMonth() - 1);
                var endStr = end.getFullYear() + '-' + getMonth(end) + '-' + getDay(end);
                var startStr = start.getFullYear() + '-' + getMonth(start) + '-' + getDay(start);

                return $http.get('https://query.yahooapis.com/v1/public/yql/astappev/gcbook-analytics?start=' + startStr + '&end=' + endStr + '&format=json');
            }
        };
    });
