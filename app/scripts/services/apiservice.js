'use strict';

/**
 * @ngdoc service
 * @name handbook.apiService
 * @description
 * # apiService
 * Factory in the handbook.
 */
angular.module('handbook')
    .factory('apiService', function ($http) {
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
    });
