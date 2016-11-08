'use strict';
var galleryObject = require('./gallery');
var Picture = require('./picture');
var load = require('./load');

var URL_UPLOAD_PICTURES = 'http://localhost:1507/api/pictures';
var picturesContainer = document.querySelector('.pictures');
var filterHidden = document.querySelector('.filters');


var showPictures = (function() {
  filterHidden.classList.add('hidden');

var renderPictures = function(pictureArray) {
    var newPicture = new Picture(picture, index);
    pictureArray.forEach(function(picture, index) {
      picturesContainer.appendChild(newPicture.element);
    });
    galleryObject.setPictures(pictureArray);

  };

  load(URL_UPLOAD_PICTURES, renderPictures, 'jsonpCallback');
  filterHidden.classList.remove('hidden');
})();

module.exports = showPictures;
