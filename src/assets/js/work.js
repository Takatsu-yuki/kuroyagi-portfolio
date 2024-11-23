"use strict";

// muuri
document.addEventListener("DOMContentLoaded", function () {
  var grid = new Muuri(".grid");

  console.log(document.querySelector(".filter-buttons button.active"));
  document.querySelectorAll(".filter-btns button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter; // ボタンのdata-filter属性からフィルタを取得
      grid.filter(filter === "*" ? () => true : `[data-tag="${filter}"]`); // data-tag属性でフィルタリング

      document.querySelector(".filter-btns button.active")?.classList.remove("active");
      button.classList.add("active");
    });
  });
});
