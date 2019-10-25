import i18next from 'i18next';
import jqueryI18next from 'jquery-i18next';
import _ from 'lodash';

import appConfig from './config';
import projectionsByCountryResources from './modules/projections-by-country/projections-by-country-resources.json';

const resourceList = [projectionsByCountryResources];

i18next.init({
  lng: appConfig.lang,
  debug: appConfig.nodeEnv !== 'production',
  resources: _.merge({}, ...resourceList),
}, () => {
  jqueryI18next.init(i18next, $, {
    tName: 't', // --> appends $.t = i18next.t
    i18nName: 'i18n', // --> appends $.i18n = i18next
    handleName: 'localize', // --> appends $(selector).localize(opts);
    selectorAttr: 'data-i18n', // selector for translating elements
    targetAttr: 'i18n-target', // data-() attribute to grab target element to translate (if different than itself)
    optionsAttr: 'i18n-options', // data-() attribute that contains options, will load/set if useOptionsAttr = true
    useOptionsAttr: false, // see optionsAttr
    parseDefaultValueFromContent: true // parses default values from content ele.val or ele.text
  });
  
  $('#projections-by-country').localize({ ns: 'projections-by-country' });
});

export const getResourceByNsAndKey = (ns, key) => i18next.getResource(appConfig.lang, ns, key);
