// import { gsap } from 'gsap';

// const promoSlider = () => {
//   const slider = document.querySelector('.promo__slider');
//   const slides = gsap.utils.toArray('.promo__slider-image');

//   gsap.set(slider, { x: 0 });

//   const slideWidth = slides[0].clientWidth;
//   const slideGap = slideWidth * 0.03;
//   const slideMove = slideWidth + slideGap;

//   // Добавляем клоны первых трех слайдов в конец, чтобы слайдер не казался пустым
//   for (let i = 0; i < 3; i++) {
//     const clone = slides[i].cloneNode(true);
//     slider.appendChild(clone);
//   }
  
//   const animateSlides = () => {
//     const tl = gsap.timeline({
//       defaults: { ease: 'power1.inOut' },
//       onComplete: () => {
//         // Перемещаем первый слайд в конец после завершения анимации
//         slider.appendChild(slides[0]);
//         gsap.set(slider, { x: `+=${slideMove}` });
//         slides.push(slides.shift());

//         // Запланировать следующую анимацию
//         gsap.delayedCall(2, animateSlides);
//       }
//     });

//     // Сдвигаем слайдер на ширину одного слайда влево
//     tl.to(slider, {
//       x: `-=${slideMove}`,
//       duration: 2
//     });
//   };

//   gsap.delayedCall(2, animateSlides);
// };

// export default promoSlider;
