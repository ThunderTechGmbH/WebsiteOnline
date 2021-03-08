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