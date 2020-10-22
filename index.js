$('.carousel').carousel({
    interval: 2000
  })



  //  botao subir ao topo 

    jQuery(document).ready(function(){
    
    jQuery("#subirTopo").hide();
    
    jQuery('a#subirTopo').click(function () {
             jQuery('body,html').animate({
               scrollTop: 0
             }, 800);
            return false;
       });
    
    jQuery(window).scroll(function () {
             if (jQuery(this).scrollTop() > 1000) {
                jQuery('#subirTopo').fadeIn();
             } else {
                jQuery('#subirTopo').fadeOut();
             }
         });
    });
   
// carouceu

$('#myCarousel').carousel({
   interval: 10000
 })
 
 $('.carousel .item').each(function(){
   var next = $(this).next();
   if (!next.length) {
     next = $(this).siblings(':first');
   }
   
   next.children(':first-child').clone().appendTo($(this));
 });

