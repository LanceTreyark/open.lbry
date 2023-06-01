/*New Updated Menu 810am 5.31.23*/
/*menu.js -Start*/

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      menu.style.transform = "translateX(100%)";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";

      // Check if it's a mobile device
      if (window.innerWidth <= 768) {
        menu.style.transform = "translateX(50%)";
      } else {
        // Desktop
        menu.style.transform = "translateX(75%)";
      }
    }
  }

  hamburger.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  closeIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleMenu();
    });
  });

  document.addEventListener("click", function () {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    menu.style.transform = "translateX(100%)";
  });
});


/*
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";

      // Check if it's a mobile device
      if (window.innerWidth <= 768) {
        menu.style.transform = "translateX(100%)";
      } else {
        // Desktop
        menu.style.transform = "translateX(75%)";
      }
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";

      // Check if it's a mobile device
      if (window.innerWidth <= 768) {
        menu.style.transform = "translateX(50%)";
      } else {
        // Desktop
        menu.style.transform = "translateX(75%)";
      }
    }
  }

  hamburger.addEventListener("click", toggleMenu);
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  });

  document.addEventListener("click", function (event) {
    const target = event.target;
    const isClickInsideMenu = menu.contains(target);
    const isClickInsideHamburger = hamburger.contains(target);

    if (!isClickInsideMenu && !isClickInsideHamburger) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      menu.style.transform = "translateX(100%)";
    }
  });
});


*/

/*
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      menu.style.transform = "translateX(100vw)";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
      menu.style.transform = "translateX(60vw)";
    }
  }

  hamburger.addEventListener("click", toggleMenu);
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  });

  document.addEventListener("click", function (event) {
    const target = event.target;
    const isClickInsideMenu = menu.contains(target);
    const isClickInsideHamburger = hamburger.contains(target);

    if (!isClickInsideMenu && !isClickInsideHamburger) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      menu.style.transform = "translateX(100%)";
    }
  });
});
*/