const header = document.querySelector("header");
const button = document.querySelector("header button");

function headerTransition() {
  if (window.scrollY > 430) {
    header.classList.add("header-scrolled");
    button.classList.add("button-scrolled");
  } else {
    header.classList.remove("header-scrolled");
    button.classList.remove("button-scrolled");
  }
}

window.addEventListener("scroll", headerTransition);
