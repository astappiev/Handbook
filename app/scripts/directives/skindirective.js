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

            var steveImg = 'data:image/png;base64,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';

            function createSkin()
            {
                var $this = element[0].children;

                var settings = {
                    skinUrl: scope.result.json.skin_url,
                    scale: 6,
                    hat: true,
                    draw : 'model',
                    float : 'left'
                };

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

                    var frontLeft = settings.float === 'left' ? true : false;
                    if(settings.draw === 'model') {
                        drawModel(model, scratchCanv, scratch, settings.hat, frontLeft, settings.scale, skin.width/64);
                    } else {
                        drawHead(model, scratchCanv, scratch, settings.hat, frontLeft, settings.scale, skin.width/64);
                    }
                };
                skin.onerror = function () {
                    var img = new Image();
                    img.src = steveImg;
                    img.onload = function () {
                        scratch.drawImage(img, 0, 0, 64, 32, 0, 0, 64, 32);

                        scaleImage(scratch.getImageData(0, 0, 64, 32), scratch, 0, 0, settings.scale);

                        var frontLeft = settings.float === 'left' ? true : false;
                        if(settings.draw === 'model') {
                            drawModel(model, scratchCanv, scratch, settings.hat, frontLeft, settings.scale, 1);
                        } else {
                            drawHead(model, scratchCanv, scratch, settings.hat, frontLeft, settings.scale, 1);
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
