/**
 * Agence'O - key-facts
 * @author Guillaume Bouillon (Agence'O)
 * @created 01/04/2019
 */

import _ from 'lodash';
import 'slick-carousel';
import 'selectric';
import './key-facts.scss';

const twitterImg = require('../../images/twitter--red.svg');

const countryIndicatorData = require('./country-indicators');
const countryIndicatorFrData = require('./country-indicators-fr');
const projectionByCountryData = require('./projection-by-country');

// On document (DOM) ready
$(function () {

	const countryData = _.orderBy(countryIndicatorData, ['name']);
	const countryFrData = _.orderBy(countryIndicatorFrData, ['name']);
	const projectionByCountry = _.orderBy(projectionByCountryData, ['name']);
	let filterData = [];
	let filterFrData = [];
	let filterEconomic = [];

	// Build Country indicators Block markup
	if ($('#js-key-facts-2[data-lang="en"]').length) {
		_.each(countryData, (country, index) => {

			const container = buildSlide(country);
			const wrapper = $('#js-key-facts-2[data-lang="en"] .key-facts__content')[0];
			wrapper.appendChild(container);

			// Build filter options
			if (filterData[country.name[0].toLowerCase()] === undefined) {
				filterData[country.name[0].toLowerCase()] = index;

				const filter = $('#js-key-facts-2-filter[data-lang="en"]')[0];
				const filterOption = document.createElement('option');
				filterOption.value = index;
				filterOption.textContent = country.name[0].toUpperCase();
				filter.appendChild(filterOption);
			}
		});
	}

	if ($('#js-key-facts-2[data-lang="fr"]').length) {
		_.each(countryFrData, (country, index) => {

			const container = buildSlide(country);
			const wrapper = $('#js-key-facts-2[data-lang="fr"] .key-facts__content')[0];
			wrapper.appendChild(container);

			// Build filter options
			if (filterFrData[country.name[0].toLowerCase()] === undefined) {
				filterFrData[country.name[0].toLowerCase()] = index;

				const filter = $('#js-key-facts-2-filter[data-lang="fr"]')[0];
				const filterOption = document.createElement('option');
				filterOption.value = index;
				filterOption.textContent = country.name[0].toUpperCase();
				filter.appendChild(filterOption);
			}
		});
	}

	if ($('#js-key-facts-2--economic[data-lang="en"]').length) {
		_.each(projectionByCountry, (country, index) => {
			console.log(country);

			const container = buildSlide(country);
			const wrapper = $('#js-key-facts-2--economic[data-lang="en"] .key-facts__content')[0];
			wrapper.appendChild(container);

			// Build filter options
			if (filterEconomic[country.name[0].toLowerCase()] === undefined) {
				filterEconomic[country.name[0].toLowerCase()] = index;

				const filter = $('#js-key-facts-2-filter--economic[data-lang="en"]')[0];
				const filterOption = document.createElement('option');
				filterOption.value = index;
				filterOption.textContent = country.name[0].toUpperCase();
				filter.appendChild(filterOption);
			}
		});
	}

	// Apply slider to markup
	$('.key-facts__content').each((index, item) => {

		const slider = $(item);

		slider.slick({
			infinite: false,
			autoplay: false,
			lazyLoad: 'progressive',
			swipeToSlide: true,
			mobileFirst: true,
			dots: false,
			slidesToShow: 1,
			prevArrow: '<button class="slider__control slider__control--prev"><span class="visually-hidden">prev</span></button>',
			nextArrow: '<button class="slider__control slider__control--next"><span class="visually-hidden">next</span></button>',
			appendArrows: slider.parent().find('.slider__controls'),
			arrows: true,

			// the magic
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 3
					}
				}
			]
		});
	});

	$('.filter').selectric().on('change', (e) => {
		const slideIndex = $(e.currentTarget).val();
		let lastSlide = $('#js-key-facts-2 .slick-slide').length - 1;

		let tmp = (parseInt(slideIndex) + 1);
		if (tmp != lastSlide) {
			$('#js-key-facts-2 .key-facts__content').slick('slickGoTo', parseInt(slideIndex));
			$('#js-key-facts-2--economic .key-facts__content').slick('slickGoTo', parseInt(slideIndex));
		} else {
			$('#js-key-facts-2 .key-facts__content').slick('slickGoTo', parseInt(slideIndex) - 1);
			$('#js-key-facts-2--economic .key-facts__content').slick('slickGoTo', parseInt(slideIndex) - 1);
		}
	});
});

/**
 * Build single slide
 * @param country
 * @return {HTMLElement}
 */
function buildSlide(country) {
	// Create the iframe
	const container = document.createElement('div');
	container.className = 'key-facts__slide';
	container.dataset.letter = country.name[0].toLowerCase();
	container.textContent = country.name;

	const content = document.createElement('iframe');
	content.src = country.src;
	content.frameBorder = 0;
	content.lazyload = 'on';
	container.appendChild(content);

	const contentLink = document.createElement('a');
	contentLink.textContent = country.title;
	contentLink.href = country.src;
	content.appendChild(contentLink);
	//

	// Create the link div
	const linksContainer = document.createElement('div');
	linksContainer.className = 'key-facts__link-box';
	container.appendChild(linksContainer);

	_.each(country.links, (linkData) => {
		const link = document.createElement('a');
		link.className = 'link key-facts__link';
		link.textContent = linkData.title;
		link.href = linkData.url;
		link.target = '_blank';
		link.rel = 'noopener';
		linksContainer.appendChild(link);
	});

	// Create the social div
	const socialContainer = document.createElement('div');
	socialContainer.className = 'ssk-group social';
	container.appendChild(socialContainer);

	_.each(country.social, (socialData) => {
		// Add data for sharing
		socialContainer.setAttribute('data-title', socialData.dataTitle);
		socialContainer.setAttribute('data-text', socialData.dataText);
		socialContainer.setAttribute('data-url', socialData.dataUrl);

		// Add share word
		const social = document.createElement('div');
		social.className = 'social__word';
		social.textContent = 'Share';
		socialContainer.appendChild(social);

		// Add all social networks
		const socialPicto = document.createElement('a');
		socialPicto.className = 'ssk ssk-twitter social__item social__item--twitter';
		socialPicto.href = '';

		const picto = document.createElement('img');
		picto.alt = 'Twitter';
		picto.src = twitterImg;
		socialPicto.appendChild(picto);

		socialContainer.appendChild(socialPicto);
		linksContainer.appendChild(socialContainer);
	});

	return container;
}
