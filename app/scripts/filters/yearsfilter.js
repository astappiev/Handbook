'use strict';

/**
 * @ngdoc filter
 * @name handbook.filter:years
 * @function
 * @description
 * # yearsFilter
 * Filter in the handbook
 */
angular.module('handbook')
    .filter('years', function () {
        return function (input) {
            if (input.toString().length === 10) {
                input *= 1000;
            } else if (input.toString().length !== 13) {
                return 'неверный формат';
            }

            var now = new Date();
            var regDate = new Date(input);
            return Math.floor((now - regDate)/(1000*60*60*24*14));
        };
    });
