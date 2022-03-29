//SLIDERS
//initialization
$(document).ready(function () {
	$('.slider').slick({
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		accessibility: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: false,
		autoplay: false,
		autoplaySpeed: 3000,
		initialSlide: 0,
		centerMode: false, //центр для второго слайдера
		centerPadding: '0px',
		pauseOnFocuse: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		touchThreshold: 5,
		tochMove: true,
		draggable: true, //отмена свайпа на ПК
		swipe: true,
		waiteForAnimate: true,//регулеровка скорости прокрутки
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false, //вертикальный слайдер, надо убрать флекс на блок. Для контейнера картинки надо указать высоту. Надо изменить свайп.
		verticalSwiping: false,
		//asNavFor: ".sliderbig",
		modileFirst: false,
		appendArrows: $('.control-main-slider__arrow'),
		//appendDots:$('.контейнер, куда переносить стрелки'),
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 767.98,
			settings: { slidesToShow: 1 }
		}, {
			breakpoint: 479.98,
			settings: { slidesToShow: 1 }
		}]
	});
});

//SLIDERS
//initialization
$(document).ready(function () {
	$('.slider-two').slick({
		dots: false,
		arrows: true,
		adaptiveHeight: false,
		accessibility: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		initialSlide: 0,
		centerMode: false, //центр для второго слайдера
		centerPadding: '0px',
		pauseOnFocuse: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		touchThreshold: 5,
		tochMove: true,
		draggable: true, //отмена свайпа на ПК
		swipe: true,
		waiteForAnimate: true,//регулеровка скорости прокрутки
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false, //вертикальный слайдер, надо убрать флекс на блок. Для контейнера картинки надо указать высоту. Надо изменить свайп.
		verticalSwiping: false,
		//asNavFor: ".sliderbig",
		modileFirst: false,
		appendArrows: $('.control-slider-lots__arrow'),
		//appendDots:$('.контейнер, куда переносить стрелки'),
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 767.98,
			settings: { slidesToShow: 2 }
		}, {
			breakpoint: 479.98,
			settings: { slidesToShow: 1 }
		}]
	});
});
//SLIDERS
//initialization
$(document).ready(function () {
	$('.slider-small').slick({
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		accessibility: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease-in-out',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 7000,
		initialSlide: 0,
		centerMode: false, //центр для второго слайдера
		centerPadding: '0px',
		pauseOnFocuse: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		touchThreshold: 5,
		tochMove: true,
		draggable: true, //отмена свайпа на ПК
		swipe: true,
		waiteForAnimate: true,//регулеровка скорости прокрутки
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		fade: true,
		speed: 1000,
		loop: true,
		appendArrows: $('.control-slider-quotes__decor'),
		appendDots: $('.control-slider-quotes__circle'),
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
	});
});