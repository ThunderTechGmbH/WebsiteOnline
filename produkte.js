// First Card
const Text = document.querySelector(".centeredText");
const Foto = document.querySelector(".item-fade");
// Second Card
const Text1 = document.querySelector(".centeredText1");
const Foto1 = document.querySelector(".item-fade1");
// Third Card 
const Text2 = document.querySelector(".centeredText2");
const Foto2 = document.querySelector(".item-fade2");
// Fourth Card
const Text3 = document.querySelector(".centeredText3");
const Foto3 = document.querySelector(".item-fade3");


card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
});

card1.addEventListener("click", function (e) {
    card1.classList.toggle('is-flipped1');
});

card2.addEventListener("click", function (e) {
    card2.classList.toggle('is-flipped2');
});

  // Card 1

card.addEventListener("mouseover", function (e) {
    Text.classList.toggle('disappear');
    Foto.classList.toggle('show');
    console.log ("Mouseenter");
});

card.addEventListener("mouseout", function (e) {
    Text.classList.toggle('disappear');
    Foto.classList.toggle('show');
    console.log ("Mousleave");
});

// Card 2

card1.addEventListener("mouseover", function (e) {
    Text1.classList.toggle('disappear1');
    Foto1.classList.toggle('show1');
    console.log ("Mouseenter");
});

card1.addEventListener("mouseout", function (e) {
    Text1.classList.toggle('disappear1');
    Foto1.classList.toggle('show1');
    console.log ("Mousleave");
});

// Card 3

card2.addEventListener("mouseover", function (e) {
    Text2.classList.toggle('disappear2');
    Foto2.classList.toggle('show2');
    console.log ("Mouseenter");
});

card2.addEventListener("mouseout", function (e) {
    Text2.classList.toggle('disappear2');
    Foto2.classList.toggle('show2');
    console.log ("Mousleave");
});

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

document.getElementById("buttonS").addEventListener("click", submitClicked)

function submitClicked() {
    alert ("Mail Send")
}

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform ="translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener("click", () => {
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    });

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id === "lastImg"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if (carouselImages[counter].id === "firstImg"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});
