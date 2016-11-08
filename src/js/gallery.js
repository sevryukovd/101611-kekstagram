'use strict';

var Gallery = function() {
  this.pictures = [];
  this.activePicture = 0;
  this.galleryOverlay = document.querySelector('.gallery-overlay');
  this.overlayClose = this.galleryOverlay.querySelector('.gallery-overlay-close');
  this.overlayImage = this.galleryOverlay.querySelector('.gallery-overlay-image');

};

Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};

Gallery.prototype.setActivePicture = function(imageIndex) {
  this.activePicture = imageIndex;
  this.overlayImage.src = this.pictures[imageIndex].url;
  this.galleryOverlay.querySelector('.comments-count').textContent = this.pictures[imageIndex].comments;
  this.galleryOverlay.querySelector('.likes-count').textContent = this.pictures[imageIndex].likes;
};

Gallery.prototype.show = function(imageIndex) {
  this.galleryOverlay.classList.remove('invisible');

  this.setActivePicture(imageIndex);

  var self = this;

  this.overlayClose.onclick = function() {
    self.hide();
  };
  this.overlayImage.onclick = function() {
    if(self.activePicture === self.pictures.length - 1) {
      self.setActivePicture(0);
    } else {
      self.setActivePicture(self.activePicture + 1);
    }
  };
};

Gallery.prototype.hide = function() {
  this.galleryOverlay.classList.add('invisible');
  this.overlayClose.onclick = null;
  this.overlayImage.onclick = null;
};

module.exports = new Gallery();
