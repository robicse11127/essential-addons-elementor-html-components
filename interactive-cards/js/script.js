(function($) {
	"use strict";
	var interactiveCard = $( '.interactive-card' );
	var phoneMockup = $( '.interactive-card .phone-mockup' );
	var phoneScreen = $( '.interactive-card .phone-mockup .phone-screen' );
	var contentShow = $( '.interactive-card .content' );
	var closeMe		= $( '#close-me' );

	// Interactive phone screen
	// function interactivePhoneScreen( options ) {
	// 	''
	// }
	phoneScreen.on( 'click', function() {
		$(this).removeClass( 'fade-in' ).addClass( 'fade-out' );
		setTimeout( function() {
			phoneMockup.removeClass( 'zoom-in' ).addClass( 'zoom-out' );
			setTimeout( function() {
				contentShow.addClass( 'content-show' );
				interactiveCard.addClass( 'add-shadow' );
			}, 800 );
		}, 400 );
	} );

	closeMe.on( 'click', function() {
		interactiveCard.removeClass( 'add-shadow' );
		contentShow.removeClass( 'content-show' );
		setTimeout( function() {
			phoneMockup.removeClass( 'zoom-out' ).addClass( 'zoom-in' );
			setTimeout( function() {
				phoneScreen.removeClass( 'fade-out' ).addClass( 'fade-in' );
			}, 800 );
		},400 );
	} );

})(jQuery);

/*
animation options: content-show | slide-in-left | slide-in-swing-left
				| slide-in-right | slide-in-swing-right

*/