'use strict';

/**
 * @ngdoc function
 * @name handbook.controller:Result
 * @description
 * # ResultСontroller
 * Controller of the handbook
 */
angular.module('handbook')
    .controller('Result', function ($scope, $http, $log, $routeParams, $location, apiService, tradeService, yqlService) {
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
                            } else if (price.data) {
                                $scope.results.push({ json: price.data, type: 'price' });
                            }
                        },
                        function() {
                            $log.error('Товар не найден');
                        }
                    );
                }
            } else if(query.charAt(0) === '=') {
                var size = { x: 5, y: 128, z: 5 };
                var mas = query.substr(1).split('*');

                if(mas.length > 2) {
                    size.x = parseInt(mas[0]) === 0 ? 1 : parseInt(mas[0]);
                    size.y = parseInt(mas[1]) === 0 ? 1 : parseInt(mas[1]);
                    size.z = parseInt(mas[2]) === 0 ? 1 : parseInt(mas[2]);
                } else if(mas.length === 2) {
                    size.x = parseInt(mas[0]) === 0 ? 1 : parseInt(mas[0]);
                    size.z = parseInt(mas[1]) === 0 ? 1 : parseInt(mas[1]);
                } else if(mas.length === 1 && mas[0] !== '') {
                    size.x = parseInt(mas[0]) === 0 ? 1 : parseInt(mas[0]);
                    size.z = parseInt(mas[0]) === 0 ? 1 : parseInt(mas[0]);
                }

                $scope.results.push({ json: size, type: 'calc'});
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
                } else if (query === 'news') {
                    yqlService.getTwitterGC().then(
                        function(news) {
                            var count = news.data.query.results.json.json.length;
                            for(var i = 0; i < count; ++i) {
                                $scope.results.push({json: news.data.query.results.json.json[i], type: 'news'});
                            }
                        },
                        function() {
                            $log.error('Новости не загружены');
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
                        if(count) {
                            for(var i = 0; i < count; ++i) {
                                $scope.results.push({json: price.data[i], type: 'price'});
                            }
                        } else if (price.data) {
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
    });
