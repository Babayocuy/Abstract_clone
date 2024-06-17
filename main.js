import "./sass/style.scss";

document.querySelector(".bx-search").addEventListener("click", function () {
  document.querySelector(".input-linked").style.display = "flex";
});

document.querySelector(".fa-close").addEventListener("click", function () {
  document.querySelector(".input-linked").style.display = "none";
});
