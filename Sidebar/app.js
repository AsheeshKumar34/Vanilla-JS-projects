let toggleBtn = document.querySelector(".sidebar-toggle");
let closeBtn = document.querySelector(".close-btn");
let sideBar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => sideBar.classList.toggle("show-sidebar"));

closeBtn.addEventListener("click", () => sideBar.classList.remove("show-sidebar"));
