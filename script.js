// 1. ELEMENTEN SELECTEREN
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("#navList");

// 2. EVENT TOEVOEGEN
hamburger.addEventListener("click", function () {

  // 3. ACTIE: CSS CLASS TOGGLEN
  navList.classList.toggle("open");
  hamburger.classList.toggle("open");
});

