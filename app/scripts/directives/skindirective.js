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

            function createSkin()
            {
                var $this = element[0].children;
				var defaultImg = 'images/default_skin.png';

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

            function drawHead(model, scratchCanv, scratch, showHat, frontLeft, scale, size) {
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
