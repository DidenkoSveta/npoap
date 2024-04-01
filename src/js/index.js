import '../scss/style.scss'; // Путь к файлу стилей

// Импорт функций из модулей
import burgerMenu from './modules/burger-menu';
// import promoSlider from './modules/promo-slider';
// import modal from './modules/modal';
// import scroll from './modules/scroll-to-top';
// import contactForm from './modules/contact-form';
// import animations from './modules/animations';

// Использование функций после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  // promoSlider();
//   modal();
//   scroll();
//   contactForm();
//   animations();
});