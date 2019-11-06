import i18next from 'i18next';
import jqueryI18next from 'jquery-i18next';
import _ from 'lodash';

import appConfig from './config';
import projectionsByCountryResources from './modules/projections-by-country/projections-by-country-resources.json';
import headerPublicationResources from './modules/header-publication/header-publication-resources.json';
import stickyHeaderResources from './modules/sticky-header/sticky-header-resources.json';
import keyMessagesResources from './modules/key-messages/key-messages-resources.json';
import textBlockResources from './modules/text-block/text-block-resources.json';
import compareYourCountryResources from './modules/compare-your-country/compare-your-country-resources.json';
import keyTopicsResources from './modules/key-topics/key-topics-resources.json';

const resourceList = [
  projectionsByCountryResources,
  headerPublicationResources,
  stickyHeaderResources,
  keyMessagesResources,
  textBlockResources,
  compareYourCountryResources,
  keyTopicsResources,
];

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
  $('#header-publication').localize({ ns: 'header-publication' });
  $('#navbar').localize({ ns: 'sticky-header' });
  $('#key-messages').localize({ ns: 'key-messages' });
  $('#text-block').localize({ ns: 'text-block' });
  $('#compare-your-country').localize({ ns: 'compare-your-country' });
  $('#read-key-messages').localize({ ns: 'key-topics' });
});

export const getResourceByNsAndKey = (ns, key) => i18next.getResource(appConfig.lang, ns, key);
