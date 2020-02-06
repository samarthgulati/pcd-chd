// (function iife() {
var swiper = new Swiper('.swiper-container', {
  speed: window.innerHeight * 1.5,
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
var next = document.getElementById('next')
next.addEventListener('click', handleNextClick)
function handleSlideChange() {
  if(swiper.isEnd) {
    next.classList.add('flip');
  } else {
    next.classList.remove('flip');
  }
  switch(swiper.activeIndex) {
    case 0:
      animP5.canvas.classList.add('invisible');
      animP5.frameRate(0);
      interactiveP5.canvas.classList.add('invisible');
      interactiveP5.frameRate(0);
      break
    case 1:
      animP5.canvas.classList.remove('invisible');
      animP5.frameRate(30);
      interactiveP5.canvas.classList.add('invisible');
      interactiveP5.frameRate(0);
      break
    default:
      animP5.canvas.classList.add('invisible');
      animP5.frameRate(0);
      interactiveP5.canvas.classList.remove('invisible');
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
function handleNextClick(e) {
  if(swiper.isEnd) {
    swiper.slidePrev();	
  } else {
    swiper.slideNext();
  }
}

// })()