'use strict';

/**
 * @ngdoc overview
 * @name handbook
 * @description
 * # handbookApp
 *
 * Main module of the application.
 */
angular
    .module('handbook', [
        'ngRoute'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/index.html', {
            redirectTo: '/'
        })
        .when('/', {
            template: '',
            controller: 'Page'
        })
        .when('/!help', {
            controller: 'Page',
            templateUrl: 'views/help.html'
        })
        .when('/!about', {
            controller: 'Page',
            templateUrl: 'views/about.html'
        })
        .when('/!top', {
            controller: 'Page',
            templateUrl: 'views/top.html'
        })
        .when('/:query', {
            controller: 'Result',
            templateUrl: 'views/result.html'
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeSuccess', function(){
            ga('send', 'pageview', $location.path());
        });
    });
