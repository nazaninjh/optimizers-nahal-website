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

// const mediaScroller = document.querySelector(".media-scroller");
// const mediaElements = Array.from(mediaScroller.querySelectorAll(".media-element"));
// const mediaPrevBtn = document.getElementById("media-btn-right");
// const mediaNextBtn = document.getElementById("media-btn-left");
// mediaScroller.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   mediaScroller.scrollLeft += e.deltaY;
// });
// // get the width of the mediaScroller
// const mediaScrollerWidth = mediaScroller.getBoundingClientRect().width;
// console.log(mediaScrollerWidth);
// mediaNextBtn.addEventListener("click", () => {
//   mediaScroller.scrollLeft -= mediaScrollerWidth;
// })
// mediaPrevBtn.addEventListener("click", () => {
//   mediaScroller.scrollLeft += mediaScrollerWidth;
// } )
//  to do: fix the position of the next and prev so they remain where they are through the container with css
// end of card slider

// start of swiper
const swiperEl = document.querySelector(".swiper");
var swiper = new Swiper(".slide-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: true,
  centerSlide: "true",
  grabCurser: "true",
  fade: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// const swiperParams = {
//   breakPoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     576: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     992: {
//       slidesPerView: 4,
//     },
    
//   },
  
//   on: {
//     init() {
//       // ...
//     },
//   },
// }
// Object.assign(swiperEl, swiperParams);
// swiperEl.initialize();
// use plan-card button to show / hide content


const planCards = Array.from(document.querySelectorAll(".plan-card"));
const planCardBtns = Array.from(document.querySelectorAll(".plan-card-btn"));
const closePlanBtns = Array.from(document.querySelectorAll(".close-plan-btn"));
const planCardUls = [];
for (card of planCards) {
  let cardUl = card.querySelector(".ul-and-text");
  planCardUls.push(cardUl);
}

planCardBtns.forEach(btn => btn.addEventListener("click", ()=> {
  // which btn was clicked?
  let btnIndex = planCardBtns.indexOf(btn);
  planCardUls[btnIndex].style.display = "block";
  // hide the read-more btn and display another btn
  btn.style.display = "none";
  closePlanBtns.forEach(closeBtn => closeBtn.addEventListener("click", () => {
    let closeBtnIndex = closePlanBtns.indexOf(closeBtn);
    planCardUls[btnIndex].style.display = "none";
    btn.style.display = "block";
  }))

}));
// end of plan cards

// add closing function for js cards
const jsCards = Array.from(document.querySelectorAll(".js-card"));
const jsCardsCloseBtns = Array.from(document.querySelectorAll(".js-card-close-btn"));
console.log(jsCardsCloseBtns);
console.log(jsCards);
// when clicked, remove the js card
jsCardsCloseBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    // find the index
    const btnIndex = jsCardsCloseBtns.indexOf(btn);
    jsCards[btnIndex].style.display = "none";
  });
})
