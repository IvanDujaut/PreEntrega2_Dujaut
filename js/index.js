const navToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navigation_visible");
})