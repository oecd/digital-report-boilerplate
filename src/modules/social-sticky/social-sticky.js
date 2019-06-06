/**
 * Agence'O - read-more
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

import 'social-share-kit';
import './social-sticky.scss';

SocialShareKit.init({
	facebook: {
		url: window.location.href,
		caption: $(document).find("title").text(),
		picture: 'http://www.oecd.org/media/oecdorg/styleassets/responsive/menu/images/logooecd_en.png',
	},
	twitter: {
		text: '',
		// via: '@OECD',
	},
	onOpen: function (targetElement, network, networkUrl, popupWindow) {
		if (network === 'facebook') {
			// console.log('facebook');
			ga('send', 'social', 'Facebook', 'share', window.location.href);
		}
		if (network === 'twitter') {
			// console.log('twitter');
			ga('send', 'social', 'Twitter', 'tweet', window.location.href);
		} else if (network === 'linkedin') {
			// console.log('linkedin');
			ga('send', 'social', 'Linkedin', 'share', window.location.href);
		} else if (network === 'google-plus') {
			// console.log('googleplus');
			ga('send', 'social', 'Googleplus', 'share', window.location.href);
		}
	},
	title: $(document).find("title").text(),
	url: window.location.href,
});
$('.ssk-email').attr('href', 'mailto:?body=' + encodeURIComponent(window.location.href) + '&subject=' + jQuery(document).find("title").text());

// Email button
$(document).on('click', '.ssk-email', () => {
	// console.log('email');
	ga('send', 'social', 'Email', 'email', window.location.href);
});

// PDF/Print button
$(document).on('click', '.ssk-emerald', (e) => {
	e.preventDefault();
	window.print();
	ga('send', 'social', 'Print', 'print', window.location.href);
});

// Toggle sticky bar
$(document).on('click', '.social-sticky__item--plus', (e) => {
	e.preventDefault();
	$(e.currentTarget).parent().toggleClass('open');
});

$(window).on('resize', () => {
	if ($(window).width() >= 768) {
		$('.social-sticky').addClass('open');
	}
}).resize();
