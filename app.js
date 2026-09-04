const body = document.querySelector("body");
const buttons = document.querySelectorAll(".menu__button");
const open = document.querySelector(".open__button");
const close = document.querySelector(".close__button");
// console.log(body, buttons, open, close);
// Mobile menu
function menuToggle() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isActive = body.classList.toggle("menu__active");
      if (isActive) {
        open.setAttribute("aria-expanded", "true");
        close.setAttribute("aria-expanded", "false");
      } else {
        close.setAttribute("aria-expanded", "true");
        open.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function escapeMenu() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("menu__active")) {
      body.classList.remove("menu__active");
      open.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  menuToggle();
  escapeMenu();
});

function initPrice() {
  const root = document.querySelector(".pricing__block");
  if (!root) return;
  const toggle = root.querySelector(".toggle__button");
  console.log(root, toggle);

  // const isActiveToggle = root.classList.toggle("toggle__price");
  toggle.addEventListener("click", () => {
    root.classList.toggle("toggle-price");
  });
}
initPrice();
