'use strict';

var IMAGE_WIDTH = 182;
var IMAGE_HEIGHT = 182;

var template = document.querySelector('template');
var templateContainer = 'content' in template ? template.content : template;

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

module.exports = getPictureElement;
