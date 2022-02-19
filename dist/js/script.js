"use strict";

window.addEventListener("load", function () {
  //window.setTimeout(start, 1000)
  //function start(){}
  AOS.init();
  body.classList.remove("no-scroll");
  body.classList.add("animation"); //от 0 до 6666 увелечение 

  var headerCount = document.querySelector(".header__count");
  var number = 6666;

  function countAnimation(i) {
    headerCount.innerHTML = "".concat(i);
    if (i < number - 31) setTimeout(function () {
      return countAnimation(i + 31);
    }, 0.1);else if (i < number) setTimeout(function () {
      return countAnimation(i + 1);
    }, 0.1);
  }

  setTimeout(function () {
    return countAnimation(1);
  }, 6000); //убираем экран загрузки

  document.querySelector(".load").style.display = "none";
}); // фиксация меню

window.addEventListener("scroll", function () {
  var headerSize = this.document.querySelector(".header").offsetHeight;
  var nav = document.querySelector("nav");
  var yAxis = window.scrollY;

  if (yAxis > headerSize) {
    nav.classList.add("nav_fixed");
  } else if (yAxis < headerSize) {
    nav.classList.remove("nav_fixed");
  }
}); //меню для моб. версии

var menuGmb = document.querySelector(".menu-mobile");
var menu_items = document.querySelectorAll(".menu__link");
var menu = document.querySelector(".menu");
var body = document.querySelector("body"); //чтобы не было скролла при открытом меню

var menuClose = true;

function handleMenu() {
  if (getComputedStyle(menuGmb).display == "none") {
    return false;
  }

  if (menuClose) {
    menuGmb.classList.add('menu-mobile_open');
    menuGmb.classList.remove('menu-mobile_close');
    menu.classList.add('menu_open');
    body.classList.add('body-overflow');
    if (menu.classList.contains('menu_close')) menu.classList.remove('menu_close');
  } else {
    menuGmb.classList.remove('menu-mobile_open');
    menuGmb.classList.add('menu-mobile_close');
    menu.classList.remove('menu_open');
    menu.classList.add('menu_close');
    body.classList.remove('body-overflow');
  }

  menuClose = !menuClose;
}

menu_items.forEach(function (item) {
  return item.addEventListener("click", handleMenu);
});
menuGmb.addEventListener('click', handleMenu); //Для сокрытия социальных сетей у блока team

var networks = document.querySelector(".header__networks");
var networksMobile = document.querySelector(".header__networks_mobile"); // Получаем нужный элемент

var element = document.querySelector('.team');

var Visible = function Visible(target) {
  // Все позиции элемента
  var targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
      // Получаем позиции окна
  windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };

  if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom && targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
    networks.style.visibility = "hidden";
    networksMobile.style.visibility = "hidden";
  } else {
    networks.style.visibility = "visible";
    networksMobile.style.visibility = "visible";
  }

  ;
}; // Запускаем функцию при прокрутке страницы


window.addEventListener('scroll', function () {
  Visible(element);
}); // А также запустим функцию сразу. А то вдруг, элемент изначально видно

Visible(element); //прокрутка к якорю

menu_items.forEach(function (item) {
  return item.addEventListener("click", function (e) {
    if (getComputedStyle(menuGmb).display == "none") {
      e.preventDefault();
      var href = this.getAttribute('href').substring(1);
      var scrollTarget = document.getElementById(href);
      var topOffset = menu.offsetHeight;
      var elementPosition = scrollTarget.getBoundingClientRect().top;
      var offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
$('.owl-desktop').owlCarousel({
  slideTransition: "linear",
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  smartSpeed: 300,
  slideBy: 3,
  margin: 10,
  nav: true,
  navText: [$('.arrow-left'), $('.arrow-right')],
  responsive: {
    0: {
      items: 1,
      dots: false
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
});
$('.owl-mobile').owlCarousel({
  slideTransition: "linear",
  smartSpeed: 300,
  slideBy: 1,
  nav: true,
  navText: [$('.arrow-left_mob'), $('.arrow-right_mob')],
  items: 1,
  center: true
});