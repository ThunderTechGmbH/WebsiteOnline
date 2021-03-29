function Scrolldown() {
  window.scroll(0,3000); 
  setTimeout(() => { 
    window.scroll(0,0);	
  }, 50);
}

window.onload = Scrolldown;

const elem = document.querySelector(".menu-items");
const button = document.querySelector(".menu-btn__lines");
const buttonI = document.querySelector(".menu-btn");
var indexArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,3001,3002,3003,3004,3005,3006,3007,3008,3009,3010,3011,3012,3013,3014,3015,3016,3017,3018,3019,3020,3021,3022,3023,3024,3025,3026,3027,3028,3029,3030,3031,3032,3033,3034,3035,3036,3037,3038,3039,3040,3041,3042,3043,3044,3045,3046,3047,3048,3049,3050];

window.addEventListener('scroll', (function() {
  if (bigArray.includes(window.scrollY)) {
    elem.classList.add('hidden-nav');
    elem.classList.remove('show-nav');
  
    buttonI.classList.add('hidden-nav');
    buttonI.classList.remove('show-nav');

    console.log("hide")
  }
}));

window.addEventListener('scroll', (function() {
  if (indexArray.includes(window.scrollY)) {
    elem.classList.remove('hidden-nav');
    elem.classList.add('show-nav');
    
    buttonI.classList.remove('hidden-nav');
    buttonI.classList.add('show-nav');
    
    console.log("show")
  }
  }));

  const start = document.querySelector("#start");
  const intro = document.querySelector(".intro");
  const video = intro.querySelector("video");
  const text = intro.querySelector("h5");
  //END SECTION
  const section = document.querySelector("section");
  const end = section.querySelector("h5");
  
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
  const textAnim = TweenMax.fromTo(text, 1, { opacity: 1 }, { opacity: 0 });
  
  let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: start,
    triggerHook: 0
  })
    .setTween(textAnim)
    .addTo(controller);
  
  //Video Animation
  let scrollpos = 0;
  let delay = 0;
  
  scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
  });
  
  setInterval(() => {
    delay += (scrollpos - delay);
  
    video.currentTime = delay;
  }, 20);

  video.addEventListener("progress", function() {
    // When buffer is 1 whole video is buffered
    if (Math.round(video.buffered.end(0)) / Math.round(video.seekable.end(0)) === 1) {
      // Entire video is downloaded
      console.log("Y")
   }
  }, false);