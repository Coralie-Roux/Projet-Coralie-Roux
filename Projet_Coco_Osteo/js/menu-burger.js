const slideout = new Slideout({
  panel: document.getElementById("panel"),
  menu: document.getElementById("menu"),
  padding: 250,
  tolerance: 50,
  side: "right",
});

const menuButton = document.getElementById("menu-button");
const icon = menuButton.querySelector("i");

menuButton.addEventListener("click", () => {
  slideout.toggle();
});

slideout.on("open", () => {
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-times");
});

slideout.on("close", () => {
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");
});

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    slideout.close();
  });
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnButton = menuButton.contains(event.target);

  if (slideout.isOpen() && !isClickInsideMenu && !isClickOnButton) {
    slideout.close();
  }
});