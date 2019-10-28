/**
 * Agence'O - key-facts-slider
 * @author Axel Baron (Agence'O)
 * @created 29/04/2019
 */

import Swiper from "swiper/js/swiper.js";
import './key-facts-slider.scss';

var keyFactsSlider = new Swiper('.key-facts-slider', {
	navigation: {
		nextEl: '.key-facts-slider__next',
		prevEl: '.key-facts-slider__prev',
	},
	slidesPerView: 1,
	loop: true,
	speed: 500
});
