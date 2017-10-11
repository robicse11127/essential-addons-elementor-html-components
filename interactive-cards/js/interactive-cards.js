(function($) {
	"use strict";

	// Interactive phone screen
	window.interactiveCards = function ( options ) {

		var values = {
			container: options.containerClass,
			screenAnimation: options.screenAnimation,
			mockupAnimation: options.mockupAnimation,
			contentAnimation: options.contentAnimation,
			shadow: options.shadow,
			revealTime: options.revealTime
		};

		// Enable/Disable Shadow
		if( true == values.shadow ) {
			var addShadow = 'add-shadow';
		}else {
			var addShadow = 'no-shadow';
		}

		var interactiveCard = $( '#'+values.container );
		var phoneMockup = $( '#'+values.container+' .phone-mockup' );
		var phoneScreen = $( '#'+values.container+' .phone-mockup .phone-screen' );
		var contentShow = $( '#'+values.container+' .content' );
		var closeMe		= $( '#'+values.container+' .close-me' );

		phoneScreen.on( 'click', function() {
			$(this).removeClass( values.screenAnimation.end ).addClass( values.screenAnimation.start );
			setTimeout( function() {
				phoneMockup.removeClass( values.mockupAnimation.end ).addClass( values.mockupAnimation.start );
				setTimeout( function() {
					contentShow.addClass( values.contentAnimation );
					interactiveCard.addClass( addShadow );
				}, options.revealTime * 2 );
			}, options.revealTime );
		} );

		closeMe.on( 'click', function() {
			interactiveCard.removeClass( addShadow );
			contentShow.removeClass( values.contentAnimation );
			setTimeout( function() {
				phoneMockup.removeClass( values.mockupAnimation.start ).addClass( values.mockupAnimation.end );
				setTimeout( function() {
					phoneScreen.removeClass( values.screenAnimation.start ).addClass( values.screenAnimation.end );
				}, options.revealTime * 2 );
			},options.revealTime );
		} );

	}
	// var options = {
	// 	containerClass: 'interactive-card',
	// 	screenAnimation: {
	// 		start: 'fade-out',
	// 		end: 'fade-in'
	// 	},
	// 	mockupAnimation: {
	// 		start: 'zoom-out',
	// 		end: 'zoom-in'
	// 	},
	// 	contentAnimation: 'slide-in-swing-left',
	// 	shadow: true,
	// 	revealTime: 400
	// }
	// interactiveCards( options );

})(jQuery);