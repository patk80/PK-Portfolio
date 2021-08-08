const toggleButton  = document.getElementsByClassName("toggle-button")[0];
const navbarLinks   = document.getElementsByClassName("navbar-links")[0];
const hamburgerIcon = document.querySelector("#hamburger-icon");
const bar1          = document.querySelector("#bar-1");
const bar2          = document.querySelector("#bar-2");
const bar3          = document.querySelector("#bar-3");
const about         = document.querySelector("#about-link");
const projects      = document.querySelector("#projects-link");
const resume        = document.querySelector("#resume-link");
const contact       = document.querySelector("#contact-link");

toggleButton.addEventListener("click", () => {
  switchToggleStatus();
});

about.addEventListener("click", () => {
  switchToggleStatus();
});

projects.addEventListener("click", () => {
  switchToggleStatus();
});

resume.addEventListener("click", () => {
  switchToggleStatus();
});

contact.addEventListener("click", () => {
    switchToggleStatus();
});

function switchToggleStatus() {
  navbarLinks.classList.toggle("active");
  bar1.classList.toggle("bar-1-active");
  bar2.classList.toggle("bar-2-active");
  bar3.classList.toggle("bar-3-active");
}