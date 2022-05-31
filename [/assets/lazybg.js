"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;
  
  lazyloadImages = document.querySelectorAll(".bg-lazy");

  if ("IntersectionObserver" in window) {
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.add("lazy-visible");
          imageObserver.unobserve(image);
        }
      });
    });
    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyload = function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.add('lazy-visible');
          }
        });

        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    };

    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
    window.addEventListener("DOMContentLoaded", lazyload);
  }
});