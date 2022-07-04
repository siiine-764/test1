/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("(function($) { // Begin jQuery\r\n    $(function() { // DOM ready\r\n      // If a link has a dropdown, add sub menu toggle.\r\n      $('nav ul li a:not(:only-child)').click(function(e) {\r\n        $(this).siblings('.nav-dropdown').toggle();\r\n        // Close one dropdown when selecting another\r\n        $('.nav-dropdown').not($(this).siblings()).hide();\r\n        e.stopPropagation();\r\n      });\r\n      // Clicking away from dropdown will remove the dropdown class\r\n      $('html').click(function() {\r\n        $('.nav-dropdown').hide();\r\n      });\r\n      // Toggle open and close nav styles on click\r\n      $('#nav-toggle').click(function() {\r\n        $('nav ul').slideToggle();\r\n      });\r\n      // Hamburger to X toggle\r\n      $('#nav-toggle').on('click', function() {\r\n        this.classList.toggle('active');\r\n      });\r\n    }); // end DOM ready\r\n  })(jQuery); // end jQuery\r\n\r\n  var slideIndex = 1;\r\n  showSlides(slideIndex);\r\n\r\n  function plusSlides(n) {\r\n    showSlides((slideIndex += n));\r\n  }\r\n\r\n  function currentSlide(n) {\r\n    showSlides((slideIndex = n));\r\n  }\r\n\r\n  function showSlides(n) {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"mySlides\");\r\n    var dots = document.getElementsByClassName(\"dot\");\r\n    if (n > slides.length) {\r\n      slideIndex = 1;\r\n    }\r\n    if (n < 1) {\r\n      slideIndex = slides.length;\r\n    }\r\n    for (i = 0; i < slides.length; i++) {\r\n      slides[i].style.display = \"none\";\r\n    }\r\n    for (i = 0; i < dots.length; i++) {\r\n      dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n    }\r\n    slides[slideIndex - 1].style.display = \"block\";\r\n    dots[slideIndex - 1].className += \" active\";\r\n  }\r\n\r\n  $(document).ready(function(){\r\n    $('.carousel').slick({\r\n      speed: 500,\r\n      slidesToShow: 4,\r\n      slidesToScroll: 1,\r\n      autoplay: true,\r\n      autoplaySpeed: 2000,\r\n      dots:true,\r\n      centerMode: true,\r\n      responsive: [{\r\n        breakpoint: 1024,\r\n        settings: {\r\n          slidesToShow: 3,\r\n          slidesToScroll: 1,\r\n          // centerMode: true,\r\n  \r\n        }\r\n  \r\n      }, {\r\n        breakpoint: 800,\r\n        settings: {\r\n          slidesToShow: 2,\r\n          slidesToScroll: 2,\r\n          dots: true,\r\n          infinite: true,\r\n  \r\n        }\r\n      },  {\r\n        breakpoint: 480,\r\n        settings: {\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          dots: true,\r\n          infinite: true,\r\n          autoplay: true,\r\n          autoplaySpeed: 2000,\r\n        }\r\n      }]\r\n    });\r\n  });\n\n//# sourceURL=webpack://X00P2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;