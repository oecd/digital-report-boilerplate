import './sticky-header.scss'
import 'bootstrap';

const navbar = $('#navbar');
const links = navbar.find('.nav-link');
const burgerButton = navbar.find('.internal-nav__toggle');
let sticky = navbar.offset().top + 5;

const reactToPageYOffsetChange = () => {
  if (window.pageYOffset >= sticky) {
    navbar.addClass('sticky');
    links.removeClass('force-visible');
    burgerButton.addClass('internal-nav__toggle__force-visible');
  } else {
    navbar.removeClass('sticky');
    links.addClass('force-visible');
    burgerButton.removeClass('internal-nav__toggle__force-visible');
  }
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
