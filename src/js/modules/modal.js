import gsap from 'gsap';

export default function modal() {
  const galleryItems = document.querySelectorAll('.certificates__item');
  if (galleryItems.length > 0) {
    const modal = document.querySelector('.certificates__modal');
    if (modal) {
      const modalImage = modal.querySelector('.certificates__modal-img');
      const modalClose = modal.querySelector('.certificates__close');
      const prevButton = modal.querySelector('.certificates__modal-prev');
      const nextButton = modal.querySelector('.certificates__modal-next');

      let currentIndex = 0; // Текущий индекс отображаемого изображения

      const openModal = index => {
        const imgSrc = galleryItems[index].querySelector('img').getAttribute('src');
        modalImage.setAttribute('src', imgSrc);
        currentIndex = index;
        modalImage.style.display = 'block'; // Устанавливаем изображение видимым
        gsap.to(modal, { autoAlpha: 1, duration: 0.3 });
      };

      galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
          openModal(index);
        });
      });

      if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
          openModal(currentIndex);
        });

        nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % galleryItems.length;
          openModal(currentIndex);
        });
      }

      if (modalClose) {
        modalClose.addEventListener('click', () => {
          gsap.to(modal, { autoAlpha: 0, duration: 0.3, onComplete: () => {
            modalImage.style.display = 'none'; // Скрываем изображение
          }});
        });
      }

      modal.addEventListener('click', event => {
        if (event.target === modal) {
          gsap.to(modal, { autoAlpha: 0, duration: 0.3, onComplete: () => {
            modalImage.style.display = 'none'; // Скрываем изображение
          }});
        }
      });

      // Предотвращаем всплытие событий при клике на изображение внутри модального окна
      if (modalImage) {
        modalImage.addEventListener('click', event => {
          event.stopPropagation();
        });
      }
    }
  }
}
