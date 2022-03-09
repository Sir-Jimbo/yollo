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
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
   animationTime = 1500,
   framesCount = 30;

anchors.forEach(function (item) {
   // каждому якорю присваиваем обработчик события
   item.addEventListener('click', function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
         // считаем на сколько скроллить за 1 такт
         let scrollBy = coordY / framesCount;

         // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
         // и дно страницы не достигнуто
         if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
            // то скроллим на к-во пикселей, которое соответствует одному такту
            window.scrollBy(0, scrollBy);
         } else {
            // иначе добираемся до элемента и выходим из интервала
            window.scrollTo(0, coordY);
            clearInterval(scroller);
         }
         // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
   });
});