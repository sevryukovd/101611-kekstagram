'use strict';

(function() {


  var IMAGE_WIDTH = 182;
  var IMAGE_HEIGHT = 182;
  var URL_UPLOAD_PICTURES = 'http://localhost:1507/api/pictures';
  var pictures = [];

  var load = function(url, callback, callbackName) {
    if (!callbackName) {
      callbackName = 'cb' + Date.now();
    }

    window[callbackName] = function(data) {
      pictures = data;
      callback(data);
    };

    var script = document.createElement('script');
    script.src = url + '?callback=' + callbackName;
    document.body.appendChild(script);
  };



  var filterHidden = document.querySelector('.filters');
  filterHidden.classList.add('hidden');

  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;

  var picturesContainer = document.querySelector('.pictures');
  var picElement = templateContainer.querySelector('.picture');

  var getPictureElement = function(picture) {
    var pictureElement = picElement.cloneNode(true);
    pictureElement.querySelector('.picture-comments').textContent = picture.comments;
    pictureElement.querySelector('.picture-likes').textContent = picture.likes;
    pictureElement.href = picture.url;
    var backgroundImage = new Image();

    backgroundImage.onload = function() {
      var targetImg = pictureElement.querySelector('img');
      targetImg.src = picture.url;
      targetImg.width = IMAGE_WIDTH;
      targetImg.height = IMAGE_HEIGHT;
    };
    backgroundImage.onerror = function() {
      pictureElement.classList.add('picture-load-failure');
    };

    backgroundImage.src = picture.url;
    return pictureElement;

  };

  var renderPictures = function() {
    pictures.forEach(function(picture) {
      picturesContainer.appendChild(getPictureElement(picture));
    });
    filterHidden.classList.remove('hidden');
  };


  load(URL_UPLOAD_PICTURES, renderPictures);
})();
