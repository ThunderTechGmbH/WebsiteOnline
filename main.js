const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector(".menu-items");
const body =document.querySelector("body")
const card = document.querySelector(".card__inner");
const card1 = document.querySelector(".card__inner1");
const card2 = document.querySelector(".card__inner2");
const card3 = document.querySelector(".card__inner3");
const fader = document.querySelectorAll(".fade-in");
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




let menuOpen = false;

window.onload = function () {
    window.scrollTo(0, 0);
  }

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
    body.classList.toggle('noScroll');
  
});

  card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });

  card1.addEventListener("click", function (e) {
    card1.classList.toggle('is-flipped1');
  });

  card2.addEventListener("click", function (e) {
    card2.classList.toggle('is-flipped2');
  });

  const appearOptions = {
      threshhold: 1
  };

  const appearOnScroll = new IntersectionObserver
  (function(
    entries,
    appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
    appearOptions);

    fader.forEach(fader => {
        appearOnScroll.observe(fader);
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



    function visitPage(){
        window.location='index.php';
    }
  

    window.addEventListener('resize', function(e){

      var width = {
        width: window.innerWidth || document.body.clientWidth,
      }

      const widthNum = (Object.values(width))

      var element = document.getElementById('card'),
      style = window.getComputedStyle(element),
      margin = style.getPropertyValue('margin'); 

      console.log(widthNum);

       if (widthNum > 960) {
         if (widthNum > widthNum - 1) {
          console.log (margin)
         }

      }
      });
    
