/**
 * Agence'O - key-messages
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

import './key-messages.scss';

$(document).on('click', '.key-messages', (e) => {
	//e.preventDefault();
	$('.key-messages').removeClass('open');
	$(e.currentTarget).addClass('open');
});
