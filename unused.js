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


    window.addEventListener('scroll', throttle(parallax, 14));

    function throttle(fn, wait) {
      var time = Date.now();
      return function() {
        if ((time + wait - Date.now()) < 0) {
          fn();
          time = Date.now();
        }
      }
    };
    
    function parallax() {
      var scrolled = window.pageYOffset;
      var parallax = document.querySelector(".parallax");
      // You can adjust the 0.4 to change the speed
      var coords = (scrolled * 0.4) + 'px'
      parallax.style.transform = 'translateY(' + coords + ')';
    }