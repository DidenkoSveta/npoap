import gsap from 'gsap';

export default function burgerMenu() {
  const burger = document.querySelector('.header__burger');
  const close = document.querySelector('.header__close');
  const nav = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.header__nav a'); // Ссылки внутри меню
  const mobileBreakpoint = 1040; // Указываем точку перехода для мобильного меню

  const dimBackground = document.createElement('div');
  dimBackground.classList.add('dim-background');
  document.body.appendChild(dimBackground);

  // Функция для закрытия меню
  const closeMenu = () => {
    if (window.innerWidth < mobileBreakpoint) {
      gsap.to(nav, { right: "-100%", duration: 0.4, ease: "expo.in" });
      gsap.to(dimBackground, {
        opacity: 0, duration: 0.4, onComplete: () => {
          dimBackground.style.display = "none";
        }
      });
      close.style.display = "none"; // Скрыть кнопку закрытия после анимации
    }
  };

  burger.addEventListener('click', () => {
    gsap.to(nav, { right: "0%", duration: 0.4, ease: "expo.out" });
    gsap.to(dimBackground, { display: "block", opacity: 1, duration: 0.5 });
    close.style.display = "block"; // Показать кнопку закрытия
  });

  close.addEventListener('click', closeMenu);
  dimBackground.addEventListener('click', closeMenu);

  // Обработчик для ссылок меню
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Закрываем меню при нажатии на ссылку, если разрешение экрана меньше 1040px
      if (window.innerWidth < mobileBreakpoint) {
        closeMenu();
      }
    });
  });
}
