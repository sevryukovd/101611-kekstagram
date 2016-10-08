'use strict';


function getMessage(a, b) {
  var result;
  if (typeof (a) === 'boolean') {
    if (a) {
      result = 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    } else {
      result = 'Переданное GIF-изображение не анимировано';
    }

  } else if (typeof (a) === 'number') {
    result = 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + b * 4 + ' атрибутов';

  } else if (Array.isArray(a) && Array.isArray(b)) {
    var artifactsSquare = 0;

    for (var i = 0; i < a.length; i++) {
      artifactsSquare += a[i] * b[i];
    }
    result = 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
  } else if (Array.isArray(a)) {
    var amountOfRedPoints = 0;
    for (var i = 0; i < a.length; i++) {
      amountOfRedPoints += a[i]
    }
    result = 'Количество красных точек во всех строчках изображения:' + amountOfRedPoints;

  } else {
    result = 'Переданы некорректные данные';
  }
  return result;
};