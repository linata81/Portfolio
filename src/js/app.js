import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//hamburger menu
(() => {
  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if(!isDropdownButton) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");  
  }
}))
})();

//Accordeon
(() => {
  document.querySelectorAll('.accordeon__header').forEach(el => {
    el.addEventListener('click', () => {
      
      const content = el.nextElementSibling;
      
      if(content.style.maxHeight) {
        document.querySelectorAll('.accordeon__body').forEach((el) => el.style.maxHeight = null);
        el.classList.remove('opened');
      } else {
        document.querySelectorAll('.accordeon__body').forEach((el) => el.style.maxHeight = null);
        content.style.maxHeight = content.scrollHeight + 'px';
        document.querySelectorAll('.accordeon__header').forEach((el) => el.classList.remove('opened'));
        el.classList.add('opened');
      }
    })
  })
})();