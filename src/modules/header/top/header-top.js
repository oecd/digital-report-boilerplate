/**
 * Agence'O - header-top
 * @author Guillaume Bouillon (Agence'O)
 * @created 09/04/2019
 */

import './header-top.scss';

// Burger toggle
$(document).on('click', '.header-top__nav__toggle', (e) => {
	e.preventDefault();
	$(e.currentTarget).toggleClass('is-open');
	$('.header-top__nav').toggleClass('is-open is-hidden');
});

// Submenu toggle
$(document).on('click', '.header-top__nav__link--toggle', (e) => {
	e.preventDefault();
	$(e.currentTarget)
		.parent().toggleClass('is-open')
		.find('.header-top__subnav').toggleClass('is-open visually-hidden');
});
