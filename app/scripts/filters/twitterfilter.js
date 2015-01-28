'use strict';

/**
 * @ngdoc filter
 * @name handbook.filter:tweet
 * @name handbook.filter:time
 * @function
 * @description
 * # twitterFilter
 * Filter in the handbook
 */
angular.module('handbook')
    .filter('time', function ($filter) {
        return function (time) {
            var timestamp = new Date(time);
            return $filter('date')(timestamp, 'medium');
        };
    })
    .filter('tweet', function() {
        return function(text) {
            var urlRegex = /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/g;
            var twitterUserRegex = /@([a-zA-Z0-9_]{1,20})/g;
            var twitterHashTagRegex = /\B#([A-Za-zА-Яа-я0-9ё]+)/g;

            text = text.replace(urlRegex, ' <a href="$&" target="_blank">$&</a>').trim();
            text = text.replace(twitterUserRegex, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');
            text = text.replace(twitterHashTagRegex, '<a href="https://twitter.com/search/%23$1" target="_blank">#$1</a>');

            return text;
        };
    });
