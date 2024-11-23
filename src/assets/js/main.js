"use strict";

navigation;
const nav = document.querySelector("nav");
const hambergarBtn = document.getElementById("hambergar-btn");
const navTitle = document.querySelectorAll(".inner li");

// console.log(hambergarBtn);
hambergarBtn.addEventListener("click", () => {
  hambergarBtn.classList.toggle("open");
  nav.classList.toggle("open");
});

for (let i = 0; i < navTitle.length; i++) {
  navTitle[i].addEventListener("click", () => {
    hambergarBtn.classList.remove("open");
    nav.classList.remove("open");
  });
}
