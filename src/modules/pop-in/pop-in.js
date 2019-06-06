
/**
 * Agence'O - popins
 * @author Axel Baron (Agence'O)
 * @created 01/04/2019
 */

import './pop-in.scss';

(function ($) {
  $(document).on('click', '.js-play', (e) => {
		e.preventDefault();
		const src = $(e.currentTarget).data('video') || null;
		if (src) {
			putElInPopin(`<iframe src="${src}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
		}
  });

	$(document).on('click', '.pop-in__close, .pop-in__mask', (e) => {
		e.preventDefault();
		$(".pop-in").removeClass('open');
		$(".pop-in__content").html(null);
	});

	function putElInPopin(element) {
		$(".pop-in__content").html(element);
		$(".pop-in").addClass('open');
	}
})(jQuery);

