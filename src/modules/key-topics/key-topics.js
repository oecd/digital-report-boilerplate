/**
 * Agence'O - key-topics
 * @author Guillaume Bouillon (Agence'O)
 * @created 03/04/2019
 */
import 'slick-carousel';
import './key-topics.scss';

$('.key-topics__content').each((index, item) => {

	const slider = $(item);

	slider.slick({
		infinite: false,
		autoplay: false,
		swipeToSlide: true,
		mobileFirst: true,
		dots: false,
		slidesToShow: 2,
		prevArrow: '<button class="slider__control slider__control--prev"><span class="visually-hidden">prev</span></button>',
		nextArrow: '<button class="slider__control slider__control--next"><span class="visually-hidden">next</span></button>',
		appendArrows: slider.parent().find('.slider__controls'),
		arrows: true,
		rows: 2,

		// the magic
		responsive: [{
			breakpoint: 750,
			settings: {
				slidesToShow: 4,
				rows: 1
			}
		}]
	});
});
