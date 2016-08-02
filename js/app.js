$(document).ready(function() {
  doIntro();
  $('.ryu').mouseenter(function() {
    $('.ryu-ready').show();
    $('.ryu-still').hide();
    $('.ryu-throwing').hide();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    $('.ryu-throwing').hide();
  })
  .mousedown(function() {
    //console.log('mousedown');
    // play hadouken sound
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    // animate hadouken to the right of the screen
  	$('.hadouken').finish().show()
		.animate(
			{'left': '80%'},
			500,
			function() {
			  $(this).hide();
			  //$(this).css('left', '-212px');
        $(this).css('left', '600px');
		}
	);
  })
  .mouseup(function() {
    console.log('mouseup');
    $('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  });

  $(document).keydown(function(event){
        if ( event.which == 88 ) {
          //alert("x/X keydown");
          $('.ryu-ready').hide();
          $('.ryu-still').hide();
          $('.ryu-throwing').hide();
          $('.ryu-cool').show();
        }
      })
    .keyup(function(event){
        if ( event.which == 88 ) {
          $('.ryu-ready').hide();
          $('.ryu-still').show();
          $('.ryu-throwing').hide();
          $('.ryu-cool').hide();
        }
      })
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function doIntro() {
//  $('#theme-song')[0].volume = 0.3;
//  $('#theme-song')[0].play();
  $('.logo-stfighter').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.img-brought').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.logo-jquery').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.text-instruction').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
