$(document).ready(function () {
  // click burger menu

  $(document).on("click", ".burger", function () {
    $(".mobile_nav").toggleClass("mobile_nav_toggle");
    $(".cards").css("display", "none");
  });

  // show mobile navigation on "+" button click

  $("#see_more").click(function () {
    $(".click_menu").css("display", "block");
  });

  $(".close_icon").click(function () {
    $(".click_menu").css("display", "none");
  });

  // search input effect

  $(".search_icon").click(function () {
    $(".header_search").toggleClass("search_icon_js");
  });

  // show scroll button

  window.addEventListener("scroll", function () {
    let info = document.getElementById("info");

    if (info) {
      let info = document.getElementById("info");
      let windowheight = window.innerHeight;
      let heigght = info.getBoundingClientRect().top;

      let toppoint = 50;
      let top = this.document.querySelector(".fixed_");
      if (heigght < windowheight - toppoint) {
        top.style.opacity = "1";
      } else {
        top.style.opacity = "0";
      }
    }
  });

  window.addEventListener("resize", () => {

    if (window.innerWidth < 1219) {
        let mainMenu = document.querySelector(".main-menu");

      mainMenu.classList.add("mobile_nav");
    } else {
        let mainMenu = document.querySelector(".main-menu");

      mainMenu.classList.remove("mobile_nav");
    }
  });
});

if (window.innerWidth < 1219) {
    let mainMenu = document.querySelector(".main-menu");

    mainMenu.classList.add("mobile_nav");
  } else {
    let mainMenu = document.querySelector(".main-menu");

    mainMenu.classList.remove("mobile_nav");
  }
