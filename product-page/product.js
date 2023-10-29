// fix previous button
// create sticky navbar
const navBar = document.querySelector(".navbar-sticky-container");
window.addEventListener("scroll", addSticky);
function addSticky() {
  navBar.classList.toggle("sticky", window.scrollY > 0)
}

// make breakpoint for card sortBy function
const burgerIcon = document.querySelector(".sort-by-cont").firstElementChild;
const smallMobile = window.innerWidth <= 576;
const sortByCont = document.querySelector(".sort-by-cont");
const para = Array.from(sortByCont.querySelectorAll("a"));
const makeBurgerContent = () => {
  para.forEach(par => par.style.display = "flex");
  sortByCont.classList.add("burger");
  burgerIcon.addEventListener("click", ()=> {
    if (para[0].style.display == "flex") {
      sortByCont.classList.remove("burger");
      para.forEach(par => par.style.display = "none");
    } else if (para[0].style.display == "none") {
      sortByCont.classList.add("burger");
      para.forEach(par => par.style.display = "flex");
    }
  });
}
if (smallMobile === true) {
  para.forEach(par => par.style.display = "none");
  burgerIcon.addEventListener("click", makeBurgerContent);
}
if (smallMobile === false) {
  sortByCont.classList.remove("burger");
}

// start of pagination
// add active class when clicked
const Pagination = (function () {
  const pagination = document.querySelector(".pagination");
  const pageItemCont = pagination.querySelector(".page-item-cont");
  const pageItems = Array.from(pageItemCont.querySelectorAll(".page-item"));
  console.log(pageItems);
  let currentActive;
  // which item has the 'active' class?
  const setActive = () => {
    pageItems.forEach((item) => item.addEventListener("click", () => {
      currentActive = pageItemCont.querySelector(".active");
      item.classList.toggle("active");
      currentActive.classList.remove("active");
    }))
    // when 'next' is clicked, change 'active'
    const next = pagination.querySelector(".next-pagination");
    const prev = pagination.querySelector(".pre-pagination");
    next.addEventListener("click", ()=> {
      currentActive = pageItemCont.querySelector(".active");
      currentActive.nextElementSibling.classList.add("active");
      currentActive.classList.remove("active");
    });
    // to use this function, other product pages should be created
    // فانکشن پایین در صورت ساخت صفحات دیگر کار خواهد کرد
    // currentActive = pageItemCont.querySelector(".active");
    // if (currentActive === pageItems[0]) {
    //   prev.style.display = "none";
    // } else {
    //   prev.style.display = "block";
    // }
    prev.addEventListener("click", ()=> {
      currentActive = pageItemCont.querySelector(".active");
      currentActive.previousElementSibling.classList.add("active");
      currentActive.classList.remove("active");
    });
    
  }
  return {
    setActive : setActive,
  }
})();

Pagination.setActive();

// when the user is on page one, the previous button should be hidden and then active