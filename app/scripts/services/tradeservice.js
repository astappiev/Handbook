'use strict';

/**
 * @ngdoc service
 * @name handbook.tradeService
 * @description
 * # tradeService
 * Factory in the handbook
 */
angular.module('handbook')
    .factory('tradeService', function ($http) {
        return {
            getShop: function(shopname) {
                return $http.get('http://gctrade.ru/api/shop/' + shopname);
            },
            getPrice: function(item) {
                return $http.get('http://gctrade.ru/api/price/' + item);
            }
        };
    });
