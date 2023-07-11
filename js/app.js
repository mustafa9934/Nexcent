const nav = document.querySelector(".mobile_nav_list");
const burger = document.querySelector(".nav_burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("show_mobile_nav");
});
