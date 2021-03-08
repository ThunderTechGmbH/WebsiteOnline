const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector(".menu-items");
const body =document.querySelector("body")
const card = document.querySelector(".card__inner");
const card1 = document.querySelector(".card__inner1");
const card2 = document.querySelector(".card__inner2");
const card3 = document.querySelector(".card__inner3");
const fader = document.querySelectorAll(".fade-in");

let menuOpen = false;

window.onload = function () {
    window.scrollTo(0, 0);
  }

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
    body.classList.toggle('noScroll');
  
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
    
