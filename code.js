<script>
let current = 0;
const slides = document.querySelectorAll('.alia img.slide');
function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 2000); // Change image every 2 seconds
showSlide(current);
</script>