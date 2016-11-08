'use strict';
var galleryObject = require('./gallery');
var load = require('./load');
var Picture = require('./picture');

var URL_UPLOAD_PICTURES = 'http://localhost:1507/api/pictures';
var picturesContainer = document.querySelector('.pictures');
var filterHidden = document.querySelector('.filters');


var showPictures = (function() {
  filterHidden.classList.add('hidden');

  var renderPictures = function(pictureArray) {

    pictureArray.forEach(function(picture, index) {
      var newPicture = new Picture(picture, index);
      picturesContainer.appendChild(newPicture.element);
    });
    galleryObject.setPictures(pictureArray);

  };


  load(URL_UPLOAD_PICTURES, renderPictures, 'jsonpCallback');
  filterHidden.classList.remove('hidden');
})();


module.exports = showPictures;
