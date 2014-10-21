'use strict';

/**
 * @ngdoc directive
 * @name handbook.directive:prefix
 * @description
 * # prefixDirective
 */
angular.module('handbook')
  .directive('prefix', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<span></span>',
        link: function(scope, element) {
		
			function setColor(symbol)
            {
                var color = '000';

                switch (symbol) {
                    case '0':
                        break;
                    case '1':
                        color = '0000AA';
                        break;
                    case '2':
                        color = '00AA00';
                        break;
                    case '3':
                        color = '00AAAA';
                        break;
                    case '4':
                        color = 'AA0000';
                        break;
                    case '5':
                        color = 'AA00AA';
                        break;
                    case '6':
                        color = 'FFAA00';
                        break;
                    case '7':
                        color = 'AAAAAA';
                        break;
                    case '8':
                        color = '555555';
                        break;
                    case '9':
                        color = '5555FF';
                        break;
                    case 'a':
                        color = '55FF55';
                        break;
                    case 'b':
                        color = '55FFFF';
                        break;
                    case 'c':
                        color = 'FF5555';
                        break;
                    case 'd':
                        color = 'FF55FF';
                        break;
                    case 'e':
                        color = 'FFFF55';
                        break;
                    case 'f':
                        color = 'fff';
                        break;
                    default:
                        color = false;
                        break;
                }

                return color;
            }
		
            if(!scope.result.json.prefix) {
				return;
			}

            var prefix = scope.result.json.prefix;
            var output = '';
            var count = prefix.length;

            for(var i = 0; i < count; ++i)
            {
                if(prefix[i] === '&')
                {
                    if(i < count-3)
                    {
                        var color = '';
                        if(prefix[i+1] !== 'r')
                        {
                            color = setColor(prefix[i+1]);
                            i++;
                        }
                        else
                        {
                            color = prefix[i+4] + prefix[i+5] + prefix[i+6] + prefix[i+7]+ prefix[i+8]+ prefix[i+9];
                            i+=9;
                        }
                        
                        if(i === '1') {
							output += '<span style="color: #' + ((color)?color:'000') + '">';
						} else {
							output += '</span><span style="color: #' + ((color)?color:'000') + '">';
						}
                    }
                    else
                    {
                        output += '</span>';
                        i++;
                    }

                }
                else
                {
                    output += prefix[i];
                }
            }

            element.html(output);
        }
    };
  });
