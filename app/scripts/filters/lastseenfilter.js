'use strict';

/**
 * @ngdoc filter
 * @name handbook.filter:lastseen
 * @function
 * @description
 * # lastseenFilter
 * Filter in the handbook
 */
angular.module('handbook')
    .filter('lastseen', function ($filter) {
        return function (time, isHover) {
            if(!time) {
                return 'не посещал(а)';
            }

            if(isHover) {
                return $filter('date')(time, 'medium');
            }

            var local = Date.now();

            if (angular.isDate(time)) {
                time = time.getTime();
            } else if (typeof time === 'string') {
                time = new Date(time).getTime();
            }

            if (angular.isDate(local)) {
                local = local.getTime() - local.getTimezoneOffset();
            }else if (typeof local === 'string') {
                local = new Date(local).getTime() - local.getTimezoneOffset();
            }

            if (typeof time !== 'number') {
                return;
            }

            var offset = Math.abs((local - time) / 1000), span = [],
                MINUTE = 60, HOUR = 3600, DAY = 86400;

            if (offset <= MINUTE) {
                span = ['', 'менее минуты'];
            } else if (offset < (MINUTE * 60)) {
                span = [Math.round(Math.abs(offset / MINUTE)), ['минуту', 'минуты', 'минут']];
            } else if (offset < (HOUR * 24)) {
                span = [Math.round(Math.abs(offset / HOUR)), ['час', 'часа', 'часов']];
            } else if (offset < (DAY * 21)) {
                span = [Math.round(Math.abs(offset / DAY)), ['день', 'дня', 'дней']];
            } else {
                span = ['', 'более 21 дня'];
            }

            if(span[0] !== '') {
                span[1] = (span[0]%10 === 1 && span[0] !== 11) ? span[1][0] : ((span[0]%10 === 2 || span[0]%10 === 3 || span[0]%10 === 4) && span[0] !== 12 && span[0] !== 13 && span[0] !== 14) ? span[1][1] : span[1][2];
            }
            span = span.join(' ');

            return 'отсутствует ' + span;
        };
    });
