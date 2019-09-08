$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 712) {
          $('body #navbar ').addClass('colorBack')
       }
       if ($(this).scrollTop() < 712) {
          $('body #navbar').removeClass('colorBack')
       }
    });
 });

 $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

AOS.init();

var options = {
    strings: ["","Hi, I'm Slav ^1000 <br> I'm a Computer Science Student"],
    typeSpeed: 90
  }
  
var typed = new Typed(".element", options);

// var typed = new Typed('#typed', {
//     stringsElement: '#typed-strings',
//     typeSpeed: 40
// });

// var typed2 = new Typed('#typed2', {
//     stringsElement: '#typed-strings2',
//     startDelay: 2000,
//     typeSpeed: 40
// });



