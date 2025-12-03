// 1. ELEMENTEN SELECTEREN
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".navList");

  console.log("hamburger:", hamburger);
  console.log("navList:", navList);

  // 2. EVENT TOEVOEGEN
  hamburger.addEventListener("click", function () {

    // 3. ACTIE: CSS CLASS TOGGLEN
    navList.classList.toggle("open");
  });

