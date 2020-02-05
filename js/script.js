// (function iife() {
var swiper = new Swiper('.swiper-container', {
  speed: window.innerHeight * 2.5,
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  parallax: true,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
function handleSlideChange() {
  switch(swiper.activeIndex) {
    case 0:
      animP5.canvas.classList.add('hidden');
      animP5.frameRate(0);
      interactiveP5.canvas.classList.add('hidden');
      interactiveP5.frameRate(0);
      break
    case 1:
      animP5.canvas.classList.remove('hidden');
      animP5.frameRate(30);
      interactiveP5.canvas.classList.add('hidden');
      interactiveP5.frameRate(0);
      break
    default:
      animP5.canvas.classList.add('hidden');
      animP5.frameRate(0);
      interactiveP5.canvas.classList.remove('hidden');
      interactiveP5.frameRate(30);
      break
  }
}
swiper.on('init', function() {
  var canvasLoad = setInterval(function(){
    if('canvas' in animP5 &&
       'canvas' in interactiveP5 
    ) {
      handleSlideChange()
      clearInterval(canvasLoad);
    }
  }, 1)
});
swiper.on('slideChange', handleSlideChange);

// })()