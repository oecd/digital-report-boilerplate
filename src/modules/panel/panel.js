/**
 * Agence'O - panel
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

import './panel.scss';

$(document).on('click', '.card', (e) => {
	e.preventDefault();
	const target = $(e.currentTarget).data('panel');
	$(target).addClass('open');
});

$(document).on('click', '.panel__close', (e) => {
	e.preventDefault();
	$(e.currentTarget).parent().removeClass('open');
});
