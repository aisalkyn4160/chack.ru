// ------------------------------------------header--------------------------------------
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger-menu');

// if(window.innerWidth <= 1150) {
//   burgerMenu.addEventListener('click', () => {
//     header.classList.toggle('mobile-header');
//     document.body.classList.toggle('no-scroll');
//   });
// }

burgerMenu.addEventListener('click', () => {
      header.classList.toggle('mobile-header');
      document.body.classList.toggle('no-scroll');
  });
// ---------------------------------------------Слайдер ---------------------------------------------------
const swiper = new Swiper('.swiper', {
  loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      }
    }
  });

  // -------------------------------Расписание---------------------------------------------------
  const openSheduleBtn = document.getElementById('open-shedule');
  const shedule = document.querySelector('.shedule');
  const closeSheduleBtn = document.querySelector('.x-btn');

  openSheduleBtn.addEventListener('click', () => {
    shedule.style.top = '0';
    document.body.style.overflow = 'hidden';
  });
  closeSheduleBtn.addEventListener('click', () => {
    shedule.style.top = '-100%';
    document.body.style.overflow = 'visible';
  })

  window.addEventListener('click', (e) => {
    if(e.target === shedule){
      shedule.style.top = '-100%';
      document.body.style.overflow = 'visible';
    }
  })

  //------------------------------------------teacher-info--------------------------------------------
  const teacherInfoList = document.querySelectorAll('.teacher-block-info ul li p span');

  teacherInfoList.forEach((el) => {
    if(el.textContent.length <= 0){
      el.parentNode.parentNode.remove()
    }
  })
  