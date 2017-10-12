(function($) {
	"use strict";

	// Interactive phone screen
	window.interactiveCards = function ( options ) {

		var values = {
			container: options.containerId,
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
		var phoneScreenBg = phoneScreen.data( 'bg' );
		var contentShow = $( '#'+values.container+' .content' );
		var closeMe		= $( '#'+values.container+' .close-me' );

		console.log( phoneScreenBg );

		phoneScreen.css( 'background-image', 'url( '+phoneScreenBg+' )' );
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


		/**
		 * Carousel Scripts
		 */
		var carouselContainer = $( '#'+options.containerId+' .carousel-container' ),
			carousel = carouselContainer.find( 'ul' ),
			carouselItem = carousel.find( 'li' ),
			containerWidth = carouselContainer.width(),
			carouselItemWidth = carouselItem.first().children( 'img' ).width(),
			carouselItemQuantity = carousel.children( 'li' ).length,
			carouselWidth = carouselItemWidth * carouselItemQuantity,
			currentItem = 1;

		carousel.css( 'width', carouselWidth+'px' );
		carouselItem.css( 'width', containerWidth+'px' );

		// console.log(carouselWidth);

		var navSelector = $( '#'+options.containerId+' a.nav' );
		navSelector.on( 'click', function(e) {
			e.preventDefault();
			var navButtonSelector = $(this).data( 'nav' );
			if( 'next' === navButtonSelector ) {
				if( currentItem === carouselItemQuantity ) {
					currentItem = 1;
					scrollIn( currentItem, carouselItemWidth );
				}else {
					currentItem++;
					scrollIn( currentItem, carouselItemWidth );
				}
			}else if( 'prev' === navButtonSelector ) {
				if( currentItem == 1 ) {
					currentItem = carouselItemQuantity;
					scrollIn( currentItem, carouselItemWidth );
				}else {
					currentItem--;
					scrollIn( currentItem, carouselItemWidth );
				}
			}
		} );

		function scrollIn( currentItem, width ) {
			var slideItem = -( currentItem - 1 ) * width;
			carousel.animate({
				'left': slideItem,
			});
		}

	}

})(jQuery);