import _ from 'lodash';
import 'bootstrap';
import 'bootstrap-select';

import appConfig from '../../config';
import { getResourceByNsAndKey } from '../../localization';
import data from './projections-by-country-data.json';
import './projections-by-country.scss';

const countrySelected = (country) => {
  $('#projections-by-country-country-title').text(country[appConfig.lang].label);
  $('#projections-by-country-dp-iframe').attr('src', country[appConfig.lang].dataPortalUrl);
  $('#projections-by-country-read-button').attr('href', country[appConfig.lang].webBookUrl);
  $('#projections-by-country-projection-button').attr('href', country[appConfig.lang].oecdOrgUrl);
}

const selectCountryConstantTitle = getResourceByNsAndKey('projections-by-country', 'selectCountryConstantTitle');

_.forEach(
  _.sortBy(data, [(c) => c[appConfig.lang].label]),
  (country) => {
    $('#projections-by-country-select')
      .append(`<option value="${country.id}" title="${selectCountryConstantTitle}">${country[appConfig.lang].label}</option>`);
  },
);

$('#projections-by-country-select').on('change', (e) => {
  const selectedCountry = _.find(data, { id: e.currentTarget.value });
  countrySelected(selectedCountry);
});

const defaultCountry = _.find(data, { isDefault: true }) || _.head(data);
countrySelected(defaultCountry);

$('#projections-by-country-select').selectpicker();
$('#projections-by-country-select').selectpicker('val', defaultCountry.id);
