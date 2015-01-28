'use strict';

/**
 * @ngdoc directive
 * @name handbook.directive:skin
 * @description
 * # skinDirective
 */
angular.module('handbook')
  .directive('skin', function () {
    return {
        restrict: 'A',
        link: function(scope, element) {

            var defaultImg = 'data:image/png;base64,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';

            function createSkin()
            {
                var $this = element[0].children;

				/*jshint camelcase: false */
                var settings = {
                    skinUrl: scope.result.json.skin_url,
                    scale: 6,
                    hat: true,
                    draw : 'model',
                    float : 'left'
                };
				/*jshint camelcase: true */

                var canvas = $this[0],
					scratchCanv = $this[1],
					model = canvas.getContext('2d'),
					scratch = scratchCanv.getContext('2d'),
					skin = new Image(),
					heightMultiplier = (settings.draw === 'head' ? 17.6 : 44.8);


                scratchCanv.width =  64 * settings.scale;
                scratchCanv.height = 32 * settings.scale;

                canvas.width = 20 * settings.scale;
                canvas.height = heightMultiplier * settings.scale;


                skin.onload = function () {
                    scratchCanv.width =  skin.width * settings.scale;
                    scratchCanv.height = skin.height * settings.scale;
                    scratch.drawImage(skin, 0, 0);

                    scaleImage(scratch.getImageData(0, 0, skin.width, skin.height), scratch, 0, 0, settings.scale);

                    var frontLeft = (settings.float === 'left');
                    if(settings.draw === 'model') {
                        drawModel(model, scratchCanv, scratch, settings.hat, frontLeft, settings.scale, skin.width/64);
                    } else {
                        drawHead(model, scratchCanv, scratch, settings.hat, frontLeft, settings.scale, skin.width/64);
                    }
                };
                skin.onerror = function () {
                    var img = new Image();
                    img.src = defaultImg;
                    img.onload = function () {
                        scratchCanv.width =  img.width * settings.scale;
                        scratchCanv.height = img.height * settings.scale;
                        scratch.drawImage(img, 0, 0);

                        scaleImage(scratch.getImageData(0, 0, img.width, img.height), scratch, 0, 0, settings.scale);

                        var frontLeft = (settings.float === 'left');
                        if(settings.draw === 'model') {
                            drawModel(model, scratchCanv, scratch, settings.hat, frontLeft, settings.scale, img.width/64);
                        } else {
                            drawHead(model, scratchCanv, scratch, settings.hat, frontLeft, settings.scale, img.width/64);
                        }
                    };
                };
                skin.crossOrigin = 'anonymous';
                skin.src = settings.skinUrl;
            }

            function drawHead(model, scratchCanv, showHat, frontLeft, scale, size) {
                var scaleEight = 8 * scale;

                if(frontLeft)
                {
                    // Head - Front
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						scaleEight * size, // sx - source
                        scaleEight * size, // sy
                        scaleEight * size, // swidth
                        scaleEight * size, // swidth
                        2 * scale, // x
                        3/1.2 * scale, // y
                        scaleEight, // width
                        scaleEight // height
                    );

                    // Head - Right
                    model.setTransform(1, -0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						2 * scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						10 * scale,
						13/1.2 * scale,
						scaleEight,
						scaleEight
                    );

                    // Head - Top
                    model.setTransform(-1, 0.5, 1, 0.5, 0, 0);
                    model.drawImage(
						scratchCanv,
						scaleEight * size,
						0,
						scaleEight * size,
						scaleEight * size,
						-5 * scale,
						5 * scale,
						scaleEight,
						scaleEight
                    );

                    if (!showHat) {
						return;
					}

                    // Hat - Front
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						5 * scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						2 * scale,
						3/1.2 * scale,
						scaleEight,
						scaleEight
                    );

                    // Hat - Right
                    model.setTransform(1, -0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						6 * scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						10 * scale,
						13/1.2 * scale,
						scaleEight,
						scaleEight
                    );

                    // Hat - Top
                    model.setTransform(1, 0.5, -1, 0.5, 0, 0);
                    model.drawImage(
						scratchCanv,
						5 * scaleEight * size,
						0,
						scaleEight * size,
						scaleEight * size,
						5 * scale,
						-5 * scale,
						scaleEight,
						scaleEight
                    );
                } else {
                    // Head - Front
                    model.setTransform(1, -0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						scaleEight * size, // sx - source
                        scaleEight * size, // xy
                        scaleEight * size, // swidth
                        scaleEight * size, // swidth
                        10 * scale, // x
                        13/1.2 * scale, // y
                        scaleEight, // width
                        scaleEight // height
                    );

                    // Head - Right
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						0,
						scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						2 * scale,
						3/1.2 * scale,
						scaleEight,
						scaleEight
                    );

                    // Head - Top
                    model.setTransform(-1, 0.5, 1, 0.5, 0, 0);
                    model.scale(-1, 1);
                    model.drawImage(
						scratchCanv,
						scaleEight * size,
						0,
						scaleEight * size,
						scaleEight * size,
						-3 * scale,
						5 * scale,
						scaleEight,
						scaleEight
                    );

                    if (!showHat) {
						return;
					}

                    // Hat - Front
                    model.setTransform(1, -0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						5 * scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						10 * scale,
						13/1.2 * scale,
						scaleEight,
						scaleEight
                    );

                    // Hat - Right
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						4 * scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						scaleEight * size,
						2 * scale,
						3/1.2 * scale,
						scaleEight,
						scaleEight
                    );

                    // Hat - Top
                    model.setTransform(-1, 0.5, 1, 0.5, 0, 0);
                    model.scale(-1, 1);
                    model.drawImage(
						scratchCanv,
						5 * scaleEight * size,
						0,
						scaleEight * size,
						scaleEight * size,
						-3 * scale,
						5 * scale,
						scaleEight,
						scaleEight
                    );
                }
            }

            function drawModel(model, scratchCanv, scratch, showHat, frontLeft, scale, size) {
                var scaleEight = 8 * scale;

                if(frontLeft)
                {
                    // Left Leg
                    // Left Leg - Front
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.scale(-1, 1);
                    model.drawImage(
						scratchCanv,
						4 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						-12 * scale,
						24.4/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Right Leg
                    // Right Leg - Right
                    model.setTransform(-1, 0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						0,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						-16 * scale,
						30.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Right Leg - Front
                    model.setTransform(1, 0.5 ,0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						4 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						4 * scale,
						24.4/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Arm Left
                    // Arm Left - Front
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						44 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						0,
						10/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Arm Left - Top
                    model.setTransform(-1, -0.5, -1, 0.5, 0, 0);
                    model.scale(-1, 1);
                    model.drawImage(
						scratchCanv,
						44 * scale * size,
						16 * scale * size,
						4 * scale * size,
						4 * scale * size,
						10 * scale,
						6 * scale,
						4 * scale,
						4 * scale
                    );

                    // Body
                    // Body - Front
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						20 * scale * size,
						20 * scale * size,
						8 * scale * size,
						12 * scale * size,
						4 * scale,
						10/1.2 * scale,
						scaleEight,
						12 * scale
                    );

                    // Arm Right
                    // Arm Right - Right
                    model.setTransform(1, -0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						40 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						16 * scale,
						26/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Arm Right - Front
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.scale(-1 ,1);
                    model.drawImage(
						scratchCanv,
						44 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						-16 * scale,
						10/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Arm Right - Top
                    model.setTransform(1, 0.5, -1, 0.5, 0, 0);
                    model.scale(-1, 1);
                    model.drawImage(
						scratchCanv,
						44 * scale * size,
						16 * scale * size,
						4 * scale * size,
						4 * scale * size,
						-26 * scale,
						6 * scale,
						4 * scale,
						4 * scale
                    );
                } else {
                    // Left Leg
                    // Left Leg - Front
                    model.setTransform(1, -0.5, 0, 1.2, 0, 0);
                    model.scale(-1, 1);
                    model.drawImage(
						scratchCanv,
						4 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						-16 * scale,
						34.4/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Right Leg
                    // Right Leg - Right
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						0,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						4 * scale,
						26.4/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Right Leg - Front
                    model.setTransform(1, -0.5 ,0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						4 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						8 * scale,
						34.4/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Arm Left
                    // Arm Left - Front
                    model.setTransform(1, -0.5, 0, 1.2, 0, 0);
                    model.scale(-1, 1);
                    model.drawImage(
						scratchCanv,
						44 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						-20 * scale,
						20/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Arm Left - Top
                    model.setTransform(-1, 0.5, 1, 0.5, 0, 0);
                    model.drawImage(
						scratchCanv,
						44 * scale * size,
						16 * scale * size,
						4 * scale * size,
						4 * scale * size,
						0,
						16 * scale,
						4 * scale,
						4 * scale
                    );

                    // Body
                    // Body - Front
                    model.setTransform(1, -0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						20 * scale * size,
						20 * scale * size,
						8 * scale * size,
						12 * scale * size,
						8 * scale,
						20/1.2 * scale,
						scaleEight,
						12 * scale
                    );

                    // Arm Right
                    // Arm Right - Right
                    model.setTransform(1, 0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						40 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						0,
						16/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Arm Right - Front
                    model.setTransform(1, -0.5, 0, 1.2, 0, 0);
                    model.drawImage(
						scratchCanv,
						44 * scale * size,
						20 * scale * size,
						4 * scale * size,
						12 * scale * size,
						4 * scale,
						20/1.2 * scale,
						4 * scale,
						12 * scale
                    );

                    // Arm Right - Top
                    model.setTransform(-1, 0.5, 1, 0.5, 0, 0);
                    model.scale(-1 ,1);
                    model.drawImage(
						scratchCanv,
						44 * scale * size,
						16 * scale * size,
						4 * scale * size,
						4 * scale * size,
						-16 * scale,
						16 * scale,
						4 * scale,
						4 * scale
                    );
                }

                drawHead(model, scratchCanv, scratch, showHat, frontLeft, scale, size);
            }

            function scaleImage(imageData, context, dx, dy, scale) {
                var width = imageData.width, height = imageData.height;
                context.clearRect(0, 0, width, height);

                for (var y = 0; y < height; y++) {
                    for (var x = 0; x < width; x++) {
                        var index = (x + y * width) * 4, fill = imageData.data[index];

                        fill += ',' + imageData.data[index + 1] + ',' + imageData.data[index + 2] + ',' + imageData.data[index + 3];

                        context.fillStyle = 'rgba(' + fill + ')';
                        context.fillRect(dx + x * scale, dy + y * scale, scale, scale);
                    }
                }
            }

            createSkin();
        }
    };
  });
