'use strict';

( function() {
	function Slider( config ){
		this.container = config.container;
		this.nav = config.nav;

		this.slides = this.container.find( '.slide' );
		this.slideWidth = this.slides[0].clientWidth;
		this.numOfSlides = this.slides.length;

		this.current = 0;

	}

	Slider.prototype.transition = function( coords ) {
		this.container.animate({
			'margin-left': coords || -( this.current * this.slideWidth )
		});

	};

	Slider.prototype.setCurrent = function( dir ) {
		var pos = this.current;
		pos += ( ~~( dir === 'next') || -1 );

		this.current = ( pos < 0 ) ? this.numOfSlides - 1 : pos % this.numOfSlides;

	};


	var slider = new Slider({
		container: $('.slider ul'),
		nav: $('.nav')
	});


	slider.nav.find('button').on('click',function(){
		slider.setCurrent($(this).data('dir'));
		slider.transition();
	});


})();
