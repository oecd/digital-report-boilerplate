import appConfig from '../../config';
import './sticky-header.scss'
import 'bootstrap';

const navbar = $('#navbar');
const links = navbar.find('.nav-link');
const burgerButton = navbar.find('.internal-nav__toggle');
const langSelection = navbar.find('.internal-nav__lang-sel');
let sticky = navbar.offset().top + 5;

$('.url-en-sticky-header').attr('href', `${appConfig.urls.en}${document.location.hash}`)
$('.url-fr-sticky-header').attr('href', `${appConfig.urls.fr}${document.location.hash}`)
$('.url-es-sticky-header').attr('href', `${appConfig.urls.es}${document.location.hash}`)

const reactToPageYOffsetChange = () => {
  if (window.pageYOffset >= sticky) {
    navbar.addClass('sticky');
    langSelection.addClass('internal-nav__lang-sel-visible');
  } else {
    navbar.removeClass('sticky');
    langSelection.removeClass('internal-nav__lang-sel-visible');
  }

  links.removeClass('force-visible');
  burgerButton.removeClass('is-open');
}

document.addEventListener('scroll', () => {
  reactToPageYOffsetChange();
});

window.addEventListener('resize', () => {
  sticky = navbar.offset().top + 5;
});

burgerButton.on('click', () => {
  burgerButton.toggleClass('is-open');
  links.toggleClass('force-visible');
});

reactToPageYOffsetChange();

$('body').scrollspy({ target: '#navbar' });
