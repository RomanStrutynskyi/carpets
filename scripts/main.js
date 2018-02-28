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

var ItemReview = {
  classes: {
    root: '.js-review-slider'
  },
  init: function init() {
    $(this.classes.root).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 500,
      cssEase: 'linear',
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

var SectionReviews = {
  classes: {
    root: '.js-reviews-slider',
    prev: '.js-reviews-slider-prev',
    next: '.js-reviews-slider-next'
  },
  init: function init() {
    ItemReview.init();
    $(this.classes.prev).on('click', function () {
      ItemReview.slickPrev();
    });
    $(this.classes.next).on('click', function () {
      ItemReview.slickNext();
    });
  }
};

var FormModule = {
  classes: {
    root: '.js-form',
    phone: '.js-form-phone',
    thank: '.js-thank'
  },
  init: function init() {
    var _this = this;

    var self = this;
    var captchaImg = $(this.classes.root).find('.captcha').addClass('m-form__captcha-img');
    var captchaInput = $(this.classes.root).find('#id_captcha_1').addClass('m-form__field a-input');
    var captchaLabel = $(this.classes.root).find('label[for="id_captcha_1"], #id_captcha_1').wrapAll("<div class='field m-form__field-captcha'></div>");
    var captchaInputHidden = $(this.classes.root).find('.captcha, .m-form__field-captcha, #id_captcha_0').wrapAll("<div class='m-form__captcha'></div>");
    $(captchaImg).click(function () {
      _this.refrechCaptcha();
    });
    $(document).ready(function () {
      function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + '=') {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }
        return cookieValue;
      }
      $.validator.addMethod("regex", function (value, element, regexp) {
        if (regexp.constructor != RegExp) regexp = new RegExp(regexp);else if (regexp.global) regexp.lastIndex = 0;
        return this.optional(element) || regexp.test(value);
      }, "Please check your input.");
      $(self.classes.phone).mask('+38(099)00-00-000');

      $(self.classes.root).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: {
            required: true,
            regex: /^[+-]{1}[0-9]{2}\([0-9]{3}\)[0-9]{2}\-[0-9]{2}\-[0-9]{3}$/
          },
          description: {
            required: true,
            minlength: 20
          },
          captcha_1: {
            required: true,
            minlength: 4,
            maxlength: 4
          }
        },
        messages: {
          name: {
            required: "Введіть ім'я",
            regex: "Ваше ім'я закоротке",
            minlength: "Ваше ім'я закоротке"
          },
          phone: {
            number: "Неправельний формат номера ",
            required: "Введіть номер телефону",
            regex: "Наприклад: +38(099)12-34-567"
          },
          description: {
            required: "Введіть повідомлення",
            minlength: "Ваше повідомлення закоротке"

          },
          captcha_1: {
            required: "Введіть капчу",
            minlength: "Ваша капча закоротка",
            maxlength: "Ваша капча задовге"
          }
        },
        onclick: true,
        errorClass: "error",
        validClass: "valid",
        highlight: function highlight(element, errorClass, validClass) {
          $(element).parent().children().addClass('error').removeClass(validClass);
        },
        unhighlight: function unhighlight(element, errorClass, validClass) {
          $(element).parent().children().removeClass('error').addClass(validClass);
        }
      });
      $(self.classes.root).submit(function (e) {
        e.preventDefault();
        var that = this;
        if ($(this).valid()) {
          $.ajax({
            url: "/",
            method: $(that).attr('method'),
            data: $(this).serialize(),
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            headers: {
              'X-CSRFToken': getCookie('csrftoken')
            },
            success: function success() {
              if (response.message == "Invalid captcha") {
                $('img.captcha').trigger('click');
              } else {
                self.cleanForm();
              }
            }
          });
        }
      });
    });
  },
  refrechCaptcha: function refrechCaptcha() {
    var self = this;
    var url = location.protocol + "//" + window.location.hostname + ":" + location.port + "/captcha/refresh/";
    $.getJSON(url, {}, function (json) {
      $(self.classes.root).find('#id_captcha_0').val(json.key);
      $(self.classes.root).find('.captcha').attr('src', json.image_url);
      $(self.classes.root).find('#id_captcha_1').val('');
    });
    return false;
  },
  cleanForm: function cleanForm() {
    $(this.classes.root).fadeOut();
    $(this.classes.thank).addClass('m-form__thanks--visible');
  }
};

var Footer = {
  init: function init() {
    FormModule.init();
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
SectionReviews.init();
Footer.init();

$(document).ready(function () {
    $('.main').fullpage({
        fixedElements: '#header',
        sectionSelector: 'section'

    });
});

}());
