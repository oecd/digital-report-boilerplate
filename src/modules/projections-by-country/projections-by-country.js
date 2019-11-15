import _ from 'lodash';
import 'bootstrap';
import 'bootstrap-select';

import appConfig from '../../config';
import { getResourceByNsAndKey } from '../../localization';
import data from './projections-by-country-data.json';
import './projections-by-country.scss';

const selectCountryConstantTitle = getResourceByNsAndKey('projections-by-country', 'select-country-constant-title');
$('#projections-by-country-custom-opened-select-search-input').attr('placeholder', selectCountryConstantTitle);

const countrySelected = (country) => {
  $('#projections-by-country-country-title').text(country[appConfig.lang].label);
  $('#projections-by-country-dp-iframe').attr('src', country[appConfig.lang].dataPortalUrl);
  $('#projections-by-country-read-button').attr('href', country[appConfig.lang].webBookUrl);
  $('#projections-by-country-projection-button').attr('href', country[appConfig.lang].oecdOrgUrl);

  $('.projections-by-country__custom-opened-select-list').find('.dropdown-item').removeClass('active');
  $('.projections-by-country__custom-opened-select-list').find(`[data-id='${country.id}']`).addClass('active');
};

const customOpenedSelectCountrySelected = (e) => {
  const selectedCountry = _.find(data, { 'id': $(e.currentTarget).attr('data-id') });
  countrySelected(selectedCountry);
  $('#projections-by-country-select').selectpicker('val', selectedCountry.id);
};

const customOpenedSelectScrollToCountry = (country) => {
  const listOffsetTop = $('.projections-by-country__custom-opened-select-list-container').offset().top;
  const selectedOffsetTop = $('.projections-by-country__custom-opened-select-list').find(`[data-id='${country.id}']`).offset().top;
  $('.projections-by-country__custom-opened-select-list-container').scrollTop(selectedOffsetTop - listOffsetTop);
};

const customOpenedSelectCountryFiltered = (e) => {
  const filterText = _.toLower(e.currentTarget.value);
  if (filterText === '') {
    $('.projections-by-country__custom-opened-select-list').find('.dropdown-item').css('display', 'block');
    return;
  }
  const containsFilterText = (text) => _.includes(text, filterText);
  _.forEach(
    $('.projections-by-country__custom-opened-select-list').find('.dropdown-item'),
    (item) => {
      const itemText = _.toLower($(item).text());
      $(item).css('display', _.includes(itemText, filterText) ? 'block' : 'none');
    },
  );
}

const customOpenedSelectSelectFirstItemIfEnter = (e) => {
  if (e.keyCode !== 13 || e.currentTarget.value === '') {
    return;
  }

  const firstFilteredCountry = _.find(
    $('.projections-by-country__custom-opened-select-list').find('.dropdown-item'),
    (item) => $(item).css('display') === 'block',
  );

  if (firstFilteredCountry) {
    $(firstFilteredCountry).trigger('click');
  }
};


_.forEach(
  _.sortBy(data, [(c) => c[appConfig.lang].label]),
  (country) => {
    $('#projections-by-country-select')
      .append(`<option value="${country.id}" title="${selectCountryConstantTitle}">${country[appConfig.lang].label}</option>`);
    $('.projections-by-country__custom-opened-select-list')
      .append(`<li><a data-id="${country.id}" role="option" class="dropdown-item" tabindex="0">${country[appConfig.lang].label}</a></li>`);
  },
);

$('.projections-by-country__custom-opened-select-list').find('.dropdown-item').on('click', customOpenedSelectCountrySelected);
$('#projections-by-country-custom-opened-select-search-input').on('input', customOpenedSelectCountryFiltered);
$('#projections-by-country-custom-opened-select-search-input').on('keyup', customOpenedSelectSelectFirstItemIfEnter);

const defaultCountry = _.find(data, { isDefault: true }) || _.head(data);
countrySelected(defaultCountry);
$('#projections-by-country-select').selectpicker('val', defaultCountry.id);
customOpenedSelectScrollToCountry(defaultCountry)

$('#projections-by-country-select').on('change', (e) => {
  const selectedCountry = _.find(data, { id: e.currentTarget.value });
  countrySelected(selectedCountry);
});

