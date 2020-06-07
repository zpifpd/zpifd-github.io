
$(window).scroll(function() {

   if ($(window).scrollTop() > 100) {
       $('.main_h').addClass('sticky');
   } else {
       $('.main_h').removeClass('sticky');
   }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
   if ($('.main_h').hasClass('open-nav')) {
       $('.main_h').removeClass('open-nav');
   } else {
       $('.main_h').addClass('open-nav');
   }
});

$('.main_h li a').click(function() {
   if ($('.main_h').hasClass('open-nav')) {
       $('.navigation').removeClass('open-nav');
       $('.main_h').removeClass('open-nav');
   }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
   var id = $(this).attr("href");
   var offset = 70;
   var target = $(id).offset().top - offset;
   $('html, body').animate({
       scrollTop: target
   }, 500);
   event.preventDefault();
});

var next = document.getElementById('next');
var prew = document.getElementById('prew');

var slides = document.getElementsByClassName('slide');
for(var i=0; i<slides.length; i++) {
   slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.nextElementSibling) {
       activeEl.style.left = "-100%";
       activeEl.classList.remove('active');
       activeEl.nextElementSibling.classList.add('active');
       this.classList.remove('no_active');
       prew.classList.remove('no_active');
       if(!activeEl.nextElementSibling.nextElementSibling) {
          this.classList.add('no_active');
       }
    }
}
prew.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.previousElementSibling) {
       activeEl.previousElementSibling.style.left = "0%";
       activeEl.classList.remove('active');
       activeEl.previousElementSibling.classList.add('active');
       this.classList.remove('no_active');
       next.classList.remove('no_active');
       if(!activeEl.previousElementSibling.previousElementSibling) {
          this.classList.add('no_active');
       }
    }
}