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
      autoplaySpeed: 3000,
      zIndex: 2
    });
  }
};

var SectionIntro = {
  classes: {
    // root:'.js-intro',
    // prev:'.js-slider-intro-prev', 
    // next:'.js-slider-intro-next'
  },
  init: function init() {
    IntroSlider.init();
    // $(this.classes.prev).on('click',() =>{
    //   IntroSlider.slickPrev();
    // });
    // $(this.classes.next).on('click',() =>{
    //   IntroSlider.slickNext();
    // });
    // $(this.classes.root).hover(()=>{
    //   self.arrowShow();
    // });
  },
  arrowShow: function arrowShow() {
    // $(this.classes.prev + "," + this.classes.next).toggleClass('visible')
  }
};

var ItemSlider = {
  classes: {
    root: '.js-item-slider'
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
      autoplaySpeed: 3000,
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

var SectionSlider = {
  classes: {
    root: '.js-slider',
    prev: '.js-slider-prev',
    next: '.js-slider-next'
  },
  init: function init() {
    ItemSlider.init();
    $(this.classes.prev).on('click', function () {
      ItemSlider.slickPrev();
    });
    $(this.classes.next).on('click', function () {
      ItemSlider.slickNext();
    });
    // $(this.classes.root).hover(()=>{
    //   self.arrowShow();
    // });

    $(this.classes.prev + "," + this.classes.next).addClass('visible');
  }
};

// import Module1 from './test';

console.log(Config);
// =========================================
// Initialization
// =========================================
// Module1.init();
SectionIntro.init();
SectionSlider.init();

$(document).ready(function () {
    $('.main').fullpage({
        fixedElements: '#header',
        sectionSelector: 'section'

    });
});

}());
