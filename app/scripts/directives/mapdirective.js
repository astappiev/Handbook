'use strict';

/**
 * @ngdoc directive
 * @name handbook.directive:map
 * @description
 * # mapDirective
 */
angular.module('handbook')
  .directive('map', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function(scope, element, attrs) {

			function AdaptCords(pos) {
                var t = parseInt(pos[0], 10);
                pos[0] = -(parseInt(pos[1], 10)-2607);
                pos[1] = 19920 + t;
                return pos;
            }
			
            var map = L.map(attrs.id, {
                maxZoom: 15,
                minZoom: 10,
                crs: L.CRS.Simple
            }).setView([-0.35764, 0.11951], 13);

            L.tileLayer('http://maps.gctrade.ru/tiles/{z}/tile_{x}_{y}.png', {
                noWrap: true
            }).addTo(map);

            var pos1 = new AdaptCords([scope.result.json.coordinates.first[0], scope.result.json.coordinates.first[2]]),
                pos2 = new AdaptCords([scope.result.json.coordinates.second[0], scope.result.json.coordinates.second[2]]);

            var bounds = [map.unproject([pos1[0], pos1[1]], map.getMaxZoom()), map.unproject([pos2[0], pos2[1]], map.getMaxZoom())];
            L.rectangle(bounds, {color: 'red', weight: 2, fillOpacity: 0.4}).addTo(map);
            map.fitBounds(bounds);
        }
    };
  });
