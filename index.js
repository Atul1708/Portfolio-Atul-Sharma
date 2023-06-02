let menuBtn = document.querySelector(".menu");
let menuSpan = document.querySelector(".menu span");
let links = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("active");
  if (menuSpan.innerHTML == "close") {
    menuSpan.innerHTML = "menu";
  } else {
    menuSpan.innerHTML = "close";
  }
});

// jquery
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});

// typing animation
let typed = new Typed(".typing", {
  strings: ["Student", "Computer Engineer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});


