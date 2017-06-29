(function(){

$(document).ready(function(){
  /*$('.commercial').fadeIn(3000);

  //video shows
  $('.commercial').on('click', function(){
    $('.video-lockup').show();
    $('.header-copy').fadeOut('slow');
  });

  //video disappears
  $('.video-lockup .exit-video').on('click', function(){
    $('.header-copy').show();
    setTimeout(function(){
      $('.video-lockup').fadeOut('slow');
    }, 100);
  });*/

  //Testimonials code

  function doFade(){
      $(".quote-one").fadeIn(4000,function() {
          $(".quote-one").delay(6000).fadeOut(4000);
          setTimeout(fadeTwo,10000);
      });
  }

  function fadeTwo(){
      $(".quote-two").fadeIn(4000,function() {
          $(".quote-two").delay(6000).fadeOut(4000);
          setTimeout(fadeThree,10000);
      });
  }

  function fadeThree(){
      $(".quote-three").fadeIn(4000,function() {
          $(".quote-three").delay(6000).fadeOut(4000);
          setTimeout(fadeFour,10000);
      });
  }

  function fadeFour(){
      $(".quote-four").fadeIn(4000,function() {
          $(".quote-four").delay(6000).fadeOut(4000);
          setTimeout(doFade,10000);
      });
  }

  doFade();


  //mailer lite pop up
  (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
    var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?'+(~~(new Date().getTime()/10000000));
_.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

var ml_account = ml('accounts', '808683', 'b9g5k8j5d5', 'load');

//subscribe button show form
$('.subscribe').on('click', function(){
  $('.inspo').hide();
  $('.shop .subscribe').hide();
  $('.consulting-page').hide();
  $('.events-page').hide();
  $('.contact-page').hide();
  $('.home-page').show();
  $('#mlb2-5249483').fadeIn();
});

//subscribe button submit
  function ml_webform_success_5249483() {
      var $ = ml_jQuery || jQuery;
      $('.ml-subscribe-form-5249483 .ml-block-success').show();
      $('.ml-subscribe-form-5249483 .ml-block-form').hide();
  };


  //home page link
  $('.logo').on('click', function(){
    $('.consulting-page').hide();
    $('.events-page').hide();
    $('.contact-page').hide();
    $('.home-page').show();
  });

  $('.home-link').on('click', function(){
    $('.consulting-page').hide();
    $('.event-page').hide();
    $('.contact-page').hide();
    $('.home-page').show();
  });

  //event page link
  $('.event-link').on('click', function(){
    $('.home-page').hide();
    $('.consulting-page').hide();
    $('.contact-page').hide();
    $('.event-page').show();
    $('.inspo').show();
    $('.shop .subscribe').show();
    $('#mlb2-5249483').hide();
    $('.access').show();
    $('.icon-row').show();
    $('#mlb2-5250485').hide();
  });

  //consulting page link
  $('a .learn').on('click', function(){
    $('.home-page').hide();
    $('.event-page').hide();
    $('.contact-page').hide();
    $('.inspo').show();
    $('.shop .subscribe').show();
    $('#mlb2-5249483').hide();
    $('.consulting-page').fadeIn();
    $('.access').show();
    $('.icon-row').show();
    $('#mlb2-5250485').hide();
  });

  $('.home-page .learn').on('click', function(){
    $('.home-page').hide();
    $('.event-page').hide();
    $('.contact-page').hide();
    $('.inspo').show();
    $('.shop .subscribe').show();
    $('#mlb2-5249483').hide();
    $('.consulting-page').fadeIn();
    $('.access').show();
    $('.icon-row').show();
    $('#mlb2-5250485').hide();
  });

  $('.consulting-link').on('click', function(){
    $('.home-page').hide();
    $('.event-page').hide();
    $('.contact-page').hide();
    $('.inspo').show();
    $('.shop .subscribe').show();
    $('#mlb2-5249483').hide();
    $('.consulting-page').show();
    $('.access').show();
    $('.icon-row').show();
    $('#mlb2-5250485').hide();
  });

  //contact page link
  $('.contact-link').on('click', function(){
    $('.home-page').hide();
    $('.event-page').hide();
    $('.consulting-page').hide();
    $('.inspo').show();
    $('.shop .subscribe').show();
    $('#mlb2-5249483').hide();
    $('.contact-page').fadeIn();
    $('.access').show();
    $('.icon-row').show();
    $('#mlb2-5250485').hide();
  });

  //access button goes to form
  $('.jumpstart .access').on('click', function(){
    $('.access').hide();
    $('.icon-row').hide();
    $('#mlb2-5250485').css('display', 'flex');
  });

  //get branded button goes to form
  $('.go-to-form').on('click', function(){
    $('.home-page').hide();
    $('.event-page').hide();
    $('.consulting-page').hide();
    $('.inspo').show();
    $('.shop .subscribe').show();
    $('#mlb2-5249483').hide();
    $('.contact-page').fadeIn();
    $('.access').show();
    $('.icon-row').show();
    $('#mlb2-5250485').hide();
  });

  $('.get-branded-button').on('click', function(){
    $('.home-page').hide();
    $('.event-page').hide();
    $('.consulting-page').hide();
    $('.inspo').show();
    $('.shop .subscribe').show();
    $('#mlb2-5249483').hide();
    $('.contact-page').fadeIn();
    $('.access').show();
    $('.icon-row').show();
    $('#mlb2-5250485').hide();
  });

  //show strategy copy
  $('.strategy .text-block').on('click', function(){
    $('.copy-box').show();
    $('.creative-copy').hide();
    $('.training-copy').hide();
    $('.strategy-copy').fadeIn();
  });

  //show creative copy
  $('.creative .text-block').on('click', function(){
    $('.copy-box').show();
    $('.strategy-copy').hide();
    $('.training-copy').hide();
    $('.creative-copy').fadeIn();
  });

  //show training copy
  $('.training .text-block').on('click', function(){
    $('.copy-box').show();
    $('.strategy-copy').hide();
    $('.creative-copy').hide();
    $('.training-copy').fadeIn();
  });

  //hide copy box
  $('.copy-box .fa').on('click', function(){
    $('.copy-box').hide();
  });


$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  //navbar turns gray
  if(wScroll > $('.disruptive').offset().top-($(window).height()/1.2)) {
    $('nav').addClass('scrolling');
  }

  //first icon set floats in
  if(wScroll > $('.our-approach').offset().top - ($(window).height() / 1.2)) {
    $('.icon-block').each(function(i){
      setTimeout(function() {
      $('.our-approach .icon-block').eq(i).addClass('is-showing');
    }, 150 * (i+1));
  });
  }

 //second icon set floats in

  if(wScroll > $('.jumpstart').offset().top - ($(window).height() / 1.2)) {
    $('.icon-block').each(function(i){
      setTimeout(function() {
      $('.jumpstart .icon-block').eq(i).addClass('is-showing');
    }, 150 * (i+1));
  });
  }

  //consulting icon set floats in

  if(wScroll > $('.building').offset().top - ($(window).height() / 1.2)) {
    $('.icon-block').each(function(i){
      setTimeout(function() {
      $('.building .icon-block').eq(i).addClass('is-showing');
    }, 150 * (i+1));
  });
  }

  //learn more button slide up
  if(wScroll > $('.our-approach').offset().top - ($(window).height() / 1.5)){
    $('.learn').addClass('slide-up');
  }

  //access button slide up
  if(wScroll > $('.blurb').offset().top - ($(window).height() / 1.5)){
    $('.access').addClass('slide-up');
  }

  //consulting page get branded button slide up
  if(wScroll > $('.building').offset().top - ($(window).height() / 1.5)){
    $('.get-branded-button').addClass('slide-up');
  }

  //quote fade in
  if(wScroll > $('.photo-two').offset().top - ($(window).height() / 1.2)){
    $('.quote').addClass('enter');
  }

  //journal fades in
  if(wScroll > $('.shop').offset().top - ($(window).height() / 2)){
    $('.journal-pic').addClass('show');
    $('.journal-copy').addClass('show');
  }


});

});

//Shopify Button Code

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'shop-lady-rebranded.myshopify.com',
      apiKey: 'adcafec2856d0bce2e04f5e1fb1260be',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [10505625223],
        node: document.getElementById('product-component-154000897be'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "buttonDestination": "checkout",
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": true,
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "PRE-ORDER NOW"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "100px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "width": "220%",
        "margin-bottom": "50px",
        "background-color": "2f2bad",
        "font-family": "futura",
        "font-weight": "bold",
        "font-size": "26px",
        "padding-top": "5px",
        "padding-bottom": "5px",
        ":hover": {
          "color": "$lr-red",
          "background-color": "2f2bad",
          "cursor": "pointer",
          "letter-spacing": "3px",
          "transition": "all 1s ease-in"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#2a279c"
        }
      },
      "title": {
        "color": "#f71568"
      },
      "price": {
        "font-family": "futura",
        "font-size": "22px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "compareAt": {
        "font-size": "18.7px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "width": '30vw',
        "background-color": "#2f2bad !important",
        "background": "-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
        "background": "-o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
        "background": "-moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
        "background": "linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
        "font-size": "24px",
        "font-family": 'futura',
        "padding-top": "12px",
        "padding-bottom": "12px",
        ":hover": {
          "background-color": "#2a279c !important",
          "background": "-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
          "background": "-o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
          "background": "-moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
          "background": "linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#2a279c"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "50%",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#2f2bad !important",
        "font-size": "18px",
        "font-family": "futura",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          //"background-color": "#2a279c"
        },
        "border-radius": "5px",
        ":focus": {
          //"background-color": "#2a279c"
        }
      },
      "quantityInput": {
        "font-size": "18px",
        "font-family": "futura",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#2f2bad",
        ":hover": {
          "background-color": "#2a279c"
        },
        ":focus": {
          "background-color": "#2a279c"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();



})();
