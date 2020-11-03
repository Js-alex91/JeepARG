$(document).ready(function(){

    //slider
    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 1800
    });


    $('#acordeon').accordion({
      collapsible: true
    });


/* barra lateral */



  $('.btn_ocultar').on('click',function(){

      $('#lateral').toggleClass('abrir');
  
  })

    
})