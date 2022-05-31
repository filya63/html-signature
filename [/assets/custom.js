// Style Selector Slider
$( document ).ready(function() {
  
// var untilinit = setInterval(weglotInitCallback, 1000, Weglot);

// function weglotInitCallback(Weglot){
//   if(undefined !== Weglot){
//   	Weglot.initialize({ api_key:"wg_86c3e29bc227b970e3b31f116d42e5549" });
//     clearInterval(untilinit);
//   }
// }
  
  if($.fn.slick){
    $('.styles-wrapper').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      asNavFor: '.styles-wrapper-dot',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.styles-wrapper-dot').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.styles-wrapper',
      dots: false,
      arrows: false,
      focusOnSelect: true
    });
    
    if($(window).width() < 768){
      console.log(111);
      $('.m-variants').slick({
        infinite: false,
        dots:true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }); 
      setTimeout(function(){
        $('.m-variants').slick('slickGoTo', 1);
      },500);
      
     // $(".slick-track").css("max-width", $(window).width());

    }
  }
});
// Show Advance Style
$(".show-advacnce-option").click(function(){
  $(this).addClass("d-none");
  $(".uberlogo-option").addClass("d-block");
});

// Industry Select
// $("#Country").chosen({no_results_text: "Oops, nothing found!"});

//Advanced style
$('.range-selector-overlay').click(function(e){
   $(this).parent().addClass('active');
});

 $('.rc-slider-dot').click(function(e){
   $(this).addClass('rc-slider-dot-active');
});
// $('.option-selector .option #purpose_gift').click(function(e) {
//    $('.child-questions').css('display', 'none');
//    $('.step-1 .step-btn').css('display', 'none');
//    $('.step-buttons-wrapper .checkout-btn').css('display', 'block');
// });


var attributeObj = [];
//attributeObj.push({"attributeName": "Collar Style","values": [imgattr[0]]});

$('[name="Chosen Style"]').change(function(){
  $('.block1 h4').removeClass('error').text('CLICK ON THE STYLE YOU SELECTED FOR YOUR LOGO');
  attributeObj[0] = {"attributeName": "Chosen Style","values": $(this).val()};
});

$('[name="_purpose"]').change(function(){
  attributeObj[1] = {"attributeName": "_purpose","values": $(this).val()};
});

$('[name="_currentLogo"]').change(function(){
  attributeObj[2] = {"attributeName": "_currentLogo","values": $(this).val()};
});


$('[name="_whereWillBeUsed"]').change(function(){
  var strbeused = '';
  $('[name="_whereWillBeUsed"]:checked').each(function(){
    strbeused += $(this).val() +',';
  });
  attributeObj[3] = {"attributeName": "_whereWillBeUsed","values": strbeused.replace(/,\s*$/, "")};
});

$('[name="_industry"]').change(function(){
  attributeObj[4] = {"attributeName": "_industry","values": $(this).val()};
});

$('[name="_team"]').change(function(){
  attributeObj[5] = {"attributeName": "_team","values": $(this).val()};
});

function customProperties(attributeObj){
  attributeObj = attributeObj.filter(Boolean);
  var customProp = '';
  $.each(attributeObj, function (i,value) {
    customProp += '<input name="properties['+value.attributeName+']" type="hidden" value="'+value.values+'" />';
  });
  $('.customProperties').html(customProp);
}

$('.step.step-1 .step-buttons-wrapper button').click(function(){
  if(false){
    $('.block1 h4').addClass('error').text('CLICK AND SELECT THE STYLE THAT YOU WANT FOR YOUR LOGO');
/*    $('html, body').animate({scrollTop: $('.form-section').offset().top}, 500); */
    return false;
  } else {
    $('.step.step-1').addClass('hide');
    $('.step.step-2').removeClass('hide');
    $('.stepnumber2').addClass('active');
    $('.steps-progressbar .progress').css('width','66.6666%');
    $('.step-current').text('STEP 2');
    $('[name="_signature"]').focus()
    $('html, body').animate({scrollTop: $('.form-section').offset().top}, 500);
  }
});

$('[name="_signature"]').keyup(function(e) {
  if($(this).val() != ''){
    $('[name="_signature"]').siblings('.Input__error').addClass('hide');
  } else {
    $('[name="_signature"]').siblings('.Input__error').removeClass('hide');
  }
});


$('.step.step-2 .step-buttons-wrapper button.step-btn-back').click(function(){
  $('.step.step-1').removeClass('hide');
  $('.step.step-2').addClass('hide');
  $('.stepnumber2').removeClass('active');
  $('.steps-progressbar .progress').css('width','33.3333%');
  $('.step-current').text('STEP 1');
  $('html, body').animate({scrollTop: $('.form-section').offset().top}, 500);
});

$('.step.step-2 .step-buttons-wrapper button.step-btn').click(function(){
  if($('[name="_signature-tagline"]').val() != "") {
    attributeObj[7] = {"attributeName": "_signature-tagline","values": $('[name="_signature-tagline"]').val()};
  } 
  
  if($('[name="_designer-tagline"]').val() != "") {
    attributeObj[8] = {"attributeName": "_designer-tagline","values": $('[name="_designer-tagline"]').val()};
  } 
  
  if($('[name="_signature"]').val() == ""){
    $('[name="_signature"]').focus().siblings('.Input__error').removeClass('hide');
    $('html, body').animate({scrollTop: $('[name="_signature"]').offset().top}, 500);
    return false;
  } else {
    attributeObj[6] = {"attributeName": "_signature","values": $('[name="_signature"]').val()};
    $('.step.step-2').addClass('hide');
    $('.step.step-3').removeClass('hide');
    $('.stepnumber3').addClass('active');
    $('.steps-progressbar .progress').css('width','100%');
    $('.step-current').text('STEP 3');
    //$('[name="_email"]').focus();
    $('html, body').animate({scrollTop: $('.product__info-wrapper').offset().top}, 500);
  }
});


$('[name="_email"]').keyup(function(){
  var email = $(this).val();
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email)) {
    $('[name="_email"]').focus().siblings('.Input__error').removeClass('hide');
    //alert('Please provide a valid email address');
    $("#email").text(email+" is not a valid email");
    email.focus;
    //return false;
  } else {
    $('[name="_email"]').focus().siblings('.Input__error').addClass('hide');
  }
});

$('[name="_phone"]').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});

$('.step.step-3 .step-btn-back').click(function(){
  $('.step.step-2').removeClass('hide');
  $('.step.step-3').addClass('hide');
  $('.stepnumber3').removeClass('active');
  $('.steps-progressbar .progress').css('width','66.6666%');
  $('.step-current').text('STEP 2');
  $('html, body').animate({scrollTop: $('[name="_signature"]').offset().top}, 500);
});

$('[name="accept"]').click(function() {
  if (!$(this).is(':checked')) {
    $('[name="accept"]').siblings('.Input__error').removeClass('hide');
    $('.terms-condition-wrapper').addClass('errordd');
  } else {
  	$('[name="accept"]').siblings('.Input__error').addClass('hide');
    $('.terms-condition-wrapper').removeClass('errordd');
  }
});


$('.art-pdp .product-form__submit').click(function(){
  if(!$('[name="accept"]').is(':checked')) {
    $('[name="accept"]').siblings('.Input__error').removeClass('hide');
    $('.terms-condition-wrapper').addClass('errordd');
    $('[name="accept"]').focus();
    return false;
  } else {
    //attributeObj[9] = {"attributeName": "_email","values": $('[name="_email"]').val()};
    customProperties(attributeObj);
    $(this).closest('form').submit();
    return true;
  }
  
//   if($('[name="_phone"]').val() != "") {
//     attributeObj[10] = {"attributeName": "_phone","values": $('[name="_phone"]').val()};
//   } 
  
  /*
  if($('[name="_email"]').val() == ""){
    $('[name="_email"]').focus().siblings('.Input__error').removeClass('hide');
    $('html, body').animate({scrollTop: $('[name="_email"]').offset().top-50}, 500);
    return false;
  } else if(!$('[name="accept"]').is(':checked')) {
    $('[name="accept"]').siblings('.Input__error').removeClass('hide');
    $('.terms-condition-wrapper').addClass('errordd');
    
    $('[name="accept"]').focus();
    return false;
  } else {
    //attributeObj[9] = {"attributeName": "_email","values": $('[name="_email"]').val()};
    customProperties(attributeObj);
    $(this).submit();
    return true;
  }*/
});

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var hasSelectedStyle = getParameterByName('style');
if(hasSelectedStyle != null){
  $('#style-'+hasSelectedStyle).click();
  var slideno = parseInt(hasSelectedStyle);
  if ($.fn.slick) {
  	setTimeout(function(){$('.styles-wrapper').slick('slickGoTo', slideno - 1);},1000);
  }
}

$('.template-product .style-selector-item').click(function() {
  $(this).addClass('active-gallery');
  $(this).closest('.styles-wrapper').addClass('gallery-selected');
  //var currentID = $(this).find(".gallery-order-now-btn").attr('href');
  //console.log('currentID',currentID);
});

$( ".membership-wrapper .membership-item:nth-child(2) input").click();

$(document).ready(function() {
  
  if( "magnificPopup" in $.fn ){ 
    
    $('.style-selector').magnificPopup({
      delegate: '.gallery-click',
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          var mp = $.magnificPopup.instance,
              t = $(mp.currItem.el[0]);
          var dataUrl = t.attr('data-url');
          console.log('dataUrl', dataUrl );
          return item.el.attr('title') + '<a href="'+dataUrl+'">Order this style</a>';
        }
      }
    });
    
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    
  }
  
});

// $(document).ready(function() {

// });

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "11 more professions";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "roll up";
    moreText.style.display = "inline";
  }
}

if ( "owlCarousel" in $.fn && typeof $.fn.owlCarousel === "function") {

  $('.owl-1').owlCarousel({
    loop:false,
    margin:20,
    lazyLoad:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false,
        dots:true
      },
      1000:{
        items:4,
        nav:false,
        loop:true,
        dots:false
      }
    }
  })

  $('.owl-2').owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    nav:true,
    lazyLoad:true,
    responsive:{
      0:{
        items:1,
        nav:false,
        loop:true,
        dots:true,

      },
      600:{
        items:1,
        nav:false,
        loop:true,
        dots:true
      },
      1000:{
        center: true,
        items:3,
        nav:true,
        loop:false,
        dots:false,
        nav: true,

      }
    }
  })

  $('.owl-3').owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    lazyLoad:true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false,
        dots:true
      },
      1000:{
        items:3,
        nav:true,
        loop:false,
        dots:false
      }
    }
  })
  
}