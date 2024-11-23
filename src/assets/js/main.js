"use strict";

// muuri
document.addEventListener("DOMContentLoaded", function () {
  var grid = new Muuri(".grid");

  document.querySelectorAll(".filter-btns button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter; // ボタンのdata-filter属性からフィルタを取得
      grid.filter(filter === "*" ? () => true : `[data-tag="${filter}"]`); // data-tag属性でフィルタリング
      // console.log(filter);
    });
  });
});

// //navigation
// const navigation = document.querySelector('.navigation');
// const humbergarBtn = document.getElementById('humbergar-btn');
// const navigationTitle = document.querySelectorAll('.navigation-title');

// humbergarBtn.addEventListener('click',function(){
//   humbergarBtn.classList.toggle('open');
//   navigation.classList.toggle('open')
// });

// for(let i = 0; i < navigationTitle.length; i ++ ){
// navigationTitle[i].addEventListener('click',function(){
//   humbergarBtn.classList.remove('open');
//   navigation.classList.remove('open')
// });
// }

// console.log(humbergarBtn);
