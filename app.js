const elem = document.querySelector(".menu-items");
const button = document.querySelector(".menu-btn__lines");

window.addEventListener('scroll', function() {
    if(window.scrollY < 4000) {
        elem.classList.add('hidden-nav');
        elem.classList.remove('show-nav');

        button.classList.add('hidden-nav');
        button.classList.remove('show-nav');
    }
});

window.addEventListener('scroll', function() {
    if(window.scrollY > 4000) {
        elem.classList.remove('hidden-nav');
        elem.classList.add('show-nav');
        
        button.classList.remove('hidden-nav');
        button.classList.add('show-nav');
    }
});

// Video Section

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
