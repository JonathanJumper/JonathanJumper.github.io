$(window).scroll(function(){
	if($(window).scrollTop() >= 500) {
		$('nav').addClass('sticky');
	}
	else {
		$('nav').removeClass('sticky');
	}
});

$(document).ready(function () {
  console.log("rerii")
  $(".linky").click(function (event) {
    console.log("huehuheu")
    var id = $(this).attr("href");
    var offset = 75;
    var target = $(id).offset().top - offset;
    $('html, body').animate({ scrollTop: target }, 700);
  });
});


/* typewriter animation */
var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
};


//

$(function (){

  // Cache vars
  var $gallery = $('.gallery'),
      $lightbox = $('.lightbox'),
      $figure = $('figure'),
      $close = $('.close');

  // Dribbble API shizzz
  var token = 'b5501bcf1ef8eca0ef89aa3982ca742556d65b1832e077019397bbe0960df317';
  var url = 'https://api.dribbble.com/v1/shots?sort=recent&access_token=' + token;

  // Grab Dribbble popular
  $(function(data) {

    // Handle item click
    $('.item').on('click', function() {
      var full = $(this).attr('data-full');
      toggleLightbox(full);
      console.log(full);
    });

    // Toggle lightbox
    function toggleLightbox(url) {
      if ($lightbox.is('.open')) {
        $lightbox
          .removeClass('open')
          .fadeOut(200);
      }
			else {
        $figure.css('background-image', 'url(' + url + ')');
        $lightbox
          .addClass('open')
          .fadeIn(200);
      }
    }

    // Close
    $lightbox.on('click', toggleLightbox);
		
	});

});