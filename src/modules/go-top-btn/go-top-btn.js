/**
 * Agence'O - go-top-btn
 * @author Axel Baron (Agence'O)
 * @created 12/04/2019
 */

import './go-top-btn.scss';

$(document).on('click', '.go-top-btn', (e) => {
	e.preventDefault();
	$("html, body").animate({scrollTop: 0}, 1000);
});
