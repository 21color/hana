'use strict';

window.onload =()=>{
  $(document).on({
    'click': (e)=>{
      switch(e.target.id) {
        case 'asics': {
          $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
          $('#asics').addClass('activebtn');
          $('#keybord').removeClass('activebtn');
          $('#icecream').removeClass('activebtn'); 
          $('#ascicsjog100').addClass('show');
          $('#rectokeyboard').removeClass('show');  
          $('#lalasweet').removeClass('show'); 
        }
        break;
        case 'keybord': {
          $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
          $('#asics').removeClass('activebtn');
          $('#keybord').addClass('activebtn');
          $('#icecream').removeClass('activebtn'); 
          $('#ascicsjog100').removeClass('show');
          $('#rectokeyboard').addClass('show');  
          $('#lalasweet').removeClass('show');  
        }
        break;
        case 'icecream': {
          $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
          $('#asics').removeClass('activebtn');
          $('#keybord').removeClass('activebtn');
          $('#icecream').addClass('activebtn'); 
          $('#ascicsjog100').removeClass('show');
          $('#rectokeyboard').removeClass('show');  
          $('#lalasweet').addClass('show');   
        }
        }
      },
      'scroll': (e)=> {
    let headerH = $('.detailpage--header').outerHeight(true);
    let windowTop = window.scrollY;
    console.log(headerH)
    if(windowTop >= headerH) {
      $('.detailpage--header').addClass('fixdheader')
      $('.detailpagewapper').css({
        marginTop : headerH
      })
    } else {
      $('.detailpage--header').removeClass('fixdheader')
      $('.detailpagewapper').css({
        marginTop : '0rem'
      })
    }

  }
    })
}