const imgLinks = [

  'img/bg-home2.webp',
  'img/bg-home3.webp',
  'img/bg-home1.webp',
  'img/bg-home4.webp'
];
const delay = 5000;
let currentIndex = 0;
setInterval(function () {
  document.getElementById('change-img').src = imgLinks[currentIndex];
  currentIndex++;
  if (currentIndex >= imgLinks.length) {
    currentIndex = 0;
  }
}, delay);
