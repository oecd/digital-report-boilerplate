/**
 * Agence'O - main-nav
 * @author Guillaume Bouillon (Agence'O)
 * @created 09/04/2019
 */

import './main-nav.scss';
import appConfig from '../../../config';

$('.url-en').attr('href', appConfig.urls.en)
$('.url-fr').attr('href', appConfig.urls.fr)
$('.url-es').attr('href', appConfig.urls.es)

	// main navigation toggle action
$(document).on('click', '.main-nav__toggle', (e) => {
	$(e.currentTarget).toggleClass('is-open');
	$('.main-nav').toggleClass('is-open');
});

// search-bar toggle action
$(document).on('click', '.main-nav__search-bar__toggle', (e) => {
	$(e.currentTarget).toggleClass('open');
	$('.main-nav__search-bar').toggleClass('open').slideToggle();
});

$(document).on('click', '.main-nav__link--toggle', e => {
	// Click on toggle button
	e.preventDefault();
	$('.main-nav__item').not($(e.currentTarget).parent()).removeClass('is-current').find('.main-nav__list').removeClass('is-open');
	$(e.currentTarget).parent().toggleClass('is-current').find('.main-nav__list').toggleClass('is-open');
	e.stopPropagation();
}).on('click', () => {
	// Click outside
	$('.main-nav__item').removeClass('is-current');
	$('.main-nav__list').removeClass('is-open');
});

// Tabs mouseover actions
$('.main-nav__list__item').first().addClass('is-open');
$(document).on('mouseover', '.main-nav__list__link', (e) => {
	$('.main-nav__list__item').removeClass('is-open');
	$(e.currentTarget).parent().addClass('is-open')
});
