'use strict';

/**
 * @ngdoc directive
 * @name handbook.directive:background
 * @description
 * # background
 */
angular.module('handbook')
    .directive('background', function ($http) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs)
            {
                $http.get('http://www.splashbase.co/api/v1/images/random').success(function (data) {
                    var background = {
                        backgroundImage : 'url(' + data.url + ')',
                        backgroundAttachment : 'fixed',
                        '-webkit-background-size' : 'cover',
                        '-moz-background-size' : 'cover',
                        '-o-background-size' : 'cover',
                        'background-size' : 'cover'
                    };

                    element.css( background );
                });
            }
        };
    });
