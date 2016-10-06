"use strict";

var a; 
var b;

function getMessage(a, b) {
   if (typeof a == "boolean") {
      if (a == true) {
         return ("Переданное GIF-изображение анимировано и содержит [b] кадров");
      } else {
         return ("Переданное GIF-изображение не анимировано");
      }

   }