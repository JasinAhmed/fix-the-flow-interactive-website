// 1. ELEMENTEN SELECTEREN
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("#navList");

// 2. EVENT TOEVOEGEN
hamburger.addEventListener("click", function () {

  // 3. ACTIE: CSS CLASSES TOGGLEN
  navList.classList.toggle("open");
  hamburger.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});
