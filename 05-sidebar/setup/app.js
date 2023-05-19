const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const toggle = document.querySelector(".sidebar-toggle");

// toggle sidebar
toggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

// close button inside the sidebar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
