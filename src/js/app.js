import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//preloader
(() => {
  const textTop = document.querySelector('.preloader-text__top');
  const textBot = document.querySelector('.preloader-text__bot');
  const preloader = document.querySelector('.preloader');
  const from = document.querySelector('.hero__from');
  const title = document.querySelector('.hero__title');
  const subtitle = document.querySelector('.hero__subtitle');
  const heroText = document.querySelector('.hero__text');
  const socials = document.querySelector('.social__wrap');
  const img = document.querySelector('.hero-img__wrap');

  const showElement = (selector, className, time) => {
    setTimeout(() => {
      selector.classList.add(className);
    }, time);
  }

  showElement(textTop, 'preloader-text-active', 200);
  showElement(textBot,'preloader-text-active', 800);

  setTimeout(() => {
    document.querySelector('.preloader-line__inner').style.width='232px';
  }, 1600);
  
  setTimeout(() => {
    document.querySelector('.preloader').style.opacity ='0';
    setTimeout(() => {
      document.querySelector('.preloader').style.display ='none';
      document.querySelector('.page-wrap').style.opacity ='1';
      img.style.transform ='scale(1)';
      showElement(from, 'hero-active', 300);
      showElement(title, 'hero-active', 400);
      showElement(subtitle, 'hero-active', 800);
      showElement(heroText, 'hero-active', 900);
      showElement(socials, 'hero-active', 900);
      document.querySelector('.arrow > svg').style.opacity ='1';
    }, 400);
  }, 2500);
})();

//hamburger menu
(() => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('locked');
  });

  document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if(!isDropdownButton) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active"); 
      document.body.classList.remove("locked");
    }
  }))
  
//если телефон повернут вертикально и экран расширится, чтобы сбросить все блокировки
  window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active"); 
      document.body.classList.remove("locked");
    }
  })
  
})();

//scrollDown
(() => {
  const arrowBtn = document.querySelector(".arrow");
  arrowBtn.addEventListener('click', setScrollDown);
  
  function setScrollDown() {
    window.scrollTo({
      top:1000,
      left:0,
      behavior: "smooth"
    })
  }
})();

//modal
(() => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          content = modal.querySelector('.popup__content'),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');
  
    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if(e.target) {
          e.preventDefault();
        }
  
        windows.forEach(item => {
          item.style.opacity = '0';
          item.style.visibility = 'hidden';
          item.querySelector('.popup__content').classList.remove('open');
        });
  
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        content.classList.add('open');
        document.body.classList.add("locked");
        // document.body.style.overflow = "hidden";//чтобы не скролить страницу
      });
    });
  
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.opacity = '0';
        item.style.visibility = 'hidden';
        item.querySelector('.popup__content').classList.remove('open');
      });
  
      modal.style.opacity = '0';
      modal.style.visibility = 'hidden';
      content.classList.remove('open');
      document.body.classList.remove('locked');
      // document.body.style.overflow = "";
    });
  
    modal.addEventListener('click', (e) => {
      if(e.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.opacity = '0';
          item.style.visibility = 'hidden';
          item.querySelector('.popup__content').classList.remove('open');
        });
  
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        content.classList.remove('open');
        document.body.classList.add('locked');
        // document.body.style.overflow = "";
      }
    });
  }
  
  bindModal('.popap-btn', '.popup', '.popup__close');
})();

