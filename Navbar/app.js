let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
