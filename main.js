let bars = document.querySelector(".bar");
let close = document.querySelector(".close");
let list = document.querySelector(".list");
bars.addEventListener("click", function () {
  bars.style.display = "none";
  close.style.display = "block";
  list.style.display = "block";
});
close.addEventListener("click", function () {
  bars.style.display = "block";
  close.style.display = "none";
  list.style.display = "none";
});
let puyCart = document.getElementById("cart");
let puyCourse = document.querySelector(".puy-course");
let menuCart = document.querySelector(".close-menu");
puyCart.addEventListener("click", function () {
    // puyCourse.style.display = "block";
    puyCourse.style.opacity = "1";
});
menuCart.addEventListener("click", function () {
  puyCourse.style.display = "none";
});

//stop
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
