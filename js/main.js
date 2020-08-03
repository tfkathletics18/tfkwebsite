;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="colorlib-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#colorlib-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#colorlib-offcanvas').append(clone2);

		$('#colorlib-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#colorlib-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
		});
	};

	var burgerMenu = function() {

		$('body').on('click', '.js-colorlib-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".colorlib-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#colorlib-hero .flexslider').flexslider({
			animation: "fade",

			// easing: "swing",
			// direction: "vertical",

			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel1');
		owl.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
			autoplay: true,
			items: 1,
			autoHeight: true,
		   loop: true,
		   margin: 0,
		   responsiveClass: true,
		   nav: false,
		   dots: true,
		   autoplayHoverPause: true,
		   mouseDrag: false,
		   smartSpeed: 500,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});

	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		parallax();
		owlCrouselFeatureSlide();
	});


}());

var svcbtn = function (e){
	var type = $(e)[0].dataset.name;

	var links = {
		"1on1":"https://firebasestorage.googleapis.com/v0/b/tfkathletics.appspot.com/o/1on1.MOV?alt=media&token=e9ef9e6c-0ceb-4552-9d9a-17862c8a1b03",
		"agility":"https://firebasestorage.googleapis.com/v0/b/tfkathletics.appspot.com/o/speed.MOV?alt=media&token=03c71012-10a6-4cdd-b2c4-46052214a934",
		"group":"https://firebasestorage.googleapis.com/v0/b/tfkathletics.appspot.com/o/group.MOV?alt=media&token=e02be095-123f-4568-832c-56668633be60",
		"position":"https://firebasestorage.googleapis.com/v0/b/tfkathletics.appspot.com/o/position.MOV?alt=media&token=5bf197bc-afb0-4a03-be9f-7de35807c73a",
		"sportspecific":"https://firebasestorage.googleapis.com/v0/b/tfkathletics.appspot.com/o/sport.MOV?alt=media&token=f1b91b0d-123a-4492-a39a-67a230645c91",
		"body":"https://firebasestorage.googleapis.com/v0/b/tfkathletics.appspot.com/o/body.MOV?alt=media&token=ad82459f-2706-4377-8e4e-2a90ecdaa6a0",
		"team":``,
		"online":""
	};

	var appendVideo = function(typ){

		var element = ( type != "team")? `<video class="videl" controls src="`+links[typ]+`"  ></video>`: `
		<div class="imageholdersrv">
			<div class="row">
				<div style="padding: 5px 25px;" class="imghsvc col-md-4"><img style="height: 100%;width: 100%;" src="https://firebasestorage.googleapis.com/v0/b/tfkathletics.appspot.com/o/t1.JPG?alt=media&token=a1c424c2-cc4a-461f-9ad9-541d1db52546" class="imgsvc"></div>
				<div style="padding: 5px 25px;" class="imghsvc col-md-4"><img style="height: 100%;width: 100%;" src="https://firebasestorage.googleapis.com/v0/b/tfkathletics.appspot.com/o/t2.JPG?alt=media&token=c8ff8f08-36a6-4b03-acbb-599c66bc8240" class="imgsvc"></div>
				<div style="padding: 5px 25px;" class="imghsvc col-md-4"><img style="height: 100%;width: 100%;" src="https://firebasestorage.googleapis.com/v0/b/tfkathletics.appspot.com/o/t3.JPG?alt=media&token=caf53fc4-cc10-40ae-9fb8-41f522ef541c" class="imgsvc"></div>
			</div>
		</div>`;
		
		$(`body`).append(`
			<div class="videowidget" style="position: fixed;top: 0;width: 100%;height: 100%;background: rgba(23, 20, 20, 0.95)">
				<div class="container" style="margin-top: 50px;">
					<div class="row" >
						<div class="text-center" style="overflow-x: hidden;overflow-y: scroll;height: 100vh;padding-bottom: 100px;">
							<h1 class="rowsvc">`+type+`</h1>
							`+element+`
							<div class="btnhcls"><button style="border: solid 1px white;background: none;width: 200px;color: white;font-size: 14px;padding: 5px 0;" onclick="cls()">Close</button></div>
						</div>
					</div>
				</div>
			</div>
		`);
	};

	appendVideo(type);
};

var cls = function(){$('.videowidget').remove();}