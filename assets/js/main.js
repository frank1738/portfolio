/* ==================== MENU SHOW Y HIDDEN ==================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
/* ===== MENU HIDDEN ===== */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* ==================== REMOVE MENU MOBILE ==================== */

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/* ==================== ACCORDION SKILLS ==================== */

const skillContent = document.querySelectorAll('.skills-content');
const skillHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {
  const itemClass = this.parentNode.className;
  for (let i = 0; i < skillContent.length; i += 1) {
    skillContent[i].classList = 'skills-content skills-close';
  }
  if (itemClass === 'skills-content skills-close') {
    this.parentNode.className = 'skills-content skills-open';
  }
}

skillHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

/* ==================== QUALIFICATION TABS ==================== */

const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((item) => {
      item.classList.remove('qualification-active');
    });
    target.classList.add('qualification-active');
    tabs.forEach((tabItem) => {
      tabItem.classList.remove('qualification-active');
    });
    tab.classList.add('qualification-active');
  });
});
/* ==================== SERVICES MODAL ==================== */

const serviceModals = document.querySelectorAll('.services-modal');
const modalButtons = document.querySelectorAll('.services-btn');
const modalClose = document.querySelectorAll('.services-modal-close');

const modal = function (modaClick) {
  serviceModals[modaClick].classList.add('active-modal');
};

modalButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modal(i);
  });
});

modalClose.forEach((btn) => {
  btn.addEventListener('click', () => {
    serviceModals.forEach((modal) => {
      modal.classList.remove('active-modal');
    });
  });
});

/* ==================== PORTFOLIO SWIPER  ==================== */

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const swiperPortfolio = new Swiper('.portfolio-container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* ==================== TESTIMONIAL ==================== */

const swiperTestimonial = new Swiper('.testimonial-container', {
  loop: true,
  grabCurser: true,
  spaceBetween: 48,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    /* eslint-disable prefer-template */

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ==================== CHANGE BACKGROUND HEADER ==================== */
function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* ==================== SHOW SCROLL UP ==================== */

function scrollTop() {
  const scrollTop = document.getElementById('scrollup');
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

/* ==================== DARK LIGHT THEME ==================== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
