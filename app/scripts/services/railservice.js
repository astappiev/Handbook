'use strict';

/**
 * @ngdoc service
 * @name handbook.railService
 * @description
 * # railService
 * Factory in the handbook.
 */
angular.module('handbook')
    .factory('railService', function ($http) {
        return {
            getStats: function(type) {

                var data = { lines: {}, blocks: {}, calculated: {} };

                if (type === 'gcrc') {
                    data.lines.base = 'http://gcmap.ru/api/metro/lines/type/blue';
                    data.lines.planned = 'http://gcmap.ru/api/metro/lines/type/indigo';
                    data.lines.barred = 'http://gcmap.ru/api/metro/lines/type/black';
                    data.lines.unfinished = 'http://gcmap.ru/api/metro/lines/type/yellow';
                    data.blocks.cross = 'http://gcmap.ru/api/metro/blocks/type/s_cross';
                    data.blocks.station = 'http://gcmap.ru/api/metro/blocks/type/s_station';
                    data.blocks.turn = 'http://gcmap.ru/api/metro/blocks/type/s_turn';
                } else if (type === 'metro') {
                    data.lines.base = 'http://gcmap.ru/api/metro/lines/type/default';
                    data.lines.planned = 'http://gcmap.ru/api/metro/lines/type/indigo';
                    data.lines.barred = 'http://gcmap.ru/api/metro/lines/type/black';
                    data.lines.unfinished = 'http://gcmap.ru/api/metro/lines/type/yellow';
                    data.blocks.cross = 'http://gcmap.ru/api/metro/blocks/type/cross';
                    data.blocks.station = 'http://gcmap.ru/api/metro/blocks/type/station';
                    data.blocks.turn = 'http://gcmap.ru/api/metro/blocks/type/turn';
                }

                var promise = $http.get(data.lines.base).then(function(response){
                    data.lines.base = response.data;
                    return $http.get(data.lines.planned);
                }).then(function(response){
                    data.lines.planned = response.data;
                    return $http.get(data.lines.barred);
                }).then(function(response){
                    data.lines.barred = response.data;
                    return $http.get(data.lines.unfinished);
                }).then(function(response){
                    data.lines.unfinished = response.data;
                    data.lines.all = data.lines.barred.concat(data.lines.planned, data.lines.base, data.lines.unfinished);
                    return $http.get(data.blocks.cross);
                }).then(function(response){
                    data.blocks.cross = response.data;
                    return $http.get(data.blocks.station);
                }).then(function(response){
                    data.blocks.station = response.data;
                    return $http.get(data.blocks.turn);
                }).then(function(response){
                    data.blocks.turn = response.data;

                    var courators = {};

                    function findBlock(findID) {
                        /*jshint camelcase: false */
                        var i, len;
                        for (i = 0, len = data.blocks.turn.length; i < len; ++i) {
                            if (data.blocks.turn[i].cb_id === findID) {
                                return data.blocks.turn[i];
                            }
                        }
                        for (i = 0, len = data.blocks.station.length; i < len; ++i) {
                            if (data.blocks.station[i].cb_id === findID) {
                                return data.blocks.station[i];
                            }
                        }
                        for (i = 0, len = data.blocks.cross.length; i < len; ++i) {
                            if (data.blocks.cross[i].cb_id === findID) {
                                return data.blocks.cross[i];
                            }
                        }
                        /*jshint camelcase: true */
                        return 0;
                    }

                    function countLineLength() {
                        var width = 0;
                        for (var i = 0, len = data.lines.base.length; i < len; ++i) {
                            var from = findBlock(data.lines.base[i]._from);
                            var to = findBlock(data.lines.base[i]._to);
                            if (from !== 0 && to !== 0) {
                                width += Math.abs(from.x - to.x) + Math.abs(from.z - to.z);
                            }
                        }
                        return width;
                    }

                    function stationOwner() {
                        if (!courators.lenght) {
                            for (var i = 0, len = data.blocks.station.length; i < len; ++i) {
                                if (data.blocks.station[i].owner !== '') {
                                    if (!courators[data.blocks.station[i].owner]) {
                                        courators[data.blocks.station[i].owner] = 1;
                                    } else {
                                        courators[data.blocks.station[i].owner]++;
                                    }

                                }
                            }
                        }
                        return courators;
                    }

                    function couratorsList() {
                        var courators = stationOwner(), list = [];
                        for (var i = 0, temp = Object.keys(courators), len = temp.length; i < len; ++i) {
                            list.push({
                                name: temp[i],
                                count: courators[temp[i]]
                            });
                        }
                        return list;
                    }

                    function stationList() {
                        var list = [];
                        data.blocks.station.sort(function(stationOne, stationTwo) {
                            if (stationOne.name < stationTwo.name) {
                                return -1;
                            }
                            if (stationOne.name > stationTwo.name) {
                                return 1;
                            }
                            return 0;
                        });
                        for (var i = 0, len = data.blocks.station.length; i < len; ++i) {
                            if(data.blocks.station[i].name !== '') {
                                list.push({ name: data.blocks.station[i].name });
                            }
                        }
                        return list;
                    }

                    function localAreas() {
                        var list = [], local = {}, i, temp, len;
                        for (i = 0, len = data.blocks.station.length; i < len; ++i) {
                            if (/^[A-Za-z0-9]{1,6}_/gi.test(data.blocks.station[i].name) && !(/^[hnwsre]_/gi.test(data.blocks.station[i].name))) {
                                if(!local[data.blocks.station[i].name.split('_')[0]]) {
                                    local[data.blocks.station[i].name.split('_')[0]] = 1;
                                } else {
                                    local[data.blocks.station[i].name.split('_')[0]]++;
                                }
                            }
                        }
                        for (i = 0, temp = Object.keys(local), len = temp.length; i < len; ++i) {
                            if(local[temp[i]] > 1) {
                                list.push({
                                    name: temp[i],
                                    count: local[temp[i]]
                                });
                            }
                        }
                        return list;
                    }

                    /*jshint camelcase: false */
                    data.calculated.lenght = countLineLength();
                    data.calculated.cb_count = data.blocks.station.length + data.blocks.cross.length;
                    data.calculated.courators_count = Object.keys(stationOwner()).length;
                    data.calculated.station_count = data.blocks.station.length;
                    data.calculated.courators_list = couratorsList();
                    data.calculated.station_list = stationList();
                    data.calculated.local_areas = localAreas();
                    /*jshint camelcase: true */

                    return data;
                });

                return promise;
            }
        };
    });