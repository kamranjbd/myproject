/*Homepage Main-banner*/
$(document).ready(function() {
	
              var owl = $('.mb');
              owl.owlCarousel({
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                  1000: {
                    items: 1
                  }
                }
              })
            })
			
			/*Homepage specialities-slider*/
			
			 $(document).ready(function() {
              var owl = $('.specialitiesbox');
              owl.owlCarousel({
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
				  400: {
                    items: 2
                  },
                  600: {
                    items: 4
                  },
				  768: {
                    items: 5
                  },
                  1000: {
                    items: 6
                  }
                }
              })
            })
			
			/*Homepage PopularDoctors-slider*/
			
			$(document).ready(function() {
              var owl = $('.pdbox');
              owl.owlCarousel({
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  480: {
                    items: 2
                  },
				  768: {
                    items: 3
                  },
                  992: {
                    items: 4
                  },
				  1200: {
                    items: 5
                  }
                }
              })
            })
			
			/*Profile-page PopularDoctors-slider*/
			
			$(document).ready(function() {
              var owl = $('.pdprofile');
              owl.owlCarousel({
                nav: true,
				margin: 15,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  480: {
                    items: 2
                  },
				  768: {
                    items: 3
                  },
                  992: {
                    items: 2
                  },
				  1200: {
                    items: 3
                  }
                }
              })
            })
			
			/*Homepage reliable-slider*/
			
			$(document).ready(function() {
              var owl = $('.reliablebox');
              owl.owlCarousel({
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
				   480: {
                    items: 2
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 4
                  }
                }
              })
            })
			
			/*Search-page date-slider*/
			
			$(document).ready(function() {
              var owl = $('.dateslider');
              owl.owlCarousel({
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
				   480: {
                    items: 2
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 4
                  }
                }
              })
            })
			
			
		/*Mobile-menu*/
			
			$(document).ready(function() {
				$('.mobile-menu').click(function(){
  $(this).toggleClass("active");
  $('.menu').toggleClass("active");
});
			})
			
	/*login-popup*/
			
	$(document).ready(function() {		
			$('.ls-btn').click(function(){
  $(this).toggleClass("open");
  $('.login-box').toggleClass("open");
});
$('.login-box span.close').click(function(){
  $('.login-box').toggleClass("open");
  $('.ls-btn').toggleClass("open");
});

/*date-tabe*/

$('.dateslider li').click(function(){
	$('.dateslider li').removeClass( "active" );
	$('.tab-pane').removeClass( "active" );
	$(this).tab('show');
  });

$('.ba-btn').click(function(){
	$(this).toggleClass("active");
	$(this).parent('.se-buttons').next().toggleClass("active");
  });

/*profile-tab*/
  
$('.profile-tab .tab-title').click(function(){
	$('.profile-tab .tab-title').removeClass( "active" );
	$('.tab-details').removeClass( "active" );
	$(this).addClass( "active" );
	$(this).next().addClass( "active" );
  });

/*bookappinment*/

 $("div.book-detail div.tab-pane ul li").click(function(){
  $('div.book-detail div.tab-pane ul li').removeClass( "active" );
  $(this).toggleClass("active");
});

/*call*/

 $(".call-footer a.callend").click(function(){
  $('.call-ended').toggleClass( "active" );
  $(this).toggleClass("active");
});
  
})


/*language*/

$(document).ready(function(){

   /* var e = document.getElementById("language");
    var strUser = e.options[e.selectedIndex].value;
    //console.log("option number " + strUser);*

    //var masud = typeof(strUser);
    //console.log(masud);
	/if(strUser == "arbi"){
		$('body').removeClass("LTR");
        $('body').addClass("RTL");
    }
    if(strUser == "eng"){
		$('body').removeClass("LTR");
        $('body').addClass("LTR");
    }*/
    
	
	var prevVal;
$("#language").on("change",function(){
  var val = $(this).find('option:selected').val();
  if(val == "arbi"){
		$('body').removeClass("LTR");
        $('body').addClass("RTL");
    }
    if(val == "eng"){
		$('body').removeClass("RTL");
        $('body').addClass("LTR");
    }
// $('body').removeClass(`content-${prevVal}`).addClass(`content-${val}`);
  prevVal = val;
});
	
});