/**
 * Agence'O - go-top-btn
 * @author Axel Baron (Agence'O)
 * @created 12/04/2019
 */

import './go-top-btn.scss';

try {
	var bttb = document.getElementById('back-to-top-button');

	// go back to top when clicked
	bttb.addEventListener('click', (e) => {
		e.preventDefault();
		document.location.href = '#';
	})
	
	// hide button if already on top, or almost
	document.addEventListener('scroll', () => {
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			bttb.style.display = 'flex';
		} else {
			bttb.style.display = 'none';
		}
	})	
} catch(err) {
	console.log(`Error while configuring back to top button: ${err}`)
}
