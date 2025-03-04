let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

let currentSlide = 0;
  const bannerTrack = document.querySelector('.banner-track');
  const totalSlides = 8;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    bannerTrack.style.transform = `translateX(-${currentSlide * 12.5}%)`;
  }

  // Auto-play setiap 3 detik
  let sliderInterval = setInterval(nextSlide, 3000);

  // Pause saat hover
  const container = document.querySelector('.banner-container');
  container.addEventListener('mouseenter', () => clearInterval(sliderInterval));
  container.addEventListener('mouseleave', () => {
    sliderInterval = setInterval(nextSlide, 2000);
  });