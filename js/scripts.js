const burger = document.querySelector('.header__burger');
const body = document.querySelector('.body')
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.header__close');

burger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);


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


const subscriptionsSlider = new Swiper('.subscriptions__slider', {

   pagination: {
      el: '.subscriptions__pagination',
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

const partnersSlider = new Swiper('.our-partners__slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   grabCursor: true,
   watchOverflow: true,
   breakpoints: {
      640: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },

   }
});

const partnersSliderDesktop = new Swiper('.our-partners__slider-desktop', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   direction: 'vertical',
   slidesPerView: 6,
});

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
const links = document.querySelectorAll('a[href*="#"]')
links.forEach(function (item) {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.remove('active');
      menu.classList.remove('open');
      close.classList.remove('active');
      burger.classList.remove('close')
   })
})
// ???????????????? ?????? ??????????; ?????????????????????????? ?????????? ???????????????? ?? ???????????????????? ????????????
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
   animationTime = 1500,
   framesCount = 30;

anchors.forEach(function (item) {
   // ?????????????? ?????????? ?????????????????????? ???????????????????? ??????????????
   item.addEventListener('click', function (e) {
      // ?????????????? ?????????????????????? ??????????????????
      e.preventDefault();

      // ?????? ?????????????? ?????????? ?????????? ?????????????????????????????? ?????? ?????????????? ?? ???????????????????? ?????? ???????????????????? Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      // ?????????????????? ????????????????, ?? ??????????????
      let scroller = setInterval(function () {
         // ?????????????? ???? ?????????????? ?????????????????? ???? 1 ????????
         let scrollBy = coordY / framesCount;

         // ???????? ??-???? ???????????????? ?????? ?????????????? ???? 1 ???????? ???????????? ???????????????????? ???? ????????????????
         // ?? ?????? ???????????????? ???? ????????????????????
         if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
            // ???? ???????????????? ???? ??-???? ????????????????, ?????????????? ?????????????????????????? ???????????? ??????????
            window.scrollBy(0, scrollBy);
         } else {
            // ?????????? ???????????????????? ???? ???????????????? ?? ?????????????? ???? ??????????????????
            window.scrollTo(0, coordY);
            clearInterval(scroller);
         }
         // ?????????? ?????????????????? ?????????????????? ???????????????? ???? ?????????????? ???????????????? ?? ??-???? ????????????
      }, animationTime / framesCount);
   });
});


window.onload = function () {
   document.body.classList.add('loaded_hiding');
   window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
   }, 500);
}


const questions = document.getElementsByClassName("faq__questions-block");
const contents = document.getElementsByClassName("faq__questions-description");
const icons = document.getElementsByClassName("faq__questions-icon");

for (let i = 0; i < questions.length; i++) {
   questions[i].addEventListener("click", () => {
       contents[i].classList.toggle('active');
       icons[i].classList.toggle('active');
   });
}