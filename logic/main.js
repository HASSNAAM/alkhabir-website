// Responsive Navbar
let bars = document.querySelector(".icon-bar");
let list = document.querySelector(".bars");
bars.addEventListener("click", function () {
  list.classList.toggle("hidden");
});
// Cart
let puyCart = document.getElementById("cart");
let puyCourse = document.querySelector(".puy-course");
let menuCart = document.querySelector(".close-menu");
puyCart.addEventListener("click", function () {
  puyCourse.style.display = "block";
  puyCourse.style.animationName = "showMenu";
});
menuCart.addEventListener("click", function () {
  puyCourse.style.animationName = "closeMenu";
});

//stop right click
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
