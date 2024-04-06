import gsap from 'gsap';

export default function animations() {
  // Анимация выезда текста снизу вверх для элемента h1 и .promo__subtitle
  const heading = document.querySelector('h1');
  const subtitle = document.querySelector('.promo__subtitle');
  gsap.from(heading, { y: 16, opacity: 0, duration: 1, delay: 0.3 });
  gsap.from(subtitle, { y: 16, opacity: 0, duration: 1, delay: 0.5 });

  // Ленивая загрузка изображений с плавным проявлением
  const lazyImages = document.querySelectorAll('.lazy-load');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.onload = () => gsap.to(image, { opacity: 1, duration: 1.5 });
        image.classList.remove('lazy-load');
        observer.unobserve(image);
      }
    });
  }, { threshold: 0.1 });

  lazyImages.forEach(image => imageObserver.observe(image));
}
