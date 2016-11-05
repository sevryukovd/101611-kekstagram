'use strict';

var getPictureElement = require('./picture');
var load = require('./load');
var URL_UPLOAD_PICTURES = 'http://localhost:1507/api/pictures';
var picturesContainer = document.querySelector('.pictures');
var filterHidden = document.querySelector('.filters');

filterHidden.classList.add('hidden');

var renderPictures = function(pictureArray) {
  pictureArray.forEach(function(picture) {
    picturesContainer.appendChild(getPictureElement(picture));
  });
  filterHidden.classList.remove('hidden');
};


load(URL_UPLOAD_PICTURES, renderPictures, 'jsonpCallback');

module.exports = renderPictures;
