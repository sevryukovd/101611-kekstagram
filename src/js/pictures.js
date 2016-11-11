'use strict';
var galleryObject = require('./gallery');
var load = require('./load');
var Picture = require('./picture');

var URL_UPLOAD_PICTURES = 'http://localhost:1507/api/pictures';
var picturesContainer = document.querySelector('.pictures');
var filterHidden = document.querySelector('.filters');
var footer = document.querySelector('.footer');
var PAGE_SIZE = 12;
var GAP = 100;
var pageNumber = 0;
var THROTTLE_TIMEOUT = 100;
var DEFAULT_FILTER = 'filter-new';
var activeFilter = DEFAULT_FILTER;


var showPictures = (function() {
  filterHidden.classList.add('hidden');

  var renderPictures = function(pictureArray) {

    pictureArray.forEach(function(picture, index) {
      var newPicture = new Picture(picture, index);
      picturesContainer.appendChild(newPicture.element);
    });

    galleryObject.setPictures(pictureArray);

  };

  var addPictures = function() {
    if (picturesContainer.getBoundingClientRect().height - 120 < window.innerHeight - footer.getBoundingClientRect().height) {
      loadPictures(activeFilter, ++pageNumber);
    }
  };

  var loadPictures = function(filter, page) {
    load(URL_UPLOAD_PICTURES, {
      from: 0,
      to: page * PAGE_SIZE + PAGE_SIZE,
      filter: filter },
      renderPictures);
  };

  loadPictures(activeFilter, pageNumber);
  addPictures();

  filterHidden.classList.remove('hidden');

  filterHidden.addEventListener('change', function(evt) {
    if (evt.target.classList.contains('filters-radio')) {
      changeFilter(evt.target.id);
    }
  });

  var changeFilter = function(filterID) {
    picturesContainer.innerHTML = '';
    activeFilter = filterID;
    pageNumber = 0;
    loadPictures(filterID, pageNumber);
    addPictures();
  };

  var lastCall = Date.now();


  window.addEventListener('scroll', function() {
    if (Date.now() - lastCall >= THROTTLE_TIMEOUT) {
      if (footer.getBoundingClientRect().bottom - window.innerHeight <= GAP) {
        loadPictures(activeFilter, ++pageNumber);
        addPictures();
      }

      lastCall = Date.now();
    }
  });

})();

module.exports = showPictures;
