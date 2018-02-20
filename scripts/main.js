(function () {
'use strict';

// *      Developed by Roman Strutynskyi *//

// =============================================
// Modules navigation
// =============================================

// 1.

// =========================================
// Configuration
// =========================================
var Config = {
  siteName: 'Perfect application'
};

var IntroSlider = {
  classes: {
    root: '.js-intro-slider'
  },
  init: function init() {
    $(this.classes.root).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 1000,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
      zIndex: 2
    });
  },
  slickNext: function slickNext() {
    $(this.classes.root).slick('slickNext');
  },
  slickPrev: function slickPrev() {
    $(this.classes.root).slick('slickPrev');
  }
};

var SectionIntro = {
  classes: {
    root: '.js-intro',
    prev: '.js-slider-intro-prev',
    next: '.js-slider-intro-next'
  },
  init: function init() {
    var self = this;
    IntroSlider.init();
    $(this.classes.prev).on('click', function () {
      IntroSlider.slickPrev();
    });
    $(this.classes.next).on('click', function () {
      IntroSlider.slickNext();
    });
    $(this.classes.root).hover(function () {
      self.arrowShow();
    });
  },
  arrowShow: function arrowShow() {
    $(this.classes.prev + "," + this.classes.next).toggleClass('visible');
  }
};

// import Module1 from './test';

console.log(Config);
// =========================================
// Initialization
// =========================================
// Module1.init();
SectionIntro.init();

$(document).ready(function () {
    $('.main').fullpage({
        fixedElements: '#header',
        sectionSelector: 'section'

    });
});

}());
