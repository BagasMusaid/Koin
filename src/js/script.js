const hamburger = document.querySelector("#humberger");
const navmenu = document.querySelector("#nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixelnav = header.offsetTop;

  if (window.pageYOffset > fixelnav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
