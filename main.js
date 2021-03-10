const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector(".menu-items");
const body =document.querySelector("body")
const card = document.querySelector(".card__inner");
const card1 = document.querySelector(".card__inner1");
const card2 = document.querySelector(".card__inner2");
const card3 = document.querySelector(".card__inner3");
const fader = document.querySelectorAll(".fade-in");
var block = document.getElementById("buy-block");

let menuOpen = false;

window.onload = function () {
    window.scrollTo(0, 0);
  }

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
    body.classList.toggle('noScroll');

    if (block.style.display === "none") {
      block.style.display = "block";
    } else {
      block.style.display = "none";
    }
  
});

    // function visitPage(){
    //  window.location='index.php';
   //  }
  
    
