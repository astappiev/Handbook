'use strict';

/**
 * @ngdoc function
 * @name handbook.controller:Result
 * @description
 * # ResultСontroller
 * Controller of the handbookApp
 */
angular.module('handbook')
    .controller('Result', function ($scope, $http, $log, $routeParams, $location, apiService, tradeService) {
        $scope.Math = window.Math;

        var query = $routeParams.query;
        $scope.$parent.query = query;
        query = query.trim().toLocaleLowerCase().replace(',', '.');

        $scope.searched = false;
        $scope.results = [];

        /* Begin search */
        (function(){
            if(query.charAt(1) === ':') {
                if(query.charAt(0) === 'r') {
                    apiService.getRegion(query.substr(2)).then(
                        function(region) {
                            $scope.results.push({ json: region.data, type: 'region' });
                        },
                        function() {
                            $log.error('Регион не найден');
                        }
                    );
                } else if(query.charAt(0) === 'u') {
                    apiService.getUser(query.substr(2)).then(
                        function(user) {
                            $scope.results.push({ json: user.data, type: 'user' });
                        },
                        function() {
                            $log.error('Пользователь не найден');
                        }
                    );
                } else if(query.charAt(0) === 's') {
                    tradeService.getShop(query.substr(2)).then(
                        function(shop) {
                            var count = shop.data.length;
                            for(var i = 0; i < count; ++i) {
                                $scope.results.push({ json: shop.data[i], type: 'shop' });
                            }
                        },
                        function() {
                            $log.error('Магазин не найден');
                        }
                    );
                } else if(query.charAt(0) === 'p') {
                    tradeService.getPrice(query.substr(2)).then(
                        function(price) {
                            var count = price.data.length;
                            if(count > 1) {
                                for(var i = 0; i < count; ++i) {
                                    $scope.results.push({json: price.data[i], type: 'price'});
                                }
                            } else {
                                $scope.results.push({ json: price.data, type: 'price' });
                            }
                        },
                        function() {
                            $log.error('Товар не найден');
                        }
                    );
                }
            } else if(query.charAt(0) === '=') {
                var data = { x: 5, y: 128, z: 5 };
                var mas = query.substr(1).split('*');

                if(mas.length > 2) {
                    data.x = parseInt(mas[0]) === 0 ? 1 : parseInt(mas[0]);
                    data.y = parseInt(mas[1]) === 0 ? 1 : parseInt(mas[1]);
                    data.z = parseInt(mas[2]) === 0 ? 1 : parseInt(mas[2]);
                } else if(mas.length === 2) {
                    data.x = parseInt(mas[0]) === 0 ? 1 : parseInt(mas[0]);
                    data.z = parseInt(mas[1]) === 0 ? 1 : parseInt(mas[1]);
                } else if(mas.length === 1 && mas[0] !== '') {
                    data.x = parseInt(mas[0]) === 0 ? 1 : parseInt(mas[0]);
                    data.z = parseInt(mas[0]) === 0 ? 1 : parseInt(mas[0]);
                }

                $scope.results.push({ json: data, type: 'calc'});
            } else {
                var onlyPage = false;
                if(query.charAt(0) === '!') {
                    query = query.substr(1);
                    onlyPage = true;
                }

                if (query === 'calc') {
                    $scope.$parent.query = '';
                    var data = {x: 5, y: 128, z: 5};
                    $scope.results.push({json: data, type: 'calc'});
                } else if (query === 'online') {
                    apiService.getOnline().then(
                        function (online) {
                            $scope.results.push({ json: online.data, type: 'online' });
                        },
                        function () {
                            $log.error('Список игроков не загружен');
                        }
                    );
                }

                if(onlyPage) {
                    return;
                }

                apiService.getUser(query).then(
                    function(user) {
                        $scope.results.push({ json: user.data, type: 'user' });
                    },
                    function() {
                        $log.error('Пользователь не найден');
                    }
                );
                apiService.getRegion(query).then(
                    function(region) {
                        $scope.results.push({ json: region.data, type: 'region' });
                    },
                    function() {
                        $log.error('Регион не найден');
                    }
                );
                tradeService.getShop(query).then(
                    function(shop) {
                        var count = shop.data.length;
                        for(var i = 0; i < count; ++i) {
                            $scope.results.push({ json: shop.data[i], type: 'shop' });
                        }
                    },
                    function() {
                        $log.error('Магазин не найден');
                    }
                );
                tradeService.getPrice(query).then(
                    function(price) {
                        var count = price.data.length;
                        if(count > 1) {
                            for(var i = 0; i < count; ++i) {
                                $scope.results.push({json: price.data[i], type: 'price'});
                            }
                        } else {
                            $scope.results.push({ json: price.data, type: 'price' });
                        }
                    },
                    function() {
                        $log.error('Товар не найден');
                    }
                );
            }
        })();
        /* Finish search */

        $scope.searched = true;

    }).factory('apiService', function($http) {
        return {
            getUser: function(username) {
                return $http.get('https://api.greencubes.org/users/' + username);
            },
            getOnline: function() {
                return $http.get('https://api.greencubes.org/main/online');
            },
            getRegion: function(name) {
                return $http.get('https://api.greencubes.org/main/regions/' + name).success(function (data) {
                    data.coordinates.first = data.coordinates.first.split(' ');
                    data.coordinates.second = data.coordinates.second.split(' ');
                    data.coordinates.x = Math.abs(data.coordinates.first[0] - data.coordinates.second[0]) + 1;
                    data.coordinates.y = Math.abs(data.coordinates.first[1] - data.coordinates.second[1]) + 1;
                    data.coordinates.z = Math.abs(data.coordinates.first[2] - data.coordinates.second[2]) + 1;
                });
            }
        };
    }).factory('tradeService', function($http) {
        return {
            getShop: function(shopname) {
                return $http.get('http://gctrade.ru/api/shop/' + shopname);
            },
            getPrice: function(item) {
                return $http.get('http://gctrade.ru/api/price/' + item);
            }
        };
    });
