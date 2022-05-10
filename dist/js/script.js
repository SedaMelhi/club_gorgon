const body = document.querySelector('body')
window.addEventListener("load", function() {
    //window.setTimeout(start, 1000)
    //function start(){}
    AOS.init()
    body.classList.remove("no-scroll")
    body.classList.add("animation")
    
    //от 0 до 6666 увелечение 
    const headerCount = document.querySelector(".header__count")
    let number = 6666
    
    function countAnimation(i){
        headerCount.innerHTML = `${i}`
        if(i < number-31)
            setTimeout(() => countAnimation(i + 31), 0.1)
        else if(i < number)
        setTimeout(() => countAnimation(i + 1), 0.1)
    }
    setTimeout(() => countAnimation(1), 8000)
    
    //убираем экран загрузки
    document.querySelector(".load").style.display = "none";
    let vh = window.innerHeight
    document.querySelector(".header").style.height = `calc(${vh}px - 84px)`;
   
})
const text = document.querySelectorAll(".arts__text path")
for(let i of text){
    console.log(i.getTotalLength())
}

window.addEventListener('resize', function(){
    let vh = window.innerHeight
    document.querySelector(".header").style.height = `calc(${vh}px - 84px)`;
})
// фиксация меню
window.addEventListener("scroll", function () {
    const headerSize = this.document.querySelector(".header").offsetHeight;
    const nav = document.querySelector("nav")
    const yAxis = window.scrollY
    if(yAxis > headerSize){
        nav.classList.add("nav_fixed");
    }else if(yAxis < headerSize){
        nav.classList.remove("nav_fixed")
    }
})




/** 
//меню для моб. версии

const menuGmb = document.querySelector(".menu-mobile")
const menu_items = document.querySelectorAll(".menu__link");
const menu = document.querySelector(".menu")
const body = document.querySelector("body") //чтобы не было скролла при открытом меню
let menuClose = true

function handleMenu() {
    if(getComputedStyle(menuGmb).display == "none"){
        return false;
    }
    if(menuClose) {
        menuGmb.classList.add('menu-mobile_open')
        menuGmb.classList.remove('menu-mobile_close')
        menu.classList.add('menu_open')
        body.classList.add('body-overflow')
        if(menu.classList.contains('menu_close'))
            menu.classList.remove('menu_close')

     } else{
        menuGmb.classList.remove('menu-mobile_open')
        menuGmb.classList.add('menu-mobile_close')
        menu.classList.remove('menu_open')
        menu.classList.add('menu_close')
        body.classList.remove('body-overflow')
     }
    menuClose = !menuClose 
}

menu_items.forEach(item => item.addEventListener("click", handleMenu))

menuGmb.addEventListener('click', handleMenu)




//Для сокрытия социальных сетей у блока team
let networks = document.querySelector(".networks")
let networksMobile = document.querySelector(".networks_mobile")
// Получаем нужный элемент
var element = document.querySelector('.team');

var Visible = function (target) {
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

    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom && 
        targetPosition.right > windowPosition.left && 
        targetPosition.left < windowPosition.right) { 
        networks.style.visibility = "hidden";
        networksMobile.style.visibility = "hidden";   
    } else {
        networks.style.visibility = "visible";
        networksMobile.style.visibility = "visible";
    };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);

//прокрутка к якорю

menu_items.forEach(item => item.addEventListener("click", function (e) {
    if(getComputedStyle(menuGmb).display == "none"){
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
    
        const scrollTarget = document.getElementById(href);
        const topOffset = menu.offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
    
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    
}))

*/

    


$('.owl-desktop').owlCarousel({    
    slideTransition: "linear",
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 300,
    slideBy: 3,
    margin:10,
    nav: true,
    navText: [$('.arrow-left'),$('.arrow-right')],
    responsive:{
        0:{
            items:1,
            dots: false
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items: 3
        }
    }
})

$('.owl-mobile').owlCarousel({    
    slideTransition: "linear",
    smartSpeed: 300,
    slideBy: 1,
    nav: true,
    navText: [$('.arrow-left_mob'),$('.arrow-right_mob')],
    items: 1,
    center: true,

})





var btnPlayBlock = document.querySelector(".video__btn-block");
var btnPlay = document.querySelector(".video__btn");
const circles= document.querySelectorAll(".video__circle")
var blockForVideo = document.querySelector(".video__block");
let a = 1

if (btnPlayBlock != null) {
    btnPlayBlock.addEventListener("click", function (event) {
        
        for (let i of circles){
            i.classList.add('video__circle-anim_' + a)
            a++
        }  
        btnPlay.classList.add('video__btn_anim')  
        startVideo();
           
    });
}

function startVideo() {
    blockForVideo.classList.add("video__hidden")
    const youtube = document.getElementsByTagName('iframe')
    setTimeout(function () {
        youtube[0].src = youtube[0].src + '?rel=0&autoplay=1'
      }, 1000);
}

class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true,
        duration: 350
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
          }
        }
        this.toggle(elHeader.parentElement);
      });
    }
    show(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['display'] = 'block';
      const height = elBody.offsetHeight;
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.add('collapsing');
      el.classList.add('accordion__item_slidedown');
      elBody.offsetHeight;
      elBody.style['height'] = `${height}px`;
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        el.classList.remove('accordion__item_slidedown');
        elBody.classList.add('collapse');
        el.classList.add('accordion__item_show');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    hide(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['height'] = `${elBody.offsetHeight}px`;
      elBody.offsetHeight;
      elBody.style['display'] = 'block';
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.remove('collapse');
      el.classList.remove('accordion__item_show');
      elBody.classList.add('collapsing');
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        elBody.classList.add('collapse');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    toggle(el) {
      el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
  }


  new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: true
  });

