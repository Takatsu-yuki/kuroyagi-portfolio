"use strict";

// muuri
document.addEventListener("DOMContentLoaded", function () {
  var grid = new Muuri(".grid");

  console.log(document.querySelector(".filter-buttons span.active"));
  document.querySelectorAll(".filter-btns span").forEach((span) => {
    span.addEventListener("click", () => {
      const filter = span.dataset.filter; // ボタンのdata-filter属性からフィルタを取得
      grid.filter(filter === "*" ? () => true : `[data-tag="${filter}"]`); // data-tag属性でフィルタリング

      document.querySelector(".filter-btns span.active")?.classList.remove("active");
      span.classList.add("active");
    });
  });
});
