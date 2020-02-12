import i18next from 'i18next';
import jqueryI18next from 'jquery-i18next';
import _ from 'lodash';

import appConfig from './config';
import indexResources from './index-resources.json';
import projectionsByCountryResources from './modules/projections-by-country/projections-by-country-resources.json';
import headerPublicationResources from './modules/header-publication/header-publication-resources.json';
import headerResponsiveResources from './modules/header-responsive/header-responsive-resources.json';
import stickyHeaderResources from './modules/sticky-header/sticky-header-resources.json';
import keyMessagesResources from './modules/key-messages/key-messages-resources.json';
import keyFactsSliderResources from './modules/key-facts-slider/key-facts-slider-resources.json';
import keyDataResources from './modules/key-data/key-data-resources.json';
import textBlockResources from './modules/text-block/text-block-resources.json';
import compareYourCountryResources from './modules/compare-your-country/compare-your-country-resources.json';
import keyTopicsResources from './modules/key-topics/key-topics-resources.json';
import blockquoteResources from './modules/blockquote/blockquote-resources.json';
import readMore from "./modules/read-more/read-more.json";
import videoRessources from './modules/video/video-resources.json';
import featuredStoriesRessources from './modules/featured-stories/featured-stories.json';
import keyFactsResources from './modules/key-facts/key-facts-resources.json';
import publicationsEconomicResources from './modules/publications/publications--economic-resources.json';
import podcastResources from './modules/podcast/podcast-resources.json';
import creditsResources from './modules/credits/credits-resources.json';
import footerResources from './modules/footer/footer-resources.json';

const resourceList = [
  indexResources,
  projectionsByCountryResources,
  headerResponsiveResources,
  headerPublicationResources,
  stickyHeaderResources,
  keyMessagesResources,
  keyFactsSliderResources,
  keyDataResources,
  textBlockResources,
  compareYourCountryResources,
  keyTopicsResources,
  blockquoteResources,
  readMore,
  videoRessources,
  featuredStoriesRessources,
  keyFactsResources,
  publicationsEconomicResources,
  podcastResources,
  creditsResources,
  footerResources,
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
  
  $('#index-id').localize({ ns: 'index' });
  $('#projections-by-country').localize({ ns: 'projections-by-country' });
  $('#header-publication').localize({ ns: 'header-publication' });
  $('#header-responsive').localize({ ns: 'header-responsive' });
  $('#navbar').localize({ ns: 'sticky-header' });
  $('#key-messages').localize({ ns: 'key-messages' });
  $('#key-facts-slider-content').localize({ ns: 'key-facts-slider-block' });
  $('#key-data-block').localize({ ns: 'key-data' });
  $('#text-block').localize({ ns: 'text-block' });
  $('#compare-your-country').localize({ ns: 'compare-your-country' });
  $('#read-key-messages').localize({ ns: 'key-topics' });
  $('#blockquote').localize({ ns: 'text-blockquote' });
  $('#blockquote--no-title').localize({ ns: 'text-blockquote' });
  $('#blockquote--white').localize({ ns: 'text-blockquote' });
  $("#read--more").localize({ ns: 'text-block' });
  $('#key-facts-panels').localize({ ns: 'key-facts-block' });
  $('#video-block').localize({ ns: 'video-block' });
  $('#featured-stories-txt').localize({ ns: 'featured-block' });
  $('#discover-report').localize({ ns: 'publications--economic' });
  $('#podcast-block').localize({ ns: 'podcast' });
  $('#credits-block').localize({ ns: 'credits-id' });
  $('#footer').localize({ ns: 'footer' });
});

export const getResourceByNsAndKey = (ns, key) => i18next.getResource(appConfig.lang, ns, key);
