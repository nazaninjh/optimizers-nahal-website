// create image carousel
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector("#carousel-btn-left");
const prevButton = document.querySelector("#carousel-btn-right");
const carouselNav = document.querySelector(".carousel-nav");
const indicators = Array.from(carouselNav.children);
// get the size of each slide

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another
// slides[0].style.right = slideWidth * 0 + "px";
// slides[1].style.right = slideWidth * 1 + "px";
// avoid coding the slides manually

const setSlidePosition = (slide, index) => {
  slide.style.right = slideWidth * index + "px";
};
// use a loop to make the code more practical
slides.forEach(setSlidePosition);
// create a function for next and prev buttons to work 

const moveToSlide = (track, currentSlide, targetSlide) => {
    // const amountToMove = nextSlide.style.right;
    track.style.transform = 'translateX(+' + targetSlide.style.right + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide"); 
};

const updateIndicator = (currentIndicator, targetIndicator) => {
  currentIndicator.classList.remove("current-slide");
  targetIndicator.classList.add("current-slide");
};

// when I click left move slides to the left
nextButton.addEventListener("click", e => {
    // which slide are we on? 
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    // move the next slide
    moveToSlide(track, currentSlide, nextSlide);
    const currentIndicator = carouselNav.querySelector(".current-slide");
    const nextIndicator = currentIndicator.nextElementSibling;
    updateIndicator(currentIndicator, nextIndicator);
});
// when I click right, move slides to the right
prevButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
  const currentIndicator = carouselNav.querySelector(".current-slide");
  const prevIndicator = currentIndicator.previousElementSibling;
  updateIndicator(currentIndicator, prevIndicator);
});
// when I click the nav indicators, move to that slide

carouselNav.addEventListener("click",(e) => {
  const targetIndicator = e.target.closest("button");
  if (!targetIndicator) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentIndicator = carouselNav.querySelector(".current-slide");
  const targetIndex = indicators.findIndex(indicator => indicator === targetIndicator);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateIndicator(currentIndicator, targetIndicator);
});

// end of image carousel

// create card slider
const mediaScroller = document.querySelector(".media-scroller");
const mediaElements = Array.from(mediaScroller.querySelectorAll(".media-element"))
const nextMediaButton = document.querySelector("#media-btn-left");
const prevMediaButton = document.querySelector("#media-btn-right");

// get width of each card + the gap
const mediaElementWidth = mediaElements[0].getBoundingClientRect().width + 8;
const mediaElementTotalWidth = mediaElementWidth + 8;
console.log(mediaElementWidth);
console.log(mediaElementTotalWidth);

const setMediaPosition = (media, index) => {
  media.style.right =  mediaElementTotalWidth * index + "px";
};
mediaElements.forEach(setMediaPosition);

//how to have multiple current elements?

// nextMediaButton.addEventListener("click", e => {
//   // which slide are we on? 
//   const currentMediaEl = mediaScroller.querySelector(".current-slide");
//   const nextSlide = currentSlide.nextElementSibling;
//   // move the next slide
//   moveToSlide(track, currentSlide, nextSlide);
//   const currentIndicator = carouselNav.querySelector(".current-slide");
//   const nextIndicator = currentIndicator.nextElementSibling;
//   updateIndicator(currentIndicator, nextIndicator);
// });
