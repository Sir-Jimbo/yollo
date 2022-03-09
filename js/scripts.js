const burger = document.querySelector('.header__burger');
const body = document.querySelector('.body')
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.header__close');
const link = document.querySelector('.header__menu-link')
burger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
link.addEventListener('click', closeLink);

function openMenu() {

   body.classList.add('active');
   menu.classList.add('open');
   close.classList.add('active');
   burger.classList.add('close')
}




function closeMenu() {
   body.classList.remove('active');
   menu.classList.remove('open');
   close.classList.remove('active');
   burger.classList.remove('close')
}

function closeLink() {
   const menu = document.querySelector('.header__menu');
   body.classList.remove('active');
   menu.classList.remove('open');
   close.classList.remove('active');
   burger.classList.remove('close')
}

const swiper = new Swiper('.swiper', {

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   grabCursor: true,
   slidesPerView: 1,
   watchOverflow: true,
   spaceBetween: 10,

   breakpoints: {
      640: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
      1366: {
         slidesPerView: 4,
      },
   }
})

let tab = function () {
   let tabNav = document.querySelectorAll('.content__tabs-item'),
      tabContent = document.querySelectorAll('.content__tabs-block'),
      tabName;
   tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
   })

   function selectTabNav() {
      tabNav.forEach(item => {
         item.classList.remove('is-active')
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName)
   }

   function selectTabContent(tabName) {
      tabContent.forEach(item => {
         item.classList.contains(tabName)
            ? item.classList.add('is-active')
            : item.classList.remove('is-active');
      })
   }
}

tab()