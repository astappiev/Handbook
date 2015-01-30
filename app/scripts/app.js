'use strict';

/**
 * @ngdoc overview
 * @name handbook
 * @description
 * # handbook
 *
 * Main module of the application.
 */
angular
    .module('handbook', [
        'ngRoute',
        'ngSanitize'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/index.html', {
            redirectTo: '/'
        })
        .when('/', {
            title: 'Универсальный поиск в мире GreenCubes',
            template: '',
            controller: 'Page'
        })
        .when('/!help', {
            title: 'Как пользоваться поиском',
            controller: 'Page',
            templateUrl: 'views/help.html'
        })
        .when('/!about', {
            title: 'О приложении',
            controller: 'Page',
            templateUrl: 'views/about.html'
        })
        .when('/!top', {
            title: 'Наиболее частые поисковые запросы',
            controller: 'Page',
            templateUrl: 'views/top.html'
        })
        .when('/:query', {
            title: 'Результаты поиска',
            controller: 'Result',
            templateUrl: 'views/result.html'
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeSuccess', function(event, current){
            $rootScope.title = current.$$route.title;
            ga('send', 'pageview', $location.path());
        });
    }).factory('DataCache', function ($cacheFactory) {
        return $cacheFactory('dataCache', {});
    });
