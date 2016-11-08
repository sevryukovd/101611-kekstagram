'use strict';

var Gallery = require('./gallery');

var Picture = function(picture, index) {
  this.data = picture;
  this.element = this.getPictureElement(this.data);

  this.element.onclick = function(evt) {
    evt.preventDefault();
    Gallery.show(index);
  };
};

Picture.prototype = {
  remove: function() {
    this.element.onclick = null;
  },


  getPictureElement: function(picture) {
    var IMAGE_WIDTH = 182;
    var IMAGE_HEIGHT = 182;

    var template = document.querySelector('template');
    var templateContainer = 'content' in template ? template.content : template;

    var picElement = templateContainer.querySelector('.picture');
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

  }
};
module.exports = Picture;
