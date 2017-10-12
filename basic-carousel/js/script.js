(function($) {

	"use strict";

	var carouselContainer = $( '#carousel-container' ),
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

	var navSelector = $( 'a.nav' );
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


})(jQuery);