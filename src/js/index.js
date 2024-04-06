import '../scss/style.scss'; // Путь к файлу стилей

// Импорт функций из модулей
import burgerMenu from './modules/burger-menu';
// import promoSlider from './modules/promo-slider';
import modal from './modules/modal';
import animations from './modules/animations';

// Использование функций после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  // promoSlider();
  modal();
  animations();
});