// ------------------------------------------header--------------------------------------
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger-menu');
const burgerNavMenu = document.querySelector('.burger-nav-menu');
const mobileBurger = document.querySelector('.mobile-burger');

burgerMenu.addEventListener('click', () => {
  burgerNavMenu.classList.toggle('active');
});

mobileBurger.addEventListener('click', () => {
  header.classList.toggle('mobile-header');
  document.body.classList.toggle('no-scroll');
});  

const navMenuLi = document.querySelectorAll('.nav-menu-li');

  navMenuLi.forEach((el) => {
    const navMenuLink = el.querySelector('a');
    const dropdownMenu = el.querySelector('.dropdown-menu');

    if(dropdownMenu){
      navMenuLink.innerHTML += '<span class="dropdown-arrow"></span>';
    };
    navMenuLink.addEventListener('click', () => {
      dropdownMenu.classList.toggle('drop');
      
    })
  })
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
  const openSheduleBtn = document.querySelector('.open-shedule');
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

const table = document.querySelector(".shedule-table");

let hasData = false;
const rows = table.getElementsByTagName("tr");
for (let i = 0; i < rows.length; i++) {
  const cells = rows[i].getElementsByTagName("td");
  for (let j = 0; j < cells.length; j++) {
    if (cells[j].textContent.trim() !== "") {
      hasData = true;
      break;
    }
  }
  if (hasData) {
    break;
  }
}

if (!hasData) {
  table.parentNode.parentNode.remove();
}

  //------------------------------------------teacher-info--------------------------------------------
  const teacherInfoList = document.querySelectorAll('.teacher-block-info ul li p span');

  teacherInfoList.forEach((el) => {
    if(el.textContent.length <= 0){
      el.parentNode.parentNode.remove()
    }
  })
  