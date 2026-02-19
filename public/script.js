function changeSlide(event, direction) {
  event.preventDefault();
  
  
  const slideshow = event.target.closest('[data-slideshow]');
  if (!slideshow) return;
  
  const slides = slideshow.querySelectorAll('li.slideshow-slide');
  
  // vind de active slide
  let currentIndex = 0;
  slides.forEach((slide, index) => {
    if (slide.classList.contains('active')) {
      currentIndex = index;
    }
  });
  
  let nextIndex = currentIndex + direction;
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  } else if (nextIndex < 0) {
    nextIndex = slides.length - 1;
  }
  
  slides.forEach(slide => slide.classList.remove('active'));
  
  slides[nextIndex].classList.add('active');
}


