const elem = document.querySelector(".menu-items");
const button = document.querySelector(".menu-btn__lines");
const buttonI = document.querySelector(".menu-btn");
var indexArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,3951,3952,3953,3954,3955,3956,3957,3958,3959,3960,3961,3962,3963,3964,3965,3966,3967,3968,3969,3970,3971,3972,3973,3974,3975,3976,3977,3978,3979,3980,3981,3982,3983,3984,3985,3986,3987,3988,3989,3990,3991,3992,3993,3994,3995,3996,3997,3998,3999,4000,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016,4017,4018,4019,4020,4021,4022,4023,4024,4025,4026,4027,4028,4029,4030,4031,4032,4033,4034,4035,4036,4037,4038,4039,4040,4041,4042,4043,4044,4045,4046,4047,4048,4049,4050,4051,4052,4053,4054,4055,4056,4057,4058,4059,4060,4061,4062,4063,4064,4065,4066,4067,4068,4069,4070,4071,4072,4073,4074,4075,4076,4077,4078,4079,4080,4081,4082,4083,4084,4085,4086,4087,4088,4089,4090,4091,4092,4093,4094,4095,4096,4097,4098,4099,4100];

window.addEventListener('scroll', function() {
  if (bigArray.includes(window.scrollY)) {
    elem.classList.add('hidden-nav');
    elem.classList.remove('show-nav');
  
    buttonI.classList.add('hidden-nav');
    buttonI.classList.remove('show-nav');

    console.log("hide")
  }
});

window.addEventListener('scroll', function() {
  if (indexArray.includes(window.scrollY)) {
    elem.classList.remove('hidden-nav');
    elem.classList.add('show-nav');
    
    buttonI.classList.remove('hidden-nav');
    buttonI.classList.add('show-nav');
    
    console.log("show")
  }
  });
// Video Section

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
//END SECTION
const section = document.querySelector("section");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 2030,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Video Animation
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  //console.log(scrollpos, delay);
  video.currentTime = delay;
}, 10);

function parralax(element, distance, speed) {
  const item = document.querySelector(element)

  item.style.transform = "translateY(${distance * speed}px)";
}

window.addEventListener("scroll", function(){
  parallax("intro", window.scrollY, 1);
})