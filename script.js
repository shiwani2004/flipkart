let current = 0;
const wrapper = document.querySelector('#alia .slider-wrapper');
const slides = document.querySelectorAll('#alia .slide');
const total = slides.length;

function showSlide(index) {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  current = (current + 1) % total;
  showSlide(current);
}, 2000);

showSlide(current);
