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
            getShop: function(alias) {
                return $http.get('http://gctrade.ru/api/shop/search/' + alias);
            },
            getGoods: function(item) {
                return $http.get('http://gctrade.ru/api/goods/search/' + item);
            }
        };
    });
