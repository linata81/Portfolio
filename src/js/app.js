import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//preloader
(() => {
  const textTop = document.querySelector('.preloader-text__top');
  const textBot = document.querySelector('.preloader-text__bot');
  const preloader = document.querySelector('.preloader');

  const showPreloader = (selector, time) => {
    setTimeout(() => {
      selector.classList.add('preloader-text-active');
    }, time);
  }

  showPreloader(textTop, 200);
  showPreloader(textBot, 800);

  setTimeout(() => {
    document.querySelector('.preloader-line__inner').style.width='232px';
  }, 1600);
  
  setTimeout(() => {
    document.querySelector('.preloader').style.opacity ='0';
    setTimeout(() => {
      document.querySelector('.preloader').style.display ='none';
    }, 1000);
  }, 3000);
})();



//hamburger menu
// (() => {
//   const hamburger = document.querySelector(".hamburger");
//   const navMenu = document.querySelector(".menu");

//   hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//     document.body.classList.toggle('locked');
//   });

//   document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", (e) => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]");
//     if(!isDropdownButton) {
//       hamburger.classList.remove("active");
//       navMenu.classList.remove("active"); 
//       document.body.classList.remove("locked");
//     }
//   }))
  
// //если телефон повернут вертикально и экран расширится, чтобы сбросить все блокировки
//   window.addEventListener('resize', () => {
//     if(window.innerWidth > 768) {
//       hamburger.classList.remove("active");
//       navMenu.classList.remove("active"); 
//       document.body.classList.remove("locked");
//     }
//   })
  
// //если нужно зафиксировать меню при скроле
//   function fixedNav() {
//     // const nav = document.querySelector(".navbar");
//     const nav = document.querySelector(".header");
    
//     //указать в пикселях, сколько проскролить чтобы меню стало фиксированным
//     const breakpoint = 1;
//  // if(window.scrollY >= breakpoint) {
//     if(window.scrollY >= breakpoint && window.innerWidth < 768) {
//       nav.classList.add("fixed-nav")
//     } else {
//       nav.classList.remove("fixed-nav")
//     }
//   }
  
//   window.addEventListener('scroll', fixedNav)
// })();