$(document).ready(function(){
    
/*For the sticky navbar*/

    $('.js--section-events').waypoint(function(direction){
        
        if(direction=="down"){
            $('nav').addClass('solidbackground');
            $('#navbarCollapse').addClass('solidbackground2');
        }else{
            $('nav').removeClass('solidbackground');
            $('#navbarCollapse').removeClass('solidbackground2');
            
        }
    }, {
  offset: '60px'
});
    $('.js--section-join').waypoint(function(direction){
        
        if(direction=="down"){
            $('nav').addClass('solidbackground');
            $('nav').removeClass('navbar-light');
            $('nav').addClass('navbar-dark');
            $('.black-logo').addClass('hidden');
            $('.white-logo').removeClass('hidden');
            $('#navbarCollapse').addClass('solidbackground2');
        }else{
            $('nav').removeClass('solidbackground');
            $('nav').removeClass('navbar-dark');
            $('nav').addClass('navbar-light');
            $('.white-logo').addClass('hidden');
            $('.black-logo').removeClass('hidden');
            $('#navbarCollapse').removeClass('solidbackground2');
            
        }
    }, {
  offset: '60px'
});                           
/*For the scrolling*/
    $('.js--scroll-to-events').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-events').offset().top},1000)
    });
    $('.js--scroll-to-onair').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-onair').offset().top},1000)
    });
    $('.js--scroll-to-newsletter').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-newsletter').offset().top},1000)
    });
    
/* Fo the navbar */
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }

  });
    
    
/*Animations on scroll*/
    $('.js--wp-1').waypoint(function(directions){
        $('.js--wp-1').addClass('animated fadeInUp');
    },{
        offset:'35%'
    });
    

    $('.js--wp-2').waypoint(function(directions){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset:'27%'
    });
    
    $('.js--wp-3').waypoint(function(directions){
        $('.js--wp-3').addClass('animated fadeInUp');
    },{
        offset:'30%'
    });
    
});

